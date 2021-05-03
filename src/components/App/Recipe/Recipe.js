import React from 'react';
import {Container, Details, Icon, Image, RecipeContainer, Title} from './Recipe.styles';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Recipe = ({title,details,showModal,ingredients,instructions,image,favourite,id,remove,removeRecipe,makeFavourite}) => {
    return(
      <RecipeContainer key={`${title}title`}>
          <Image key={`${title}image`} src={image}/>
          <Container key={`${title}container`} onClick={()=>showModal(title,ingredients,instructions,image)}>
              <Title key={`${title}`}>{title}</Title>
              <Details key={`${title}details`}>{details}</Details>
          </Container>
          {!favourite ? <Icon icon={faStar} onClick={()=> makeFavourite(id,title,details,ingredients,instructions,image)}/> : null}
          {remove ? <Icon icon={faTrash} onClick={() => removeRecipe(id)}/> : null }
      </RecipeContainer>
    )
};

export default Recipe