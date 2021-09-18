import React from "react";
import { Data, Item } from "../types/data";

import { Card } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";

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

const ShelfItem = ({ item }: { item: Item }) => <Card>{item.name}</Card>;
