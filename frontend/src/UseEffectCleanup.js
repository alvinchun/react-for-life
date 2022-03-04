import React, { useState, useEffect } from 'react'
import { Timer as T} from './components/Timer.js'

export const UseEffectCleanup = () => {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      {showTimer && <T />}
      <button onClick={() => setShowTimer(!showTimer)}>
        Toggle
      </button>
    </div>
  )
}

// export default useEffectCleanup