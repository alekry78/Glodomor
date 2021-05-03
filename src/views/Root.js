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
import Favourites from "../components/Favourites/Favourites";
const Root = () => {
    return(
        <Router history={history}>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path={`/app/${history.location.pathname.slice(5,history.location.pathname.length)}`}>
                       <App />
                    </Route>
                    <Route path={`/add-new/${history.location.pathname.slice(9,history.location.pathname.length)}`}>
                        <AddRecipe />
                    </Route>
                    <Route path={`/added-by-user/${history.location.pathname.slice(15,history.location.pathname.length)}`}>
                        <AddedByUser />
                    </Route>
                    <Route path={`/users-favourites/${history.location.pathname.slice(18,history.location.pathname.length)}`}>
                        <Favourites />
                    </Route>
                </Switch>
            </ThemeProvider>
        </Router>
    )
};

export default Root