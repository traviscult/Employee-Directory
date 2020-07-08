import React from 'react';
// import logo from './logo.svg';
import Header from "./components/header/Header"
import EmployeeTable from "./components/table/EmployeeTable"
import './App.css';
import API from "../src/utils/API"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //set a state that is the reults form the api
  API.getUsers().then(res => {
    console.log("User info", res.data.results)
  })
  return (
    <div>
      <Header/>
      <EmployeeTable/>
    </div>
  );
}

export default App;
