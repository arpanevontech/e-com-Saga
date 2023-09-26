import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Cart from './components/Cart'


function App() {
  /* let a =[
    1,2,3,4,5,6
  ]
  console.log("log a here",a);
  console.log("log a here 2",a.length-1);
  a.length = a.length -1
  console.log("log a here 3",a); */
  //https://jsonplaceholder.typicode.com/todos/1

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
