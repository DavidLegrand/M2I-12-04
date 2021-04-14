import React, { useState } from "react";
import PropTypes from "prop-types";
import Page from "components/shared/Page";
import Input from "components/shared/Input";
import { Form, Button, Row, Col } from 'react-bootstrap'

const NewTask = ({ add }) => {
  const initialForm = { title: '', description: '', completed: false, deadline: new Date() }
  const [form, setForm] = useState(initialForm)

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
      <Page title="Nouvelle tâche">
        <Form onSubmit={handleSubmit}>
          <Input label="Titre" name="title" value={form.title} type="text" handler={handleChange} />
          <Input label="Description" name="description" value={form.description} type="text" handler={handleChange} />
          <Input label="Deadline" name="deadline" value={new Date(form.deadline).toISOString().split("T")[0]} type="date" handler={handleChange} />
          <Input label="Terminée ?" name="completed" value={form.completed} type="checkbox" handler={handleChange} checkLabel={form.completed ? "Terminée" : "En cours"} />
          <Form.Group><Button type="submit">Ajouter</Button></Form.Group>
        </Form>
      </Page>

    </>
  )
};

NewTask.propTypes = {
  add: PropTypes.func.isRequired
};

export default NewTask;
