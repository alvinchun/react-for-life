import React, { useState, useRef, useEffect } from 'react'


export const UseRef = () => {
  const [count, setCount] = useState(1);
  const countRef = useRef(0);
  let countVar = 0;

  console.log('렌더링....');

  const increaseCountState = () => {
    setCount(count + 1)
  }

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1
    console.log('Ref: ', countRef.current);
  }

  const increaseCountVar = () => {
    countVar += 1
    console.log('countVar: ', countVar);
  }

  const printCountRefCountVar = () => {
    console.log(`countRef: ${countRef.current}, countVar: ${countVar}`);
  }

  useEffect(() => {
    countRef.current = countRef.current + 1
    console.log('렌더링 수 : ', countRef.current);
  })
  
  useEffect(() => {
    console.log('렌더링 수 : ');
    setCount(count + 1)
  },[])

  return (
    <div>
      <button onClick={increaseCountState}>
        Update countState
      </button>
      <h2>
        {count}
      </h2>

      <button onClick={increaseCountRef}>
        Update countRef
      </button>
      <h2>
        {countRef.current}
      </h2>

      <button onClick={increaseCountVar}>
        Update countVar
      </button>
      <h2>
        {countVar}
      </h2>

      <button onClick={printCountRefCountVar}>
        Update countVar
      </button>
    </div>
  )
}
