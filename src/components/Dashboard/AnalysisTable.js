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

function createData(
  samplestakentime,
  cough,
  heartrate,
  respirationrate,
  temperature,
  oxygenlevel,
  probability
) {
  return {
    samplestakentime,
    cough,
    heartrate,
    respirationrate,
    temperature,
    oxygenlevel,
    probability,
  };
}

const rows = [
  createData(
    "2020/01/01 12:00 PM",
    "Normal",
    "72 BPM",
    "16 Cycles Per Min",
    "37.6 °C",
    "99%",
    "Low"
  ),
  createData(
    "2020/01/01 12:00 PM",
    "Normal",
    "72 BPM",
    "16 Cycles Per Min",
    "37.6 °C",
    "99%",
    "Low"
  ),
  createData(
    "2020/01/01 12:00 PM",
    "Normal",
    "72 BPM",
    "16 Cycles Per Min",
    "37.6 °C",
    "99%",
    "Low"
  ),
  createData(
    "2020/01/01 12:00 PM",
    "Normal",
    "72 BPM",
    "16 Cycles Per Min",
    "37.6 °C",
    "99%",
    "Low"
  ),
  createData(
    "2020/01/01 12:00 PM",
    "Normal",
    "72 BPM",
    "16 Cycles Per Min",
    "37.6 °C",
    "99%",
    "Low"
  ),
  createData(
    "2020/01/01 12:00 PM",
    "Normal",
    "72 BPM",
    "16 Cycles Per Min",
    "37.6 °C",
    "99%",
    "Low"
  ),
  createData(
    "2020/01/01 12:00 PM",
    "Normal",
    "72 BPM",
    "16 Cycles Per Min",
    "37.6 °C",
    "99%",
    "Low"
  ),
  createData(
    "2020/01/01 12:00 PM",
    "Normal",
    "72 BPM",
    "16 Cycles Per Min",
    "37.6 °C",
    "99%",
    "Low"
  ),
  createData(
    "2020/01/01 12:00 PM",
    "Normal",
    "72 BPM",
    "16 Cycles Per Min",
    "37.6 °C",
    "99%",
    "Low"
  ),
  createData(
    "2020/01/01 12:00 PM",
    "Normal",
    "72 BPM",
    "16 Cycles Per Min",
    "37.6 °C",
    "99%",
    "Low"
  ),
];

export default function AnalysisTable() {
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

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
        sx={{ maxHeight: "70vh", overflowX: "auto" }}
      >
        <Table stickyHeader sx={{ width: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sample Taken Time</TableCell>
              <TableCell align="right">Cough</TableCell>
              <TableCell align="right">Heart Rate</TableCell>
              <TableCell align="right">Respiration Rate</TableCell>
              <TableCell align="right">Body Temperature</TableCell>
              <TableCell align="right">Oxygen Saturation Level</TableCell>
              <TableCell align="right">Probability</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.samplestakentime}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.samplestakentime}
                </TableCell>
                <TableCell align="right">{row.cough}</TableCell>
                <TableCell align="right">{row.heartrate}</TableCell>
                <TableCell align="right">{row.respirationrate}</TableCell>
                <TableCell align="right">{row.temperature}</TableCell>
                <TableCell align="right">{row.oxygenlevel}</TableCell>
                <TableCell align="right">{row.probability}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
