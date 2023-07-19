import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Routes,
  Outlet,
  Navigate,
} from 'react-router-dom'
import { withComponentGuard } from './Hoc'
import style from './style.module.css'

const Order = () => <h3>订单</h3>
const Address = () => <h3>地址</h3>
const Home = () => <h3>首页</h3>
const Test = () => <h3>Test</h3>
const NotFound = () => <h3>404 NotFound</h3>

const User = () => {
  return (
    <>
      <h3>个人中心</h3>
      <ul>
        <li>
          <Link to="/user/order">我的订单</Link>
        </li>
        <li>
          <Link to="/user/address">收货地址</Link>
        </li>
      </ul>
      {/* 功能组件（不展示任何内容，仅作为一种抽象的存在）：嵌套子组件显示的容器 */}
      <Outlet />
    </>
  )
}

const CartGuard = withComponentGuard(
  () => <h3>Cart 页面</h3>,
  () => {
    console.log('cart enter')
  },
  () => {
    console.log('cart leave')
  }
)

function App() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }} className={style.title}>
        react-router-dom的使用
      </h1>
      <div>
        {/* NavLink相对于Link含有当前激活类名active，可设置样式 */}
        <NavLink to="/">首页 </NavLink>
        <NavLink to="/cart">购物车 </NavLink>
        <NavLink to="/user">个人中心(嵌套) </NavLink>
        <Link to="/a">重定向</Link>
        <Link to="/test">test</Link>
        <Link to="/c">404</Link>
        <Routes>
          {/* 渲染一个元素 */}
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />}>
            <Route path="order" element={<Order />} />
            <Route path="address" element={<Address />} />
          </Route>
          {/* 或者渲染一个组件函数组件 */}
          <Route path="/cart" Component={CartGuard} />
          {/* 重定向到 / */}
          <Route path="/a" element={<Navigate to="/" />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
