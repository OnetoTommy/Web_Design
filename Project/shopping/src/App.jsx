import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "sk-lMvjvDGYTQp2wqhpNsqFiURGP3tV2MEJSoZNlORLp4PoiTCv";  

function App() {
  const [messages, setMessages] = useState([
    { message: "Hello, I'm ChatGPT!", sender: "ChatGPT", direction: "incoming" }
  ]);
  const [typing, setTyping] = useState(false);  // State to control the typing indicator

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setTyping(true);  // Set typing state to true when sending message
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const systemMessage = {
      role: "system",
      content: "Explain all concepts like I'm 10 years old" // System message for tone and style
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage,
        ...apiMessages
      ]
    };

    await fetch("https://xiaoai.plus/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
            direction: "incoming" // ChatGPT's response should be incoming (left side)
          }
        ]);
        setTyping(false);  // Set typing to false when the response is received
      })
      .catch((error) => {
        console.error("Error:", error);
        setTyping(false);
      });
  }

  // Function to send an image and request analysis
  async function sendImageForAnalysis(imageUrl) {
    const apiRequestBody = {
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: "What's in this image?" },
            {
              type: "image_url",
              image_url: {
                url: imageUrl,
              }
            }
          ],
        }
      ],
      max_tokens: 300,
    };

    await fetch("https://xiaoai.plus/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    })
      .then((data) => data.json())
      .then((data) => {
        setMessages([
          ...messages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
            direction: "incoming"
          }
        ]);
      })
      .catch((error) => {
        console.error("Error sending image:", error);
      });
  }

  // Function to generate embeddings for text
  async function generateEmbeddings(text) {
    const apiRequestBody = {
      model: "text-embedding-ada-002",
      input: text,
      encoding_format: "float"
    };

    await fetch("https://xiaoai.plus/v1/embeddings", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    })
      .then((data) => data.json())
      .then((data) => {
        console.log("Generated Embeddings:", data);
        setMessages([
          ...messages,
          {
            message: `Generated embeddings for text: ${JSON.stringify(data)}`,
            sender: "ChatGPT",
            direction: "incoming"
          }
        ]);
      })
      .catch((error) => {
        console.error("Error generating embeddings:", error);
      });
  }

  return (
    <div className='App'>
      <div style={{ position: "relative", height: "800px", width: "700px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList>
              {typing && <TypingIndicator content="ChatGPT is typing..." />}
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
    </div>
  );
}

export default App;
