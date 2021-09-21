import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Fields = {
  presentYear: "Year",
  generation: "Generation",
  screenDiagonalInch: "Screen",
  socName: "SoC",
};

export const Filters = ({
  fields,
  toggleField,
}: {
  fields: Set<string>;
  toggleField: (field: string) => void;
}) => (
  <FormGroup>
    {Object.entries(Fields).map(([field, label]) => (
      <FilterRow
        key={field}
        field={field}
        label={label}
        fields={fields}
        toggleField={toggleField}
      />
    ))}
  </FormGroup>
);

const FilterRow = ({
  field,
  label,
  fields,
  toggleField,
}: {
  field: string;
  label: string;
  fields: Set<string>;
  toggleField: (field: string) => void;
}) => (
  <FormControlLabel
    control={
      <Checkbox
        size="small"
        checked={fields.has(field)}
        onClick={() => toggleField(field)}
      />
    }
    label={label}
  />
);
