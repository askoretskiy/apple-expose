import React from "react";
import { Shelf } from "./Shelf";
import { Data } from "../types/data";

import "../css/App.css";
import "normalize.css";
import "roboto-fontface/css/roboto/roboto-fontface.css";

export const App = ({ data }: { data: Data }) => (
  <>
    <header>
      <h1>Apple Expose</h1>
    </header>
    <main>
      <Shelf data={data} />
    </main>
  </>
);
