import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Searchbar from './Searchbar'

export default function Navbar() {
  
  return (
    <div className='navbar'>
        <Link to='/' className='brand'>
        Jamal Ghazna Resturant
        </Link>
        <Searchbar/>
        <Link to='create'>Create Recipe</Link>
        
    </div>
  )
}
