'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, X, Bot, User } from 'lucide-react'
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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

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
        text: data.text || 'Sorry, I could not understand that.',
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

  const parseTextWithLinks = (text) => {
    return text
      .replace(
        /((https?:\/\/[^\s]+))/g,
        '<a href="$1" class="underline text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">$1</a>'
      )
      .replace(
        /(\b\d{10}\b)/g,
        '<a href="tel:$1" class="underline text-blue-600 hover:text-blue-800">$1</a>'
      )
      .replace(
        /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
        '<a href="mailto:$1" class="underline text-blue-600 hover:text-blue-800">$1</a>'
      )
  }

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
        onClick={onClose}
      />

      <div
        className={cn(
          'fixed z-50 transition-all duration-300 ease-in-out',
          'bottom-0 left-0 right-0 md:bottom-6 md:right-6 md:left-auto',
          'md:max-w-[380px] md:w-full'
        )}
      >
        <div
          className={cn(
            'flex flex-col bg-white shadow-2xl transition-all duration-300 ease-in-out',
            'rounded-t-2xl md:rounded-2xl',
            'h-[calc(100vh-2rem)] max-h-[600px] md:h-[500px]',
            isOpen
              ? 'animate-in slide-in-from-bottom md:slide-in-from-bottom-2'
              : ''
          )}
        >
          <div className="flex justify-center pt-2 pb-1 md:hidden">
            <div className="w-10 h-1 bg-gray-300 rounded-full" />
          </div>

          <div className="relative bg-gradient-to-r from-red-600 to-red-700 text-white p-4 md:p-5 rounded-t-2xl md:rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">LNCT Assistant</h3>
                  <p className="text-white/80 text-sm">Always here to help</p>
                </div>
              </div>
              <Button
                onClick={onClose}
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 h-8 w-8 rounded-full transition-colors"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:p-5 bg-gradient-to-b from-gray-50/50 to-white">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={cn(
                    'flex items-end space-x-2 animate-in fade-in-50 slide-in-from-bottom-2',
                    message.isUser ? 'justify-end' : 'justify-start'
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {!message.isUser && (
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}

                  <div
                    className={cn(
                      'max-w-[85%] rounded-2xl px-4 py-3 shadow-sm',
                      message.isUser
                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white rounded-br-md'
                        : 'bg-white border border-gray-200 text-gray-800 rounded-bl-md'
                    )}
                  >
                    <p
                      className="text-sm leading-relaxed whitespace-pre-wrap"
                      dangerouslySetInnerHTML={{
                        __html: parseTextWithLinks(message.text),
                      }}
                    />
                  </div>

                  {message.isUser && (
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex items-end space-x-2 justify-start animate-in fade-in-50">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
                        style={{ animationDelay: '0.1s' }}
                      />
                      <div
                        className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
                        style={{ animationDelay: '0.2s' }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="border-t border-gray-200 bg-white p-4 md:p-5 rounded-b-2xl">
            <div className="flex items-end space-x-3">
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your message..."
                  rows={1}
                  className={cn(
                    'w-full resize-none rounded-xl border border-gray-300 px-4 py-3 pr-12',
                    'text-sm placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20',
                    'transition-all duration-200 max-h-32 min-h-[48px]'
                  )}
                  style={{
                    height: 'auto',
                    minHeight: '48px',
                  }}
                  onInput={(e) => {
                    e.target.style.height = 'auto'
                    e.target.style.height =
                      Math.min(e.target.scrollHeight, 128) + 'px'
                  }}
                />
              </div>

              <Button
                onClick={handleSendMessage}
                disabled={inputValue.trim() === '' || isLoading}
                size="icon"
                className={cn(
                  'h-12 w-12 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800',
                  'shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105',
                  'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-lg'
                )}
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
