import React from 'react'
import Link from 'next/link'
import { getNoteById } from '@/lib/notes'
import NotesDetail from '@/app/components/NoteDetail'


export default async function page({ params }) {

  const { id } = await params
  const nota = getNoteById(id)

  return (
    <div className="flex flex-1 items-start justify-center bg-zinc-50 font-sans dark:bg-black">
      <NotesDetail nota={nota}/>
    </div>
  )
}
