import React from 'react'
import Link from 'next/link'

function NoteCard({note}) {
  return (
    <section className='w-full h-64 my-8 p-6 rounded-lg flex flex-col bg-zinc-800 text-white justify-between'>
      <div>
          <h1 className='font-semibold text-lg'>{note.title}</h1>
          <p>{note.content}</p>
      </div>
      <Link href={`/notes/${note.id}`} className='self- text-sm text-blue-500 hover:underline'>Ver Nota</Link>
    </section>
  )
}

export default NoteCard
