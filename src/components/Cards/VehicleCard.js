import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const VehicleCard = (props) => {
  const index = props.id % 3;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card variant="outlined" className={`card-container card-${index}`}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            #{props.id}
          </Typography>
          <span style={{ paddingLeft: "22px", display: "block" }}>
            <Typography variant="h5" component="div">
              {props.name}
            </Typography>
            <br />
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {" "}
              <b>Model</b> {props.model}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {" "}
              <b>Manufacturer</b> {props.manufacturer}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {" "}
              <b>Cargo capacity</b> {props.cargo_capacity}
            </Typography>
          </span>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default VehicleCard;
