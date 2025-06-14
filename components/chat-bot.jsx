'use client'

import { useState, useRef, useEffect } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function ChatBot({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: "Hi there! I'm LNCT's AI assistant. How can I help you today?",
      isUser: false,
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 300)
    }
  }, [isOpen])

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return

    const userMessage = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/lnct-gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userMessage: inputValue }),
      })

      const data = await res.json()

      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: data.text || 'Sorry, I couldn’t understand that.',
        isUser: false,
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error('Error calling Gemini API:', error)

      const errorMsg = {
        id: (Date.now() + 1).toString(),
        text: 'Oops! Something went wrong. Please try again later.',
        isUser: false,
      }

      setMessages((prev) => [...prev, errorMsg])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-0 right-0 z-50 flex items-end justify-end pr-6 pb-6 sm:pr-8 sm:pb-8">
      <div
        className={cn(
          'relative flex h-[400px] w-full max-w-[350px] flex-col rounded-xl',
          'bg-white shadow-xl transition-all duration-300 ease-in-out',
          'origin-bottom-right animate-scale-up',
          'mr-20 mb-2'
        )}
      >
        <div className="absolute bottom-10 -right-2 h-4 w-4 rotate-45 bg-white"></div>

        {/* Header */}
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">LNCT</span>
            </div>
            <h3 className="ml-2 font-bold">LNCT Assistant</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1 hover:bg-gray-100"
            aria-label="Close chat"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  'flex',
                  message.isUser ? 'justify-end' : 'justify-start'
                )}
              >
                <div
                  className={cn(
                    'max-w-[80%] rounded-lg px-4 py-2',
                    message.isUser
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  )}
                >
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg bg-gray-100 px-4 py-2 text-gray-800">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                      style={{ animationDelay: '0.4s' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="border-t p-4">
          <div className="flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 rounded-l-md border border-r-0 border-gray-300 px-4 py-2 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
            />
            <Button
              onClick={handleSendMessage}
              disabled={inputValue.trim() === '' || isLoading}
              className="rounded-l-none rounded-r-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              <Send className="h-5 w-5" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
