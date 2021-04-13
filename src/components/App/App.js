import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import ToDoList from 'components/ToDoList'

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <ToDoList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
