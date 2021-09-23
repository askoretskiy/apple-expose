import { Optional, Item, ChipValue, NotNull } from "../types/data";

const fieldFormatter: {
  [key: string]: (field: string, item: Item) => Optional<ChipValue>;
} = {
  presentYear: (field, item) => ({ field, label: String(item.presentYear) }),
  generation: (field, item) =>
    item.generation === null
      ? null
      : { field, label: `gen. ${item.generation}` },
  screenDiagonalInch: (field, item) => ({
    field,
    label: `${item.screenDiagonalInch}"`,
  }),
  socName: (field, item) => ({
    field,
    label: item.socName,
    title: `${item.socDesigner} ${item.socName}`,
  }),
  socTechProcessNm: (field, item) => ({
    field,
    label: `${item.socTechProcessNm} nm`,
  }),
  screenTech: (field, item) => ({ field, label: item.screenTech }),
};

export const getFnsForItemChips = (
  fields: Set<string>
): ((item: Item) => Optional<ChipValue>)[] => {
  return Object.entries(fieldFormatter)
    .filter(([field]) => fields.has(field))
    .map(
      ([field, fn]) =>
        (item: Item) =>
          fn(field, item)
    );
};

export const getGetItemChips =
  (
    fns: ((item: Item) => Optional<ChipValue>)[]
  ): ((item: Item) => ChipValue[]) =>
  (item: Item) =>
    fns.map((fn) => fn(item)).filter(NotNull);
