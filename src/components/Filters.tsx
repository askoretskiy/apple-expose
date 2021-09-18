import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Fields = {
  generation: "Generation",
  presentYear: "Year",
};

export const Filters = ({
  fields,
  setFields,
}: {
  fields: Set<string>;
  setFields: (fields: Set<string>) => void;
}) => (
  <FormGroup>
    {Object.entries(Fields).map(([field, label]) => (
      <FilterRow
        key={field}
        field={field}
        label={label}
        fields={fields}
        setFields={setFields}
      />
    ))}
  </FormGroup>
);

const FilterRow = ({
  field,
  label,
  fields,
  setFields,
}: {
  field: string;
  label: string;
  fields: Set<string>;
  setFields: (fields: Set<string>) => void;
}) => {
  const checked = fields.has(field);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onClick={() => {
            const newFields = new Set(fields);
            if (checked) {
              newFields.delete(field);
            } else {
              newFields.add(field);
            }
            setFields(newFields);
          }}
        />
      }
      label={label}
    />
  );
};
