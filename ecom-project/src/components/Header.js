import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/productAction";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  const [value, setValues] = useState();
  const dispatch = useDispatch();

  console.log("redux data ", result);
  function pressHandler() {
    console.log("button clicked", value);
  }
  function updateInputValue(e) {}
  return (
    <div className="header">
      <Link to="/Cart">
        <div>
          <Link to="/">
            <h1 className="header-logo">E-COMM</h1>
          </Link>
          {/* onkeyup="myFunction()" */}

          <div className="cart-div">
            <span className="cart-div span">{result.length}</span>

            <img
              className="cart-div-img"
              src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
              alt=""
            />
          </div>
        </div>
      </Link>

      <div className="div-search-container">
        <input
          type="text"
          id="myInput"
          value={value}
          placeholder="Search Products here.."
          className="search-bar"
          /*  onChange={(val) => setValues(val.target.value)} */
          onChange={(event) => dispatch(productSearch(event.target.value))}
        ></input>
        {/*  <button onClick={pressHandler}> GO </button> */}
      </div>
    </div>
  );
};

export default Header;
