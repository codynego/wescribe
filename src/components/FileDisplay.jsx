import React from 'react'

export const FileDisplay = (props) => {
    const {file, audioStream, handleAudioReset} = props

    const saveAudio = () => {
        const url = URL.createObjectURL(audioStream);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'wescribe-audio.wav';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      };
  return (
    <main className="flex-1 p-4 flex flex-col text-center justify-center gap-3 sm:gap-4 md:gap-5 w-fit max-w-full mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold ">Your<span className="text-blue-600">Files</span></h1>
        <div className="flex gap-2 mx-auto text-left my-4">
            <h3 className="font-semibold">Name</h3>
            <p>{file ? file.name : `audio${audioStream.size}`}</p>
        </div>
        <div className="flex items-center justify-between gap-2 flex-wrap">
            <button className="text-slate-400 hover:text-blue-600 duration-200" onClick={handleAudioReset}>Reset</button>
            <button className="specialBtn px-4 py-2 rounded-lg text-blue-400 flex items-center gap-2">
                <p>Transcribe</p>
                <i className="fa-solid fa-pen-nib"></i>
            </button>
            {audioStream ? 
                <button className="specialBtn px-4 py-2 rounded-lg text-blue-400 flex items-center gap-2" onClick={saveAudio}>
                    <p>Save Audio</p>
                    <i className="fa-solid fa-save"></i>
                </button> : null
    }
        </div>
    </main>
  )
  
}
