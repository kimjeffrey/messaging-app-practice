import React, {useState} from 'react'
import Conversations from './Conversations'
import Contacts from './Contacts'
import "./styles/Sidebar.scss"

export default function Sidebar({id}) {
  const [display, setDisplay] = useState("Conversations");
  const [buttonName, setButtonName] = useState("Conversation")

  return (
    <div className="sidebar">
      <nav>
          <button className={display === "Conversations" && "selected"} onClick={() => {setDisplay("Conversations"); setButtonName("Conversation")}}>Conversations</button>
          <button className={display === "Contacts" && "selected"} onClick={() => {setDisplay("Contacts"); setButtonName("Contact")}}>Contacts</button>
      </nav> 
      <div className="content">
        {display === "Conversations" && 
          <Conversations />
        } 
        {display === "Contacts" &&
          <Contacts />
        }
      </div>
      <div className="id">
        Your Id: {id}
      </div>
      <button className="create-new">New {buttonName}</button>
    </div>
  )
}
