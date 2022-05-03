import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MenuAppBar from "../components/Dashboard/AppBar";
import DetailCard from "../components/Dashboard/DetailCard";
import Chart from "../components/Dashboard/Chart";
import Box from "@mui/material/Box";
import VisitedAreaTable from "../components/Dashboard/VisitedAreaTable";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import GoogleMapsComponent from "../components/Dashboard/GoogleMaps";
import { fetchAllHistory } from "../services/api";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);

  const fetchAllHistoryAsync = async () => {
    const history = await fetchAllHistory();

    const recordLength = history.length;
    let totalBpm = 0;
    let totalHeartRate = 0;
    let totalSpo2 = 0;
    let totalTemperature = 0;
    let totalCoughRate = 0;
    history.forEach((record) => {
      totalBpm += record.bpm ? record.bpm : 0;
      totalHeartRate += record.heartRate ? record.heartRate : 0;
      totalSpo2 += record.spo2 ? record.spo2 : 0;
      totalTemperature += record.temperature ? record.temperature : 0;
      totalCoughRate += record.coughRate ? record.coughRate : 0;
    });

    setDashboardData({
      avgBpm: (totalBpm / recordLength).toFixed(2),
      avgHeartRate: (totalHeartRate / recordLength).toFixed(2),
      avgSpo2: (totalSpo2 / recordLength).toFixed(2),
      avgTemperature: (totalTemperature / recordLength).toFixed(2),
      avgCoughRate: (totalCoughRate / recordLength).toFixed(2),
      covidProbability: (history[0].covidStatusProbability * 100).toFixed(2),
    });
  };

  useEffect(() => {
    fetchAllHistoryAsync();
  }, []);

  return (
    <React.Fragment>
      <MenuAppBar
        title="Dashboard"
        // style={{ background:green }}
      />
      <Container maxWidth="xlg" sx={{ marginTop: 5 }}>
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <div style={{ textAlign: "center" }}>
                <h2 style={{ marginTop: 0, marginBottom: 20 }}>
                  Current Status
                </h2>
              </div>
              <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item md={6} sm={12} xs={12}>
                  <DetailCard
                    title={"Latest Probability of COVID-19"}
                    value={
                      dashboardData && `${dashboardData.covidProbability}%`
                    }
                    cardColor={
                      dashboardData && dashboardData.covidProbability > 80
                        ? "red"
                        : "white"
                    }
                    fontColor={
                      dashboardData && dashboardData.covidProbability > 80
                        ? "white"
                        : "black"
                    }
                  />
                </Grid>

                <Grid item md={6} sm={12} xs={12}>
                  <DetailCard
                    value={
                      dashboardData && `${dashboardData.avgTemperature} °C`
                    }
                    title={"Average Body Temperature"}
                    href="/fever"
                  />
                </Grid>

                <Grid item md={6} sm={12} xs={12}>
                  <DetailCard
                    title={"Average Cough Rate Per Second"}
                    value={dashboardData && dashboardData.avgCoughRate}
                    href="/cough"
                  />
                </Grid>

                <Grid item md={6} sm={12} xs={12}>
                  <DetailCard
                    title={"Average Oxygen Saturation Level"}
                    value={dashboardData && `${dashboardData.avgSpo2}%`}
                    href="/spo2"
                  />
                </Grid>

                <Grid item md={6} sm={6} xs={12}>
                  <DetailCard
                    value={dashboardData && `${dashboardData.avgBpm} bpm`}
                    title={"Average Respiration Rate"}
                    href="/respiration"
                  />
                </Grid>

                <Grid item md={6} sm={6} xs={12}>
                  <DetailCard
                    value={dashboardData && `${dashboardData.avgHeartRate} bpm`}
                    title={"Average Heart Rate"}
                    href="/heart"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <div style={{ textAlign: "center" }}>
                <h2 style={{ marginTop: 0, marginBottom: 20 }}>Summary</h2>
              </div>
              <Card>
                <CardContent>
                  <div style={{ height: "39.5vh" }}>
                    <Chart />
                  </div>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <div style={{ textAlign: "center" }}>
                <h2 style={{ marginTop: 0, marginBottom: 20 }}>
                  Visited Areas
                </h2>
              </div>
              <VisitedAreaTable />
            </Grid>

            <Grid item xs={12} md={6}>
              <div style={{ textAlign: "center" }}>
                <h2 style={{ marginTop: 0, marginBottom: 20 }}>
                  Visited Areas (Map)
                </h2>
              </div>
              <Card>
                <CardContent>
                  <GoogleMapsComponent />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
