import { Delete } from "@mui/icons-material";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";

const accountStatusOptions = [
  {
    status: "PENDING_VERIFICATION",
    title: "Pending Verification",
    description: "Account is pending verification",
  },
  {
    status: "ACTIVE",
    title: "Active",
    description: "Account is active and in good standing",
  },
  {
    status: "SUSPENDED",
    title: "Suspended",
    description: "Account is temporarily suspended",
  },
  {
    status: "DEACTIVATED",
    title: "Deactivated",
    description: "Account is deactivated",
  },
  {
    status: "BANNED",
    title: "Banned",
    description: "Account is permanently banned due to a violation",
  },
  {
    status: "CLOSED",
    title: "Closed",
    description: "Account is permanently closed, typically by the user",
  },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: { fontSize: 14 },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": { backgroundColor: theme.palette.action.hover },
  "&:last-child td, &:last-child th": { border: 0 },
}));

const rows = [
  {
    couponId: "C001",
    couponCode: "WELCOME10",
    startDate: "2025-09-01",
    endDate: "2025-10-01",
    minOrderValue: 500,
    discount: "10%",
    status: "ACTIVE",
  },
  {
    couponId: "C002",
    couponCode: "FREESHIP",
    startDate: "2025-08-15",
    endDate: "2025-12-31",
    minOrderValue: 0,
    discount: "Free Shipping",
    status: "PENDING_VERIFICATION",
  },
  {
    couponId: "C003",
    couponCode: "SAVE20",
    startDate: "2025-07-01",
    endDate: "2025-09-30",
    minOrderValue: 1000,
    discount: "20%",
    status: "SUSPENDED",
  },
  {
    couponId: "C004",
    couponCode: "FALL30",
    startDate: "2025-09-15",
    endDate: "2025-10-15",
    minOrderValue: 1500,
    discount: "30%",
    status: "DEACTIVATED",
  },
  {
    couponId: "C005",
    couponCode: "BLACKFRIDAY",
    startDate: "2025-11-25",
    endDate: "2025-11-29",
    minOrderValue: 2000,
    discount: "50%",
    status: "BANNED",
  },
];

const AdminCoupon = () => {
  const [accountStatus, setAccountStatus] = useState("ACTIVE");
  return (
    <>
      <div className="pb-5 w-60">
        <FormControl fullWidth>
          <InputLabel id="status-label">Account Status</InputLabel>
          <Select
            labelId="status-label"
            id="status-select"
            value={accountStatus}
            label="Account Status"
            onChange={(e) => setAccountStatus(e.target.value)}
          >
            {accountStatusOptions.map((item) => (
              <MenuItem key={item.status} value={item.status}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead sx={{ borderRadius: "50px" }}>
            <TableRow>
              <StyledTableCell>Coupon Id</StyledTableCell>
              <StyledTableCell align="center">Coupon Code</StyledTableCell>
              <StyledTableCell align="center">Start Date</StyledTableCell>
              <StyledTableCell align="center">End Date</StyledTableCell>
              <StyledTableCell align="right">Min Order Value</StyledTableCell>
              <StyledTableCell align="right">Discount</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.couponId}>
                <StyledTableCell component="th" scope="row">
                  {row.couponId}
                </StyledTableCell>
                <StyledTableCell align="center">{row.couponCode}</StyledTableCell>
                <StyledTableCell align="center">{row.startDate}</StyledTableCell>
                <StyledTableCell align="center">{row.endDate}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.minOrderValue}
                </StyledTableCell>
                <StyledTableCell align="right">{row.discount}</StyledTableCell>
                <StyledTableCell align="right">{row.status}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button>
                    <Delete/>
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdminCoupon;
