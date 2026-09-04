"use client"
import React from 'react'
import NotesDetail from '@/app/components/NoteDetail'
import { useNotes } from '../../context/NotesContext'
import { useParams, useRouter } from 'next/navigation'


export default function page() {
  const router = useRouter()
  const { id } = useParams()
  const { getNoteById, deleteNote } = useNotes()

  const nota = getNoteById(id)
  if (!nota) {
    return null
  }

  const handleDelete = async () => {
    if (!confirm("¿Estás seguro de que querés eliminar la nota?")) {
      return
    }

    try {
      await deleteNote(id)
      router.push("/notes")
    } catch {
      alert("No se pudo eliminar la nota")
    }
  }
  
  return (
    <div className="flex flex-1 items-start justify-center bg-zinc-50 font-sans dark:bg-black">
      <NotesDetail key={nota.id} nota={nota}/>
      <button onClick={handleDelete} className='absolute top-24 right-24 bg-red-500 text-white p-2 rounded-md cursor-pointer'>Eliminar nota</button>
    </div>
  )
}
