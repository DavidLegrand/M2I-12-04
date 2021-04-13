import React from "react";
import PropTypes from "prop-types";

const H1 = ({ children }) => {
  return <h1 className="text-center display-4 mb-5">{children}</h1>
};

H1.propTypes = {
  children: PropTypes.string.isRequired
};

export default H1;
