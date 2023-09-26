import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";

export const productList = () => {
  return {
    type: PRODUCT_LIST,
    data:"Apple Mobile",
  };
};

export const productSearch = (query) => {
  console.log("productSearch called -> ", query);

  return {
    type: SEARCH_PRODUCT,
    query,
  };
};
