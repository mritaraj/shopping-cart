import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import BtnComp from './btnComp'
import '../styles/comm.css'
import { CartContext } from '../CartAdd/CartAdd';
import CartList from './cartList'

const MiniCartComp = () =>{
    const {isCartOpen, setIsCartOpen} = useContext(CartContext)
    const toggleCartOpen = () => setIsCartOpen(!isCartOpen)
    const { cartItems, cartTotal } =useContext(CartContext)
    return(
            <Container className='cart-dropdown-container'>
                <Row className='cart-items'>
                    
                    <Col>
                        {
                           cartItems && cartItems.map((item) => {return <CartList item={item} />})
                        }
                       
                        <span className='total'>Total: {cartTotal}</span>
                    </Col>
                    
                </Row>
                <BtnComp onClick={toggleCartOpen} type='button'>Checkout</BtnComp>
            </Container>
    )
}
export default MiniCartComp