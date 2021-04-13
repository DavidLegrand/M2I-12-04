import React, { useState, createContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import ToDoList from 'components/ToDoList'
import { UserProvider } from 'contexts/User'

function App() {

  return (
    <>
      <UserProvider>
        <Container>
          <Row>
            <Col>
              <ToDoList />
            </Col>
          </Row>
        </Container>
      </UserProvider>
    </>
  );
}

export default App;
