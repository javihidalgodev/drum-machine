// Validar las propiedades de los componentes
import PropTypes from 'prop-types'

DrumPad.propTypes = {
  keyTrigger: PropTypes.string.isRequired,
  audio: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default function DrumPad({keyTrigger, audio, onClick}) {

  const handleClick = (e) => {
    e.target.style.transform = 'scale(0.9)'
    e.target.firstElementChild.currentTime = 0
    e.target.firstElementChild.play()
  }
  

  return (
    <button
      type='button'
      key={keyTrigger}
      id={keyTrigger}
      className="drum-pad"
      onMouseDown={(e)=>{
        handleClick(e)
        onClick(keyTrigger)}
      }
      onMouseUp={(e)=>e.target.style.transform = 'scale(1)'}
      onMouseLeave={(e)=>e.target.style.transform = 'scale(1)'}
    >
      {keyTrigger}
      <audio src={audio} className='clip' id={keyTrigger}></audio>
    </button>
  )
}