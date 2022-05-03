import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Logo from "../../assets/iMaskLogo_Name.png";

export default function LogoCard() {
  return (
    <Card sx={{ maxWidth: 345, padding: 2 }}>
      <CardMedia component="img" height="550" image={Logo} alt="iMask" />
    </Card>
  );
}
