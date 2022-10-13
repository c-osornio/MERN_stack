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
            <h2>List</h2>
            <div>
                {
                    list.map((item, index) => (
                        <div>
                            <span style={item.complete ? taskComplete : null } >{item.todo}</span>
                            <input type="checkbox" onClick= {() =>handleToggle(index)} checked={item.complete} />
                            <button onClick={()=>handleDelete(index)} disabled= {!item.complete} >Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default List