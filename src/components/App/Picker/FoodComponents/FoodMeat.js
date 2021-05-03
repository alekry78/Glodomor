import React, {useEffect, useState} from 'react';
import {ReactComponent as Meat} from "../../../img/meat.svg";
import firebase from "../../../../base";

const FoodMeat = ({handleClick}) => {
    const [meats,setMeats] = useState([])
    useEffect(()=>{
        const ingredient = firebase.database().ref("Ingredients/Meats");
        ingredient.on("value",(snapshot)=>{
            const meatsRef = snapshot.val();
            for(let id in meatsRef){
               setMeats(prevState=>[...prevState,meatsRef[id]])
            }
        })
    },[])
 return (
        <>
            <Meat onClick={()=>{
                handleClick(meats[0].sort())
            }}/>
            <h2>MIĘSO</h2>
        </>
    )
};

export default FoodMeat