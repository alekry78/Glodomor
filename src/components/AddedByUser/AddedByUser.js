import React, {useEffect, useState} from 'react';
import firebase from "../../base";
import history from "../../history";
import {AddedContainer, AddedRecipesContainer, Choose, ChooseContainer, ChosenHeader} from "./AddedByUser.styles";
import {Navigation, Previous} from "../App/App.styles";
import Recipe from "../App/Recipe/Recipe";
import Modal from "../App/Modal/Modal";
import AddRecipe from "../AddRecipe/AddRecipe";
const AddedByUser = ({user}) => {
    const [addedByUser, setAddedByUser] = useState([]);
    const [premade, setPremade] = useState([]);
    const [modal, setModal] = useState({
        title: "",
        requiredIngredients: [],
        additionalIngredients: [],
        image: "",
        instructions: ""
    })
    const [chosen, setChosen] = useState("wszystkie");
    const [editRecipe,setEditRecipe] = useState();
    useEffect(() => {
        setAddedByUser([]);
        setPremade([]);
        const recipesRef = firebase.database().ref(`Users/${user.uid}/Recipes`);
        recipesRef.on("value", (snapshot) => {
            const recipes = snapshot.val();
            const recipesArray = [];
            for (let id in recipes) {
                recipesArray.push({ID: id, added: recipes[id]});
            }
            setAddedByUser(recipesArray);
        })
        const premadeRef = firebase.database().ref(`Users/${user.uid}/PremadeRecipes`);
        premadeRef.on("value",(snapshot)=>{
            const recipes = snapshot.val();
            const recipesArray = [];
            for(let id in recipes){
                recipesArray.push({ID: id, added: recipes[id]});
            }
            setPremade(recipesArray);
        })
    }, [user.uid])
    const showModal = (title, requiredIngredients, additionalIngredients, instructions, image) => {
        if (additionalIngredients !== undefined) {
            setModal({
                title,
                requiredIngredients,
                additionalIngredients,
                instructions,
                image
            })
        } else {
            setModal({
                title,
                requiredIngredients,
                additionalIngredients: [],
                instructions,
                image
            })
        }
    }
    const handleRemove = (id) => {
        const addedRecipeRef = firebase.database().ref(`Users/${user.uid}/Recipes`).child(id);
        addedRecipeRef.remove();
    }
    const handleFavourite = (id, favourites) => {
        const favouriteRef = firebase.database().ref(`Users/${user.uid}/Recipes`).child(id);
        favouriteRef.update({
            favourite: !favourites
        }) 
    }
    const handlePremadeFavorite = (ID, favourite) => {
        const favouriteRef = firebase.database().ref(`Users/${user.uid}/PremadeRecipes`).child(ID);
        favouriteRef.update({
            favourite: !favourite
        })
    }
    const handleEdit = (id) =>{
        setEditRecipe({ID:id,recipe:addedByUser.filter(el=>el.ID === id)[0].added})
    }
    const saveEdited = () => {
        setEditRecipe();
    }
    return (
        <AddedContainer>
            {editRecipe ? <AddRecipe  user={user} reqprop={editRecipe.recipe.requiredIngredients} ingrprop={[]} nameprop={editRecipe.recipe.title} descprop={editRecipe.recipe.details} instrprop={editRecipe.recipe.instructions} imgprop={editRecipe.recipe.image} edit={true} id={editRecipe.ID} saveEdited={saveEdited}/> :
            <>
            <Navigation>
                <Previous onClick={() => {
                    history.push("/app")
                    window.location.reload(true);
                }}/>
            </Navigation>
            <ChooseContainer>
                <Choose onClick={() => setChosen("wszystkie")}>Wszystkie</Choose>
                <Choose onClick={() =>  setChosen("twoje")}>Twoje</Choose>
                <Choose onClick={() =>  setChosen("ulubione")}>Ulubione</Choose>
            </ChooseContainer>
            <ChosenHeader>
                    {chosen}
                </ChosenHeader>
            <AddedRecipesContainer>
                {chosen === "ulubione" ? addedByUser.filter(el=>el.added.favourite===true).map(el => {
                        return (
                            <Recipe title={el.added.title} details={el.added.details}
                                    requiredIngredients={el.added.requiredIngredients}
                                    additionalIngredients={el.added.additionalIngredients} image={el.added.image}
                                    instructions={el.added.instructions} favourite={el.added.favourite}
                                    showModal={showModal} id={el.ID} remove={true} makeFavourite={handleFavourite}
                                    removeRecipe={handleRemove} edit={true} handleEdit={handleEdit} key={el.added.id}/>
                        )
                }) :null }
                {chosen === "ulubione" ? premade.filter(el=>el.added.favourite===true).map(el=>{
                    return (
                        <Recipe title={el.added.title} details={el.added.details}
                                requiredIngredients={el.added.requiredIngredients}
                                additionalIngredients={el.added.additionalIngredients} image={el.added.image}
                                instructions={el.added.instructions} favourite={el.added.favourite}
                                showModal={showModal} id={el.ID} remove={false} makeFavourite={handlePremadeFavorite}
                                removeRecipe={handleRemove} key={el.added.id}/>
                    )
                }): null}
                {chosen === "wszystkie" ? premade.map(el=>{
                    return(
                        <Recipe title={el.added.title} details={el.added.details}
                                    requiredIngredients={el.added.requiredIngredients}
                                    additionalIngredients={el.added.additionalIngredients} image={el.added.image}
                                    instructions={el.added.instructions} favourite={el.added.favourite}
                                    showModal={showModal} id={el.ID} remove={false} makeFavourite={handlePremadeFavorite}
                                    removeRecipe={handleRemove} key={el.added.id}/>
                    )
                }) : null}
                {chosen === "wszystkie" ? addedByUser.map(el=>{
                    return(
                        <Recipe title={el.added.title} details={el.added.details}
                                    requiredIngredients={el.added.requiredIngredients}
                                    additionalIngredients={el.added.additionalIngredients} image={el.added.image}
                                    instructions={el.added.instructions} favourite={el.added.favourite}
                                    showModal={showModal} id={el.ID} remove={true} makeFavourite={handleFavourite}
                                    removeRecipe={handleRemove} edit={true} handleEdit={handleEdit} key={el.added.id}/>
                    )
                }) : null}
                {chosen === "twoje" ? addedByUser.map(el=>{
                    return(
                         <Recipe title={el.added.title} details={el.added.details}
                requiredIngredients={el.added.requiredIngredients}
                additionalIngredients={el.added.additionalIngredients} image={el.added.image}
                instructions={el.added.instructions} favourite={el.added.favourite}
                showModal={showModal} id={el.ID} remove={true} makeFavourite={handleFavourite}
                removeRecipe={handleRemove} edit={true} handleEdit={handleEdit} key={el.added.id}/>
)
                }) : null}
            </AddedRecipesContainer>
            {modal.requiredIngredients.length > 0 ?
                <Modal clearModal={showModal} title={modal.title} requiredIngredients={modal.requiredIngredients}
                       additionalIngredients={modal.additionalIngredients} img={modal.image}
                       instructions={modal.instructions}/> : null}
                       </>
             }
        </AddedContainer>
    )
};

export default AddedByUser