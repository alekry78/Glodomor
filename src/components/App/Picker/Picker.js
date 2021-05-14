import React from 'react';
import {FoodWrapper} from "../App.styles";
import FoodMeat from "./FoodComponents/FoodMeat";
import FoodWheat from "./FoodComponents/FoodWheat";
import FoodVegetables from "./FoodComponents/FoodVegetables";
import FoodSweeteners from "./FoodComponents/FoodSweeteners";
import FoodSauces from "./FoodComponents/FoodSauces";
import FoodFruits from "./FoodComponents/FoodFruits";
import FoodFish from "./FoodComponents/FoodFish";
import FoodSpices from "./FoodComponents/FoodSpices";
import FoodDiary from "./FoodComponents/FoodDiary";

const Picker = ({handleClick}) => {
    return (
        <>
            <FoodWrapper>
                <FoodMeat handleClick={handleClick}/>
            </FoodWrapper>
            <FoodWrapper>
                <FoodWheat handleClick={handleClick}/>
            </FoodWrapper>
            <FoodWrapper>
                <FoodVegetables handleClick={handleClick}/>
            </FoodWrapper>
            <FoodWrapper>
                <FoodSweeteners handleClick={handleClick}/>
            </FoodWrapper>
            <FoodWrapper>
                <FoodSauces handleClick={handleClick}/>
            </FoodWrapper>
            <FoodWrapper>
                <FoodFruits handleClick={handleClick}/>
            </FoodWrapper>
            <FoodWrapper>
                <FoodFish handleClick={handleClick}/>
            </FoodWrapper>
            <FoodWrapper>
                <FoodSpices handleClick={handleClick} />
            </FoodWrapper>
            <FoodWrapper>
                <FoodDiary handleClick={handleClick}/>
            </FoodWrapper>
        </>
    )
};

export default Picker