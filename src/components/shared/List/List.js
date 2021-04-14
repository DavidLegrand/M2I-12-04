import React from "react";
import PropTypes from "prop-types";
import { ListGroup, Spinner, ListGroupItem } from "react-bootstrap";

const List = ({ loading, list, component: Component, dataName, ...otherProps }) => {
  return <ListGroup>
    {
      !loading ?
        list.map((element) => {
          return <Component key={element.id} {...{ [dataName]: element }} {...otherProps}></Component>
        })
        :
        <ListGroupItem className="text-center">
          <Spinner className="text-center" animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </ListGroupItem>
    }
  </ListGroup>;
};

List.propTypes = {
  //
};

export default List;
