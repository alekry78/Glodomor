import React from 'react';
import {
    ModalView,
    Navigation,
    Exit,
    Image, ImageContainer, RecipeContainer, Title,IngredientsContainer,Ingredient,IngredientSpan, Line,ShortLine, Instructions, InstructionsText,
} from "./Modal.styles";
const Modal = ({title,requiredIngredients,additionalIngredients,instructions,clearModal,img}) => {
    return(
        <ModalView>
            <Navigation>
                <Exit onClick={()=>clearModal("",[],"","")}/>
            </Navigation>
            <RecipeContainer>
                <ImageContainer>
                    <Image src={img} />
                </ImageContainer>
                
                <Title>
                    {title}
                </Title>
                <IngredientsContainer>
                    {requiredIngredients.sort().map(el=>{
                        return(
                            <Ingredient>
                                <IngredientSpan>
                                    {el}
                                </IngredientSpan>
                            </Ingredient>
                        )
                    })}
                    {additionalIngredients.sort().map(el=>{
                        return(
                            <Ingredient>
                                <IngredientSpan>
                                    {el}
                                </IngredientSpan>
                            </Ingredient>
                        )
                    })}
                </IngredientsContainer>
                <Title>
                    Instrukcje
                </Title>
                <ShortLine />
                <Instructions>
                    <InstructionsText>
                        {instructions}
                    </InstructionsText>
                </Instructions>
                {/* <Recipe>
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
                </Recipe> */}
            </RecipeContainer>
        </ModalView>
    )
};

export default Modal