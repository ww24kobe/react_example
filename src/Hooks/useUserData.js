import { useState, useEffect } from 'react'

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Date.now().toString())
    }, 2000)
  })
}

export default function useUserData() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState('')
  useEffect(() => {
    getUserData().then((result) => {
      setLoading(false)
      setData(result)
    })
  }, [])
  return {
    loading,
    data,
  }
}
