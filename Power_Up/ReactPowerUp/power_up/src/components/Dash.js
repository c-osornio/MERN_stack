import React from 'react'


const Dash = (props) => {
    const {item1, item2, item3} = props
    return (
        <div className="App">
        <h1>Hello World</h1>
            <ul>
                <li>{item1}</li>
                <li>{item2}</li>
                <li>{item3}</li>
            </ul>
            <a href="https://www.youtube.com/watch?v=TUbtye9qx34" target="_blank">Favorite Video</a>
        </div>
    )
}

export default Dash