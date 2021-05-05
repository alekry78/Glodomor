import React from 'react';
import {
    Recipe,
    ModalView,
    Title,
    Container,
    Navigation,
    Exit,
    Instructions,
    Image,
    Ingredient,
    Ingredients, Strong, ImageContainer, RecipeContainer
} from "./Modal.styles";
const Modal = ({title,requiredIngredients,additionalIngredients,instructions,clearModal,img}) => {
    return(
        <ModalView>
            <Navigation>
                <Exit onClick={()=>clearModal("",[],"","")}/>
            </Navigation>
            <RecipeContainer>
                <Recipe>
                    <Container>
                        <Title>
                            {title}
                        </Title>
                        <Strong>
                            Instrukcje
                        </Strong>
                        <Instructions>
                           <p>
                               {instructions}
                           </p>
                        </Instructions>
                    </Container>
                    <Container>
                        <ImageContainer>
                            <Image src={img} />
                        </ImageContainer>
                        <Strong>
                            Składniki
                        </Strong>
                        <Ingredients>
                            {requiredIngredients.map(el=>{
                                return(
                                    <Ingredient>
                                        {el}
                                    </Ingredient>
                                )
                            })}
                            {additionalIngredients.length > 0 ? additionalIngredients.map(el=>{
                                return(
                                    <Ingredient>
                                        {el}
                                    </Ingredient>
                                )
                            }) : null}
                        </Ingredients>
                    </Container>
                </Recipe>
            </RecipeContainer>
        </ModalView>
    )
};

export default Modal