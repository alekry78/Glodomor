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
const Modal = ({title,ingredients,instructions,clearModal,img}) => {
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
                            {ingredients.map(el=>{
                                return(
                                    <Ingredient>
                                        {el}
                                    </Ingredient>
                                )
                            })}
                        </Ingredients>
                    </Container>
                </Recipe>
            </RecipeContainer>
        </ModalView>
    )
};

export default Modal