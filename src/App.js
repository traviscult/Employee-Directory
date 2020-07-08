import React from 'react';
import Wrapper from "./components/wrapper/Wrapper"
// import logo from './logo.svg';
import Header from "./components/header/Header"
import EmployeeTable from "./components/table/EmployeeTable"
import './App.css';
import API from "../src/utils/API"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      < Wrapper />
    </div>
  );
}

export default App;
