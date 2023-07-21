import { useState, useEffect } from 'react'

function useMouse() {
  console.log('execute useMouse');
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const moveHandle = (e) => {
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('mousemove mounted & updated');
    document.addEventListener('mousemove', moveHandle)
    return () => {
      console.log('mousemove unmounted ');
      document.removeEventListener('mousemove', moveHandle)
    }
  }, [])

  return { x, y }
}

function ComB() {
  const [count, setCount] = useState(0)
  const {x,y} = useMouse()
  useEffect(() => {
    console.log('ComB mounted & updated')
    return ()=>{
      console.log('ComB unmounted');
    }
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
