import { defineStore } from 'pinia'
import { Todo } from '../types/todo'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[]
  }),

  actions: {
    addTodo(text: string) {
      this.todos.push({
        id: Date.now(),
        text,
        completed: false
      })
      this.saveTodos()
    },

    deleteTodo(id: number) {
      this.todos = this.todos.filter(todo => todo.id !== id)
      this.saveTodos()
    },

    toggleTodo(id: number) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) {
        todo.completed = !todo.completed
        this.saveTodos()
      }
    },

    loadTodos() {
      const savedTodos = localStorage.getItem('todos')
      if (savedTodos) {
        this.todos = JSON.parse(savedTodos)
      }
    },

    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  }
})