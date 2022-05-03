import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function DetailCard(props) {
  return (
    <Card sx={{ display: "flex", backgroundColor: props.cardColor }}>
      <CardActionArea href={props.href}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              variant="h6"
              sx={{ color: props.fontColor }}
            >
              {props.value}{" "}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
              sx={{ color: props.fontColor }}
            >
              {props.title}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}
