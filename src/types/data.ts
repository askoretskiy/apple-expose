export interface Data {
  items: Item[];
}

export interface Item {
  id: string;
  name: string;
  version: string;
  generation: number | null;
  // See https://support.apple.com/en-us/HT201296
  specUrl: string;
  presentYear: number;
  screenDiagonalInch: number;
  socName: string;
  socDesigner: string;
}
