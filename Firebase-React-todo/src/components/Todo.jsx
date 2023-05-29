import { useState } from "react";

function Todo(props) {

    const [input, setInput] = useState("")

    const [isEditing, setIsEditing] = useState(false)


    function handleSubmit(event) {
        event.preventDefault()
        props.editTodo(props.id, input)
        setIsEditing(false)
        setInput("")
        console.log("edited todo");
        /* setTimeout(() => {
            window.location.reload()
        }, 1000); */
    }

    function handleChange(event) {
        setInput(event.target.value)
    }

    const defaultTemplate = (
        < div >

        <input
            id={props.id}
            type='checkbox'
            defaultChecked={props.completed}
            onChange={() => props.toggleCompleted(props.id)}
        />

        { props.desc }

    <div className="btn-group">
        <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
        <button type="button" onClick={() => props.deleteTodo(props.id, input)}>Delete</button>
    </div>

    </div >
    )
    const editTemplate = (
        <form onSubmit={handleSubmit}>
            <label>New name for todo - {props.desc}</label>
            <input
                id={props.id}
                type='text'
                onChange={handleChange}
                value={input} />

            <div className="btn-group">
                <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                <button type="submit">Save</button>
            </div>
        </form>
    )


    return (
        <li>
            {isEditing ? editTemplate : defaultTemplate}
        </li>
    )
}

export default Todo


