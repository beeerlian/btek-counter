import "./Counter.css"
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(1)
  const [msg, setMsg] = useState(null)

  const increment = () => {
    if (count < 9) {
      setCount(count + 1);
      setMsg(null)
    }
    else {
      setMsg(<p>Cannot increment, max number is 9</p>)
    }
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setMsg(null)
    }
    else {
      setMsg(<p>Cannot decrement, min number is 0</p>)
    }
  }

  return <>
    <h3>Counter</h3>
    <div className="counter">
      <button onClick={decrement}> - </button>
      <p className="count">{count}</p>
      <button onClick={increment}> + </button>
    </div>
    {msg || <br />}
  </>
}

export default Counter