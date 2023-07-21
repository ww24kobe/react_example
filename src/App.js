import { useState, useEffect } from 'react'
import ComA from './components/ComA'
import ComB from './components/ComB'

function App() {
  // console.log('App execute')
  const [count, setCount] = useState(0)
  const [isBool, setBool] = useState(true)
  useEffect(() => {
    console.log('App mounted & updated')
  }, [count])

  return (
    <div style={{ border: '1px solid red', padding: '10px', margin: '10px' }}>
      <h2>App组件</h2>
      <p>
        count:{count}
        <button
          onClick={() => {
            setCount(count + 1)
          }}
        >
          count++
        </button>
      </p>
      <ComA />
      <button
        onClick={() => {
          setBool(!isBool)
        }}
      >
        toggle ComB
      </button>
      {isBool && <ComB />}
    </div>
  )
}

export default App
