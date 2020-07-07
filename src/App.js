import React from 'react';
// import logo from './logo.svg';
import Header from "./components/Header"
import Table from "./components/Table"
import './App.css';
import API from "../src/utils/API"

function App() {
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
