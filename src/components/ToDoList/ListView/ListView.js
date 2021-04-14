import React from "react";
import PropTypes from "prop-types";
import { ListGroup, Spinner, ListGroupItem } from "react-bootstrap";
import useTitle from 'hooks/useTitle'

import Task from "components/ToDoList/ListView/Task";
import H1 from "components/shared/H1";
import Page from "components/shared/Page";
import List from "components/shared/List";

const ListView = ({ loading, list, updateCompleted, numTask }) => {

  const title = `Todolist : ${numTask} tâche${numTask > 1 ? 's' : ''} en cours`
  return <>
    <Page title={title}>
      <List loading={loading} list={list} component={Task} dataName='task' update={updateCompleted} className='toto'></List>
    </Page>

  </>
};

ListView.propTypes = {
  list: PropTypes.array.isRequired,
  updateCompleted: PropTypes.func.isRequired,
  numTask: PropTypes.number
};

export default React.memo(ListView);
