import React from 'react'

export const HomePage = (props) => {
    const {setFile, setAudioStream, recordingStatus, SetRecordingStatus, duration, setDuration, startRecording, stopRecording} = props

    const handleSetFile = (e) => {
        console.log("hello")
        console.log(e.target.files)
        const tempFile = e.target.files[0]
        setFile(tempFile)
    }

    const handleRecording = () => {
        if (recordingStatus === 'inactive') {
            startRecording()
        } else {
            stopRecording()
        }
    }
  return (
    
    <main className="flex-1 p-4 flex flex-col text-center justify-center gap-3 sm:gap-4 md:gap-5">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold ">WE<span className="text-blue-600">SCRIBE</span></h1>
        <h3 className="font-medium">Record<span className="text-blue-400">&rarr;</span>Transcribe
        <span className="text-blue-400">&rarr;</span>Translate</h3>

        <button className="flex items-center text-base justify-between mx-auto gap-4 w-72 max-w-full my-4 specialBtn px-4 py-2 rounded-lg"  onClick={(e) => {handleRecording()}}>

        <p className={"font-semibold " + (recordingStatus === "active" ? "text-rose-600" : "text-blue-400")}>
            {recordingStatus === "inactive" ? "Record" : "Stop recording"}
        </p>
            <div className="flex items-center gap-2">
                {duration !== 0 && (
                <p className="text-sm">{duration}s</p>
                )}

                
            </div>
            <i className={"fa-solid duration-200 fa-microphone" + (recordingStatus === "active" ? " text-rose-300" : "")}></i>
        </button>

        <p>Or 
            <label className="text-blue cursor-pointer hover:text-blue-600 duration-200"> upload 
            <input className="hidden" type="file" accept='.mp3, .wav' onChange={(e) => {handleSetFile(e)}}></input>
            </label> a mp3 files  
            <i className="fa-solid fa-upload ml-4"></i>
        </p>
        <p className="italic text-slate-500">Free now free forever</p>
    </main>
  )
}
