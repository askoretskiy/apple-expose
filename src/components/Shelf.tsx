import React from "react";
import { Data, Item } from "../types/data";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import "../css/App.css";
import ExternalLink from "../img/external-link.svg";

export const Shelf = ({ data }: { data: Data }) => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      {data.items.map((item) => (
        <ShelfItem item={item} key={item.id} />
      ))}
    </Grid>
  </Box>
);

const ShelfItem = ({ item }: { item: Item }) => (
  <Grid item xs={2}>
    <Paper className="shelf-item">{item.name}</Paper>
  </Grid>
);
