import React, {useEffect, useState} from 'react';
import {ReactComponent as Fish} from "../../../img/fish.svg";
import firebase from "../../../../base";

const FoodFish = ({handleClick}) => {
    const [fish,setFish] = useState([])
    useEffect(()=>{
        const ingredient = firebase.database().ref("Ingredients/Fish");
        ingredient.on("value",(snapshot)=>{
            const ingRef = snapshot.val();
            for(let id in ingRef){
                setFish(prevState=>[...prevState,ingRef[id]])
            }
        })
    },[])
    return (
        <>
            <Fish onClick={() => handleClick(fish[0].sort())}/>
            <h2>Ryby</h2>
        </>
    )
};

export default FoodFish