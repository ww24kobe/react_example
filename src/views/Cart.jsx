
import { withComponentGuard } from '../Hoc'

function Cart(){
    return (
        <>
            <h3>购物车</h3>
        </>
    )
}

export default withComponentGuard(
    Cart,
    () => {
    //   console.log('cart enter')
    },
    () => {
    //   console.log('cart leave')
    }
  )

