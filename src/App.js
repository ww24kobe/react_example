import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  HashRouter,
  Link,
  NavLink,
  Route,
  Routes,
  Outlet,
  Navigate,
} from 'react-router-dom'

import style from './style.module.css'
console.log(style)

const Order = () => <h3>订单</h3>
const Address = () => <h3>地址</h3>
const Home = () => <h3>首页</h3>
const User = () => (
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
    <Outlet />
  </>
)
const Cart = () => <h3>Cart 页面</h3>

function App() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }} className={style.title}>
        react-router-dom的使用
      </h1>
      <Router>
        <div>
          {/* NavLink相对于Link含有当前激活类名active，可设置样式 */}
          <NavLink to="/">首页 </NavLink>
          <NavLink to="/user">个人中心 </NavLink>
          <Link to="/cart">购物车 </Link>
          <Link to="/a">重定向</Link>
          <Routes>
            {/* 渲染一个元素 */}
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />}>
              <Route path="order" element={<Order />} />
              <Route path="address" element={<Address />} />
            </Route>
            {/* 或者渲染一个组件对象 */}
            <Route path="/cart" Component={Cart} />
            {/* 重定向到 / */}
            <Route path="/a" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Outlet />
      </Router>
    </>
  )
}

export default App
