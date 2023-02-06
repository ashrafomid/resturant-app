import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import './RecipeList.css'

export default function RecipeList({recipe}) {
    const {mode} = useTheme()
    if(recipe.length ===0 ){
        return <div className='error'>No Recipes to Load...</div>
    }
  return (
    <div className='recipe-list'>
        {recipe.map(recipeli =>(
            <div className={`card  ${mode}`} key={recipeli.id}>
                <h3>{recipeli.title}</h3>
                <p>{recipeli.cookingTime} to make</p>
                <div>{recipeli.method.substring(0,100)}...</div>
                <Link to={`/recipe/${recipeli.id}`}>Cook This</Link>
            </div>
        ))}
    </div>
  )
}
