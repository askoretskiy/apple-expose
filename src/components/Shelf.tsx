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

interface ChipValue {
  label: string;
  title?: string;
}

const getItemChips = ({
  item,
  fields,
}: {
  item: Item;
  fields: Set<string>;
}): ChipValue[] => {
  const result = [];
  if (fields.has("presentYear")) {
    result.push({ label: String(item.presentYear) });
  }
  if (fields.has("generation") && item.generation !== null) {
    result.push({ label: `gen. ${item.generation}` });
  }
  if (fields.has("screenDiagonalInch")) {
    result.push({ label: `${item.screenDiagonalInch}"` });
  }
  if (fields.has("socName")) {
    result.push({
      label: item.socName,
      title: `${item.socDesigner} ${item.socName}`,
    });
  }
  return result;
};

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
