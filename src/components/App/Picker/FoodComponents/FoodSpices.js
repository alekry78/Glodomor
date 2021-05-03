import React, {useEffect, useState} from 'react';
import {ReactComponent as Spices} from "../../../img/chili.svg";
import firebase from "../../../../base";

const FoodSpices = ({handleClick}) => {
    const [spices,setSpices] = useState([])
    useEffect(()=>{
        const ingredient = firebase.database().ref("Ingredients/Spices");
        ingredient.on("value",(snapshot)=>{
            const ingRef = snapshot.val();
            for(let id in ingRef){
                setSpices(prevState=>[...prevState,ingRef[id]])
            }
        })
    },[])
 return (
        <>
            <Spices onClick={()=>handleClick(spices[0].sort())}/>
            <h2>Przyprawy</h2>
        </>
    )
};

export default FoodSpices