import { useState, useEffect } from 'react'
export default function useTitle(msg = '') {
  const [title, setTitle] = useState(msg)
  useEffect(() => {
    document.title = title
  }, [title])
}
