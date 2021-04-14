import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import ToDoList from 'components/ToDoList'
import { UserProvider } from 'contexts/User'
import Parent from 'components/Parent'



function App() {
  return (
    <>
      <UserProvider>
        <Container>
          <Row>
            <Col>
              {/* <Parent></Parent> */}
              <ToDoList />
            </Col>
          </Row>
        </Container>
      </UserProvider>
    </>
  );
}

export default App;
