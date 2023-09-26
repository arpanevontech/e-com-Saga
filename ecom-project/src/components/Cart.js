import { useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";

function Cart() {
  const cartData = useSelector((state) => state.cartData);
  console.log("log check", cartData);
  let amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);
  return (
    <div>
      <Link to="/" className="productlist-link ">
        Product List
      </Link>
      <br></br>
      <h1>Cart Page</h1>
      <marquee behavior="scroll" direction="left" scrollamount="10">
        <h1 className="para-tag">Flat 10% Discount on every Item .</h1>
      </marquee>
      <div className="div-head-container">
        <div className="card-page-container">
          {cartData.map((item) => (
            <div className="product-container">
              <div className="div-image-container">
                {" "}
                <img src={item.photo} alt="" width={""} height={150} />{" "}
              </div>
              <div className="product-details-container">
                <div>
                  <span>{item.name}</span>
                </div>
                <div>{item.color}</div>
                <div>{item.brand}</div>
                <div>${item.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="price-details">
          <div>
            <h1>PRICE DETAILS</h1>
          </div>
          <div className="adjust-price">
            <span>Amount</span>
            <span>{amount}</span>
          </div>
          <div className="adjust-price">
            <span>Discount</span>
            <span>{amount / 10}</span>
          </div>
          <div className="adjust-price">
            <span>Tax</span>
            <span>{(amount * 2.5) / 100}</span>
          </div>
          <div className="adjust-price">
            <span>Total</span>
            <span>{amount - amount / 10 + (amount * 2.5) / 100}</span>
          </div>
        </div>
      </div>
      
      {/*  <table className="table-container">
          <tr className="row-container-header">
            <td>Name</td>
            <td>Color</td>
            <td>Price</td>
            <td>Brand</td>
            <td>Category</td>
            <td>Photo</td>
          </tr>
          {cartData.map((item) => (
            <tr className="row-container-header" key={item.id}>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
              <td>
                <img src={item.photo} alt="" width='' height={80} />
              </td>
            </tr>
          ))}
        </table> */}
    </div>
  );
}

export default Cart;
