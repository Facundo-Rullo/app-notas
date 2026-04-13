import React from 'react'
import Link from 'next/link'

async function page({ params }) {
  const { id } = await params
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <section className='p-8 rounded-lg bg-zinc-800 text-white shadow-md w-110'>
          <div className='rounded-lg '>
            <div className='bg-[#6366f1] p-4 rounded-t-lg flex justify-between items-center'>
              <div>
                <p className='text-sm'>ID: #1</p>
                <h1 className='text-2xl'>Facundo Rullo</h1>
              </div>
              <p className='rounded px-2 py-1 bg-green-500'>Activo</p>
            </div>
            
            <div className='bg-white px-8 pb-5 pt-8'>
              <div className='flex flex-col'>
                <p className='text-gray-500 text-sm'>CORREO ELECTRONICO</p>
                <p className='text-base text-black'>facundorullo132@gmai.com</p>
              </div>

              <div className='mt-10 flex justify-between items-center'>
                <div className='text-black flex flex-col'>
                  <p className='text-gray-500 text-sm'>ROL DE USUARIO</p>
                  <p className='text-base text-black font-bold'>Admin</p>
                </div>
                <div className='text-black flex flex-col'>
                  <p className='text-gray-500 text-sm'>ESTADO</p>
                  <p className="text-base text-green-600 font-bold">Activo</p>
                </div>
              </div>
            
              <div className="bg-gray-200 rounded-lg p-4 grid grid-cols-1 gap-3 mt-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Creado el:</span>
                  <span className="text-gray-800 text-sm font-medium">11/04/2026</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Última sesión:</span>
                  <span className="text-gray-800 text-sm font-medium">11/04/2026</span>
                </div>
              </div>
            
            </div>
            
            <div className="p-4 bg-gray-200 hover:bg-gray-300 border-t border-gray-300 flex justify-center rounded-b-lg">
              <Link href="/users" className="text-[#6366f1] hover:text-blue-700 font-semibold text-sm transition-colors">
                ← Volver al listado
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default page
