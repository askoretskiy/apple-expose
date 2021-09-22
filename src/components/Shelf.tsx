import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";

import { Data, Item } from "../types/data";
import { getItemChips } from "./chips";

export const Shelf = ({
  data,
  fields,
}: {
  data: Data;
  fields: Set<string>;
}) => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      {data.items.map((item) => (
        <ShelfItem item={item} key={item.id} fields={fields} />
      ))}
    </Grid>
  </Box>
);

const ShelfItem = ({ item, fields }: { item: Item; fields: Set<string> }) => (
  <Grid item xs={3}>
    <Paper className="shelf-item">
      <div className="shelf-item-header">{item.name}</div>
      {getItemChips({ item, fields }).map(({ label, title }) => (
        <Chip
          label={label}
          size="small"
          variant="outlined"
          title={title}
          className="shelf-item-chip"
        />
      ))}
    </Paper>
  </Grid>
);
