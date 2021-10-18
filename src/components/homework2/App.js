import React, { useState } from 'react'
import './App.css'

function App() {
  const [isActive, setActive] = useState(false)
  const toggleClass = () => {
    setActive(true)
  }

  return (
    <>
      <ul>
        <li>
          <a
            href="/"
            key="1"
            className={isActive ? 'active' : null}
            onClick={toggleClass}
          >
            首頁
          </a>
        </li>
        <li>
          <a
            href="/"
            key="2"
            className={isActive ? 'active' : null}
            onClick={toggleClass}
          >
            關於我們
          </a>
        </li>
        <li>
          <a
            href="/"
            key="3"
            className={isActive ? 'active' : null}
            onClick={toggleClass}
          >
            產品
          </a>
        </li>
      </ul>
    </>
  )
}

export default App

//
