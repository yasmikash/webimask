import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(datetime, longitude, latitude, risk) {
  return { datetime, longitude, latitude, risk };
}

const rows = [
  createData("2020/01/01 12:00 PM", "6.9147° N", "79.9729° E", "Low"),
  createData("2020/01/01 12:00 PM", "6.9147° N", "79.9729° E", "Low"),
  createData("2020/01/01 12:00 PM", "6.9147° N", "79.9729° E", "Low"),
  createData("2020/01/01 12:00 PM", "6.9147° N", "79.9729° E", "Low"),
  createData("2020/01/01 12:00 PM", "6.9147° N", "79.9729° E", "Low"),
  createData("2020/01/01 12:00 PM", "6.9147° N", "79.9729° E", "Low"),
];

export default function VisitedAreaTable() {
  return (
    <TableContainer
      component={Paper}
      elevation={3}
      sx={{ height: "50vh", overflowX: "auto" }}
    >
      <Table stickyHeader sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date/Time</TableCell>
            <TableCell align="right">Longitude</TableCell>
            <TableCell align="right">Latitude</TableCell>
            <TableCell align="right">Risk</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.datetime}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.datetime}
              </TableCell>
              <TableCell align="right">{row.longitude}</TableCell>
              <TableCell align="right">{row.latitude}</TableCell>
              <TableCell align="right">{row.risk}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
