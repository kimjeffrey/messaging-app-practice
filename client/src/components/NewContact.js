import React, {useRef} from 'react'
import { useContacts } from '../contexts/ContactsProvider';

export default function NewContact({closeModal}) {
  const idRef = useRef();
  const nameRef = useRef();
  const {createContact} = useContacts();

  function handleSubmit(e) {
    e.preventDefault();

    createContact(idRef.current.value, nameRef.current.value);
    closeModal();
  }

  return (
    <div>
      <button onClick={() => closeModal()}>x</button>
      <h1>Create Contact</h1>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">
          Id
          <input type="text" ref={idRef} />
        </label>
        <label htmlFor="">
          Name
          <input type="text" ref={nameRef} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
