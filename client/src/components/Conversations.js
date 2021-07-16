import React from 'react'
import { useConversations } from '../contexts/ConversationsProvider'

export default function Conversations() {
  const {conversations} = useConversations();

  return (
    <div>
      {conversations.map((conversation, index) => (
        <li key={index}>
          {conversation.recipients.map(r => r.name).join(', ')}
        </li>
      ))}
    </div>
  )
}
