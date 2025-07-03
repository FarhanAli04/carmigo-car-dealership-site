"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Send, User, Bot, Phone, Calendar } from "lucide-react"

const chatMessages = [
  {
    id: 1,
    type: "bot",
    message: "Hi! I'm Alex from Carmigo. How can I help you find your perfect car today?",
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: 2,
    type: "user",
    message: "I'm looking for a luxury SUV under $50k",
    timestamp: new Date(Date.now() - 45000),
  },
  {
    id: 3,
    type: "bot",
    message:
      "Great choice! I have several BMW X5s and Audi Q7s in that range. Would you like me to show you our current inventory?",
    timestamp: new Date(Date.now() - 30000),
  },
]

export function RealTimeChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(chatMessages)
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [onlineAgents, setOnlineAgents] = useState(3)

  useEffect(() => {
    // Simulate agent availability changes
    const interval = setInterval(() => {
      setOnlineAgents((prev) => Math.max(1, prev + (Math.random() > 0.5 ? 1 : -1)))
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      type: "user" as const,
      message: newMessage,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        type: "bot" as const,
        message: "Thanks for your message! Let me connect you with one of our specialists who can help you with that.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 2000)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-silver-500 to-silver-600 hover:from-silver-600 hover:to-silver-700 shadow-2xl hover:shadow-silver-500/25 transition-all duration-300 relative"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Notification Dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-slate-700 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">1</span>
          </div>
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Card className="bg-[#0A1F4D] backdrop-blur-xl border-[#1E3A8A]/50 shadow-2xl text-white">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between text-xs text-gray-300 p-3 border-t border-[#1E3A8A]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FF3737] flex items-center justify-center">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Carmigo Support</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs text-gray-400">{onlineAgents} agents online</span>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-[#FF3737]/20 text-white border-[#FF3737]/30 text-xs">Live Chat</Badge>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                {/* Messages */}
                <div className="h-80 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex items-start gap-2 max-w-[80%] ${message.type === "user" ? "flex-row-reverse" : ""}`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.type === "user" ? "bg-[#FF3737]" : "bg-[#1E3A8A]"
                          }`}
                        >
                          {message.type === "user" ? (
                            <User className="h-4 w-4 text-white" />
                          ) : (
                            <Bot className="h-4 w-4 text-white" />
                          )}
                        </div>
                        <div
                          className={`rounded-2xl px-4 py-2 ${
                            message.type === "user" ? "bg-[#FF3737] text-white" : "bg-[#1E3A8A] text-white"
                          }`}
                        >
                          <p className="text-sm">{message.message}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#1E3A8A] flex items-center justify-center">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-[#1E3A8A] rounded-2xl px-4 py-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-[#FF3737] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                            <div className="w-2 h-2 bg-[#FF3737] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                            <div className="w-2 h-2 bg-[#FF3737] rounded-full animate-bounce" style={{ animationDelay: '0.6s' }} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="p-4 border-t border-gray-700/50">
                  <div className="flex gap-2 mb-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                    >
                      <Phone className="h-3 w-3 mr-1" />
                      Call Now
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                    >
                      <Calendar className="h-3 w-3 mr-1" />
                      Schedule
                    </Button>
                  </div>

                  {/* Message Input */}
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 bg-[#1E3A8A] border-[#0A1F4D] text-white placeholder-gray-300 focus:ring-2 focus:ring-[#FF3737] focus:border-transparent"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button
                      onClick={handleSendMessage}
                      size="sm"
                      className="bg-[#FF3737] hover:bg-[#FF3737]"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
