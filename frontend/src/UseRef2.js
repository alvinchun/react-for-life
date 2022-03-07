import React, { useState, useRef, useEffect } from 'react'


export const UseRef2 = () => {
  const inputRef = useRef(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    inputRef.current.focus()
  })
  
  const login = () => {
    alert("You are logged in ")
    // inputRef.current.focus()
  }

  const increaseCountState = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <input ref={inputRef}type='text' placeholder='username' />
      <button onClick={login}>로그인</button>
      <button onClick={increaseCountState}>
        Update countState
      </button>
      <h2>
        {count}
      </h2>
    </div>
  )
}
