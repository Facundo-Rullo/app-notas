import React from 'react'
import Link from 'next/link'
import { Search } from "lucide-react";

function page() {

  const users = [
    {id: 1, nombre: "Facundo", apellido: "Rullo", email: "facundo@gmail.com", fechaCreacion: "11/04/2026", ultimaSesion: "11/04/2026", rol: "Admin", activo: "Activo"},
    {id: 2, nombre: "Max", apellido: "Verstappen", email: "max@gmail.com", fechaCreacion: "11/04/2026", ultimaSesion: "11/04/2026", rol: "Admin", activo: "Activo"},
    {id: 3, nombre: "Lewis", apellido: "Hamilton", email: "Lewis@gmail.com", fechaCreacion: "11/04/2026", ultimaSesion: "11/04/2026", rol: "Admin", activo: "Activo"},
    {id: 4, nombre: "Nicky", apellido: "Lauda", email: "nicky@gmail.com", fechaCreacion: "11/04/2026", ultimaSesion: "11/04/2026", rol: "Moderator", activo: "Inactivo"},
    {id: 5, nombre: "Carlos", apellido: "Reutemann", email: "carlos@gmail.com", fechaCreacion: "11/04/2026", ultimaSesion: "11/04/2026", rol: "Admin", activo: "Inactivo"},
    {id: 6, nombre: "Ayrton", apellido: "Senna", email: "ayrton@gmail.com", fechaCreacion: "11/04/2026", ultimaSesion: "11/04/2026", rol: "Moderator", activo: "Inactivo"},
    {id: 7, nombre: "Fernando", apellido: "Alonzo", email: "fernando@gmail.com", fechaCreacion: "11/04/2026", ultimaSesion: "11/04/2026", rol: "User", activo: "Activo"},
    {id: 8, nombre: "Charles", apellido: "Leclerc", email: "charles@gmail.com", fechaCreacion: "11/04/2026", ultimaSesion: "11/04/2026", rol: "User", activo: "Activo"},
    {id: 9, nombre: "Alain", apellido: "Prost", email: "alain@gmail.com", fechaCreacion: "11/04/2026", ultimaSesion: "11/04/2026", rol: "Admin", activo: "Inactivo"},
    {id: 10, nombre: "James", apellido: "Hunt", email: "james@gmail.com", fechaCreacion: "11/04/2026", ultimaSesion: "11/04/2026", rol: "Admin", activo: "Inactivo",}
  ]

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left mb-5">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Users
          </h1>
        </div>

        
        <section className='p-8 rounded-lg bg-zinc-800 text-white  shadow-md'>
          <div className='mb-8'>
            <Link href="/users/create" className='p-3 rounded bg-[#6366f1] hover:bg-blue-700'>Crear Usuario</Link>
          </div>
         <div className='max-h-[400px] overflow-y-auto'>
           <table className="w-full table-auto border-collapse">
             <thead className="bg-zinc-700 text-sm font-semibold">
               <tr>
                 <th className='text-start px-4 py-3 border-b border-zinc-600'></th>
                 <th className='text-start px-4 py-3 border-b border-zinc-600'>Id</th>
                 <th className='text-start px-4 py-3 border-b border-zinc-600'>Nombre</th>
                 <th className='text-start px-4 py-3 border-b border-zinc-600'>Apellido</th>
                 <th className='text-start px-4 py-3 border-b border-zinc-600'>Email</th>
                 <th className='text-start px-4 py-3 border-b border-zinc-600'>Fecha de Creación</th>
                 <th className='text-start px-4 py-3 border-b border-zinc-600'>Última Sesión</th>
                 <th className='text-start px-4 py-3 border-b border-zinc-600'>Rol</th>
                 <th className='text-start px-4 py-3 border-b border-zinc-600'>Activo</th>
               </tr>
             </thead>
          
             <tbody>
               {users.map((user, index) => (
                 <tr 
                   key={index} 
                   className='hover:bg-zinc-700 transition'
                 >
                   <td className='px-4 py-2 border-b border-zinc-600 text-center'>
                     <Link href={`/users/${user.id}`}>
                       <div className=' inline-flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 rounded-full p-2 cursor-pointer'>
                         <Search className="w-4 h-4 text-gray-300 hover:text-white" />
                       </div>
                     </Link>
                   </td>
          
                   <td className='px-4 py-2 border-b border-zinc-600'>{user.id}</td>
                   <td className='px-4 py-2 border-b border-zinc-600'>{user.nombre}</td>
                   <td className='px-4 py-2 border-b border-zinc-600'>{user.apellido}</td>
                   <td className='px-4 py-2 border-b border-zinc-600'>{user.email}</td>
                   <td className='px-4 py-2 border-b border-zinc-600'>{user.fechaCreacion}</td>
                   <td className='px-4 py-2 border-b border-zinc-600'>{user.ultimaSesion}</td>
                   <td className='px-4 py-2 border-b border-zinc-600'>{user.rol}</td>
                   <td className='px-4 py-2 border-b border-zinc-600'>
                     <span className={`px-2 py-1 rounded text-xs font-medium ${
                       user.activo === "Activo"
                         ? "bg-green-500/20 text-green-400"
                         : "bg-red-500/20 text-red-400"
                     }`}>
                       {user.activo }
                     </span>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
        </section>

      </main>
    </div>
  )
}

export default page
