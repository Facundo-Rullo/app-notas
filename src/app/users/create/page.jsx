import React from 'react'
import Link from 'next/link'

function page() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left mb-5">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Agregar Nuevo Usuario
          </h1>
        </div>

        
        <section className='p-8 rounded-lg bg-zinc-800 text-white  shadow-md'>
          <form className="flex flex-col gap-4 max-w-md">

            <div className="flex flex-col">
              <label className="text-sm font-medium text-white mb-1">Nombre</label>
              <input 
                type="text" 
                placeholder="Ej: Juan"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-white mb-1">Apellido</label>
              <input 
                type="text" 
                placeholder="Ej: Pérez"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-white mb-1">Email</label>
              <input 
                type="email" 
                placeholder="correo@ejemplo.com"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-white mb-1">Rol</label>
              <select 
                name="rol" 
                id="rol"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="user" className="bg-gray-500">Usuario</option>
                <option value="admin" className="bg-gray-500">Administrador</option>
              </select>
            </div>

            <button type="submit" className="mt-2 bg-[#6366f1] text-white py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">Guardar</button>
            <Link href="/users" className="mt-2 bg-[#6366f1] text-white py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer text-center">Volver</Link>
          </form>
        </section>

      </main>
    </div>
  )
}

export default page
