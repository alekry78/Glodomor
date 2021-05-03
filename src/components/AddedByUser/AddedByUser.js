import React, {useEffect, useState} from 'react';
import firebase from "../../base";
import history from "../../history";
import {AddedContainer, AddedRecipesContainer} from "./AddedByUser.styles";
import {Navigation, Previous} from "../App/App.styles";
import Recipe from "../App/Recipe/Recipe";
import Modal from "../App/Modal/Modal";

const AddedByUser = () => {
    const [addedByUser, setAddedByUser] = useState([]);
    const [modal,setModal] = useState({
        title:"",
        ingredients:[],
        image:"",
        instructions:""
    })
    useEffect(() => {
        const recipesRef = firebase.database().ref(`Users/${history.location.pathname.slice(15, history.location.pathname.length)}/Recipes`);
        recipesRef.on("value", (snapshot) => {
            const recipes = snapshot.val();
            for (let id in recipes) {
                setAddedByUser(prevState => [...prevState,{ID:id,added:recipes[id]}])
            }
        })
    }, [])
    const showModal = (title,ingredients,instructions,image) =>{
        setModal({
            title,
            ingredients,
            instructions,
            image
        })
    }
    const handleRemove = (id) =>{
        const addedRecipeRef = firebase.database().ref(`Users/${history.location.pathname.slice(15, history.location.pathname.length)}/Recipes`).child(id);
        addedRecipeRef.remove();
        setAddedByUser(addedByUser.filter(el => el.ID !== id));
    }
    return(
        <AddedContainer>
            <Navigation>
                <Previous onClick={()=>{
                    history.push(`/app/${history.location.pathname.slice(15, history.location.pathname.length)}`)
                    window.location.reload(true);
                }}/>
            </Navigation>
            <AddedRecipesContainer>
                {addedByUser.map(el=>{
                    return(
                        <Recipe title={el.added.title} details={el.added.details} ingredients={el.added.ingredients} image={el.added.image} instructions={el.added.instructions} favourite={el.added.favourite} showModal={showModal} id={el.ID} remove={true} removeRecipe={handleRemove}/>
                    )
                })}
            </AddedRecipesContainer>
            {modal.ingredients.length > 0 ? <Modal clearModal={showModal} title={modal.title} ingredients={modal.ingredients} img={modal.image} instructions={modal.instructions}/> : null}
        </AddedContainer>
    )
};

export default AddedByUser