import React, { useState, useEffect, useMemo, useCallback } from 'react'

export const Box = ({ createBoxStyle }) => {

  const [style, setStyle] = useState({});

  useEffect(() => {
    console.log('박스 키우기기기');
    setStyle(createBoxStyle())
  }, [createBoxStyle])

  return (
    <div style={style}>
    
    </div>
  )
}