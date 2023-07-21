import React from 'react'
import { Link, NavLink, useNavigate, useRoutes } from 'react-router-dom'
import style from './style.module.css'
import routes from './router'

function App() {
  const navigate = useNavigate()
  const element = useRoutes(routes)
  return (
    <>
      <h1 style={{ textAlign: 'center' }} className={style.title}>
        react-router-dom的使用
      </h1>
      <p>
        <button
          onClick={() => {
            navigate(-1)
          }}
        >
          返回
        </button>
        <button
          onClick={() => {
            navigate(1)
          }}
        >
          前进
        </button>
      </p>
      <div>
        {/* NavLink相对于Link含有当前激活类名active，可设置样式 */}
        <NavLink to="/">首页 </NavLink>
        <NavLink to="/cart">购物车 </NavLink>
        <NavLink to="/user">个人中心(嵌套) </NavLink>
        <Link to="/a">重定向</Link>
        <Link to="/test">test</Link>
        <Link to="/c">404</Link>
        {element}
      </div>
    </>
  )
}

export default App
