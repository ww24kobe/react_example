import ComA from './components/ComA'
import ComB from './components/ComB'

import { connect } from 'react-redux'

function App({ incre, decre }) {
  return (
    <div style={{ border: '1px solid red', padding: '10px', margin: '10px' }}>
      <h1 style={{ textAlign: 'center' }}>redux的使用</h1>
      <h2>App组件</h2>
      <p>
        <button
          onClick={() => {
            incre()
          }}
        >
          count++
        </button>
        <button
          onClick={() => {
            decre()
          }}
        >
          count--
        </button>
      </p>
      <ComA />
      <ComB />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    incre: () => {
      // 通过dispath分发 action动作去修改store中数据
      // 必须设定type属性，指定触发action的类型，
      dispatch({ type: 'increment' })
    },
    decre: () => {
      dispatch({ type: 'decrement' })
    },
  }
}
// connect设置第二个参数为触发action,第一个参数为获取store中数据，如果用不上写null即可
export default connect(null, mapDispatchToProps)(App)
