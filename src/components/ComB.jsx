import { useState, useEffect } from 'react'
function ComB() {
  console.log('ComB execute');
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('ComB mounted & updated')
  }, [count])
  return (
    <div style={{ border: '1px solid blue', padding: '10px', margin: '10px' }}>
      <h1>ComB组件</h1>
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
    </div>
  )
}


export default ComB
