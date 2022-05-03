import React from "react";
import UserProfile from "./../components/UserProfile/UserProfile";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MenuAppBar from "../components/Dashboard/AppBar";
import Box from "@mui/material/Box";

const UserProfileScreen = () => {
  return (
    <React.Fragment>
      <MenuAppBar title="Profile" />
      <Container maxWidth="xlg" sx={{ marginTop: 5 }}>
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={12}>
              <UserProfile />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default UserProfileScreen;
