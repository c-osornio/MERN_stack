import {useState} from 'react'
import Context from '../contexts/Context'

const Wrapper = ({children}) => {
    const [name, setName] = useState("");
    
    return (
        <>
            <Context.Provider value={{ name, setName }}>
                {children}
            </Context.Provider>
        </>
    )
}

export default Wrapper