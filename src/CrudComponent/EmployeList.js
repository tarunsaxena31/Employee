import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  

function EmployeList(props) {  

  const [data, setData] = useState([]);  

  useEffect(() => {  

    const GetData = async () => {  

      const result = await axios('http://localhost:12817/Employee');  

      setData(result.data);  

    };  
    GetData();  

  }, []);  

  const deleteeployee = (id) => {  

    //debugger;  
    
    axios.delete('http://localhost:12817/Employee/DeleteEmployee/' + id) 
      .then((result) => {  
        props.history.push('/EmployeList')
      });

      const GetData = async () => {  
        const result = await axios('http://localhost:12817/Employee');  
        setData(result.data);   
      };
      GetData(); 
  };  

  const editemployee = (id) => {  

    props.history.push({  

      pathname: '/edit/' + id  

    });  

  };  

  return (  

    <div className="animated fadeIn">  

      <Row> 
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> Employee List
              </CardHeader>  
            <CardBody>  
              <Table hover bordered striped responsive size="sm">  
                <thead>  
                  <tr>  
                    <th>EmployeeId</th>  
                    <th>FirstName</th>  
                    <th>LastName</th>  
                    <th>DateOfBirth</th>  
                    <th>Email_Id</th>  
                    <th>MobileNumber</th>  
                    <th>Address</th>  
                    <th>Action</th> 
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    data.map((item) => {
                      return <tr key={item.employeeId}>  
                        <td>{item.employeeId}</td>  
                        <td>{item.firstName}</td>  
                        <td>{item.lastName}</td>  
                        <td>{item.dateOfBirth}</td>  
                        <td>{item.email_Id}</td>  
                        <td>  
                          {item.mobileNumber}  
                        </td>
                        <td>  
                          {item.address}  
                        </td>  
                        <td>  
                          <div className="btn-group">  
                            <button className="btn btn-warning" onClick={() => { editemployee(item.employeeId) }}>Edit</button>  
                            <button className="btn btn-warning" onClick={() => { deleteeployee(item.employeeId) }} >Delete</button>  
                          </div>  
                        </td> 
                      </tr>  
                    })}  
                </tbody> 
              </Table>  
            </CardBody>  
          </Card> 
        </Col> 
      </Row>
    </div> 
  )
} 
export default EmployeList 