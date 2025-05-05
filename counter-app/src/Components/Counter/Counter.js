import React, { useState } from 'react'
import './Counter.css'
const Counter = (props) => {
    const {initialValue}=props
    const [cnt,setCnt]=useState(initialValue)
    const handleInc=()=>{
        setCnt(prevCnt=>prevCnt+1)
    }
    const handleDec=()=>{
        setCnt(prevCnt=>prevCnt-1)
    }
    const handleReset=()=>{
        setCnt(initialValue)
    }
  return (
    <>
    <div className='parent'>
    <h1>Counter</h1>
    <div className='cnt'>{cnt}</div>
    <div className='incdec'>

    <button className='btn dec'onClick={handleDec}>-</button>
    <button className='btn inc' onClick={handleInc}>+</button>
    </div>
    <button className="rst" onClick={handleReset}>Reset</button>
    </div>
    </>
  )
}

export default Counter