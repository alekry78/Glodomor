import React from 'react';
import {Button, ButtonContainer, Error, Input, Label, LogIn, LoginContainer, Span, Text} from "./Login.styles";

const Login = ({email,setEmail,password,setPassword,handleLogin,handleSignUp,hasAccount,setHasAccount,emailError,passError}) => {
    return(
        <LogIn>
            <LoginContainer>
                <Label>Username</Label>
                <Input type="text" autoFocus required value={email} onChange={e=>setEmail(e.target.value)} />
                <Error>{emailError}</Error>
                <Label>Password</Label>
                <Input type="password" required value={password} onChange={e=>setPassword(e.target.value)} />
                <Error>{passError}</Error>
                <ButtonContainer>
                    {hasAccount ? (
                        <>
                            <Button onClick={handleLogin}>Sign in</Button>
                            <Text>Don't have and account? <Span onClick={()=>setHasAccount(!hasAccount)}>Sign up!</Span></Text>
                        </>
                    ) : (
                        <>
                            <Button onClick={handleSignUp}>Sign up</Button>
                            <Text>Have an account? <Span  onClick={()=>setHasAccount(!hasAccount)}>Sign in!</Span> </Text>
                        </>
                    )}
                </ButtonContainer>
            </LoginContainer>
        </LogIn>
    )
};

export default Login