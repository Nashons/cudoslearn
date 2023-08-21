import React, { useState } from 'react';
import './ChatInterface.css';
import Layout from '@theme/Layout';


function ChatInterface() {
    const [messages, setMessages] = useState([]);
    const [chatStarted, setChatStarted] = useState(false);
    
    const callChatAPI = async (query) => {
        try {
            const response = await fetch('https://learnbot.vercel.app/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
          });
      
          const data = await response.json();
          return data;
        } catch (error) {
          console.error("API call failed:", error);
          return { text: "Error connecting to the chat server.", user: "bot" };
        }
      };

    const handleMessageSend = async (message) => {
        setChatStarted(true); // set chat to started
        setMessages([...messages, { sender: 'user', content: message }]);

        // Here you can add logic to process the message and get a reply from your AI
        const aiResponse = await callChatAPI(message)
        // setMessages([...messages, { sender: 'user', content: message }, { sender: 'ai', content: aiResponse }]);
        setMessages([...messages, { sender: 'user', content: message }, { sender: 'ai', content: aiResponse.text }]);

    }

    return (
        <Layout>
        <div className="chat-interface">
            {/* <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`chat-message ${message.sender}`}>
                        {message.content}
                    </div>
                ))}
            </div> */}
                 <div className="chat-messages">
            {chatStarted ? (
                messages.map((message, index) => (
                    <div key={index} className={`chat-message ${message.sender}`}>
                        {message.content}
                    </div>
                ))
            ) : (
                <div className="chat-welcome">
                    Welcome to our AI Chat Assistant!
                    <br />
                    Start by asking any question related to cudos.
                </div>
            )}
        </div>
            <div className="chat-input">
                <input type="text" placeholder="Ask your question..." />
                <button onClick={() => handleMessageSend(document.querySelector(".chat-input input").value)}>Send</button>
            </div>
        </div>
        </Layout>
    );
}

export default ChatInterface;
