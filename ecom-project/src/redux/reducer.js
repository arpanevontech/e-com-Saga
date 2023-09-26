import {
  ADD_TO_CART,
  EMPTY_FROM_CART,
  REMOVE_TO_CART,
  UPDATE_TO_CART,
} from "./constant";

export const cartData = (data = [], action) => {
  // if (action.type === ADD_TO_CART) {
  //     console.log('reducer called ->', action);
  //     return action.data;
  // } else {
  //     return "No Action Called"
  // }

  switch (action.type) {
    case ADD_TO_CART:
      //add to cart  logic
      console.log("ADD_TO_CART reducer is called ->", action);
      return [action.data, ...data];

    case REMOVE_TO_CART:
      //add to cart  logic
      // const a = [...data];

      console.log("REMOVE_TO_CART called ->", action);
      // a.length = a.length ? a.length-1 : []
      const remainingItem = data.filter((item) => item.id != action.data);
      console.log("remaining Item called ->", action);

      return [...remainingItem];

    //     console.log("REMOVE_TO_CART called ->", action);
    // data.splice(action.data, 1);
    // return [...data];

    case EMPTY_FROM_CART:
      //add to cart  logic
      console.log("EMPTY_FROM_CART called ->", action);
      // data.length = data.length*0
      // return [...data];
      data = [];
      return [...data];

    default:
      //no action called
      return data;
  }
};
