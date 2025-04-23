import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@chatscope/chat-ui-kit-react/styles.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import Navbar from './component/Navbar';



function App() {
  const [messages, setMessages] = useState({
    messages: "Hello, I'm ChatGPT!",
    sender:"ChatGPT"
  })

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    };
  
    const newMessages = [...messages, newMessage]; // all the old messages + the new message
  
    // update our messages state
    setMessages(newMessages);


  };

  return (
    <>
      <div style={{ position: "relative", height: "800px", width: "700px" }}>
  <MainContainer>
    <ChatContainer>
      <MessageList>
        {messages.map((message, i) => {
          return <Message key={i} model={message} />;
        })}
      </MessageList>
      <MessageInput 
        placeholder='Type message here' 
        onSend={handleSend} 
      />
    </ChatContainer>
  </MainContainer>
</div>

    </>
  )
}

export default App
