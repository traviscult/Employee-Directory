import React from "react";
import "./style.css";
// import API from "../utils/API"
import { Table } from "react-bootstrap";

let EmployeeTable = (props) => {
  // API.getusers().then(res => {
  //     console.log("User results", res)
  // })
  return (
    <Table striped bordered hover variant="dark">
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Phone</th>
        <th>E-Mail</th>
        <th>DOB</th>
      </tr>
    </Table>
  );
};

export default EmployeeTable;
