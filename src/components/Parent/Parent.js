import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Enfant from "components/Enfant";

const Parent = () => {
  const [name, setName] = useState('John')
  const [age, setAge] = useState(42)

  useEffect(() => {
    console.log("Render Parent")
  })

  useEffect(() => {
    console.log("Name updated : ", name)
  }, [name])

  const logName = useCallback(
    () => console.log(name),
    [name]
  )

  useEffect(() => {
    console.log("logName updated : ", logName)
  }, [logName])

  return <>
    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
    <Enfant logName={logName}></Enfant>
  </>
};

Parent.propTypes = {
  //
};

export default Parent;
