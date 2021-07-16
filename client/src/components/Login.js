import React, { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './styles/Login.scss'

export default function Login({setId}) {
  const idRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    setId(idRef.current.value);
  }

  function createNewId(e) {
    e.preventDefault();
    setId(uuidv4());
  }

  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} className="login-form" action="">
        <label htmlFor="">
          Enter your Id
          <input type="text" ref={idRef} />
        </label>
        <button type="submit">Login</button>
        <button onClick={createNewId}>Create a new Id</button>
      </form>
    </div>
  )
}
