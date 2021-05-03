import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {Icon} from "./Ingredient.style";
const Ingredient = ({el,handleChoseIng}) => {
    return(
        <div key={`${el}div`}>
            {/*<input type="checkbox" onClick={()=>{handleChoseIng(el)}} key={`${el}input`}/>*/}
            <Icon icon={faPlus}  onClick={()=>{handleChoseIng(el)}} key={`${el}input`}/>
            <span key={`${el}span`}>{el}</span>
        </div>
    )
};

export default Ingredient