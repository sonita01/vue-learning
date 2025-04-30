<template>
  <div class="todo-list">
    <div class="add-todo">
      <input 
        v-model="newTodo" 
        @keyup.enter="handleAddTodo"
        placeholder="Add new todo..."
      >
      <button @click="handleAddTodo">Add</button>
    </div>

    <ul class="todos">
      <li v-for="todo in store.todos" :key="todo.id" :class="{ completed: todo.completed }">
        <input 
          type="checkbox" 
          :checked="todo.completed"
          @change="store.toggleTodo(todo.id)"
        >
        <span>{{ todo.text }}</span>
        <button @click="store.deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTodoStore } from '../stores'

const store = useTodoStore()
const newTodo = ref('')

onMounted(() => {
  store.loadTodos()
})

const handleAddTodo = () => {
  if (newTodo.value.trim()) {
    store.addTodo(newTodo.value.trim())
    newTodo.value = ''
  }
}
</script>

<style scoped>
.todo-list {
  width: 100%;
}

.add-todo {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.add-todo input {
  flex: 1;
  padding: 8px;
}

.todos {
  list-style: none;
  padding: 0;
}

.todos li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.completed span {
  text-decoration: line-through;
  color: #888;
}

button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.todos button {
  background-color: #f44336;
}

.todos button:hover {
  background-color: #da190b;
}
</style>