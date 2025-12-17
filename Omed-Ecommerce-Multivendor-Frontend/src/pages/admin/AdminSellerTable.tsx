import {
  Button, FormControl, InputLabel, MenuItem, Paper, Select, styled,
  Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow
} from "@mui/material";
import React, { useState } from "react";

const accountStatusOptions = [
  { status: "PENDING_VERIFICATION", title: "Pending Verification", description: "Account is pending verification" },
  { status: "ACTIVE", title: "Active", description: "Account is active and in good standing" },
  { status: "SUSPENDED", title: "Suspended", description: "Account is temporarily suspended" },
  { status: "DEACTIVATED", title: "Deactivated", description: "Account is deactivated" },
  { status: "BANNED", title: "Banned", description: "Account is permanently banned due to a violation" },
  { status: "CLOSED", title: "Closed", description: "Account is permanently closed, typically by the user" },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: { backgroundColor: theme.palette.common.black, color: theme.palette.common.white },
  [`&.${tableCellClasses.body}`]: { fontSize: 14 },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': { backgroundColor: theme.palette.action.hover },
  '&:last-child td, &:last-child th': { border: 0 },
}));

const rows = [
  { sellerId: 'S001', name: 'John Doe', email: 'john@example.com', contact: '1234567890', gstin: '22AAAAA0000A1Z5', businessName: 'John Enterprises', status: 'ACTIVE' },
  { sellerId: 'S002', name: 'Jane Smith', email: 'jane@example.com', contact: '9876543210', gstin: '27BBBBB1111B2Z6', businessName: 'Smith Corp', status: 'PENDING_VERIFICATION' },
  { sellerId: 'S003', name: 'Bob Ray', email: 'bob@example.com', contact: '5647382910', gstin: '19CCCCC2222C3Z7', businessName: 'Ray Solutions', status: 'SUSPENDED' },
  { sellerId: 'S004', name: 'Alice Green', email: 'alice@example.com', contact: '9988776655', gstin: '33DDDDD3333D4Z8', businessName: 'Green Ventures', status: 'DEACTIVATED' },
  { sellerId: 'S005', name: 'Charlie Blue', email: 'charlie@example.com', contact: '1122334455', gstin: '44EEEEE4444E5Z9', businessName: 'Blue Inc.', status: 'BANNED' },
];

const AdminSellerTable = () => {
  const [accountStatus, setAccountStatus] = useState("ACTIVE");
  return (
    <>
      <div className="pb-5 w-60">
        <FormControl fullWidth>
          <InputLabel id="status-label">Account Status</InputLabel>
          <Select labelId="status-label" id="status-select" value={accountStatus} label="Account Status" onChange={e => setAccountStatus(e.target.value)}>
            {accountStatusOptions.map(item => (
              <MenuItem key={item.status} value={item.status}>{item.title}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead sx={{ borderRadius: "50px"}}>
            <TableRow>
              <StyledTableCell>Seller Id</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell align="right">Contact</StyledTableCell>
              <StyledTableCell align="right">GSTIN</StyledTableCell>
              <StyledTableCell align="right">Business Name</StyledTableCell>
              <StyledTableCell align="right">Account Status</StyledTableCell>
              <StyledTableCell align="right">Change Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.sellerId}>
                <StyledTableCell component="th" scope="row">{row.sellerId}</StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.contact}</StyledTableCell>
                <StyledTableCell align="right">{row.gstin}</StyledTableCell>
                <StyledTableCell align="right">{row.businessName}</StyledTableCell>
                <StyledTableCell align="right">{row.status}</StyledTableCell>
                <StyledTableCell align="right"><Button>Change</Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdminSellerTable;
