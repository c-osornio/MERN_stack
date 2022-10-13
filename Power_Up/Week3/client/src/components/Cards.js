import {useEffect} from 'react'
import styles from './Cards.module.css'

const Cards = (props) => {

    const {state, setState} = props
    
    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
        .then((result)=> {
            console.log(result)
            return result.json()
        })
        .then((res)=>{
            console.log(res)
            setState(res.results)
        })
        .catch((err) => {
            console.log("Bad call or other error")
            console.log(err)
        })
    }, [] )


    return (
        <div className={styles.pokemon}>
            {
                state.map((item,index) => (
                    <div key={index} className={styles.card} >
                        <h5>#{index + 1} {item.name.toUpperCase()}</h5>
                        <img src= {` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index + 1}.png `}  alt={item.name}/>
                    </div>
                ))
            }
        </div>
    )
}

export default Cards