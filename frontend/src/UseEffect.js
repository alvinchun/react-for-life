import React, { useState, useEffect } from 'react'


export const UseEffect = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');
  const [name2, setName2] = useState('');


  const handleCountUpdate = () => {
    setCount(count + 1)
  }

  const handleInputChange = (e) => {
    setName(e.target.value)
  }

  const handleInputChange2 = (e) => {
    setName2(e.target.value)
  }

  // useEffect(() => {
  //   console.log("Rendering depending on count");
  // }, [count])
  
  // useEffect(() => {
  //   console.log("Rendering depending on name");
  // }, [name])

  // useEffect(() => {
  //   console.log("Rendering depending on both count and name");
  // }, [count, name])
  
  useEffect(() => {
    console.log("logging on every rendering");
  })
  
  // useEffect(() => {
  //   console.log("logging only on the first time");
  // },[])

  return (
    <div>
      <button onClick={handleCountUpdate}>
        Update
      </button>
      <h2>
        {count}
      </h2>
      <input type="text" onChange={handleInputChange} value={name} />
      <h2>name: {name} </h2>

      <input type="text" onChange={handleInputChange2} value={name2} />
      <h2>name: {name2} </h2>
    </div>
  )
}

