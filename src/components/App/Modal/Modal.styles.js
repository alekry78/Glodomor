import styled from 'styled-components';
import {Previous} from "../App.styles";
export const ModalView = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    z-index:1000;
    background-color:white;
    position:absolute;
    top:0;
    left:0;
    margin:0;
    padding:0;
`
export const RecipeContainer = styled.div`
     width:100%;
     height:100%;
     display:flex;
     justify-content:center;
     align-items:center;
     flex-grow:1;
`
export const Recipe = styled.div`
    width:100%;
    max-width:1600px;
    height:calc(100vh - 80px);
    display:flex;
    border-radius:25px;
    align-items:center;
     box-shadow:0px 4px 32px 0px rgba(82,78,78,0.42);
    justify-content:space-around;
    background-color:white;
`
export const Container = styled.div`
   width:50%;
   height:100%;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:space-around;
`
export const Title = styled.h1`
    font-size:50px;
    color:${({theme})=>theme.color.purple};
    text-shadow:2px -2px 4px ${({theme})=>theme.color.neonBlue};
    text-transform:uppercase;
    margin:0;
    width:100%;
    height:45%;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:5px;
`
export const Navigation = styled.nav`
    width:100vw;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    height:auto;
    box-sizing:border-box;
    padding:2px;
    height:40px;
`
export const Exit = styled.div`
    width:30px;
    height:30px;
    border-radius:50%;
    background-color:white;
    border:2px solid ${({theme}) => theme.color.purple};
    box-shadow:${({theme}) => theme.shadow.neon};
    position:relative;
    &::after{
    content:'';
    width:2px;
    height:12px;
    position:absolute;
    background-color:${({theme}) => theme.color.purple};
    top:7.5px;
    right:15px;
    transform:rotate(45deg);
    cursor:pointer;
    box-shadow:${({theme}) => theme.shadow.neon};
    }
    &::before{
    content:'';
    width:2px;
    height:12px;
    background-color:${({theme}) => theme.color.purple};
    transform:rotate(-45deg);
    position:absolute;
    top:7.5px;
    right:15px;
    box-shadow:${({theme}) => theme.shadow.neon};
    }
`
export const Instructions = styled.div`
    font-size:25px;
    color:${({theme})=>theme.color.purple};
    text-shadow:2px -2px 4px ${({theme})=>theme.color.neonBlue};
    text-transform:uppercase;
    box-sizing:border-box;
    margin:0;
    padding:20px;
    width:85%;
    height:45%;
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    flex-wrap:wrap;
    overflow: auto;
    p{
        margin:0;
    }
`
export const ImageContainer = styled.div`
    width:100%;
    height:45%;
    display:flex;
    align-items:center;
    justify-content:center;
    
`
export const Image = styled.img`
    width: 70%;
    height:90%;
    box-shadow: -9px 11px 3px -1px #5b00e3, 5px -4px 3px -1px #00FFF6;
    border-radius:10px;
`
export const Ingredients = styled.div`
    width: 100%;
    height:45%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    overflow-Y: auto;
`
export const Ingredient = styled.span`
    color:${({theme})=>theme.color.purple};
    text-shadow:2px -2px 4px ${({theme})=>theme.color.neonBlue};
    text-transform:uppercase;
    font-size:25px;
    font-weight:700;
`
export const Strong = styled.span`
    color:${({theme})=>theme.color.purple};
    text-shadow:2px -2px 4px ${({theme})=>theme.color.neonBlue};
    text-transform:uppercase;
    font-size:30px;
    border-bottom: 2px solid ${({theme})=>theme.color.purple};
    height:10%;
    width:80%;
    display:flex;
    justify-content:center;
    align-items:center;
`