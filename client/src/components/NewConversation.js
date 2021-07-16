import React, {useState} from 'react'
import {useContacts} from '../contexts/ContactsProvider'
import {useConversations} from '../contexts/ConversationsProvider'

export default function NewConversation({closeModal}) {
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const {contacts} = useContacts();
  const {createConversation} = useConversations();

  function handleCheckboxChange(contactId) {
    setSelectedContactIds(prev => {
      if(prev.includes(contactId)) {
        return prev.filter(prevId => {
          return prevId !== contactId;
        })
      } else {
        return [...prev, contactId];
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault();

    createConversation(selectedContactIds);
    closeModal();
  }
  
  return (
    <div>
      <button onClick={() => closeModal()}>x</button>
      <h1>Create Conversation</h1>
      <form onSubmit={handleSubmit} action="">
        {contacts.map(contact => (
          <label htmlFor="">
            <input type="checkbox" value={selectedContactIds.includes(contact.id)} onChange={() => handleCheckboxChange(contact.id)} />
            {contact.name}
          </label>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
