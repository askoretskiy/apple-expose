import React from "react";
import { Data, Item } from "../types/data";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

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
  <Grid item xs={2}>
    <Paper className="shelf-item">
      {item.name}
      {!fields.has("presentYear") ? null : (
        <>
          <br />
          {item.presentYear}
        </>
      )}
      {!fields.has("generation") ? null : (
        <>
          <br />
          gen. {item.generation}
        </>
      )}
      {!fields.has("screenDiagonalInch") ? null : (
        <>
          <br />
          {item.screenDiagonalInch}"
        </>
      )}
    </Paper>
  </Grid>
);
