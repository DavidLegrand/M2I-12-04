import React, { useState, useEffect, useReducer, useCallback, useMemo } from 'react'

const initialUser = {
  firstName: "John",
  lastName: "Doe",
  isLogged: true,
  addresses: [
    { id: 1, street: "baker street", city: "london" },
    { id: 2, street: "rue de la paix", city: "paris" },
    { id: 3, street: "time square", city: "nyc" }
  ],
  contact: {
    mail: 'john@doe.com',
    phone: '00-11-22-33-44'
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'newFirstName':
      return { ...state, firstName: action.payload };
    case 'newLastName':
      return { ...state, lastName: action.payload };
    case 'addAddress':
      return { ...state, addresses: [...state.addresses, action.payload] };
    case 'removeAddress':
      let addresses
      if (action.payload) addresses = state.addresses.filter(a => a.id !== action.payload)
      else addresses = state.addresses.slice(0, -1)
      return { ...state, addresses }
    default:
      return state
  }
}

const ComponentTest = () => {
  const [user, dispatch] = useReducer(reducer, initialUser)

  return <>
    <div>{user.firstName} {user.lastName}</div>
    <ul>{user.addresses.map(a => <li>{a.street} - {a.city}</li>)}</ul>
    <div>{user.contact.mail}</div>
    <div>{user.contact.phone}</div>
    <button onClick={() => dispatch({ type: "newFirstName", payload: "Jack" })}>New First Name</button>
    <button onClick={() => dispatch({ type: "newLastName", payload: "Napier" })}>New Last Name</button>
    <button onClick={() => dispatch({ type: "addAddress", payload: { street: "rue paradis", city: "lyon" } })}>New Address</button>
    <button onClick={() => dispatch({ type: "removeAddress" })}>Remove Last Address</button>
    <button onClick={() => dispatch({ type: "removeAddress", payload: 3 })}>Remove Address with ID 3</button>
  </>
}



const Parent = () => {
  const [name, setName] = useState('John')
  const [age, setAge] = useState(42)

  useEffect(() => {
    console.log("Render Parent")
  })

  // Use memo : memoizer des valeurs
  const memoLogName = useMemo(() => {
    /*
    Je fais appel à une fonction qui retourne un résultat couteux 
    aka fonction de cryptage, CPU intensive (gestion des fichiers, images, videos...)
    */
  }, [name])

  // Use callback : memoizer des fonctions
  const logname = () => console.log(name)
  const callbackLogName = useCallback(() => console.log(name), [name])

  return <>
    Parent:
    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <Enfant name={name} logName={callbackLogName}></Enfant>
    <ComponentTest />
  </>
};


const Enfant = React.memo(({ name, logName }) => {
  useEffect(() => {
    console.log("Render Child")
  })
  return <>Child : {name} <button onClick={logName}>Log</button></>;
})

export default Parent