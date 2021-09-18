import React, { useState } from "react";
import { Shelf } from "./Shelf";
import { Filters } from "./Filters";
import { Data } from "../types/data";

import "../css/App.css";
import "normalize.css";
import "roboto-fontface/css/roboto/roboto-fontface.css";

export const App = ({ data }: { data: Data }) => {
  const [fields, setFields] = useState<Set<string>>(new Set());
  const toggleField = (field: string) =>
    setFields((oldFields) => {
      const newFields = new Set(oldFields);
      if (newFields.has(field)) {
        newFields.delete(field);
      } else {
        newFields.add(field);
      }
      return newFields;
    });
  return (
    <>
      <header>
        <h1>Apple Expose</h1>
      </header>
      <main>
        <Shelf data={data} fields={fields} />
        <Filters fields={fields} toggleField={toggleField} />
      </main>
    </>
  );
};
