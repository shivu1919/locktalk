import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const[msg,setMsg] = useState('');
  const[password, setPassword] = useState('')


  const encryptMessage = ()=>{
      axios.post(`http://localhost:8080/encryptMsg?msg=${msg}&password=${password}`)
  }

  return (
    <>
      <div className='container'>
            <h1>Lock - Talk</h1>
            <div id="form">
              <label>Message:</label>

              <textarea
              id="msg-box"
              type="text"
              value={msg}
              onChange={(event)=>{setMsg(event.target.value)}}
              placeholder='Enter your message'
              />

              <label>Password:</label>
              <input
              type='password'
              value={password}
              onChange={(event)=>{setPassword(event.target.value)}}
              placeholder='enter your password'
              />

              <button onClick={encryptMessage}>Encrypt Message</button>
            </div>
      </div>
    </>
  )
}

export default App