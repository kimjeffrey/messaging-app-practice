import React from 'react'
import { useConversations } from '../contexts/ConversationsProvider'
import './styles/Conversations.scss'

export default function Conversations() {
  const {conversations, selectConversationIndex} = useConversations();

  return (
    <div>
      {conversations.map((conversation, index) => (
        <li key={index} onClick={() => selectConversationIndex(index)} className={conversation.selected && "selected"}>
          {conversation.recipients.map(r => r.name).join(', ')}
        </li>
      ))}
    </div>
  )
}
