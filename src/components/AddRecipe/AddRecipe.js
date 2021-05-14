import React, {useEffect, useState} from 'react';
import {MainHeader, MainSection, Navigation, Previous, Wrapper} from "../App/App.styles";
import {Alert, Form, Input, InputContainer, Label, Submit, Textarea, Save} from "./AddRecipe.styles";
import ChosenIngredients from "../App/ChosenIngredients/ChosenIngredients";
import firebase from "../../base.js";
import history from "../../history";

let message = "";
const AddRecipe = ({user,reqprop,ingrprop,nameprop,descprop,instrprop,imgprop,edit,id, saveEdited }) => {
    const [reqIngredientsValue, setReqIngredientsValue] = useState("");
    const [reqIngredients, setReqIngredients] = useState(reqprop);
    const [ingredientsValue, setIngredientsValue] = useState("");
    const [ingredients, setIngredients] = useState(ingrprop);
    const [nameValue, setNameValue] = useState(nameprop)
    const [descValue, setDescValue] = useState(descprop)
    const [instrValue, setInstrValue] = useState(instrprop)
    const [errors,setErrors] = useState({
        name:"",
        ingr:"",
        desc:"",
        instr:""
    })
    const [image, setImage] = useState({
        file:null,
        base64URL:imgprop
    })
    const [all,setAll]=useState([])
    useEffect(()=>{
        const imgRef = firebase.database().ref("Placeholder");
        imgRef.on("value",(snapshot)=> {
            const imgPlaceholder = snapshot.val();
            setImage(prevState => {
                return {
                    ...prevState,
                    base64URL: imgPlaceholder
                }
            })
        })
        const allRef = firebase.database().ref("Ingredients/All");
        allRef.on("value",(snapshot)=>{
                const ingRef = snapshot.val();
                for(let id in ingRef){
                    setAll(prevState=>[...prevState,ingRef[id]])
                }
        })
    },[])
    const handleReqIngredient = (e) => {
        setReqIngredientsValue(e.target.value);
    }
    const handleIngredient = (e) => {
        setIngredientsValue(e.target.value);
    }
    const handleDeleteReqIngredient = (element) => {
        setReqIngredients(reqIngredients.filter(el => el !== element));
    }
    const handleDeleteIngredient = (element) => {
        setIngredients(reqIngredients.filter(el => el !== element));
    }
    const handleAddReqIngredient = (e) => {
        if (e.keyCode === 13) {
            message = "";
            if (all[0].filter(el => el != reqIngredientsValue).length < all[0].length) {
                if (reqIngredients.filter(el => el != reqIngredientsValue).length < reqIngredients.length) {
                    message = "Już dodałeś ten składnik!";
                    setReqIngredientsValue("");
                } else {
                    message = "";
                    setReqIngredients(prevState => [...prevState, reqIngredientsValue]);
                    setReqIngredientsValue("");
                }
            } else {
                message = "Nie mamy takiego składnika w bazie!"
                setReqIngredientsValue("");
            }
        } else {
            message = "";
            return null;
        }
    }
    const handleAddIngredient = (e) => {
        if (e.keyCode === 13) {
            message = "";
            if (all[0].filter(el => el != ingredientsValue).length < all[0].length) {
                if (reqIngredients.filter(el => el != ingredientsValue).length < ingredients.length) {
                    message = "Już dodałeś ten składnik!";
                    setIngredientsValue("");
                } else {
                    message = "";
                    setIngredients(prevState => [...prevState, ingredientsValue]);
                    setIngredientsValue("");
                }
            } else {
                message = "Nie mamy takiego składnika w bazie!"
                setIngredientsValue("");
            }
        } else {
            message = "";
            return null;
        }
    }
    const getBase64 = (file) => {
        return new Promise(resolve => {
            let fileInfo;
            let baseURL = "";
            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                console.log("Called", reader);
                baseURL = reader.result;
                resolve(baseURL);
            };
        });
    };

    const handleImageUpload = e => {
        let file = image.file;
        file = e.target.files[0];
        getBase64(file)
            .then(result => {
                file["base64"] = result;
                setImage(prevState=>{
                    return{
                        base64URL: result,
                        file
                    }
                })
            })
            .catch(err => {
                console.log(err);
            });
        setImage(prevState=>{
            return{
                ...prevState,
                file:e.target.files[0]
            }
        })
    };
    const createNewRecipe = () => {
        let error = 0;
        if(nameValue.length <4){
            setErrors(prevState=>{
                return{
                    ...prevState,
                    name:"Nazwa za krótka! Musisz wpisać co najmniej 4 znaki!"
                }
            })
            error++;
        }else{
            setErrors(prevState=>{
                return{
                    ...prevState,
                    name:""
                }
            })
        }
        if(reqIngredients.length < 2){
            setErrors(prevState=>{
                return{
                    ...prevState,
                    ingr:"Za mało składników! Musiz podać co najmniej 2!"
                }
            })
            error ++;
        }else{
            setErrors(prevState=>{
                return{
                    ...prevState,
                    ingr:""
                }
            })
        }
        if(descValue.length < 5){
            setErrors(prevState=>{
                return{
                    ...prevState,
                    desc:"Opis za krótki! Musi zawierać co najmniej 5 znaków!"
                }
            })
            error++;
        }else{
            setErrors(prevState=>{
                return{
                    ...prevState,
                    desc:""
                }
            })
        }
        if(instrValue.length < 10){
            setErrors(prevState=>{
                return{
                    ...prevState,
                    instr:"Instrukacja zbyt krótka! Musi zawierać co najmniej 10 znaków!"
                }
            })
            error++;
        }else{
            setErrors(prevState=>{
                return{
                    ...prevState,
                    instr:""
                }
            })
        }
        if(error <= 0) {
            const recipeRef = firebase.database().ref(`Users/${user.uid}/Recipes`);
            const recipes = {
                "title": nameValue,
                "details": descValue,
                "requiredIngredients": reqIngredients,
                "additionalIngredients":ingredients,
                "instructions": instrValue,
                "image": image.base64URL,
                "favourite": false,
                "id": '_' + Math.random().toString(36).substr(2, 9)
            }
            recipeRef.push(recipes)
            setNameValue("");
            setReqIngredients([]);
            setIngredients([]);
            setDescValue("");
            setInstrValue("");
        }
    }
    const editChosen = (id) =>{
        const editRef = firebase.database().ref(`Users/${user.uid}/Recipes`).child(id)
        editRef.update({
            title: nameValue,
            details: descValue,
            requiredIngredients: reqIngredients,
            additionalIngredients:ingredients,
            instructions: instrValue,
            image: image.base64URL,
    })
        saveEdited();
    }

    return (
        <Wrapper>
            <Navigation>
                {edit ? <Save onClick={()=>{editChosen(id)}}>Zapisz</Save> :<Previous  onClick={()=>{
                    history.push(`/app`);
                    window.location.reload(true);
                }}/>}
            </Navigation>
            <MainSection>
                <MainHeader style={{textAlign: "center",fontSize:"40px"}}>
                    Dodaj swój <br/> przepis!
                </MainHeader>
                <Form>
                    <InputContainer>
                        <Label>
                            Nazwa
                        </Label>
                        {errors.name.length > 0 ? <Alert>{errors.name}</Alert> : null}
                        <Input type="text" value={nameValue} onChange={e => setNameValue(e.target.value)}/>
                    </InputContainer>
                    <InputContainer>
                        <Label>
                            Niezbędne Składniki
                        </Label>
                        {errors.ingr.length > 0 ? <Alert>{errors.ingr}</Alert> : null}
                        {message.length > 0 ? <Alert>{message}</Alert> : null}
                        <Input type="text" onChange={handleReqIngredient} onKeyDown={handleAddReqIngredient}
                               value={reqIngredientsValue}
                               placeholder="Wpisz składnik i zatwierdź dodanie enterem"/>
                        {reqIngredients.length > 0 ?
                            <ChosenIngredients chosen={reqIngredients} deleteChosen={handleDeleteReqIngredient}/> : null}
                    </InputContainer>
                    <InputContainer>
                        <Label>
                            Dodatkowe składniki
                        </Label>
                        <Input type="text" onChange={handleIngredient} onKeyDown={handleAddIngredient}
                               value={ingredientsValue}
                               placeholder="Wpisz składnik i zatwierdź dodanie enterem"/>
                        {ingredients.length > 0 ?
                            <ChosenIngredients chosen={ingredients} deleteChosen={handleDeleteIngredient}/> : null}
                    </InputContainer>
                    <InputContainer>
                        <Label>
                            Opis
                        </Label>
                        {errors.desc.length > 0 ? <Alert>{errors.desc}</Alert> : null}
                        <Input type="text" value={descValue} onChange={e => setDescValue(e.target.value)}/>
                    </InputContainer>
                    <InputContainer>
                        <Label>
                            Instrukcje
                        </Label>
                        {errors.instr.length > 0 ? <Alert>{errors.instr}</Alert> : null}
                        <Textarea col="" row="10" value={instrValue} onChange={e => setInstrValue(e.target.value)}/>
                    </InputContainer>
                    <InputContainer>
                        <Label>
                            Obrazek
                        </Label>
                        <Input type="file" onChange={handleImageUpload}/>
                    </InputContainer>
                </Form>
                {edit ? null :<Submit type="submit" onClick={createNewRecipe}/> }
            </MainSection>
        </Wrapper>
    )
};

export default AddRecipe