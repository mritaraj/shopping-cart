import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Form from './form';
import BtnComp from './btnComp';
import Header from './Header';

 import '../styles/login.css';

const defaultFormFields = {
    FName: '',
    LName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
const RegisterSign = () =>{
    const navigate = useNavigate()
    const [errmsg,setErrorMsg] =useState()

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { FName, LName, email, password, confirmPassword } = formFields;
    var regx = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})"
    var spaceRegex='^\\S*$'

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit =  (event) => {
        event.preventDefault();
        
        if(!password.match(spaceRegex)){
            setErrorMsg('Password should not contain space')
            return
        }
        if(!password.match(regx)){
            setErrorMsg('Password Minimum length 6 characters,Must have a number and alphabet')
            return
        }
        if (password !== confirmPassword) {
            setErrorMsg('Both passwords do not match')
            return;
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
                        <h2>Signup !</h2>
                    </header>
                </section>
                   
                <p>We donot share your personal details to anyone</p>
                </Col>
                <Col>
                    <section className='sign-up-container'>
                        
                        <form onSubmit={handleSubmit}>
                        <Form label='First Name' type='text'required onChange={handleChange} name='FName' value={FName} />

                        <Form label='Last Name'type='text' required onChange={handleChange} name='LName'value={LName}/>
                        
                        <Form label='Email'type='email' required onChange={handleChange} name='email'value={email}/>

                        <Form label='Password' type='password'required onChange={handleChange} name='password' value={password}/>

                        <Form label='Confirm Password' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}
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
export default RegisterSign