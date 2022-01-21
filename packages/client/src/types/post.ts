export interface Post {
  _createdAt: string;
  _id: string;
  author: AssetOrAuthor;
  body?: BodyEntity[] | null;
  description: string;
  mainImage: MainImage;
  slug: Slug;
  title: string;
}
export interface AssetOrAuthor {
  _ref: string;
  _type: string;
}
export interface BodyEntity {
  _key: string;
  _type: string;
  children?: ChildrenEntity[] | null;
  markDefs?: null[] | null;
  style?: string | null;
  asset?: AssetOrAuthor | null;
  crop?: Crop | null;
  hotspot?: Hotspot | null;
}
export interface ChildrenEntity {
  _key: string;
  _type: string;
  marks?: null[] | null;
  text: string;
}
export interface Crop {
  _type: string;
  bottom: number;
  left: number;
  right: number;
  top: number;
}
export interface Hotspot {
  _type: string;
  height: number;
  width: number;
  x: number;
  y: number;
}
export interface MainImage {
  _type: string;
  asset: AssetOrAuthor;
}
export interface Slug {
  _type: string;
  current: string;
}
