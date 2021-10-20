import React from "react";
import Grid from "@mui/material/Grid";

export default function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ margin: "0px 16px" }}
      {...other}
    >
      {value === index && (
        <Grid container spacing={4} justifyContent="center">
          {children}
        </Grid>
      )}
    </div>
  );
}
