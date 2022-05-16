import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Form from './form';
import BtnComp from './btnComp';
import Header from './Header';
import '../styles/login.css'

const defaultFormFields = {
    email: '',
    password: '',
   };

const LoginForm = () => {
    const navigate = useNavigate()
    const [errmsg,setErrorMsg] =useState()
    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password } = formFields;
    var regx = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})"
    var spaceRegex='^\\S*$'
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };
    const handleSubmit =  (event) => {
        event.preventDefault();
        if(!password.match(spaceRegex)){
            // alert('Password should not contain space')
            setErrorMsg('Password should not contain space')
            return
        }
        if(!password.match(regx)){
            // alert(`Password Minimum length 6 characters,Must have a number and alphabet`)
            setErrorMsg('Password Minimum length 6 characters,Must have a number and alphabet')
            return
        }
    
        resetFormFields()
        setErrorMsg(null)
        sessionStorage.setItem("email",email)
    
        navigate('/')
    }
        const handleChange = (event) => {
            const { name, value } = event.target;
    
            setFormFields({ ...formFields, [name]: value });
    
        };
    
        
    
    return(
        <>
        <Header />
        <Container className='main  '>
            <Row>

            <Col>
            <section>
                <header>
                    <h2>Login !</h2>
                </header>
            </section>
               
            <p>Get Access to your Orders, Wishlist, Recomendations.</p>
            </Col>
            <Col>
                <section className='sign-in-container'>
                    
                    <form onSubmit={handleSubmit}>
                    <Form
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                    />

                    <Form
                        label='Password'
                        type='password'
                        required
                        onChange={handleChange}
                        name='password'
                        value={password}
                    />

                    
                    <footer><p className='errMsg'>{errmsg && errmsg}</p></footer>
                    <BtnComp type='submit'>Signup</BtnComp>
                    </form>
                    
                </section>
                
            </Col>
            </Row>
        </Container>
        
        </>
    )

}
export default LoginForm