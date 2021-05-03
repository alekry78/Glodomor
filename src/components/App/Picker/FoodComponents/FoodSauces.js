import React, {useEffect, useState} from 'react';
import {ReactComponent as Sauces} from "../../../img/soy-sauce.svg";
import firebase from "../../../../base";

const FoodSauces = ({handleClick}) => {
    const [sauces,setSauces] = useState([])
    useEffect(()=>{
        const ingredient = firebase.database().ref("Ingredients/Sauces");
        ingredient.on("value",(snapshot)=>{
            const ingRef = snapshot.val();
            for(let id in ingRef){
                setSauces(prevState=>[...prevState,ingRef[id]])
            }
        })
    },[])
    return (
        <>
            <Sauces onClick={()=>handleClick(sauces[0].sort())}/>
            <h2>sosy</h2>
        </>
    )
};

export default FoodSauces