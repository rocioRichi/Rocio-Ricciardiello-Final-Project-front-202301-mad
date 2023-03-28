export interface LivingSpaceStructure {
  id: string;
  livingspace: string;
  m2: number;
  window?: ProductDetail;
  floor?: ProductDetail;
  wardrobe?: ProductDetail;
  walls?: ProductDetail;
  door?: DoorDetail;
  image?: string;
}
export type ProductDetail = {
  m2?: string;
  ref: string;
};
export type DoorDetail = {
  hand: "right" | "left";
  ref: string;
};
