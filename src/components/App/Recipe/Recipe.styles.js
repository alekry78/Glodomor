import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Icon = styled(FontAwesomeIcon)`
    width:25px;
    height:25px;
    color:${({theme})=>theme.color.purple};
    margin:1px 2px;
    cursor:pointer;
    align-self:flex-start;
`
export const IconDelete = styled(Icon)`
color:red;
`
export const IconFav = styled(Icon)`
color:gold;
`
export const RecipeContainer = styled.div`
    width:1000px;
    height:110px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    border-radius:20px;
    box-shadow:0px 4px 32px 0px rgba(82,78,78,0.42);
    padding:10px;
    margin:20px;
    cursor:pointer;
    // &:nth-child(3){
    //      background-color:yellow;
    // }
    // svg{
    //     &:first-of-type{
    //     color:gold;
    //     }
    //     &:nth-of-type(2){
    //     color:red;
    //     }
    // }
`
export const Image = styled.img`
    width:140px;
    height:90px;
    // background-color:${({theme})=>theme.color.purple};
    border-radius:20px;
`
export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    margin:0 10px;
    flex-grow:1;
`
export const Title = styled.h1`
    text-transform:uppercase;
    margin:0;
    color:${({theme})=>theme.color.purple};
    text-shadow:2px -2px 1px ${({theme})=>theme.color.neonBlue};
    font-size:30px;
`
export const Details = styled.p`
    color:${({theme})=>theme.color.purple};
    margin:0;
   
`