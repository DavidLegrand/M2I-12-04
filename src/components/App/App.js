import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import ToDoList from 'components/ToDoList'

function App() {
  const AppName = "To Do List"
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center display-4">{AppName}</h1>
          <ToDoList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
