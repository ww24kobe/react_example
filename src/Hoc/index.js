import { useEffect } from 'react'
// 组件独享守卫高阶组件
export const withComponentGuard = (WrapComponent, onEnter, onLeave) => {
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
