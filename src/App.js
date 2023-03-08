import React from 'react';
import {  Row, Col, Button, Alert, Breadcrumb, Card, Form, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     <Container>
      <Form>
        <Row>
          <Col md>
          <Form.Group controlId='formEmail'>
          <Form.Label>
             Email Adress
          </Form.Label>
           <Form.Control type='email' placeholder='Example@hotmail.fr'/>
           <Form.Text className='text-muted'>
            we'll never share your email adress,Trust us!
           </Form.Text>
        </Form.Group>
          </Col>
          <Col md>
          <Form.Group controlId='formPassword'>
          <Form.Label>
             Password
          </Form.Label>
           <Form.Control type='password' placeholder='Password'/>
        </Form.Group>
          </Col>
        </Row>
        <Button variant='secondary' type='submit'>Login</Button>
      </Form>
      <Card className='mb-3' style={{ color: "#000" }}>
        <Card.Img src="https://www.picsum.photos/200/50"  />
        <Card.Body>
          <Card.Title>
            Card Example
          </Card.Title>
          <Card.Text>
            This is an example from boostrap react
          </Card.Text>
          <Button variant='primary'>Read More </Button>
        </Card.Body>
      </Card>
        <Breadcrumb>
        <Breadcrumb.Item>Test 1</Breadcrumb.Item>
        <Breadcrumb.Item>Test 2</Breadcrumb.Item>
        <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant='primary'> This is Button</Alert>
        <Button>Test </Button>
      </Container>
      
    </div>
  );
}

export default App;

