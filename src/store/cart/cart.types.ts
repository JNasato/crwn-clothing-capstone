import { CategoryItem } from "../categories/categories.types";

export type CartItemType = CategoryItem & {
  quantity: number;
};
