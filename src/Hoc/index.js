import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
// 组件独享守卫高阶组件
const withComponentGuard = (WrapComponent, onEnter, onLeave) => {
  return (props) => {
    useEffect(() => {
      onEnter()

      return () => {
        onLeave()
      }
    }, [])

    return <WrapComponent {...props} />
  }
}

// 全局前守卫和后守卫
// TODO

export { withComponentGuard }
