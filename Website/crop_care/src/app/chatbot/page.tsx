"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const Chatbot = () => {
  const [messages, setMessages] = useState<{ sender: string, message: string }[]>([]);
  const [chatOpen, setChatOpen] = useState(true);
  const [input, setInput] = useState('');

  const sendMessage = (message: string) => {
    setMessages([...messages, { sender: 'User', message }]);
    setInput('');
  };

  if (!chatOpen) return null;

  return (
    <div className="flex flex-col w-full h-full p-4 bg-white rounded-lg">
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex flex-row items-center">
                                    <Image className="rounded-full" src="/assets/logo.png" alt="chatbot" width={50} height={50} />
                                    <p className="ml-2 text-lg font-medium">AgriCure Chatbot</p>
                                </div>
                                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full" onClick={() => setChatOpen(false)}>Close</button>
                            </div>
                            <div className="flex flex-col h-full overflow-y-auto">
                                <div className="flex flex-col h-full overflow-y-auto p-4">
                                    <p className="text-lg font-medium">Welcome to AgriCure Chatbot!</p>
                                    <p className="text-md">I can help you with any questions you have about tomato diseases, pests, and nutrient deficiencies. Just type your question in the chat window below.</p>
                                    <div className="flex flex-row items-center mt-4">
                                        <input className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg" type="text" placeholder="Type your question here..." value={input} onChange={(e) => setInput(e.target.value)} />
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full" onClick={() => sendMessage(input)}>Send</button>
                                    </div>
                                </div>
                                <div className="flex flex-col h-full overflow-y-auto p-4">
                                    {messages.map((message, index) => (
                                        <div key={index} className="flex flex-row items-start">
                                            <Image className="rounded-full" src="/assets/logo.png" alt="chatbot" width={40} height={40} />
                                            <div className="ml-2">
                                                <p className="text-sm font-medium">{message.sender}</p>
                                                <p className="text-sm">{message.message}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
  )
}

export default Chatbot           
                        