import styled from 'styled-components'

export const LogIn = styled.section`
    width:100vw;
    height:calc(100vh - 250px);
`
export const LoginContainer = styled.div`
    padding:60px;
    margin:auto;
    width:30vw;
    max-width:520px;
    min-height:40vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
   background: radial-gradient(circle, rgba(120,67,230,1) 0%, rgba(85,3,255,1) 100%);
    -webkit-box-shadow: -9px 11px 16px -1px #FF11F0, 5px -4px 16px -1px #00FFF6; 
box-shadow: -9px 11px 16px -1px #FF11F0, 5px -4px 16px -1px #00FFF6;
`
export const Label = styled.label`
    color:white;
    text-transform:uppercase;
    margin:14px 0;
    display:block;
    font-size:22px;
    line-height:1;
`
export const Input = styled.input`
    width:100%;
    border:none;
    outline:none;
    font-size:19px;
    padding:10px;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    letter-spacing: 1px;
`
export const Error = styled.p`
    color:red;
    font-size:16px;
`
export const ButtonContainer = styled.div`
    width:100%;
    padding:24px 0;
`
export const Text = styled.p`
    margin:14px 0 0 0;
    text-align:right;
    color:#fff;
`
export const Span = styled.span`
  color: yellow;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-left: 5px;
  cursor: pointer;
  transition: all 400ms ease-in-out;
  &:hover{
    color:red;
  }
`
export const Button = styled.button`
  border: none;
  outline: none;
  width: 100%;
  padding: 15px 0;
  color: #fff;
  font-size: 16px;
  letter-spacing: 1px;
  background:#3d017d;
  cursor: pointer;
`