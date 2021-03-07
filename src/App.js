import logo from './logo.svg';
import React from 'react';
import firebase from "./config/firebase.js";
import { Link } from "react-router-dom";
import AppRouter from './config/router';
import { connect } from "react-redux";
import { setData } from "./store/action";
// import './App.css';

class App extends React.Component{
  render(){
    console.log("REDUX DTA --->",this.props)
    return(
      
      <div>
        <AppRouter />
        {/* <h2>hello</h2> */}
        <button onClick={()=>this.props.setData("bhai data component se bhj rha")}>set data</button>
      </div>
  )
  }
}

const mapStateToProps = (state) => (
  {
    name:state.auth.name,
    email: state.auth.email,
    app: state.app.appName
  }
)
const mapDispatchToProp = (dispatch) =>({
  setData: (data)=> dispatch(setData(data))

})
export default connect(mapStateToProps,mapDispatchToProp)(App);
