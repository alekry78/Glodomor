import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {Icon} from "../Ingredients/Ingredient/Ingredient.style";
import {ChosenContainer, ChosenIngContainer, ChosenSpan} from "./ChosenIngredients.styles";
const chosenIngredients = ({chosen,deleteChosen}) => {
    return(
      <ChosenContainer >
          {chosen.map(el=>(
              <ChosenIngContainer key={`${el}chosen`}>
                  <ChosenSpan>{el}</ChosenSpan>
                  <Icon icon={faTimes} onClick={()=>deleteChosen(el)}/>
              </ChosenIngContainer>
          ))}
      </ChosenContainer>
    )
};

export default chosenIngredients