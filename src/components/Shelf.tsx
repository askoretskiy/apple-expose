import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";

import { Data, Item, ChipValue } from "../types/data";
import { getFnsForItemChips, getGetItemChips } from "./chips";
import ExternalLink from "../img/external-link.svg";

export const Shelf = ({
  data,
  fields,
}: {
  data: Data;
  fields: Set<string>;
}) => {
  const chipFns = getFnsForItemChips(fields);
  const getChips = getGetItemChips(chipFns);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {data.items.map((item) => (
          <ShelfItem item={item} key={item.id} getChips={getChips} />
        ))}
      </Grid>
    </Box>
  );
};

const ShelfItem = ({
  item,
  getChips,
}: {
  item: Item;
  getChips: (item: Item) => ChipValue[];
}) => (
  <Grid item xs={3}>
    <Paper className="shelf-item">
      <div className="shelf-item-header">
        {item.name}{" "}
        <a href={item.specUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={ExternalLink}
            className="external-link"
            alt="Specification"
          />
        </a>
      </div>
      {getChips(item).map(({ field, label, title }) => (
        <Chip
          key={field}
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
