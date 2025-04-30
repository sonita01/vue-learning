<template>
  <div class="app">
    <h1>Let Practices  Todo App together</h1>
    <TodoList />
  </div>
</template>

<script setup lang="ts">
import TodoList from '@/components/TodoList.vue'
</script>

<style scoped>
.app {
  max-width: 500px;
  margin: 30px auto;
  font-family: Arial, sans-serif;
}
</style>