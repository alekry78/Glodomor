import React, {useState, useEffect} from 'react';
import {
    AddedByUser, LogOut,
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
const App = ({user,handleLogout}) => {
    const [ingredients,setIngredients] = useState(initialState);
    const [recipes,setRecipes] = useState([]);
    const [premadeRecipes,setPremadeRecipes] = useState([]);
    const [chosenIngredients,setChosenIngredients] = useState([]);
    const [searchedRecipes,setSearchedRecipes] = useState([]);
    const [searchedPremadeRecipes,setSearchedPremadeRecipes] = useState([]);
    const [modal,setModal] = useState({
        title:"",
        requiredIngredients:[],
        additionalIngredients:[],
        instructions:"",
        image:""
    })
    useEffect(()=>{
        setRecipes([]);
        const allRecipesRef = firebase.database().ref(`Users/${user.uid}/PremadeRecipes`);
        allRecipesRef.on("value",(snapshot)=>{
            const addedRecipes = snapshot.val();
            for(let id in addedRecipes){
                setPremadeRecipes(prevState => [...prevState,{ID:id,recipe:addedRecipes[id]}])
            }
        })
        const recipesRef = firebase.database().ref(`Users/${user.uid}/Recipes`);
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
        for(let i = 0; i < recipes.length; i++) {
            let clicker = 0;
            for(let j=0; j<chosenIngredients.length;j++){
                console.log('Przepis ',i,recipes[i].recipe.requiredIngredients);
                if(recipes[i].recipe.requiredIngredients.indexOf(chosenIngredients[j])>=0){
                    console.log(chosenIngredients[j]);
                    clicker++;
                }
            }
            console.log('przepis',i,'->',clicker,recipes[i].recipe.requiredIngredients.length );
            if(clicker === recipes[i].recipe.requiredIngredients.length){
                console.log('wybieram: ', recipes[i].recipe.requiredIngredients);
                             setSearchedRecipes(prevState=>[...prevState,recipes[i]]);
                                clicker = 0;
                            }
            
        }
    }
    const handleCheckPremade = () =>{
        setSearchedPremadeRecipes([])
        for(let i = 0; i < premadeRecipes.length; i++) {
            let clicker = 0;
            for(let j=0; j<chosenIngredients.length;j++){
                if(premadeRecipes[i].recipe.requiredIngredients.indexOf(chosenIngredients[j])>=0){
                    clicker++;
                }
            }
            if(clicker === premadeRecipes[i].recipe.requiredIngredients.length){
                             setSearchedPremadeRecipes(prevState=>[...prevState,premadeRecipes[i]]);
                                clicker = 0;
                            }
            
        }
    }
    const showModal = (title,requiredIngredients,additionalIngredients,instructions,image) =>{
        if(additionalIngredients!==undefined){
            setModal({
                title,
                requiredIngredients,
                additionalIngredients,
                instructions,
                image
            })
        }else{
            setModal({
                title,
                requiredIngredients,
                additionalIngredients:[],
                instructions,
                image
            })
        }

    }
    const handleFavourite = (ID, favourite) => {
        firebase.database().ref(`Users/${user.uid}/Recipes`).child(ID).update({
            favourite: !favourite
        })
        searchedRecipes.filter(el=>el.ID === ID)[0].recipe.favourite = !searchedRecipes.filter(el=>el.ID === ID)[0].recipe.favourite
    }
    const handlePremadeFavorite = (ID, favourite) => {
        firebase.database().ref(`Users/${user.uid}/PremadeRecipes`).child(ID).update({
            favourite:!favourite
        })
        searchedPremadeRecipes.filter(el=>el.ID === ID)[0].recipe.favourite = !searchedPremadeRecipes.filter(el=>el.ID === ID)[0].recipe.favourite
    }
    
    return (
        <Wrapper>
            <Navigation>
                <LogOut onClick={()=>{
                    handleLogout();
                    window.location.reload(true);
                }
                    }>
                    Wyloguj
                </LogOut>
                <AddedByUser onClick={()=>{
                    history.push("/all-recipes");
                    window.location.reload(true);
                }}>
                    Wszystkie przepisy
                </AddedByUser>
                <Next onClick={()=>{
                    history.push("/add-new")
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
                {chosenIngredients.length > 0 ? <Search onClick={()=>{handleCheck(); handleCheckPremade();}}>Szukaj!</Search>: null}
                {searchedRecipes.length > 0 ? searchedRecipes.map(el=>(<Recipe title={el.recipe.title} details={el.recipe.details} requiredIngredients={el.recipe.requiredIngredients} additionalIngredients={el.recipe.additionalIngredients} image={el.recipe.image} instructions={el.recipe.instructions} favourite={el.recipe.favourite} showModal={showModal} id={el.ID}  remove={false} makeFavourite={handleFavourite}/>)) : null}
                {searchedPremadeRecipes.length > 0 ? searchedPremadeRecipes.map(el=>(<Recipe title={el.recipe.title} details={el.recipe.details} requiredIngredients={el.recipe.requiredIngredients} additionalIngredients={el.recipe.additionalIngredients} image={el.recipe.image} instructions={el.recipe.instructions} favourite={el.recipe.favourite} showModal={showModal} id={el.ID}  remove={false} makeFavourite={handlePremadeFavorite}/>)) : null}
            </MainSection>
            {modal.requiredIngredients.length > 0 ? <Modal clearModal={showModal} title={modal.title} requiredIngredients={modal.requiredIngredients} additionalIngredients={modal.additionalIngredients} img={modal.image} instructions={modal.instructions}/> : null}
        </Wrapper>
    )
};
export default App