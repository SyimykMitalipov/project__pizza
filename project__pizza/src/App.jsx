import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Home ,  Cart} from "./pages";
// import SortPopup from "./components/SortPopup";




const App = () => {
  const clickKnopka = () => {
        alert('Syimyk Mitalipov')
  }
    return (
        <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/cart" element={<Cart />} exact />
        </Routes>
        {/* <Cart /> */}
      </div>
    </div>
    )
}
export default App; 