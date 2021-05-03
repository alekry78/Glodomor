import React, {useState, useEffect} from 'react';
import {
    AddedByUser,
    MainHeader,
    MainSection,
    Navigation,
    PickerContainer,
    Previous,
    Search,
    Wrapper
} from "./App.styles";
import {Next} from "../Home/Home.styles";
import Ingredients from "./Ingredients/Ingredients";
import Picker from "./Picker/Picker";
import Recipe from "./Recipe/Recipe";
import ChosenIngredients from "./ChosenIngredients/ChosenIngredients";
import firebase from "../../base.js";
import history from "../../history";
import Modal from "./Modal/Modal";
const initialState=[]
const App = () => {
    const [ingredients,setIngredients] = useState(initialState);
    const [recipes,setRecipes] = useState([]);
    const [chosenIngredients,setChosenIngredients] = useState([]);
    const [searchedRecipes,setSearchedRecipes] = useState([]);
    const [modal,setModal] = useState({
        title:"",
        ingredients:[],
        description:"",
        instructions:""
    })
    useEffect(()=>{
        setRecipes([]);
        const recipesRef = firebase.database().ref(`Users/${history.location.pathname.slice(5,history.location.pathname.length)}/Recipes`);
        recipesRef.on("value",(snapshot)=>{
            const addedRecipes = snapshot.val();
            for(let id in addedRecipes){
                setRecipes(prevState => [...prevState,{ID:id,recipe:addedRecipes[id]}])
            }
        })
    },[])
    const handleClick = (data) => {
        setIngredients(initialState);
        setIngredients([...data])
    }
    const handleChoseIng = (ing) => {
        if (chosenIngredients.filter(el => el !== ing).length < chosenIngredients.length) {
            setChosenIngredients(chosenIngredients.filter(el => el !== ing));
        } else {
            setChosenIngredients(prevState => [...prevState, ing]);
        }
        setSearchedRecipes([]);
    }
    const handleDeleteIngredient = (element) =>{
        setChosenIngredients(chosenIngredients.filter(el=>el!==element));
        setSearchedRecipes([]);
    }
    const handleCheck = () =>{
        setSearchedRecipes([])
        let clicker = 0;
        for(let i = 0; i < recipes.length; i++) {
            for(let j = 0 ; j < chosenIngredients.length; j++){
                for(let k = 0 ; k < recipes[i].recipe.ingredients.length;k++){
                    if(chosenIngredients.sort()[j]==recipes[i].recipe.ingredients.sort()[k]){
                        clicker++;
                        if(clicker == recipes[i].recipe.ingredients.length){
                            setSearchedRecipes(prevState=>[...prevState,recipes[i]]);
                            clicker = 0;
                        }
                    }
                }
            }
        }
    }
    const showModal = (title,ingredients,instructions,image) =>{
        setModal({
            title,
            ingredients,
            instructions,
            image
        })
    }
    const handleFavourite = (ID,name,details,ingredients,instructions,image) =>{
        const favRecipeRef = firebase.database().ref(`Users/${history.location.pathname.slice(5,history.location.pathname.length)}/Recipes`);
        favRecipeRef.child(ID).update({
            favourite:true
        })
        const AddFavRecipeRef = firebase.database().ref(`Users/${history.location.pathname.slice(5,history.location.pathname.length)}/Favourites`);
        const favRecipe = {
            "title": name,
            "details": details,
            "ingredients": ingredients,
            "instructions": instructions,
            "image":image,
            "favourite":true,
            "id":ID
        }
        AddFavRecipeRef.push(favRecipe)
    }
    return (
        <Wrapper>
            <Navigation>
                <Previous onClick={()=>{
                    history.push("/");
                    window.location.reload(true);
                }}/>
                <AddedByUser onClick={()=>{
                    history.push(`/added-by-user/${history.location.pathname.slice(5,history.location.pathname.length)}`);
                    window.location.reload(true);
                }}>
                    Twoje przepisy
                </AddedByUser>
                <AddedByUser onClick={()=>{
                    history.push(`/users-favourites/${history.location.pathname.slice(5,history.location.pathname.length)}`);
                    window.location.reload(true);
                }}>
                    Ulubione przepisy
                </AddedByUser>
                <Next onClick={()=>{
                    history.push(`/add-new/${history.location.pathname.slice(5,history.location.pathname.length)}`)
                    window.location.reload(true);
                }}/>
            </Navigation>
            <MainSection>
                <MainHeader>
                    Co masz w lodówce?
                </MainHeader>
                <PickerContainer>
                    <Picker handleClick={handleClick}/>
                </PickerContainer>
                {ingredients.length>0 ? <Ingredients ingredients={ingredients} handleChoseIng={handleChoseIng}/> : null}
                {chosenIngredients.length > 0 ? <ChosenIngredients chosen={chosenIngredients} deleteChosen={handleDeleteIngredient}/> : null}
                {chosenIngredients.length > 0 ? <Search onClick={handleCheck}>Szukaj!</Search>: null}
                {searchedRecipes.length > 0 ? searchedRecipes.map(el=>(<Recipe title={el.recipe.title} details={el.recipe.details} ingredients={el.recipe.ingredients} image={el.recipe.image} instructions={el.recipe.instructions} favourite={el.recipe.favourite} showModal={showModal} id={el.ID}  remove={false} makeFavourite={handleFavourite}/>)) : null}
            </MainSection>
            {modal.ingredients.length > 0 ? <Modal clearModal={showModal} title={modal.title} ingredients={modal.ingredients} img={modal.image} instructions={modal.instructions}/> : null}
        </Wrapper>
    )
};
export default App