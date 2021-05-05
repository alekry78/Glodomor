import React, {useState} from 'react';
import {Container, Details, Icon, IconDelete, IconFav, Image, RecipeContainer, Title} from './Recipe.styles';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
const Recipe = ({title,details,showModal,requiredIngredients,additionalIngredients,instructions,image,favourite,id,remove,removeRecipe,makeFavourite}) => {
    const[fav,setFav]=useState(favourite)
    return(
      <RecipeContainer key={`${title}title`}>
          <Image key={`${title}image`} src={image}/>
          <Container key={`${title}container`} onClick={()=>showModal(title,requiredIngredients,additionalIngredients,instructions,image)}>
              <Title key={`${title}`}>{title}</Title>
              <Details key={`${title}details`}>{details}</Details>
          </Container>
          {!fav ? <IconFav icon={faStar} onClick={()=> {
              makeFavourite(id,favourite);
              setFav(!fav);
          }}/> : <IconDelete icon={faStarHalfAlt} onClick={()=> {
              makeFavourite(id,favourite);
              setFav(!fav);
          }} />
          }
          {remove ? <IconDelete icon={faTrash} onClick={() => removeRecipe(id)}/> : null }
      </RecipeContainer>
    )
};

export default Recipe