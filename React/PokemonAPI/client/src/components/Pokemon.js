import React from 'react';
import {useState, useEffect} from 'react'
import styles from './Pokemon.module.css'
import axios from 'axios';

const Pokemon = () => {

    const [pokeball, setPokeball] = useState([])

    
//-------------------------------------------Fetch
  // useEffect(()=>{
  //   fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=905')
  //   .then((result)=>{
  //     return result.json()
  //   }).then((res)=>{
  //     console.log(res)
  //     setPokeball(res.data)
  //   }).catch((error)=>{
  //     console.log(error)
  //   })
  // } , [])

    useEffect( () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=905')
            .then(response => setPokeball(response.data.results))
            .catch(err => console.log(err))
    } , [] )

    //-----------------------------------------------ES7 Async/Await

//   const makeRequest = async () =>{
//     try{
//       const results = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=905')
//       setState(results.data.data)
//       console.log(results)
//     } catch(error){
//       console.log(error)
//     }
//   }

    return (
        <div className={styles.pokeball}>
            {
                pokeball.map((item,index) => (
                    <div key={index} className={styles.card} >
                        <h5>#{index + 1} {item.name.toUpperCase()}</h5>
                        <img src= {` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index + 1}.png `}  alt={item.name}/>
                    </div>
                ))
            }
        </div>
    )
}

export default Pokemon