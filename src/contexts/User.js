import React, { useState, createContext } from 'react'

const defaultUser = null
export const UserContext = createContext(defaultUser)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ firstName: "John", lastName: "Doe" })
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
