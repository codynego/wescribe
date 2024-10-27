import React from 'react'

export const HomePage = () => {
  return (
    
    <main className="flex-1 p-4 flex flex-col text-center justify-center gap-3 sm:gap-4 md:gap-5">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold ">WE<span className="text-blue-600">SCRIBE</span></h1>
        <h3 className="font-medium">Record<span className="text-blue-400">&rarr;</span>Transcribe
        <span className="text-blue-400">&rarr;</span>Translate</h3>

        <button className="flex items-center text-base justify-between mx-auto gap-4 w-72 max-w-full my-4">
            <p>Record</p>
            <i className="fa-solid fa-microphone"></i>
        </button>

        <p>Or 
            <label className="text-blue cursor-pointer hover:text-blue-600 duration-200"> upload 
            <input className="hidden" type="file" accept='.mp3, .wave'></input>
            </label> a mp3 files  
            <i className="fa-solid fa-upload ml-4"></i>
        </p>
        <p className="italic text-slate-500">Free now free forever</p>
    </main>
  )
}
