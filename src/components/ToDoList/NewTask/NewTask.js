import React, { useState } from "react";
import PropTypes from "prop-types";
import H1 from "components/shared/H1";
import { Form, Button, Row, Col } from 'react-bootstrap'

const NewTask = ({ add }) => {
  const initialForm = { title: '', description: '', completed: false, deadline: new Date() }
  const [form, setForm] = useState(initialForm)

  //  useTitle(`Nouvelle tâche : ${form.title}`)

  const handleSubmit = (e) => {
    e.preventDefault()
    setForm(initialForm)
    add(form)
  }

  const handleChange = e => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    const name = e.target.name
    setForm({ ...form, [name]: value })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <H1>Nouvelle tâche</H1>
        <Form.Group as={Row}>
          <Form.Label column sm="2">Titre : </Form.Label>
          <Col sm="10">
            <Form.Control name="title" type="text" value={form.title} onChange={handleChange} />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">Description : </Form.Label>
          <Col sm="10">
            <Form.Control name="description" type="text" value={form.description} onChange={handleChange} />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">Deadline : </Form.Label>
          <Col sm="10">
            <Form.Control name="deadline" type="date" value={form.deadline} onChange={handleChange} />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">Terminée ? : </Form.Label>
          <Col sm="10">
            <Form.Check name="completed" type="checkbox" checked={form.completed} onChange={handleChange} label={form.completed ? "Terminée" : "En cours"} />
          </Col>
        </Form.Group>
        <Form.Group>
          <Button type="submit">Ajouter</Button>
        </Form.Group>
      </Form>
    </>
  )
};

NewTask.propTypes = {
  add: PropTypes.func.isRequired
};

export default NewTask;
