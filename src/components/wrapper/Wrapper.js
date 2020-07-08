// use .map
import React from "react";
import API from "../../utils/API";
import Header from "../header/Header";
import EmployeeTable from "../table/EmployeeTable";
import { Component } from "react";

class Wrapper extends Component {
    state = {
        search: "",
        results: []
      };

      componentDidMount() {
        this.searchEmployees("employees");
      }

  searchEmployees = () => {
    API.getUsers()
      .then((res) =>{
          console.log("employee data", res)
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        })
    })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Header />
        <EmployeeTable />
      </div>
    );
  }
}

export default Wrapper;
