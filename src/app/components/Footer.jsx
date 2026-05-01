import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-12 px-6 ">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Mi Perfil</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Desarrollado por <span className="text-white font-medium italic">Facundo Rullo</span>.
                <br />
                Estudiante de Desarrollo de Software.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="https://github.com/FAcuuR001" target="_blank" className="hover:text-blue-400 transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/facundo-rullo-152bbb279/" target="_blank" className="hover:text-blue-400 transition-colors">LinkedIn</a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Proyecto</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                <strong>App de notas:</strong> Este proyecto permite crear notas recordatorias para diversas tareas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Navegación</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/" className="text-gray-400 hover:text-white transition-colors w-fit">Inicio</Link>
                <Link href="/notes" className="text-gray-400 hover:text-white transition-colors w-fit">Notas</Link>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors w-fit">Acerca de..</Link>
                <Link href="/users" className="text-gray-400 hover:text-white transition-colors w-fit">Usuarios</Link>
              </nav>
            </div>

          </div>

          <div className="max-w-6xl mx-auto border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-xs">
            <p>© 2026 Todos los derechos reservados - Facundo Rullo</p>
          </div>
        </footer>
    </div>
  )
}

export default Footer
