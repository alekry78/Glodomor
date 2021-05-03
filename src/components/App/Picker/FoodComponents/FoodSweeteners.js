import React, {useEffect, useState} from 'react';
import {ReactComponent as Sweeteners} from "../../../img/sugar-cubes.svg";
import firebase from "../../../../base";

const FoodSweeteners = ({handleClick}) => {
    const [sweeteners,setSweeteners] = useState([])
    useEffect(()=>{
        const ingredient = firebase.database().ref("Ingredients/Sweeteners");
        ingredient.on("value",(snapshot)=>{
            const ingRef = snapshot.val();
            for(let id in ingRef){
                setSweeteners(prevState=>[...prevState,ingRef[id]])
            }
        })
    },[])
 return (
        <>
            <Sweeteners onClick={()=>handleClick(sweeteners[0].sort())}/>
            <h2>Słodziki</h2>
        </>
    )
};

export default FoodSweeteners