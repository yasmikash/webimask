import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MenuAppBar from "../components/Dashboard/AppBar";
import Chart from "../components/Dashboard/Chart";
import Box from "@mui/material/Box";
import HeartRate from "../components/History/HeartRate";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Analysis() {
    return (
        <React.Fragment>
            <MenuAppBar title="Analysis of HeartRate" />
            <Container maxWidth="xlg" sx={{ marginTop: 5 }}>
                <Box sx={{ width: "100%" }}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={12}>
                            <HeartRate />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
}
