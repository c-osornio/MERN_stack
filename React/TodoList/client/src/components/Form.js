import { useState } from 'react'

const Form = (props) => {
    const {list,setList} = props

    const [todo, setTodo] = useState({})

    const handleChange = (e) => {
        setTodo({
            todo:e.target.value, 
            complete:false
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setList([...list, todo])
        setTodo({todo:""})
    }

    return (
        <div>
            <h1>TODO LIST</h1>
            <form onSubmit={ handleSubmit }>
                <label>New Task: </label>
                <input type="text" onChange={ handleChange } value = {todo.todo} />
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}

export default Form