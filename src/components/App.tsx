import React, { useState } from "react";
import { Shelf } from "./Shelf";
import { Filters } from "./Filters";
import { Data } from "../types/data";

import "../css/App.css";
import "normalize.css";
import "roboto-fontface/css/roboto/roboto-fontface.css";

export const App = ({ data }: { data: Data }) => {
  const [fields, setFields] = useState<Set<string>>(new Set());
  return (
    <>
      <header>
        <h1>Apple Expose</h1>
      </header>
      <main>
        <Shelf data={data} />
        <Filters fields={fields} setFields={setFields} />
      </main>
    </>
  );
};
