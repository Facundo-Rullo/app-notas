"use client"
import React from 'react'
import { useState } from 'react'
import { useNotes } from '../notes/NotesContext'
import axios from 'axios'
import ReactMarckDown from "react-markdown"

function ChatModal({ isOpen, onClose}) {
  const {notes} = useNotes()

  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [messages, setMessages] = useState([
    {
      id: "1", 
      role: "assistan", 
      text: "¡Hola!, ¿Que deseas consultar sobre tus notas hoy?",
    }
  ])
  
  if (!isOpen) return null

  const handleSendMessage = async (e) => {
    e.preventDefault()

    if (!input.trim() || loading ) return 

    const userMessage = {id: crypto.randomUUID(), role: "user", text: input}
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setLoading(true)
    setError(null)

    try {
      const response = await axios.post("/api/ai", {
        notes: notes,
        messages: [...messages, userMessage],
      })

      setMessages(prev => [...prev, {
        id: crypto.randomUUID(),
        role: "assistant",
        text: response.data.result
      }])

    } catch (err) {
      setError(err.response?.data?.error || "Error al conectar con la IA")
    } finally {
      setLoading(false)
    }

  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs'>

      <div className='w-full max-w-xl bg-zinc-900 border-zinc-900 rounded-lg p-4 flex flex-col h-125'>

        <div className='flex justify-between items-center border-b border-zinc-700 pb-2 mb-2'>
          <span className='font-bold text-sm'>
            Asistente IA
          </span>
          
          <button
            onClick={onClose}
            className='bg-zinc-700 px-2 py-1 rounded cursor-pointer'
            >
            CERRAR
          </button>
        </div>

        <div 
          className='flex-1 overflow-y-auto space-y-3'
        >
          {
            messages.map((msg) => (
              <div 
                key={msg.id}
                className={`rounded p-2 max-w-[85%] ${msg.role === "user" ? "bg-zinc-700 ml-auto" : "bg-purple-700"}`}
              >
                <p className='block text-xs text-zinc-400'>{msg.role === "user" ? "Tú" : "IA"}</p>
                <ReactMarckDown>{msg.text}</ReactMarckDown>
              </div>
            ))
          }
          {loading && <p>Cargando...</p>}
          {error && <p>{error}</p>}
        </div>

        <form 
          className='flex gap-2 pt-2 border-t border-zinc-700'
          onSubmit={handleSendMessage}
        >
          <input 
            className='flex-1 bg-zinc-800 px-2 py-1.5 border border-zinc-600 rounded outline-none focus:border-purple-500'
            placeholder='Escribe tu mensaje..'
            type="text"
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
          />
          <button
          type='submit'
            disabled={loading || !input}
            className='bg-purple-600 px-3 py-1.5 rounded font-bold cursor-pointer'
          >
            <svg width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
            </svg>
          </button>
        </form>

      </div>
    </div>
  )
}

export default ChatModal
