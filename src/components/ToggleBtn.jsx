import { useState } from "react"

export default function ToggleBtn ({htmlFor, check}) {

  const handleToggleBtn = (e) => {
    const input = e.target.parentElement.parentElement.nextElementSibling
    const toggleBtn = e.target.parentElement.parentElement

    if(input.checked) {
      toggleBtn.classList.remove('active')
    } else {
      toggleBtn.classList.add('active')
    }
  }

  return (
    <span className={`toggle-btn ${check ? 'active' : ''}`}>
      <label htmlFor={htmlFor}>
        <span className="inner" onClick={handleToggleBtn}></span>
      </label>
    </span>
  )
}