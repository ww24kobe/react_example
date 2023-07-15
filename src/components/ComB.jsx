import { connect } from 'react-redux'
function ComB({ count, price }) {
  return (
    <div style={{ border: '1px solid blue', padding: '10px', margin: '10px' }}>
      <h1>ComB组件</h1>
      <p>count: {count}</p>
      <p>price: {price}</p>
      <p>totolPrice: {price * count}</p>
    </div>
  )
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(ComB)
