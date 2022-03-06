import React, { useState, useEffect, useMemo } from 'react'

export const UseMemo2 = () => {

    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    /*
    자바스크립트는 두가지 type으로 나뉜다.
    원시타입 (primitive) vs 객체타입 (object)
    
    원시타입은 변수라는 상자에 바로 저장되지만
    객체타입은 너무 커서 메모리상의 공간이 할당되서 그곳에 저장된다. 객체의 변수에는 객체가 담긴 메모리의 주소가 할당이 된다.
    */

    // const location = isKorea ? '한국' : '외국';

    // const location = 
    // {country: isKorea ? '한국' : '외국'}

    const location = useMemo(()=>{
      return {
        country: isKorea ? '한국' : '외국'
      }
    }, [isKorea])


    useEffect(()=> {
      console.log('useEffect 호출');
    },[location])

  return (
    <div>
        <h3>하루에 몇끼 먹어요?</h3>
    <input type="number" 
    value={number} 
    onChange={(e) => setNumber(e.target.value)}></input>
    <hr />
    <h2>어느 나라에 있어요?</h2>
    <p>나라: {location.country} </p>
    <button onClick={()=> setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  )
}