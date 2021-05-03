import React from 'react';
import {IngredientsContainer} from "./Ingredients.styles";
import Ingredient from "./Ingredient/Ingredient";

const Ingredients = ({ingredients,handleChoseIng}) => {
    return(
        <IngredientsContainer>
            {ingredients.map(el=>(
                <Ingredient handleChoseIng={handleChoseIng} el={el} key={`${el}ingredient`}/>
            ))}
        </IngredientsContainer>
    )
};

export default Ingredients