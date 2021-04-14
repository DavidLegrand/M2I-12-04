import React from "react";
import PropTypes from "prop-types";
import useTitle from 'hooks/useTitle'
import H1 from 'components/shared/H1'

const Page = ({ title, children }) => {
  useTitle(title)
  return <>
    <H1>{title}</H1>
    {children}
  </>
};

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default Page;
