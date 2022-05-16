import React , {useContext} from 'react';
import logo from '../static/images/logo.png'
import {Figure, Navbar, Container, Nav} from 'react-bootstrap'
import  '../styles/home.css'
import Icon from './icon';
import MiniCartComp from './MiniCartComp'
import {CartContext} from '../CartAdd/CartAdd'

function Header(props) {
    const {isCartOpen} =useContext(CartContext)
    return (
        <div>
        <Navbar bg="light" fixed="top" className='shadow'>
            <Container>
                <Navbar.Brand href="#home">
                <img
                    src={logo}
                    className="d-inline-block align-top"
                    alt="sabka bazar"
                />
                </Navbar.Brand>
                <Nav.Link  href="/"><span className='link'>Home</span></Nav.Link>
                <Nav.Link href="product"><span className='link'>Products</span></Nav.Link>
                <div className='login'>
                {sessionStorage.getItem('email')? <Nav.Link href="/">Sign out</Nav.Link>: <Nav.Link href="login"><span className='link link2'>Signin</span></Nav.Link>}
                <Nav.Link href="register"><span className='link'>Register</span></Nav.Link>
                <span className="justify-content-end"><span className='link'><Icon /></span></span >
                </div>
            </Container>
            {isCartOpen && <MiniCartComp />}
            
        </Navbar>
        
        </div>
    );
}

export default Header;