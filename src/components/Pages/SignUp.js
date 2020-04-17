import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';

import Lock from './Image/padlock.png';

const Div = styled.div`
    display: block;
    height: 638px;
    width: 488px;
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
    top: 73px;
    left: 220px;
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
    top: 95px;
    left: 200px;
    font-size: x-large;
`;

const InputFirstName = styled.input`
    display: block;
    height: 35px;
    width: 171px;
    background: #121212;
    border: ${props => props.border ? '1px solid green': (props.empty ? '1px solid #3A3A3A' :'1px solid red')};
    border-radius: 5px;
    padding: 10px 5px;
    padding-left: 13px;
    margin: 154px 0px 0px 42px;
    font-size: medium;
`;

const InputLastName = styled.input`
    display: block;
    height: 35px;
    width: 170px;
    background: #121212;
    border: ${props => props.border ? '1px solid green': (props.empty ? '1px solid #3A3A3A' :'1px solid red')};
    border-radius: 5px;
    padding: 10px 5px;
    padding-left: 13px;
    margin: -57px 0px 0px 247px;
    font-size: medium;
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
    margin:-6px 0px 0px 41px;
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
    margin: -6px 0px 0px 41px;
    font-size: medium;
`;

const Check = styled.div`
    display: block;
    height: 20px;
    width: 360px;
    padding-left: 62px;
    position: absolute;
    top: 394px;
    left: -31px;
`;

const P = styled.p`
    position: absolute;
    top: -18px;
    left: 104px;
    color: #EDEDED;
`;
const Button = styled.button`
    display: block;
    height: 38px;
    width: 397px;
    background-color: #90CAF9;
    border-radius: 5px;
    position: absolute;
    left: 41px;
    top: 463px;
    outline: none;
    font-size: 13px;
    border: 1px solid #90CAF9;
`;

const A = styled.a`
    position: absolute;
    left: 229px;
    top: 515px;
    color: #7DAED6;
    font-size: 15px;
`;
const Footer = styled.footer`
    color: #9E9E9E;
    position: absolute;
    top: 577px;
    left: 100 px;
    padding-left: 170px;
    font-size: 14px;
`;

let data = [];

class SignUp extends Component {
    state= {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        emailCorrect: false,
        passwordCorrect: false,
        firstNameCorrect: false,
        lastNameCorrect: false,
        cheked: false
    };

    firstNameInput = (event) => {
        this.setState({
            firstName: event.target.value
        })
        if(event.target.value.length >= 3) {
            this.setState({
                firstNameCorrect: true
            })
        } else {
            this.setState({
                firstNameCorrect: false
            })
        }
    }

    lastNameInput = (event) => {
        this.setState({
            lastName: event.target.value
        })
        if(event.target.value.length >= 3 ) {
            this.setState({
                lastNameCorrect: true
            })
        } else {
            this.setState({
                lastNameCorrect: false
            })
        }
    }

    emailInput = (event) => {
        this.setState({
            email: event.target.value
        })
        if(event.target.value.match(/^...+@..+\...+$/) !== 0) {
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
        if(event.target.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/) !== 0) {
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

    rememberMe = () => {
        if(this.state.cheked) {
            data.push(JSON.stringify({
                'email': this.state.email,
                'password': this.state.password,
                'firstName': this.state.firstName,
                'lastName': this.state.lastName
            }))
            localStorage.setItem('data', [data])
            console.log(data);
        }
    }


    render() {
        return(
            <div>
                <Div>
                    <Header><Img src={Lock} /></Header><br/>
                    <PTop>Sign up</PTop>
                    <InputFirstName placeholder='First Name*' 
                    empty={this.state.firstName === ''}
                    border={this.state.firstNameCorrect} 
                    onChange={this.firstNameInput}
                    style = {{ color:'#9E9E9E' }} />
                    <InputLastName placeholder='Last Name*' 
                    empty={this.state.lastName === ''}
                    border={this.state.lastNameCorrect} 
                    onChange={this.lastNameInput}
                    style = {{ color:'#9E9E9E' }} /><br/>
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
                        <P>I want to receive inspiration, marceting<br/>
                        promotions and updates via email</P>
                    </Check><br/>
                    <Button>SIGN UP</Button><br/>
                    <Link to='/sign-in'>
                        <A>Already have an account? Sigh in</A>
                    </Link>
                    <Footer>Copyright &copy; Your Website 2020.</Footer>
                </Div> 
            </div>
        );
    }
}
export default SignUp;