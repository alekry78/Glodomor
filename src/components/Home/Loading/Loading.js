import React from 'react'
import { useEffect } from 'react';
import {Roller} from "react-awesome-spinners";
import {LoadingContainer} from "./Loading.styles.js";
export default function Loading({authListener}) {
    useEffect(()=>{
        authListener();
    },[])
    return (
        <LoadingContainer>
            <Roller />
        </LoadingContainer>
    )
}
