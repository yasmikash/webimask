import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { fetchCoughHistory } from "../../services/api";
import moment from "moment";

export default function AnalysisTable() {
  const [value, setValue] = React.useState(new Date());
  const [data, setData] = React.useState([]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const fetchCoughHistoryAsync = async () => {
    const data = await fetchCoughHistory();
    setData(data);
  };

  React.useEffect(() => {
    fetchCoughHistoryAsync();
  }, []);

  return (
    <React.Fragment>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <div style={{ display: "inline-block", padding: "10px" }}>
                <div style={{ marginRight: "10px", display: "inline" }}>
                  <DesktopDatePicker
                    label="From"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>

                <div style={{ padding: "10px", display: "inline" }}>
                  <DesktopDatePicker
                    label="To"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>
              </div>
            </Stack>
          </LocalizationProvider>
        </Grid>
      </Grid>

      <TableContainer
        component={Paper}
        elevation={3}
        sx={{ maxHeight: "70vh", maxWidth: "120vh", overflowX: "auto" }}
      >
        <Table stickyHeader sx={{ width: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sample Taken Time</TableCell>
              <TableCell align="right">Cough Rate Per Second</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.date}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {moment(new Date(row.date)).format("YYYY-MM-DD HH:mm A")}
                </TableCell>
                <TableCell align="right">{row.coughRate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
