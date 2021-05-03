import styled from 'styled-components';
import {Next} from "../Home/Home.styles";

export const Wrapper = styled.section`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    box-sizing:border-box;
    position:relative;
`
export const Navigation = styled.nav`
    width:100%;
    height:60px;
    display:flex;
    justify-content:space-between;
    padding:5px 10px;
    align-items:center;
    box-sizing:border-box;
`
export const MainSection = styled.div`
    flex-grow:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
`
export const MainHeader = styled.h1`
    font-size:70px;
    color:${({theme})=>theme.color.purple};
    text-shadow:2px -2px 4px ${({theme})=>theme.color.neonBlue};
    text-transform:uppercase;
    margin:0;
   
`
export const PickerContainer = styled.div`
    width:900px;
    height:120px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    border-radius:20px;
    box-shadow:0px 4px 32px 0px rgba(82,78,78,0.42);
    svg{
      width:56px;
      height:56px;
      fill:${({theme})=>theme.color.purple};
    }
`
export const Previous = styled(Next)`
    transform:rotate(-180deg);
`
export const FoodWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    svg{
        width:56px;
        height:56px;
    }
    h2{
        font-size:10px;
        color:${({theme})=>theme.color.purple};
        text-transform:uppercase;
    }
    &:hover{
         svg{
         filter: drop-shadow(2px -2px 1px ${({theme})=>theme.color.neonBlue});
        }
        h2{
            text-shadow:2px -2px 1px ${({theme})=>theme.color.neonBlue};
        }
`
export const Search = styled.span`
    width: 120px;
    height:40px;
    border-radius:20px;
    font-weight:700;
    display:flex;
    align-items:center;
    justify-content:center;
    border:3px solid ${({theme})=>theme.color.purple};
    box-shadow:0px 2px 2px 0px ${({theme})=>theme.color.neonBlue};
    color:${({theme})=>theme.color.purple};
    text-transform:uppercase;
    cursor:pointer;
    margin-top:10px;
`
export const AddedByUser = styled.span`
    font-size:20px;
    color:${({theme})=>theme.color.purple};
    text-shadow:2px -2px 1px ${({theme})=>theme.color.neonBlue};
    text-transform:uppercase;
    cursor:pointer;
`