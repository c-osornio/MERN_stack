import React from 'react'

const View = (props) => {
    const {name, email, password} = props
    return (
        <div>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{password}</h3>
        </div>
    )
}

export default View