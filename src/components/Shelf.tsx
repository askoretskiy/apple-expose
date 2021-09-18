import React from "react";
import { Data, Item } from "../types/data";

import "../css/App.css";
import ExternalLink from "../img/external-link.svg";

export const Shelf = ({ data }: { data: Data }) => (
  <>
    <div className="shelf">
      {data.items.map((item) => (
        <ShelfItem item={item} key={item.id} />
      ))}
    </div>
  </>
);

const ShelfItem = ({ item }: { item: Item }) => <div>{item.name}</div>;
