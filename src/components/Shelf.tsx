import React from "react";
import { Data, Item } from "../types/data";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";

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

const getItemChips = ({
  item,
  fields,
}: {
  item: Item;
  fields: Set<string>;
}): string[] => {
  const result = [];
  if (fields.has("presentYear")) {
    result.push(String(item.presentYear));
  }
  if (fields.has("generation") && item.generation !== null) {
    result.push(`gen. ${item.generation}`);
  }
  if (fields.has("screenDiagonalInch")) {
    result.push(`${item.screenDiagonalInch}"`);
  }
  return result;
};

const ShelfItem = ({ item, fields }: { item: Item; fields: Set<string> }) => (
  <Grid item xs={2}>
    <Paper className="shelf-item">
      {item.name}
      <br />
      {getItemChips({ item, fields }).map((label) => (
        <Chip label={label} size="small" variant="outlined" />
      ))}
    </Paper>
  </Grid>
);
