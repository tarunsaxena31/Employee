import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items : [],
          isLoaded : false,
        }
        this.state = {
          columnDefs: [{
            headerName: "EmployeeId", field: "EmployeeId"
          }, {
            headerName: "FirstName", field: "FirstName"
          }, {
            headerName: "LastName", field: "LastName"
          }, {
            headerName: "Email_Id", field: "Email_Id"
          }, {
            headerName: "MobileNumber", field: "MobileNumber"
          }, {
            headerName: "Address", field: "Address"
          }
          , {
            headerName: "Edit/Delete", field: "Edit/Delete"
          }],
          rowData: [{
            EmployeeId: "1", FirstName: "Celica", LastName: "Ray"
          }, {
            EmployeeId: "2", FirstName: "Mondeo", LastName: "Deo"
          }, {
            EmployeeId: "3", FirstName: "Boxter", LastName: "Sam"
          }]
        }
    }

    componentDidMount(){

      const data = {location: value}
      const options = {
        method : 'GET',
        headers : {
          'Content-Type': 'application/json'
        },
        body :JSON.stringify(data)

      }

      fetch('http://192.168.0.102:12817/Employee')
      .then(res => res.json)
      .then(json => {
      this.setState({
        isLoaded : true,
        items: json,
      })
      });
    }
    render() {

      var {isLoaded} = this.state;

      if(!isLoaded)
      {
        return <div>Loading....</div>
      }
      else{
        return (
            <div
            className="ag-theme-alpine App" 
            style={{
            height: '250px',
            width: '1500px' }}
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}>
            </AgGridReact>
          </div>
        )
            }
    }
}

export default Home
