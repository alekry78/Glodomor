import styled from 'styled-components';

export const Form = styled.form`
    width:540px;
    // height:520px;
    border:2px solid ${({theme})=>theme.color.purple};
    border-radius:16px;
    box-shadow:${({theme})=>theme.shadow.neon};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-bottom:20px;
    box-sizing:content-box;
    padding:20px;
`
export const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
`
export const Label = styled.label`
    font-size:24px;
    font-weight:700;
    color:${({theme})=>theme.color.purple};
    text-transform:uppercase;
    text-shadow:2px -2px 1px ${({theme})=>theme.color.neonBlue};
`
export const Input = styled.input`
    width:475px;
    height:40px;
    border:2px solid ${({theme})=>theme.color.purple};
    box-shadow:${({theme})=>theme.shadow.neon};
    font-size:22px;
    color:${({theme})=>theme.color.purple};
    border-radius:15px;
    margin:10px 0;
    &::placeholder{
        font-size:18px;
        color:${({theme})=>theme.color.purple};
        text-transform:uppercase;
        opacity:0.5;
        font-weight:700;
        padding-left:10px;
    }
    &:focus{
        outline:none;
    }
    button{
        border:2px solid ${({theme})=>theme.color.purple};
    }
`
export const Textarea = styled.textarea`
  width:475px;
    height:200px;
    border:2px solid ${({theme})=>theme.color.purple};
    box-shadow:${({theme})=>theme.shadow.neon};
    font-size:22px;
    color:${({theme})=>theme.color.purple};
    resize:none;
    border-radius:15px;
    margin:10px 0;
    overflow-Y:scroll;
    &::placeholder{
        font-size:18px;
        color:${({theme})=>theme.color.purple};
        text-transform:uppercase;
        opacity:0.5;
        font-weight:700;
        padding-left:10px;
    }
`
export const Submit = styled.button`
     width:48px;
    height:48px;
    border-radius:50%;
    background-color:rgba(255,0,0,0);
    border:2px solid ${({theme}) => theme.color.purple};
    box-shadow:${({theme}) => theme.shadow.neon};
    position:relative;
    &::after{
    content:'';
    width:12px;
    height:2px;
    position:absolute;
    background-color:${({theme}) => theme.color.purple};
    top:50%;
    left:35%;
    // box-shadow:${({theme}) => theme.shadow.neon};
    }
    &::before{
    content:'';
    width:6px;
    height:6px;
    border-top:2px solid ${({theme}) => theme.color.purple};
    border-right:2px solid ${({theme}) => theme.color.purple};
    transform:rotate(45deg);
    position:absolute;
    top:44%;
    left:42%;
    box-shadow:${({theme}) => theme.shadow.neon};
    }
    transform:rotate(-90deg);
`
export const Alert = styled.span`
    font-size:12px;
    font-weight:700;
    color:${({theme})=>theme.color.purple};
    text-transform:uppercase;
    text-shadow:2px -2px 1px ${({theme})=>theme.color.neonBlue};
`