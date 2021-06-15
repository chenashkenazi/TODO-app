// Bonus: Add a watcher for local storage
import { renderTodos } from './views'
import { setFilters } from './filters'
import { createTodo, loadTodos } from './todos'

renderTodos()

// listen for todo text change
document.querySelector('#search-todo').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

document.querySelector('#todo-form').addEventListener('submit', (e) => {
    const text = e.target.elements.newTodo.value.trim()
    console.log(text)
    e.preventDefault()
    
    if (text.length > 0) {
        createTodo(text)
        renderTodos()
        e.target.elements.newTodo.value = ''
    }
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    }) 
    renderTodos()
})

window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})