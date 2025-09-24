import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppDispatch, useAppSelector } from "../../../state/Store";
import { useEffect, useState } from "react";
import {
  fetchSellerOrders,
  updateOrderStatus,
} from "../../../state/seller/sellerOrderSlice";
import { Button, Fade, Menu, MenuItem } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const orderStatusColor = {
  PENDING: { color: "#FFA500", label: "PENDING" }, // Orange
  CONFIRMED: { color: "#F5BCBA", label: "CONFIRMED" },
  PLACED: { color: "#F5BCBA", label: "PLACED" },
  SHIPPED: { color: "#1E90FF", label: "SHIPPED" }, // DodgerBlue
  DELIVERED: { color: "#32CD32", label: "DELIVERED" }, // LimeGreen
  CANCELLED: { color: "#FF0000", label: "CANCELLED" }, // Red
};

const orderStatus = [
  { color: "#FFA500", label: "PENDING" },
  { color: "#F5BCBA", label: "PLACED" },
  { color: "#F5BCBA", label: "CONFIRMED" },
  { color: "#1E90FF", label: "SHIPPED" },
  { color: "#32CD32", label: "DELIVERED" },
  { color: "#FF0000", label: "CANCELLED" },
];

export default function OrderTable() {
  const dispatch = useAppDispatch();
  const { sellerOrder } = useAppSelector((store) => store);

  useEffect(() => {
    dispatch(fetchSellerOrders(localStorage.getItem("jwt") || ""));
  }, []);

  const [anchorEl, setAnchorEl] = useState<null | any>({});

  const handleClick = (
    event: any,
    orderId: number
  ) => {
    setAnchorEl((prev:any) => ({ ...prev, [orderId]: event.currentTarget }));
  };

  const handleClose = (orderId: number) => () => {
    setAnchorEl((prev:any) => ({ ...prev, [orderId]: null }));
  };

  const handleUpdateOrderStatus = async (orderId: number, orderStatus: any) => {
    await dispatch(
      updateOrderStatus({
        jwt: localStorage.getItem("jwt") || "",
        orderId,
        orderStatus,
      })
    );
    dispatch(fetchSellerOrders(localStorage.getItem("jwt") || ""));
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order Id</StyledTableCell>
            <StyledTableCell>Products</StyledTableCell>
            <StyledTableCell align="right">Shipping Address</StyledTableCell>
            <StyledTableCell align="right">Order Status</StyledTableCell>
            <StyledTableCell align="right">Update</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sellerOrder.orders.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {item.id}
              </StyledTableCell>
              <StyledTableCell>
                <div className="flex gap-1 flex-wrap">
                  {item.orderItems.map((orderItem) => (
                    <div key={orderItem.orderItemId} className="flex gap-5">
                      <img
                        className="w-20 rounded-md bg-slate-200"
                        src={orderItem.product.images[0]}
                        alt=""
                      />
                      <div className="flex flex-col justify-between py-2">
                        <h1>Title: {orderItem.product.productTitle}</h1>
                        <h1>Selling Price: {orderItem.product.sellingPrice}</h1>
                        <h1>Color: {orderItem.product.color}</h1>
                      </div>
                    </div>
                  ))}
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div className="flex flex-col gap-y-2">
                  <h1>{item.shippingAddress.name}</h1>
                  <h1>
                    {item.shippingAddress.address}, {item.shippingAddress.city}
                  </h1>
                  <h1>
                    {item.shippingAddress.state} -{" "}
                    {item.shippingAddress.pinCode}
                  </h1>
                  <h1>
                    <strong>Mobile:</strong> {item.shippingAddress.mobile}
                  </h1>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <span className="px-5 py-2 border rounded-full text-primary-color border-primary-color">
                  {item.orderStatus}
                </span>
              </StyledTableCell>
              <StyledTableCell>
                <div>
                  <Button
                    id={`fade-button-${item.id}`}
                    aria-controls={
                      anchorEl[item.id]
                        ? `status-menu-${item.id}`
                        : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={
                      Boolean(anchorEl[item.id]) ? "true" : undefined
                    }
                    onClick={(event) => handleClick(event, item.id)}
                  >
                    Status
                  </Button>
                  <Menu
                    id={`status-menu-${item.id}`}
                    anchorEl={anchorEl[item.id]}
                    open={Boolean(anchorEl[item.id])}
                    onClose={handleClose(item.id)}
                    slotProps={{
                      list: {
                        "aria-labelledby": `fade-button-${item.id}`,
                      },
                    }}
                  >
                    {orderStatus.map((status) => (
                      <MenuItem
                        key={status.label}
                        onClick={() => {
                          handleUpdateOrderStatus(item.id, status.label);
                          handleClose(item.id)(); // Close menu after selecting
                        }}
                      >
                        {status.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
