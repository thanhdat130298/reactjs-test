import React from "react";
import styled from 'styled-components'

const Login = () => {
    return (
        <WrapperComponent>
            <Welcome>Welcome!</Welcome>
            <Please>Please sign in to continue or <SignUp href="#">Sign up</SignUp> if you have not account yet!</Please>
            <Title>Sign in</Title>
            <GroupLoginForm>
                <Usename>
                    <Label>Username</Label>
                    <InputUsername/>
                </Usename>
                <Password>
                    <Label>Password</Label>
                    <InputPassword/>
                </Password>
                <ForgotPass>
                    <Check type="checkbox"/>
                    <Label2>Forgot password!</Label2>
                </ForgotPass>
                <LoginButton>
                    Login
                </LoginButton>
            </GroupLoginForm>
        </WrapperComponent>
    )
}
export default Login
const WrapperComponent = styled.div``
const Title = styled.div``
const GroupLoginForm = styled.div``
const Usename = styled.div``
const Label = styled.label``
const Label2 = styled.label``
const InputUsername = styled.input``
const Password = styled.div``
const InputPassword = styled.input``
const Check = styled.input``
const ForgotPass = styled.div``
const Welcome = styled.div``
const Please = styled.div``
const LoginButton = styled.button``
const SignUp = styled.a`
    text-decoration: none;
    color: #000000;
    font-weight: 700;
`