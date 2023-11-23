import {useState } from 'react'
import './App.css'
import DrumPad from './components/DrumPad'
import ToggleBtn from './components/ToggleBtn'
import mock from './assets/mock.json'

function App() {
  const [keyPress, setKeyPress] = useState(' ')
  const [volume, setVolume] = useState(50)
  const [powerInput, setPowerInput] = useState(true)
  const [bankInput, setBankInput] = useState(false)

  document.body.addEventListener('keypress', (e) => {
    const key = e.key.toUpperCase()
    const audio = document.getElementById(key)
    
    if (audio) {
      setKeyPress(key)
      audio.firstElementChild.currentTime = 0
      audio.firstElementChild.play()
    }
  })

  const handleVolumeChange = (e) => {
    setVolume(e.target.value)
    document.querySelectorAll('audio').forEach(audio => {
      audio.volume = e.target.value / 100
    })
  }

  const handleChecked = (e) => {
    if(e.target.id === 'powerInput') {
      setPowerInput(e.target.checked)
      handlePads()
    } else {
      setBankInput(e.target.checked)
    }
  }

  const handlePads = () => {
    const pads = document.querySelectorAll('.drum-pad')
    if(powerInput) {
      pads.forEach(pad => pad.setAttribute('disabled', 'true'))
    } else {
      pads.forEach(pad => pad.removeAttribute('disabled'))
    }
  }

  return (
    <>
      <div id="drum-machine">
        <div className="drumpads-panel">
         {
            mock.map(drumPadItem => <DrumPad key={drumPadItem.keyTrigger} {...drumPadItem} onClick={setKeyPress}/>)
          }
        </div>
        <div className="controls">
          <div id="power">
            <p>Power</p>
            <ToggleBtn htmlFor="powerInput" check={powerInput}/>
            <input id='powerInput' type="checkbox" checked={powerInput} onChange={handleChecked} />
          </div>
          <div id="display">{keyPress}</div>
          <div id="volume">
            <p>Volume</p>
            <input onChange={handleVolumeChange} type="range" min="0" max="100" defaultValue={volume} />
          </div>
          <div id="bank">
            <p>Bank</p>
            <ToggleBtn htmlFor='bankInput' check={bankInput}/>
            <input id='bankInput' type="checkbox" checked={bankInput} onChange={handleChecked} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
