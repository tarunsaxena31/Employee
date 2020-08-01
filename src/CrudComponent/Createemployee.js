import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  

function Createemployee(props) {  
  const [employee, setemployee] = useState({employeeId:0, firstName: '', lastName: '', dateOfBirth: '', email_Id: '', mobileNumber: '',address:'' });  
  const [showLoading, setShowLoading] = useState(false);  
  const apiUrl = "http://localhost:12817/Employee/CreateEmployee";  
  const Insertemployee = (e) => { 
    e.preventDefault();  
    //debugger;  
    const data = {employeeId:parseInt(employee.employeeId), firstName: employee.firstName, lastName: employee.lastName, dateOfBirth:employee.dateOfBirth, email_Id: employee.email_Id, mobileNumber: employee.mobileNumber, address: employee.address }; 
    axios.post(apiUrl, data)  
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
    //debugger;  
    setemployee({...employee, [e.target.id]: e.target.value});  
  }
  return (  
    <div className="app flex-row align-items-center">  
      <Container>  
        <Row className="justify-content-center">  
          <Col md="12" lg="10" xl="8">  
            <Card className="mx-4">  
              <CardBody className="p-4">  
                <Form onSubmit={Insertemployee}>  
                  <h1>Register</h1>  
                  {/* <InputGroup className="mb-3"> 
                    <Input type="text" name="EmployeeId" id="employeeId" placeholder="employeeId" value={employee.employeeId} onChange={ onChange }  />  
                  </InputGroup> */}
                   <InputGroup className="mb-3">  
                    <Input type="text" placeholder="firstName" name="FirstName" id="firstName" onChange={ onChange }/> 
                  </InputGroup> 
                  <InputGroup className="mb-3">
                    <Input type="text" placeholder="lastName" name="LastName" id="lastName"   onChange={ onChange }  />  
                  </InputGroup>  
                  <InputGroup className="mb-4"> 
                    <Input type="text" placeholder="dateOfBirth" name="DateOfBirth" id="dateOfBirth"  onChange={ onChange }  />  
                  </InputGroup>  
                  <InputGroup className="mb-4">  
                    <Input type="text" placeholder="email_Id" name="Email_Id" id="email_Id"  onChange={ onChange } />
                  </InputGroup>  
                  <InputGroup className="mb-4">
  
                     <Input type="text" placeholder="mobileNumber" name="MobileNumber" id= "mobileNumber" onChange={ onChange } />  
                  </InputGroup>   
                  <InputGroup className="mb-4">
  
                     <Input type="text" placeholder="address" name="Address" id= "address" onChange={ onChange } />  
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
export default Createemployee 