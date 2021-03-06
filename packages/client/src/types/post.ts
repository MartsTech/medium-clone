export interface Post {
  _createdAt: string;
  _id: string;
  author: Author;
  body?: BodyEntity[] | null;
  comments: Comment[];
  description: string;
  mainImage: Image;
  slug: Slug;
  title: string;
}
export interface Author {
  image: Image;
  name: string;
  slug: Slug;
}
export interface Image {
  _type: string;
  asset: Asset;
}
export interface Asset {
  _ref: string;
  _type: string;
}
export interface Slug {
  _type: string;
  current: string;
}
export interface BodyEntity {
  _key: string;
  _type: string;
  children?: ChildrenEntity[] | null;
  markDefs?: null[] | null;
  style?: string | null;
  asset?: Asset | null;
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
export interface Comment {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  approved: boolean;
  comment: string;
  email: string;
  name: string;
  post: Asset;
}
