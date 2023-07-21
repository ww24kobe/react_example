import React, { useState, useEffect } from 'react'
export default function useUpdate() {
  const [updateFlag, setUpdateFlag] = useState(false)

  const update = () => {
    setUpdateFlag((prevFlag) => !prevFlag)
  }

  useEffect(() => {
    setUpdateFlag(false)
  }, [updateFlag])

  return update
}
