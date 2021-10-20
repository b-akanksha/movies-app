import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const PeopleCard = (props) => {
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
              <b>Gender</b> {props.gender}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {" "}
              <b>Birth Year</b> {props.birth_year}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <b>Height</b> {props.height}
            </Typography>
          </span>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PeopleCard;
