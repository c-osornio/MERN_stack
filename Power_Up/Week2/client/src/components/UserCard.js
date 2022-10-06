import React from 'react'

const UserCard = (props) => {
    const {name, email, password, index} = props
    return (
        <div >
            <h1>{name}</h1>
            <h2>{email}</h2>
            <h2>{password}</h2>
            {/* <h2>{index}</h2> */}
        </div>
    )
}

export default UserCard