import React from 'react';
// import logo from './logo.svg';
import Header from "./components/header/Header"
import Table from "./components/table/Table"
import './App.css';
import API from "../src/utils/API"

function App() {
  //set a state that is the reults form the api
  API.getUsers().then(res => {
    console.log("User info", res.data.results)
  })
  return (
    <div>
      <Header/>
      <Table/>
    </div>
  );
}

export default App;
