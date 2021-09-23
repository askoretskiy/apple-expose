export type Optional<Type> = Type | null;

// could be used with Optional<T>[] -> `.filter(NotNull)` would return `T[]`
export const NotNull = <Type>(value: Optional<Type>): value is Type =>
  value !== null;

export interface Data {
  items: Item[];
}

export interface Item {
  id: string;
  name: string;
  version: string;
  generation: Optional<number>;
  // See https://support.apple.com/en-us/HT201296
  specUrl: string;
  presentYear: number;
  screenDiagonalInch: number;
  socName: string;
  socDesigner: string;
  socTechProcessNm: number;
  screenTech: string;
}
