import styled from 'styled-components';

export const AddedContainer = styled.div`
    width:100vw;
    height:100vh;
    background-color:white;
    overflow-Y:auto;
`
export const AddedRecipesContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
`
export const Choose = styled.span`
    cursor:pointer;
    color:${({theme})=>theme.color.purple};
    background-color:white;
    padding:5px;
    height:20px;
    margin:0 0.5px;
    text-transform:uppercase;
    font-weight:500;
    border:1px solid grey;
    &:hover{
        color:white;
        background-color:${({theme})=>theme.color.purple};
    }
`
export const ChooseContainer = styled.div`
    width:100vw;
    height:20px;
    display:flex;
    align-items:center;
    justify-content:center;
`
export const ChosenHeader = styled.h1`
    color:${({theme})=>theme.color.purple};
    font-size:80px;
    width:100%;
    text-align:center;
    text-transform:uppercase;
    text-shadow:2px -2px 4px ${({theme})=>theme.color.neonBlue};
    margin:0;
`