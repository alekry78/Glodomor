import React, {useEffect} from 'react';
import {Homepage, Image} from "./Home.styles";
import logoxs from '../img/logoxs.png';
import Login from "./Login/Login";
const Home = ({user,email,setEmail,password,setPassword,handleLogin,handleSignUp,hasAccount,setHasAccount,emailError,passError,authListener}) => {
    useEffect(()=>{
        authListener();
    },[])
    return(
      <Homepage>
          <Image src={logoxs} alt=""/>
          <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin}
                             handleSignUp={handleSignUp} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passError={passError} />
      </Homepage>
    )
};
export default Home