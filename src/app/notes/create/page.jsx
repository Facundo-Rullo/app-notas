import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <section className='flex p-20 justify-center items-center w-full'>
      <form className="flex flex-col flex-1  p-6 rounded-lg bg-zinc-800 font-sans">
        
        <Link href={"/notes"} className="self-start mb-4 text-white font-semibold">
          &larr; Back to Notes
        </Link>

        <p className="text-white text-lg font-semibold">Create Note</p>

        <input type="text" placeholder='Title' className='p-2 border border-zinc-600 rounded-md my-4' />
        <textarea placeholder='Content' className='p-2 border border-zinc-600 rounded-md my-4' rows={10} />
        <button className='bg-blue-500 text-white p-2 rounded-md'>Save</button>

      </form>
    </section>
  )
}

export default page