import { useState, useEffect } from 'react';
import Todo from './Todo.jsx'
import { addTodosDB, fetchFromDB, updateTodosDB, deleteTodoDB } from '../db/operations.js';

function TodoList() {

    const [inputTodo, setInputTodo] = useState("")
    const [todos, setTodos] = useState([])
    const [isChecked, setIsChecked] = useState(false)


    function handleChange(event) {
        setInputTodo(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        //console.log(event.target);
        //Add todo in UI and DB
        addTodo()
        console.log(inputTodo);


        setInputTodo("")
    }

    function addTodo() {
        const newTodo = {
            desc: inputTodo,
            completed: false,
        }
        addTodosDB(newTodo)
        setTodos([...todos, newTodo])
        //console.log(todos);
    }

    function toggleCompleted(id) {

        isChecked ? setIsChecked(false) : setIsChecked(true) 

        console.log("toggled checkbox - ", id);
        const editedList = todos.map((item) => {
            if (id === item.id) {
                updateTodosDB(id, {...item, completed: !item.completed})
                console.log(item);
                return {...item, completed: !item.completed}
            }
            return item
        })
        setTodos(editedList)
    }

    function deleteTodo(id) {
        const remainingTodos = todos.filter((item) => {
            return id !== item.id
        })
        deleteTodoDB(id)
        setTodos(remainingTodos)
    }
    
    function editTodo(id, todo) {
        const editedList = todos.map((item) => {
            if (id === item.id) {
                updateTodosDB(id, {...item, desc: todo})
                console.log("edited by you");
                return {...item, desc: todo}
            }
            return item
        })
        setTodos(editedList)
    }

    useEffect(() => {
        console.log("useEffect");
        fetchFromDB().then((newTodos) => {
            setTodos(newTodos)
            console.log("New todos:",newTodos);
        });

    }, [todos.length])

    //console.log(todos);

    return (
        <div>
            <h1>My todos</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Add-todo">Add a todo: </label>
                <input type="text" name="Add-todo" onChange={handleChange} id="Add-todo" value={inputTodo}/>
                <button type='submit'>Add</button>
            </form>
            <ul>
                {todos.map((todo) => {
                    
                    return <Todo
                    key={todo.id}
                    id={todo.id}
                    desc={todo.desc}
                    completed={todo.completed}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    toggleCompleted={toggleCompleted}
                    />

                })}
            </ul>

        </div>
    )
}

export default TodoList