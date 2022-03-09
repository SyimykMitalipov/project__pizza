import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Home ,  Cart} from "./pages";
import axios from "axios";
import store from "./redux/store";
import { setPizzas }from "./redux/actions/pizzas";
import { connect } from 'react-redux'
// import SortPopup from "./components/SortPopup";



// const App = () => {
  
//   useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
      
//     })

//   },[])
   
// }
class App extends React.Component {
  componentDidMount () {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
        this.props.setPizzas(data.pizzas)
    })
  }
  render() {
    console.log(this.props.items);
    return (
      <div className="wrapper">
    <Header /> 
    <div className="content">
      <Routes>
          <Route path="/" element={ <Home items={this.props.items} />} exact />
          <Route path="/cart" element={<Cart />} exact />
      </Routes>
      {/* <Cart /> */}
    </div>
  </div>
  )
  }
}
const mapStateToProps = dispatch => {
  return {
    items: dispatch.pizzas.items
  }
}
const dispatches = {
  setPizzas,
}
export default connect(mapStateToProps, dispatches)(App); 

