import { addToCart, emptyCart, removeToCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log("data in main component from Saga", data);

  // const product = {
  //   name: "I phone",
  //   type: "mobile",
  //   priec: "10000",
  //   color: "red",
  // };

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div className="main-container">
      <div>
        <h1 className="div-one">SHOP - NOW</h1>
      </div>

      {/*  <div style={{ padding: 5 }}>
        <button onClick={() => dispatch(addToCart(product))}>
          add to cart
        </button>
      </div>
      <div style={{ padding: 5 }}>
        <button onClick={() => dispatch(removeToCart(product.name))}>
          remove from cart
        </button>
      </div> */}
      <div style={{ padding: 5 }}>
        <button onClick={() => dispatch(emptyCart())}>empty cart</button>
      </div>

      {/*   <div style={{ padding: 5 }}>
        <button onClick={() => dispatch(productList())}>
          Get Product List
        </button>
      </div> */}

      <div className="product-container">
        {data.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.image} alt="" width={250} height={250} />
            <div> Name {item.title}</div>
            <div> Color : {item.color}</div>
            <div> Brand : {item.brand}</div>
            <div> Price : {item.price}</div>
            <div> Category : {item.category}</div>
            <div style={{ justifyContent: "space-between", padding: 10 }}>
              <button
                style={{ margin: 10 }}
                onClick={() => dispatch(addToCart(item))}
              >
                Add to Cart
              </button>
              <button
                style={{ margin: 10 }}
                onClick={() => dispatch(removeToCart(item.id))}
              >
                Remove to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
