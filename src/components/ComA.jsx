import { connect } from 'react-redux'
const mapStateToProps = (state) => {
  // console.log('state', state)
  return state
}

function ComA({ count, price, dispatch }) {
  return (
    <div style={{ border: '1px solid green', padding: '10px', margin: '10px' }}>
      <h1>ComA组件</h1>
      <p>count: {count}</p>
      <p>price: {price}</p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: 'increment' })
          }}
        >
          count++
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'decrement' })
          }}
        >
          count--
        </button>
      </p>
    </div>
  )
}

// connect设置第一参数代表获取store中的数据，第二个留空
export default connect(mapStateToProps)(ComA)
