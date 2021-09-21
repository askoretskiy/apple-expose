import React from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Fields = {
  presentYear: "Year",
  generation: "Generation",
  screenDiagonalInch: "Screen",
  socName: "SoC",
};
const FieldsFields = new Set(Object.keys(Fields));

const isSetEqual = (a: Set<any>, b: Set<any>): Boolean => {
  if (a.size !== b.size) {
    return false;
  }
  for (const v of a) {
    if (!b.has(v)) {
      return false;
    }
  }
  return true;
};

const hasAllFields = (fields: Set<string>): true | false | null => {
  if (fields.size === 0) {
    return false;
  }
  if (isSetEqual(fields, FieldsFields)) {
    return true;
  }
  return null;
};

export const Filters = ({
  fields,
  toggleField,
  setFields,
}: {
  fields: Set<string>;
  toggleField: (field: string) => void;
  setFields: (fields: Set<string>) => void;
}) => {
  const checkedAll = hasAllFields(fields);
  return (
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      <FormLabel component="legend">Select fields</FormLabel>
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
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              checked={checkedAll ?? false}
              indeterminate={checkedAll === null}
              onClick={() => setFields(checkedAll ? new Set() : FieldsFields)}
            />
          }
          label={<span style={{ fontWeight: "bold" }}>ALL</span>}
        />
      </FormGroup>
    </FormControl>
  );
};

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
