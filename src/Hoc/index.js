import { useEffect } from 'react'
// 组件独享守卫高阶组件
const withComponentGuard = (Component, onEnter, onLeave) => {
  return (props) => {
    useEffect(() => {
      onEnter()

      return () => {
        onLeave()
      }
    }, [])

    return <Component {...props} />
  }
}

export { withComponentGuard }
