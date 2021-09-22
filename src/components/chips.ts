import { Item } from "../types/data";

interface ChipValue {
  label: string;
  title?: string;
}

export const getItemChips = ({
  item,
  fields,
}: {
  item: Item;
  fields: Set<string>;
}): ChipValue[] => {
  const result = [];
  if (fields.has("presentYear")) {
    result.push({ label: String(item.presentYear) });
  }
  if (fields.has("generation") && item.generation !== null) {
    result.push({ label: `gen. ${item.generation}` });
  }
  if (fields.has("screenDiagonalInch")) {
    result.push({ label: `${item.screenDiagonalInch}"` });
  }
  if (fields.has("socName")) {
    result.push({
      label: item.socName,
      title: `${item.socDesigner} ${item.socName}`,
    });
  }
  if (fields.has("socTechProcessNm")) {
    result.push({ label: `${item.socTechProcessNm} nm` });
  }
  return result;
};
