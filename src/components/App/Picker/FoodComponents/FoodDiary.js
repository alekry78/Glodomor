import React, {useEffect, useState} from 'react';
import {ReactComponent as Diary} from "../../../img/cheese.svg";
import firebase from "../../../../base";

const FoodDiary = ({handleClick}) => {
    const [diary,setDiary] = useState([])
    useEffect(()=>{
        const ingredient = firebase.database().ref("Ingredients/Diary");
        ingredient.on("value",(snapshot)=>{
            const ingRef = snapshot.val();
            for(let id in ingRef){
                setDiary(prevState=>[...prevState,ingRef[id]])
            }
        })
    },[])
    return (
        <>
            <Diary onClick={()=>handleClick(diary[0].sort())}/>
            <h2>Nabiał</h2>
        </>
    )
};

export default FoodDiary