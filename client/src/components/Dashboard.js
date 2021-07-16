import React from 'react'
import { useConversations } from '../contexts/ConversationsProvider'
import OpenConversation from './OpenConversation'
import Sidebar from './Sidebar'
import "./styles/Dashboard.scss"

export default function Dashboard({id}) {
  const {selectedConversation} = useConversations();

  return (
    <>
      <div className="sidebar-container">
        <Sidebar id={id} />
        {selectedConversation && <OpenConversation />}
      </div>
      
    </>
  )
}
