import React, { useState, useEffect } from 'react'
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  

function Editemployee(props) {  

        const [employee, setemployee]= useState({employeeId:0,firstName: '', lastName: '', dateOfBirth: '', email_Id: '', mobileNumber: '', address: '' });  

        const Url = "http://localhost:12817/Employee/" + parseInt(props.match.params.id);  

        useEffect(() => {  
          const GetData = async () => {  

            const result = await axios(Url);  

            setemployee(result.data);  

          };  

          GetData();  

        }, []);  

        const UpdateEmployee = (e) => {  

          e.preventDefault();
          const data = {employeeId:parseInt(props.match.params.id), firstName:employee.firstName, lastName: employee.lastName, dateOfBirth: employee.dateOfBirth, email_Id:employee.email_Id, mobileNumber: employee.mobileNumber, address: employee.address };  

          axios.post('http://localhost:12817/Employee/CreateEmployee', data)
            .then((result) => {
              props.history.push('/EmployeList')
            });  

        };  

        const cancelFunc = () => {
          props.history.push({  
      
            pathname: '/EmployeList' 
      
          });
        };

        const onChange = (e) => { 
          e.persist();          
          setemployee({...employee, [e.target.id]: e.target.value});
        }
        
        return (  

                <div className="app flex-row align-items-center">  
                <Container>  
                  <Row className="justify-content-center"> 
                    <Col md="12" lg="10" xl="8">  
                      <Card className="mx-4"> 
                        <CardBody className="p-4">  
                          <Form onSubmit={UpdateEmployee}>  
                            <h1>Update Employee</h1>  
                            <InputGroup className="mb-3">  
                              <Input type="text" name="EmployeeId" id="employeeId" placeholder="employeeId" value={employee.employeeId} onChange={ onChange } />  
                            </InputGroup>  
                             <InputGroup className="mb-3"> 
                              <Input type="text" placeholder="firstName" name="FirstName" id="firstName" value={employee.firstName} onChange={ onChange } />  
                            </InputGroup>  
                            <InputGroup className="mb-3">  
                              <Input type="text" placeholder="lastName" name="LastName" id="lastName"  value={employee.lastName} onChange={ onChange } />  
                            </InputGroup>  
                            <InputGroup className="mb-4">  
                              <Input type="text" placeholder="dateOfBirth" name="DateOfBirth" id="dateOfBirth" value={employee.dateOfBirth} onChange={ onChange } />                              </InputGroup>  
                            <InputGroup className="mb-4">  
                              <Input type="text" placeholder="email_Id" name="Email_Id" id="email_Id" value={employee.email_Id} onChange={ onChange } />  
                            </InputGroup>  
                            <InputGroup className="mb-4"> 
                               <Input type="text" placeholder="mobileNumber" name="MobileNumber" id= "mobileNumber" value={employee.mobileNumber} onChange={ onChange } />  
                            </InputGroup>
                            <InputGroup className="mb-4">  
                               <Input type="text" placeholder="address" name="Address" id= "address" value={employee.address} onChange={ onChange } />  
                            </InputGroup>   
                      <CardFooter className="p-4">  
                          <Row>  
                            <Col xs="12" sm="6">  
                              <Button type="submit" className="btn btn-info mb-1" block><span>Save</span></Button>  
                            </Col>  
                            <Col xs="12" sm="6">  
                              <Button className="btn btn-info mb-1" block onClick={cancelFunc}><span>Cancel</span></Button>  
                            </Col>  
                          </Row>  
                        </CardFooter>  
                          </Form>  
                        </CardBody>                 
                      </Card>  
                    </Col>  
                  </Row>  
                </Container>  
              </div> 
        )
}  
export default Editemployee