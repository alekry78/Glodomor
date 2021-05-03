import React, {useState} from 'react';
import {Homepage, Next, Username} from "./Home.styles";
import logoxs from '../img/logoxs.png';
import {Alert} from "../AddRecipe/AddRecipe.styles";
import history from "../../history";
const Home = () => {
    const[username,setUsername]=useState("");
    const logIn = () =>{
        history.push(`app/${username}`)
        window.location.reload(true);
    }
    return(
      <Homepage>
          <img src={logoxs} alt=""/>
          <Alert>Wprowadź swoją nazwę użytkownika</Alert>
          <Username type="text" value={username} onChange={e=>setUsername(e.target.value)}/>
          {username.length < 4 ? null : <Next onClick={logIn} />}
      </Homepage>
    )
};
export default Home