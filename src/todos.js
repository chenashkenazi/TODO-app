import uuidv4 from 'uuid/v4'

let todos = []

// fetch existing todos from localStorage
const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        todos = todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        todos = []
    } 
}

// save todo to localStorage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const getTodos = () => todos

const createTodo = (todoText) => {
    todos.push({ 
        id: uuidv4(),
        text: todoText,
        completed: false 
    })
    console.log(todos)
    saveTodos()
}

const removeTodo = (todoId) => {
    const todoIndex = todos.findIndex((todo) => todo.id === todoId)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
        saveTodos()
    }
}

// toggle the completed value for a given todo
const toggleTodo = (todoId) => {
    const todo = todos.find((todo) => todo.id === todoId)
    
    if (todo) {
        todo.completed = !todo.completed
        saveTodos()
    }
}

loadTodos()

export { loadTodos, getTodos, createTodo, removeTodo, toggleTodo }