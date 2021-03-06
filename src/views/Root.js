import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import Home from "../components/Home/Home";
import GlobalStyle from "../theme/GlobalStyles";
import {theme} from "../theme/theme";
import App from "../components/App/App";
import AddRecipe from "../components/AddRecipe/AddRecipe";
import history from '../history';
import AddedByUser from "../components/AddedByUser/AddedByUser";
import firebase from "../base";
import Loading from "../components/Home/Loading/Loading";
const Root = () => {
    const[user,setUser]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[emailError,setEmailError]=useState("");
    const[passError,setPassError]=useState("");
    const[hasAccount,setHasAccount]=useState(false);
    const clearInputs = () =>{
        setEmail('');
        setPassword('');
    }
    const clearErrors = () =>{
        setEmailError('');
        setPassError('');
    }
    const handleLogin = () => {
        clearErrors();
        firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .catch(err =>{
                switch(err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPassError(err.message);
                        break;
                }
            })
    };
    const handleSignUp = () =>{
        clearErrors();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then((userCredential)=>{
                const allRecipesRef = firebase.database().ref(`Recipes`);
                allRecipesRef.on("value",(snapshot)=>{
                    const addedRecipes = snapshot.val();
                    for(let id in addedRecipes){
                        firebase.database().ref(`Users/${userCredential.user.uid}/PremadeRecipes`).push(addedRecipes[id]);
                    }
                })
            })
            .catch(err =>{
                switch(err.code){
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPassError(err.message);
                        break;
                }
            })
    };
    const handleLogout = () => {
        firebase.auth().signOut();
        history.push("/");
    }
    const authListener = () =>{
        firebase.auth().onAuthStateChanged((user) =>{
            if(user){
                clearInputs();
                setUser(user);
            }else{
                setUser("");
            }
        })
    }
    const initialArray = [];
    return(
        <Router history={history}>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Switch>
                    <Route exact path="/">
                        {user ? <App user={user} handleLogout={handleLogout}/> :  <Home email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin}
                                                 handleSignUp={handleSignUp} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passError={passError} authListener={authListener} user={user}/>}
                    </Route>
                    <Route exact path="/app">
                        {user ? <App user={user} handleLogout={handleLogout}/> : <Loading authListener={authListener} /> }
                    </Route>
                    <Route exact path="/add-new">
                        {user ? <AddRecipe user={user} reqprop={initialArray} ingrprop={initialArray} nameprop="" descprop="" instrprop="" imgprop="" edit={false} /> : <Loading authListener={authListener} /> }
                    </Route>
                    <Route exact path="/all-recipes">
                        {user ? <AddedByUser user={user} /> : <Loading authListener={authListener} /> }
                    </Route>
                </Switch>
            </ThemeProvider>
        </Router>
    )
};

export default Root