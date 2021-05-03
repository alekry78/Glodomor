import React, {useEffect, useState} from 'react';
import {ReactComponent as Wheat} from "../../../img/wheat.svg";
import firebase from "../../../../base";

const FoodWheat = ({handleClick}) => {
    const [wheat,setWheat] = useState([])
    useEffect(()=>{
        const ingredient = firebase.database().ref("Ingredients/Wheat");
        ingredient.on("value",(snapshot)=>{
            const ingRef = snapshot.val();
            for(let id in ingRef){
                setWheat(prevState=>[...prevState,ingRef[id]])
            }
        })
    },[])
 return (
        <>
            <Wheat onClick={()=>handleClick(wheat[0].sort())}/>
            <h2>ZBOŻA</h2>
        </>
    )
};

export default FoodWheat