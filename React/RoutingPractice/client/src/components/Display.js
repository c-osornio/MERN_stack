import React from 'react';
import { useParams } from 'react-router-dom';

const Display = (props)=>{

    const {number, color, bgColor} = useParams();

    return(
        <div>
            {
                isNaN(number)? 
                <p style={
                    color? {color: color, backgroundColor: bgColor} : null
                }>
                    The word is: {number}
                </p>
                : 
                <p style={
                    color? {color: color, backgroundColor: bgColor} : null
                }>
                    The number is: {number}
                </p>
            }

        </div>
    )
}


export default Display;