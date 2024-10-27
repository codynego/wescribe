import { useState, useEffect, useRef } from 'react'
import { HomePage } from './components/HomePage'
import { Header } from './components/Header'
import { FileDisplay } from './components/FileDisplay'


function App() {
  const [count, setCount] = useState(0)
  const [file, setFile] = useState(null)
  const [audioStream, setAudioStream] = useState(null)
  const [recordingStatus, setRecordingStatus] = useState('inactive')
  const [audioChunks, setAudioChunks] = useState([])
  const [duration, setDuration] = useState(0)


  const isAudioAvailable = audioStream || file

  const mediaRecorder = useRef(null)
  const mimeType = 'audio/webm'

  async function startRecording() {
    let tempStream;
    console.log("start recording")

    try{
      tempStream = await navigator.mediaDevices.getUserMedia({audio: true, video: false})
    } catch (err) {
      console.error(err.message)
      return
    }
    setRecordingStatus('active')
    const media = new MediaRecorder(tempStream, {mimeType})
    mediaRecorder.current = media
    mediaRecorder.current.start()

    let localAudioChunck = []
    mediaRecorder.current.ondataavailable = (e) => {
      if (typeof e.data === 'undefined') {return}
      if (e.data.size === 0) {return}
      localAudioChunck.push(e.data)
    }
    setAudioChunks(localAudioChunck)

  }

  async function stopRecording() {
    setRecordingStatus('inactive')
    console.log('stop recording')

    mediaRecorder.current.stop()
    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, {type: mimeType})
      setAudioStream(audioBlob)
      setAudioChunks([])
    }
  }

  useEffect(() => {
    console.log(audioStream)
  }, [audioStream])

  useEffect(() => {
    if (recordingStatus === 'active') {
      const interval = setTimeout(() => {
        setDuration(duration + 1)
      }, 1000)
      return () => {
        clearInterval(interval)
      }
    } else {
      return
    }
  }, [duration, recordingStatus])

  const handleAudioReset = () => {
    setAudioStream(null)
    setFile(null)
    setDuration(0)
  }

  return (
    <>
      <div className="flex flex-col max-w-[1000px] mx-auto w-full">
        <section className="min-h-screen flex flex-col">
            <Header/>
            {
            !isAudioAvailable ?
              <HomePage setFile={setFile} setAudioStream={setAudioStream} recordingStatus={recordingStatus} SetRecordingStatus={setRecordingStatus} duration={duration} setDuration={setDuration} startRecording={startRecording} stopRecording={stopRecording}/> :
               <FileDisplay file={file} audioStream={audioStream} handleAudioReset={handleAudioReset}/>
            }
        </section>
      </div>
    </>
  )
}

export default App
