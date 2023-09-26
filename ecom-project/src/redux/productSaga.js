import { takeEvery, put,call } from "redux-saga/effects";
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";

function fetchProducts(){
  return fetch('https://jsonplaceholder.typicode.com/photos').then((response) => response.json());
  // return fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json());
}


function* getProducts() {
  // const data =yield call(fetchProducts);
  // yield put({ type: SET_PRODUCT_LIST, data });


  console.log("Api calling here...");
  let data = yield fetch("http://localhost:4000/product");
  data = yield data.json();
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProducts(data) {
  console.log("Api calling here...");
  let result = yield fetch(`http://localhost:4000/product?q=${data.query}`);
  result = yield result.json();
  yield put({ type: SET_PRODUCT_LIST, data: result });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

export default productSaga;
