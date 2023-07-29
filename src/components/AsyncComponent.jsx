// AsyncComponent.js
import React, { useEffect, useState } from 'react'

const AsyncComponent = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    // 模拟异步加载数据
    setTimeout(() => {
      setData('这是异步加载的数据！')
    }, 2000)
  }, [])

  return <div>{data ? <p>{data}</p> : <p>data Loading...</p>}</div>
}

export default AsyncComponent
