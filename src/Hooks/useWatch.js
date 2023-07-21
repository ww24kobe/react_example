import React, { useState, useEffect, useRef } from 'react'

function useWatch(value, callback, immediate = false) {
  const [prevValue, setPrevValue] = useState(value)
  const firstUpdate = useRef(true)
  useEffect(() => {
    if (firstUpdate.current) {
      if (immediate) {
        callback(value, prevValue)
      }
      firstUpdate.current = false
      return
    }

    if (value !== prevValue) {
      callback(value, prevValue)
      setPrevValue(value)
    }
  }, [value, prevValue, callback])
}

export default useWatch
