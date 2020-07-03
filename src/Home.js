import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class Home extends Component {
 
    constructor(props) {
        super(props);

        this.state = {
          apiResponse : [],
          isLoaded : false,
          
          columnDefs: [{
            headerName: "EmployeeId", field: "employeeId"
          }, {
            headerName: "FirstName", field: "firstName"
          }, {
            headerName: "LastName", field: "lastName"
          },{
            headerName: "dateOfBirth", field: "dateOfBirth"
          },{
            headerName: "Email_Id", field: "email_Id"
          }, {
            headerName: "MobileNumber", field: "mobileNumber"
          }, {
            headerName: "Address", field: "address"
          }
          , {
            headerName: "Edit/Delete", field: "Edit/Delete"
          }],          
          // rowData: [{
          //   EmployeeId: "1", FirstName: "Celica", LastName: "Ray", Email_Id:"cr@gmail.com", MobileNumber:"7350308970", Address:"Wakad"
          // }, {
          //   EmployeeId: "2", FirstName: "Mondeo", LastName: "Deo",Email_Id:"cr@gmail.com", MobileNumber:"7350308970", Address:"Wakad"
          // }, {
          //   EmployeeId: "3", FirstName: "Boxter", LastName: "Sam",Email_Id:"cr@gmail.com", MobileNumber:"7350308970", Address:"Wakad"
          // }]
        }
    }

    // getData () {
    //   $.ajax({
    //   url: 'http://localhost:12817/Employee',
    //   type: "GET",
    //   dataType: 'json',
    //   ContentType: 'application/json',
    //   success: function(data){
    //     this.setState({apiResponse: data});
    //     console.log(this.state.apiResponse);
    //   }.bind(this),
    //   error: function(jqXHR) {
    //     console.log(jqXHR);
    //   }.bind(this)
    //   });
    // }
    componentDidMount(){
      // const data = {location: 'value'}
      // const options = {
      //   method : 'POST',
      //   headers : {
      //     'Content-Type': 'application/json'
      //   },
      //   body :JSON.stringify(data)
      // }

      fetch('http://localhost:12817/Employee')
      .then(res => res.json())
      .then(data => {
      this.setState({
        apiResponse: data,
        isLoaded : true     
      });      
      }).catch(error => this.setState({ error, isLoaded: false }));;
      
      //this.getData();
    }

    addEmployee() {
      console.log("I Clicked");
    }
    render() {

      var {isLoaded} = this.state;
       
//debugger;    
      if(!isLoaded)
      {
        return <div>Loading....</div>
      }
      else{
        return (
            <div
            className="ag-theme-alpine App" 
            style={{
            height: '550px',
            width: '1500px' }}
          >
            
            {/* <ul>
                {this.state.apiResponse.map((employee) => (
                    <li key={employee.employeeId}>{employee.firstName}</li>
                ))}
            </ul> */}
            <div align='left'>
            <button onClick={() => this.addEmployee()}>Add</button>
            </div>
          
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={this.state.apiResponse}>
            </AgGridReact>

            
          </div>
        )
            }
    }
}

export default Home
