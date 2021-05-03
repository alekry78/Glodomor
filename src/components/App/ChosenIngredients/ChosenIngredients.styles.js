import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Icon = styled(FontAwesomeIcon)`
    width:13px;
    height:13px;
    color:${({theme})=>theme.color.purple};
    margin:1px 2px;
    cursor:pointer;
`
export const ChosenContainer = styled.div`
    max-width:900px;
    border-radius:20px;
    box-shadow:0px 4px 32px 0px rgba(82,78,78,0.42);
    box-sizing:content-box;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:5px;
    flex-wrap:wrap;
    margin:10px 0;
`
export const ChosenSpan = styled.span`
    font-size:15px;
    color:${({theme})=>theme.color.purple};
    padding:4px;
    text-transform:uppercase;
    font-weight:700;
`
export const ChosenIngContainer = styled.div`
    padding:3px;
    border:1px solid ${({theme})=>theme.color.purple};
    box-shadow:0px 2px 2px 0px ${({theme})=>theme.color.neonBlue};
    border-radius:20px;
    margin:3px 6px;
`