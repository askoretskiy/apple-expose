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
  fields: string[];
  setFields: (fields: string[]) => void;
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
  fields: string[];
  setFields: (fields: string[]) => void;
}) => {
  const index = fields.indexOf(field);
  const checked = index > -1;
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onClick={() => {
            if (checked) {
              const newFields = [...fields];
              newFields.splice(index, 1);
              setFields(newFields);
            } else {
              setFields([...fields, field]);
            }
          }}
        />
      }
      label={label}
    />
  );
};
