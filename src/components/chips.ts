import { Optional, Item } from "../types/data";

interface ChipValue {
  key?: string;
  label: string;
  title?: string;
}

const fieldFormatter: { [key: string]: (item: Item) => Optional<ChipValue> } = {
  presentYear: (item) => ({ label: String(item.presentYear) }),
  generation: (item) =>
    item.generation === null ? null : { label: `gen. ${item.generation}` },
  screenDiagonalInch: (item: Item): Optional<ChipValue> => ({
    label: `${item.screenDiagonalInch}"`,
  }),
  socName: (item) => ({
    label: item.socName,
    title: `${item.socDesigner} ${item.socName}`,
  }),
  socTechProcessNm: (item) => ({ label: `${item.socTechProcessNm} nm` }),
  screenTech: (item) => ({ label: item.screenTech }),
};

export const getItemChips = ({
  item,
  fields,
}: {
  item: Item;
  fields: Set<string>;
}): ChipValue[] => {
  const result = [];

  for (const [field, fn] of Object.entries(fieldFormatter)) {
    if (!fields.has(field)) {
      continue;
    }
    const chip = fn(item);
    if (chip === null) {
      continue;
    }
    chip.key = field;
    result.push(chip);
  }
  return result;
};
