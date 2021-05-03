import React, {useEffect, useState} from 'react';
import {ReactComponent as Crops} from "../../../img/harvest.svg";
import firebase from "../../../../base";

const FoodFruits = ({handleClick}) => {
    const [fruits,setFruits] = useState([])
    useEffect(()=>{
        const ingredient = firebase.database().ref("Ingredients/Fruits");
        ingredient.on("value",(snapshot)=>{
            const ingRef = snapshot.val();
            for(let id in ingRef){
                setFruits(prevState=>[...prevState,ingRef[id]])
            }
        })
    },[])
    return (
        <>
            <Crops onClick={()=>handleClick(fruits[0].sort())}/>
            <h2>Owoce</h2>
        </>
    )
};

export default FoodFruits