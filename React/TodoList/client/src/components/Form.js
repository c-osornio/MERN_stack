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
        <div className="todo">
            <h1>TODO LIST</h1>
            <form onSubmit={ handleSubmit } className="mb-5">
                <label className="text-white mr-3">New Task: </label>
                <input type="text" onChange={ handleChange } value = {todo.todo} className="rounded ms-3"/>
                <button type="submit" className="btn btn-success ms-5">Add Task</button>
            </form>
        </div>
    )
}

export default Form