import React, {useState} from 'react'
import {Transcription} from './Transcription';
import { Translation } from './Translation';

export const Information = () => {
  const [tab, setTab] =  useState('transcription')

    return (
        <main className="flex flex-1 items-center gap-10 py-24 flex-col md:gap-14 w-full mx-auto justify-center max-w-prose">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center flex-nowrap">
            Your <span className="text-blue-600">Transcription</span>
          </h1>
          <div className="items-center grid grid-cols-2 bg-white border-solid border-2 border-blue-300 rounded-full justify-between mx-auto shadow overflow-hidden">
            <button onClick={() => {setTab('transcription')}} className={"px-4 py-1 " + (tab === "transcription" ? "bg-blue-300 text-white" : "text-blue-600 hover:text-blue-600")}>Transcription</button>
            <button onClick={() => {setTab('translation')}} className={"px-4 py-1 " + (tab === "translation" ? "bg-blue-400 text-white" : "text-blue-600 hover:text-blue-600")}>Translation</button>
          </div>

          <div>
            {tab === 'transcription' ? <Transcription/> : <Translation/>}
          </div>
        </main>
      );
}
