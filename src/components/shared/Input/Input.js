import React from "react";
import PropTypes from "prop-types";
import { Form, Row, Col } from 'react-bootstrap'

const Input = ({ label, name, value, type, handler, checkLabel }) => {
  return <Form.Group as={Row}>
    <Form.Label column md="2" sm="4">{label} : </Form.Label>
    <Col md="10" sm="8">
      {type === "checkbox" ?
        <Form.Check name={name} type={type} checked={value} onChange={handler} label={checkLabel} />
        :
        <Form.Control name={name} type={type} value={value} onChange={handler} />}
    </Col>
  </Form.Group>;
};

Input.propTypes = {
  //
};

export default Input;
