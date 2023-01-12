import { useEffect } from 'react'

const List = (props) => {
    const {list,setList} = props

    useEffect(() => {
        window.localStorage.setItem('MY_LIST', JSON.stringify(list))
    }, [list] )

    const handleDelete = (index) => {
        const newList = list.filter((item, idx) => (idx !== index))
        setList(newList)
    }

    const taskComplete = {
        textDecoration: 'line-through'
    }

    const handleToggle = (index) => {
        const mutList = [...list]
        mutList[index].complete = !mutList[index].complete;
        setList(mutList);
    }

    return (
        <div>
            <div className="list">
            <h2>TASKS:</h2>
                {
                    list.map((item, index) => (
                        <div className="mt-3">
                            <strong className="lead bolder" style={item.complete ? taskComplete : null } >{item.todo}</strong>
                            <input className="ms-3" type="checkbox" onClick= {() =>handleToggle(index)} checked={item.complete} />
                            <button className="ms-5 btn btn-danger" onClick={()=>handleDelete(index)} disabled= {!item.complete} >Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default List