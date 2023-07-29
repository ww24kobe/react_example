// App.js
import React, { Suspense } from 'react'
import AsyncComponent from './components/AsyncComponent'

// 使用 lazy 函数动态导入异步组件
// const AsyncComponent = React.lazy(() => import('./components/AsyncComponent'))

const App = () => {
  return (
    <div>
      <h1>React Suspense 异步组件示例</h1>
      <Suspense fallback={<p>Suspense Loading...</p>}>
        <AsyncComponent />
      </Suspense>
    </div>
  )
}

export default App
