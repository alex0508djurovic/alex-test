import { IProduct, ProductProperties } from "@/types";

const isValidItem = (item: IProduct): string => {
  console.log(item, ProductProperties);
  if (item === null || Object.values(item).length === 0) return "Item is Empty";
  for (const property of ProductProperties) {
    console.log(property, item[property]);
    if (!item[property]) return `${property} is Required`;
  }
  return "";
};

const isValidProductList = (arr: IProduct[]): boolean => {
  return arr.every((item) => isValidItem(item));
};

export { isValidItem, isValidProductList };
