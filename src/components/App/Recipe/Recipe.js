import React, {useState} from 'react';
import {Container, Details, Icon, IconDelete, IconFav, Image, RecipeContainer, Title,IconEdit,IconNotFav} from './Recipe.styles';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
const Recipe = ({title,details,showModal,requiredIngredients,additionalIngredients,instructions,image,favourite,id,remove,removeRecipe,makeFavourite,edit,handleEdit}) => {
    return(
      <RecipeContainer key={`${title}title`}>
          <Image key={`${title}image`} src={image}/>
          <Container key={`${title}container`} onClick={()=>showModal(title,requiredIngredients,additionalIngredients,instructions,image)}>
              <Title key={`${title}`}>{title}</Title>
              <Details key={`${title}details`}>{details}</Details>
          </Container>
          {!favourite ? <IconFav icon={faStar} onClick={()=> makeFavourite(id,favourite)}/> : <IconNotFav icon={faStarHalfAlt} onClick={()=>makeFavourite(id,favourite)}/>}
          {remove ? <IconDelete icon={faTrash} onClick={() => removeRecipe(id)}/> : null }
          {edit ? <IconEdit icon={faEdit} onClick={()=>handleEdit(id)} /> : null }
      </RecipeContainer>
    )
};

export default Recipe