import React, {useState} from 'react'
import Conversations from './Conversations'
import Contacts from './Contacts'
import NewConversation from './NewConversation'
import NewContact from './NewContact'
import "./styles/Sidebar.scss"

export default function Sidebar({id}) {
  const [display, setDisplay] = useState("Conversations");
  const [buttonName, setButtonName] = useState("Conversation")
  const [popup, setPopup] = useState(false);

  function outsideClick(e) {
    if(e.target.className === "modal") setPopup(false);
  }

  function closeModal() {
    setPopup(false);
  }

  return (
    <>
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
        <button onClick={() => setPopup(true)} className="create-new">New {buttonName}</button>
      </div>
      {popup && 
        <div onClick={outsideClick} className="modal">
          <div className="modal-content">
            {display === "Conversations" && 
              <NewConversation closeModal={closeModal} />
            } 
            {display === "Contacts" &&
              <NewContact closeModal={closeModal} />
            }
          </div>
        </div>
      }
    </>
  )
}
