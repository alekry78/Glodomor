import styled from 'styled-components';

export const IngredientsContainer = styled.div`
    width:870px;
    height:115px;
    box-shadow:0px 4px 32px 0px rgba(82,78,78,0.42);
    border-bottom-right-radius:20px;
    border-bottom-left-radius:20px;
    box-sizing:border-box;
    padding:10px 20px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    flex-wrap:wrap;
    div{
    display:flex;
    justify-content:center;
    align-items:center;
    span{
        color:${({theme})=>theme.color.purple};
        font-weight:700;
        font-size:10px;
        text-transform:uppercase;
    }
    }
`