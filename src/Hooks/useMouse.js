import { useState, useEffect } from 'react'

export default function useMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const moveHandle = (e) => {
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    document.addEventListener('mousemove', moveHandle)
    return () => {
      document.removeEventListener('mousemove', moveHandle)
    }
  }, [])

  return { x, y }
}
