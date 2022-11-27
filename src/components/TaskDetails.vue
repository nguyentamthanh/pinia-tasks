<template>
  <div class="task">
    <h3>{{ task.title }}</h3>

    <div class="icons">
      <i class="material-icons" @click="deleteTask(task.id)">delete</i>
      <i
        class="material-icons"
        :class="{ active: task.isFav }"
        @click="toggleFav(task.id)"
        >favorite</i
      >
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "../stores/TaskStore";

export default {
  props: ["task"],
  setup() {
    const taskStore = useTaskStore();
    const deleteTask = taskStore.deleteTask;
    const toggleFav = taskStore.toggleFav;
    return { taskStore, deleteTask, toggleFav };
  },
};
</script>

<style></style>
