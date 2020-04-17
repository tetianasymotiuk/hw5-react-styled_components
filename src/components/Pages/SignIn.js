import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';

import Lock from './Image/padlock.png';

const Div = styled.div`
    display: block;
    height: 604px;
    width: 543px;
    background-color: #121212;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Header = styled.header`
    display: block;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #F48FB2;
    position: absolute;
    top: 70px;
    left: 254px;
    font-family: Roboto;
`;

const Img = styled.img`
    margin: 10px 10px;
    height: 20px;
    width: 20px;
`;

const PTop = styled.p`
    color: #FFFFFF;
    position: absolute;
    top: 92px;
    left: 238px;
    font-size: x-large;
`;

const InputEmail = styled.input`
    display: block;
    height: 35px;
    width: 375px;
    background: #121212;
    border: ${props => props.border ? '1px solid green': (props.empty ? '1px solid #3A3A3A' :'1px solid red')};
    border-radius: 5px;
    padding: 10px 5px;
    padding-left: 13px;
    margin: 152px 0px 0px 75px;
    font-size: medium;
`;

const InputPassword = styled.input`
    display: block;
    height: 35px;
    width: 375px;
    background: #121212;
    border: ${props => props.border ? '1px solid green': (props.empty ? '1px solid #3A3A3A' :'1px solid red')};
    border-radius: 5px;
    padding: 10px 5px;
    padding-left: 13px;
    margin: 3px 0px 0px 75px;
    font-size: medium;
`;

const Check = styled.div`
    display: block;
    height: 20px;
    width: 150px;
    padding-left: 62px;
    position: absolute;
    top: 317px;
    left: 3px;
`;

const P = styled.p`
    position: absolute;
    top: -6px;
    left: 104px;
    color: #EDEDED;
`;

const Button = styled.button`
    display: block;
    height: 38px;
    width: 399px;
    background-color: #90CAF9;
    border-radius: 5px;
    position: absolute;
    left: 73px;
    top: 383px;
    outline: none;
    font-size: 13px;
    border: 1px solid #90CAF9;  
`;

const PForgot = styled.p`
    position: absolute;
    left: 75px;
    top: 421px;
    color: #7DAED6;
    font-size: 15px;
`;

const A = styled.a`
    position: absolute;
    left: 272px;
    top: 437px;
    color: #7DAED6;
    font-size: 15px;
`;

const Footer = styled.footer`
    color: #9E9E9E;
    position: absolute;
    top: 519px;
    left: 100 px;
    padding-left: 170px;
    font-size: 14px;
`;

class SignIn extends Component {
    state= {
        email: '',
        password: '',
        emailCorrect: false,
        passwordCorrect: false,
        cheked: false
    };

    emailInput = (event) => {
        this.setState({
            email: event.target.value
        })
        if(event.target.value.match(/^...+@..+\...+$/) != null) {
            this.setState({
                emailCorrect: true
            })
        } else {
            this.setState({
                emailCorrect: false
            })
        }
        
    }

    passwordInput = (event) => {
        this.setState({
            password: event.target.value
        })
        if(event.target.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/) != null) {
            this.setState({
                passwordCorrect: true
            })
        } else {
            this.setState({
                passwordCorrect: false
            })
        }
    }

    changeCheckbox = () => {
        this.setState({
            cheked: !this.state.cheked
        })
    }

    render() {
        return(
            <div>
                <Div>
                    <Header><Img src={Lock} /></Header><br/>
                    <PTop>Sign in</PTop>
                    <InputEmail placeholder='Email Address*' 
                    empty={this.state.email === ''} 
                    border={this.state.emailCorrect} 
                    onChange={this.emailInput}
                    style = {{ color:'#9E9E9E' }} /><br/>
                    <InputPassword type='password' placeholder ='Password*' 
                    empty={this.state.password === ''} 
                    border={this.state.passwordCorrect} 
                    onChange={this.passwordInput}
                    style = {{ color:'#9E9E9E' }} /><br/>
                    <Check>
                        <Checkbox color="default" onChange={this.changeCheckbox} 
                        style = {{ color:'#EDEDED' }} />
                        <P>Remember me</P>
                    </Check>
                    <br/>
                    <Button>SIGN IN</Button><br/>
                    <Link to='/'>
                        <A>Don't have an account? Sign Up</A>
                    </Link>
                    <PForgot>Forgot password?</PForgot>
                    <Footer>Copyright &copy; Your Website 2020.</Footer>
                </Div>
            </div>
        );
    }
}
export default SignIn;
