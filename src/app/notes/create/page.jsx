"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { useNotes } from '../../context/NotesContext'
import { useRouter } from 'next/navigation'
import axios from "axios"

function CreateNotePage() {
  const router = useRouter()
  const { addNote, getDynamicCategories } = useNotes()

  const categorias = getDynamicCategories()

  const [tema, setTema] = useState("")
  const [loading, setLoading] = useState(false)


  const [formData, setFormData] = useState({
    title: "",
    content: "",
    ejemplo: "",
    categoryId: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.title || !formData.content || !formData.categoryId) {
      return alert("Completá título, contenido y categoría")
    }

    try {
      await addNote(formData)
      router.push("/notes")
    } catch {
      alert("No se pudo crear la nota")
    }
  }

  const handleAutoFill = async (e) => {
    e.preventDefault()
    
    if (!tema.trim() || loading) return
    
    setLoading(true)
    try {
      const response = await axios.post("/api/generate-note/", {tema})
      setFormData((prev) => ({
        ...prev,
        title: response.data.result.title,
        content: response.data.result.content,
        ejemplo: response.data.result.content,
      }))
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }


  return (
    <section className='flex p-20 justify-center items-center w-full'>
      <form className="flex flex-col flex-1  p-6 rounded-lg bg-zinc-800 font-sans">
        
        <Link href={"/notes"} className="self-start mb-4 text-white font-semibold">
          &larr; Back to Notes
        </Link>

        <p className="text-white text-lg font-semibold">Create Note</p>

        <div className='mt-6 p-4 rounded border border-purple-500/30 gap-2 bg-zinc-900 flex flex-col'>
          <label className='text-purple-400 text-xs font-bold tracking-wider'>Asisstant Copilot</label>
          <div className='flex gap-2'>
            <input 
              type="text" 
              placeholder='Ej: Arrow function en JS...'
              className='flex-1 p-2 bg-zinc-800 rounded border border-zinc-700 focus:outline-none focus:border-purple-500' 
              disabled={loading}
              value={tema}
              onChange={(e) => setTema(e.target.value)}
            />
            <button 
              className={`bg-purple-600 hover:bg-purple-700 text-xs px-4 py-1 font-bold rounded disabled:opacity-50 cursor-pointer ${loading && "animate-pulse"}`}
              onClick={handleAutoFill}
              type='button'
            >
              {loading ? "Generando...": "Generar"}
            </button>
          </div>
        </div>

        <div className='mt-10 flex flex-col gap-3'>
          <div className='flex flex-col'>
            <label className='text-zinc-400'>Title</label>
            <input 
              type="text" 
              placeholder='Title' 
              className={`p-2 border border-zinc-600 rounded-md my-4 bg-zinc-900/80 focus:outline-none focus:border-purple-700 ${loading && "animate-pulse"}`}
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
          </div>

          <div className='flex flex-col'>
            <label className='text-zinc-400'>Category</label>
            <select 
              className={`p-2 border border-zinc-600 bg-zinc-900/80 rounded-md my-4 cursor-pointer ${loading && "animate-pulse"}`}
              value={formData.categoryId} 
              onChange={(e) => setFormData({ ...formData, categoryId: String(e.target.value) })}
              >
              <option value="" disabled >Select Category</option>
              {categorias.map((category) => (
                <option key={category.id} value={category.id}>{category.title}</option>
              ))}
            </select>
          </div>

          <div className='flex flex-col'>
            <label className='text-zinc-400'>Content</label>
            <textarea 
              placeholder='Content' 
              className={`p-2 border border-zinc-600 rounded-md my-4 bg-zinc-900/80 focus:outline-none focus:border-purple-700 ${loading && "animate-pulse"}`} 
              rows={10} 
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            />
          </div>

          <div className='flex flex-col'>
            <label className='text-zinc-400'>Ejemplo</label>
            <textarea 
              placeholder='const variable' 
              spellCheck={false}
              className={`p-2 border border-zinc-600 rounded-md my-4 bg-zinc-950 font-mono focus:outline-none focus:border-purple-700 ${loading && "animate-pulse"}`} 
              rows={10} 
              value={formData.ejemplo}
              onChange={(e) => setFormData({ ...formData, ejemplo: e.target.value })}
            />
          </div>
          
          <button 
            onClick={handleSubmit} 
            type='submit' 
            className='bg-blue-500 text-white p-2 rounded-md cursor-pointer'
          >
            Save
          </button>
        </div>

      </form>
    </section>
  )
}

export default CreateNotePage