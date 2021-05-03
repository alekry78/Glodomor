import React, {useEffect, useState} from 'react';
import {ReactComponent as Vegetables} from "../../../img/vegetable.svg";
import firebase from "../../../../base";
const FoodVegetables = ({handleClick}) => {
    const [vegetables,setVegetables] = useState([])
    useEffect(()=>{
        const ingredient = firebase.database().ref("Ingredients/Vegetables");
        ingredient.on("value",(snapshot)=>{
            const ingRef = snapshot.val();
            for(let id in ingRef){
                setVegetables(prevState=>[...prevState,ingRef[id]])
            }
        })
    },[])
 return (
        <>
            <Vegetables onClick={()=>handleClick(vegetables[0].sort())}/>
            <h2>Warzywa</h2>
        </>
    )
};

export default  FoodVegetables