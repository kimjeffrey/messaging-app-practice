import React, {useContext, useState} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { useContacts } from './ContactsProvider';

const ConversationsContext = React.createContext();

export function useConversations() {
  return useContext(ConversationsContext);
}

export function ConversationsProvider({id, children}) {
  const [conversations, setConversations] = useLocalStorage('conversations', []);
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);
  const {contacts} = useContacts();

  function createConversation(recipients) {
    setConversations(prevConversations => {
      return [...prevConversations, {recipients, messages: []}];
    })
  }

  function addMessageToConversation({recipients, text, sender}) {
    setConversations(prev => {
      let change = false;
      const newMessage = {sender, text};
      const newConversations = prev.map(conversation => {
        if(arrayEquality(conversation.recipients, recipients)) {
          change = true;
          return {...conversation, messages: [...conversation.messages, newMessage]}
        };
        return conversation;
      })

      if(change) {
        return newConversations;
      } else {
        return [...prev, {recipients, messages: [newMessage]}]
      }
    })
  }

  function sendMessage(recipients, text) {
    addMessageToConversation({recipients, text, sender: id})
  }

  const formattedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map(recipient => {
      const contact = contacts.find(contact => {
        return contact.id === recipient;
      })
      const name = (contact && contact.name) || recipient;
      return {id: recipient, name};
    })

    const messages = conversation.messages.map(message => {
      const contact = contacts.find(contact => {
        return contact.id === message.sender;
      })
      const name = (contact && contact.name) || message.sender;
      const fromMe = id === message.sender;
      return {...message, senderName: name, fromMe}
    })

    const selected = index === selectedConversationIndex;
    return {...conversation, messages, recipients, selected};
  })

  const value = {
    conversations: formattedConversations,
    selectedConversation: formattedConversations[selectedConversationIndex],
    selectConversationIndex: setSelectedConversationIndex,
    createConversation,
    sendMessage
  }

  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  )
}

function arrayEquality(a, b) {
  if(a.length !== b.length) return false;
  a.sort();
  b.sort();
  return a.every((element, index) => {
    return element === b[index];
  })
}