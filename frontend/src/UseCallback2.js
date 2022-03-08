import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { Box }  from './components/Box.js'

export const UseCallback2 = () => {

  const [size, setSizes] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: 'pink',
      width: `${size}px`,
      height: `${size}px`
    }
  }, [size])
  //의존은 뭐가 변할때만 초기화가 됬으면 좋겠는걸 넣는다.

  return (
    <div style={{
      background: isDark ? 'black' : 'white'
    }}
    >
    <input
    type="number"
    value={size} 
    onChange={(e) => setSizes(e.target.value)}
    />
    <br />
      {/* <div style={
      createBoxStyle()}>
      </div> */}
    <button onClick={()=> setIsDark(!isDark)}>Change Theme</button>
    <Box createBoxStyle={createBoxStyle} />
    </div>
  )
}