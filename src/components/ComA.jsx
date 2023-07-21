
import { useState, useEffect } from 'react'
function ComA() {
  console.log('ComA execute');
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('ComA mounted & updated')
  }, [count])
  return (
    <div style={{ border: '1px solid green', padding: '10px', margin: '10px' }}>
      <h1>ComA组件</h1>
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

// connect设置第一参数代表获取store中的数据，第二个留空
export default ComA
