import { useContext } from 'react';
import { CartContext } from '../CartAdd/CartAdd';
import '../styles/comm.css';

const CartList = ( {item}) => {
    
   const {name, imageURL, quantity, price} = item
   const {removeItemToCart, addItemToCart} = useContext(CartContext)
    return(
        <div className='cart-item-container'>
            <img src={imageURL} />
            <div className='item-details'>
            <h6>{name}</h6>
            <span>Rs. {price} x {quantity}</span>
            
            </div>
            <button onClick={() => removeItemToCart(item)}>Decrement</button>
            <button onClick={() => addItemToCart(item)}>Increment</button>
        </div>
    )
}
export default CartList