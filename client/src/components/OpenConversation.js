import React, {useState, useCallback} from 'react'
import { useConversations } from '../contexts/ConversationsProvider';
import './styles/OpenConversation.scss'

export default function OpenConversation() {
  const [text, setText] = useState("");
  const setRef = useCallback(node => {
    if(node) {
      node.scrollIntoView({smooth:true})
    }
  }, []);
  const {sendMessage, selectedConversation} = useConversations();

  function handleSubmit(e) {
    e.preventDefault();

    sendMessage(selectedConversation.recipients.map(r => r.id), text);
    setText('');
  }

  return (
    <div className="open-conversation-container">
      <div className="messages-container">
        <div className="messages">
          {selectedConversation.messages.map((message, index) => {
            const lastMessage = selectedConversation.messages.length - 1 === index;
            return (
              <div key={index} ref={lastMessage ? setRef : null} className={message.fromMe ? "align-right" : undefined}>
                <div className={message.fromMe ? "message my-message" : "message other-message"}>
                  {message.text}
                </div>
                <div className={message.fromMe ? "message-from message-from-me" : "message-from message-from-other"}>
                  {message.fromMe ? 'You' : message.senderName}
                </div>          
              </div>
            )
          })}
        </div>
      </div>
      <form onSubmit={handleSubmit} action="">
        <input type="textarea" value={text} onChange={e => setText(e.target.value)} />
        <button className="send-btn">Send</button>
      </form>
    </div>
  )
}
