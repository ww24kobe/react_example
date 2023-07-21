import { useRef } from 'react'
import Mock from 'mockjs'
import { useRequest } from 'ahooks'

function getUsername() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'))
    }, 1000)
  })
}

function App() {
  const { data, error, loading } = useRequest(getUsername)

  return (
    <>
      <h3>useRequest演示</h3>
      {error && 'fail to load'}
      {loading ? <div>loading...</div> : <div>Username:{data}</div>}
    </>
  )
}

export default App
