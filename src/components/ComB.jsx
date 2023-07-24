import { useState } from 'react'
import {useUnmount,useMount,useUpdateEffect} from 'ahooks'



function ComB() {
  const [count, setCount] = useState(0)

  useMount(()=>{
    console.log('ComB mounted');
  })

  useUpdateEffect(() => {
    console.log('ComB updated')
  })
  useUnmount(()=>{
    console.log('ComB unmounted');
  })
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
