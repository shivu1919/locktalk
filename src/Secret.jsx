import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
import './Secret.css'
import { useNavigate } from 'react-router-dom';


function Secret() {
  const[msg,setMsg] = useState('');
  const[secret, setSecret] = useState('')
  const[password, setPassword] = useState('')
  const[hint,setHint] =useState('')
  const navigate = useNavigate()


  const encryptMessage = ()=>{
      axios.post(`http://localhost:8080/encryptMsg?msg=${msg}&password=${password}`)
      .then((response) => {
        const secretmsg = response.data;
        setSecret(secretmsg);

         navigate("/success" , {
            state:{
                hint_msg : hint, 
                secret_msg : secretmsg}})
      })

      
  }

  return (
    <>
      <div className='container'>
            <h1>Lock - Talk</h1>
            <div id="form">
              <label>Message:</label>

              <textarea
              id="msg-box"
              required
              type="text"
              value={msg}
              onChange={(event)=>{setMsg(event.target.value)}}
              placeholder='Enter your message'
              />

              <label>Password:</label>
              <input
              required
              type='password'
              value={password}
              onChange={(event)=>{setPassword(event.target.value)}}
              placeholder='enter your password'
              />

              <label>Hint for password:</label>
              <input
              type="text"
              value={hint}
              onChange={(event)=>{setHint(event.target.value)}}
              />
              <button onClick={encryptMessage}>Encrypt Message</button>
            </div>
      </div>
    </>
  )
}

export default Secret