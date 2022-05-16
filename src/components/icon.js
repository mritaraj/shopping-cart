import { useContext } from 'react';
import '../styles/comm.css';
import { ReactComponent as ShoppingIcon } from '../static/images/cart.svg';
import { CartContext } from '../CartAdd/CartAdd';

const Icon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)
    const toggleCartOpen = () => setIsCartOpen(!isCartOpen)
    return(
        <div onClick={toggleCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='icon-count'>{cartCount}</span>
        </div>
        
        
    )
}
export default Icon