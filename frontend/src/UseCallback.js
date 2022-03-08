import React, { useState, useEffect, useMemo, useCallback } from 'react'

export const UseCallback = () => {

    const [number, setNumber] = useState(0);

/*
    자바스크립트는 두가지 type으로 나뉜다.
    원시타입 (primitive) vs 객체타입 (object)
    
    원시타입은 변수라는 상자에 바로 저장되지만
    객체타입은 너무 커서 메모리상의 공간이 할당되서 그곳에 저장된다. 객체의 변수에는 객체가 담긴 메모리의 주소가 할당이 된다.
    */
  
  // const someFunction = useCallback(() => {
  //   console.log(`someFunc: number: ${number}`);
  //   return;
  // }, [])
  
  const someFunction = useCallback(() => {
    console.log(`someFunc: number: ${number}`);
    return;
  },[number])
  
// 원시타입인 number(state)가 변화하면서 UseCallback 함수형컴포넌트가 리렌더링 된다. 리랜더링이 되면서 useEffect에서 객체타입인 함수는 불려질때마다 항상 다른 주소로 저장이 되면서 또 다른 메모리 공간에 저장이 되면서 콜스택이 쌓인다.
  
  useEffect(() => {
    console.log('someFunction이 변경되었습니다.');
  },[someFunction])

  return (
    <div>

    <input
    type="number"
    value={number} 
    onChange={(e) => setNumber(e.target.value)}
    />
    <br />

    <button onClick={someFunction}>Call someFunc</button>
    </div>
  )
}