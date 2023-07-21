import {useNavigate,Outlet,Link} from "react-router-dom"
export default function User(){
    const navigate = useNavigate()
    return (
      <>
        <h3>个人中心</h3>
        <ul>
          <li>
            {/* 类似于router-link */}
            <Link to="/user/order">我的订单</Link>
          </li>
          <li>
            <Link to="/user/address">收货地址</Link>
          </li>
          <li>
            <button
              onClick={() => {
                navigate('/cart')
              }}
            >
              编程式到购物车
            </button>
          </li>
        </ul>
        {/* 功能组件（不展示任何内容，仅作为一种抽象的存在）：嵌套子组件显示的容器 */}
        {/* 类似于 router-view */}
        <Outlet />
      </>
    )
}

