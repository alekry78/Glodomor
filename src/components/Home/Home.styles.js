import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Input} from "../AddRecipe/AddRecipe.styles";
export const Homepage = styled.main`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
export const Next = styled.div`
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
    cursor:pointer;
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
    top:45%;
    left:42%;
    box-shadow:${({theme}) => theme.shadow.neon};
    }
`
export const Username = styled(Input)`
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
`
