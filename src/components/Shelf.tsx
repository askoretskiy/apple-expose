import React from "react";
import { Data, Item } from "../types/data";

import { Button } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";

import "../css/App.css";
import ExternalLink from "../img/external-link.svg";

export const Shelf = ({ data }: { data: Data }) => (
  <>
    <ul className="shelf">
      {data.items.map((item) => (
        <ShelfItem item={item} key={item.id} />
      ))}
    </ul>
    <div className="shelf-new">
      {data.items.map((item) => (
        <ShelfItemNeo item={item} key={item.id} />
      ))}
    </div>
  </>
);

const ShelfItemNeo = ({ item }: { item: Item }) => <Button>{item.name}</Button>;

const ShelfItem = ({ item }: { item: Item }) => (
  <li>
    [{item.presentYear}] {item.name}{" "}
    {!item.generation ? null : `(gen. ${item.generation}) `}
    <a
      href={item.specUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="external"
    >
      <img src={ExternalLink} className="external-link" alt="Specification" />
    </a>
  </li>
);
