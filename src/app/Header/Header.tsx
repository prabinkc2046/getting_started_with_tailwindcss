import React from 'react'

export default function Header() {
  return (
    <nav className="bg-gray-800 p-4">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <div className="flex-shrink-0">
      <a href="#" className="text-white text-xl font-bold">Logo</a>
    </div>

    <div className="hidden md:flex">
      <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
      <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
      <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
      <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
    </div>

    <div className="md:hidden">
      <button type="button" className="text-gray-300 hover:text-white focus:outline-none focus:text-white">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
        <span className="sr-only">Open main menu</span>
      </button>
    </div>
  </div>
</nav>

  )
}
