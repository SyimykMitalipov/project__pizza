import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Home ,  Cart} from "./pages";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setPizzas }from "./redux/actions/pizzas";
import { connect } from 'react-redux'
import pizzas from "./redux/reducers/pizzas";
// import SortPopup from "./components/SortPopup";

const App = () => {
  const dispatch = useDispatch()

 


  useEffect(() =>{
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
       dispatch(setPizzas(data.pizzas))
    })
  },[])
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

// const mapStateToProps = dispatch => {
//   return {
//     items: dispatch.pizzas.items
//   }
// }
// const dispatches = {
//   setPizzas,
// }
// export default connect(mapStateToProps, dispatches)(App);

