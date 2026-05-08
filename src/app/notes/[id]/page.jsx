"use client"
import React from 'react'
import NotesDetail from '@/app/components/NoteDetail'
import { useNotes } from '../NotesContext'
import { useParams, useRouter } from 'next/navigation'


export default function page() {
  const { id } = useParams()
  const { getNoteById, deleteNote } = useNotes()

  const nota = getNoteById(id)
  if (!nota) {
    return <p>Cargando...</p>
  }
  const router = useRouter()

  const handleDelete = () => {
    if (confirm("Estas seguro que quieres eliminar la nota?")) {
      deleteNote(id)
      router.push("/notes")
    }
  }
  
  return (
    <div className="flex flex-1 items-start justify-center bg-zinc-50 font-sans dark:bg-black">
      <NotesDetail nota={nota}/>
      <button onClick={handleDelete} className='absolute top-24 right-24 bg-red-500 text-white p-2 rounded-md cursor-pointer'>Eliminar nota</button>
    </div>
  )
}
