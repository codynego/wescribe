import React from 'react'

export const Header = () => {
  return (
    <header className="flex items-center justify-between gap-4 p-4">
        <h1 className="text-xl font-bold">WE<span className="text-blue-600">SCRIBE</span></h1>
        <button className="flex items-center gap-2 specialBtn px-4 py-2 rounded-lg text-blue-400">
        <p>New</p>
        <i className="fa-solid fa-plus"></i>
        </button>
    </header>
  )
}
