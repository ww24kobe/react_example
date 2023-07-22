import { useState, useEffect } from 'react'
import {useUnmount,useMount,useUpdateEffect} from 'ahooks'

function useMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const moveHandle = (e) => {
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('usemousemove mounted & updated');
    document.addEventListener('mousemove', moveHandle)
    return () => {
      console.log('usemousemove unmounted ');
      document.removeEventListener('mousemove', moveHandle)
    }
  }, [])

  return { x, y }
}

function ComB() {
  const [count, setCount] = useState(0)
  const {x,y} = useMouse()

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
        x: {x},y:{y}
      </p>
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
