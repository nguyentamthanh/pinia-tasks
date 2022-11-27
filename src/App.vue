<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="" />
      <h1>{{ taskStore.name }}</h1>
    </header>
    <!-- new task form -->
    <div class="new-task-form">
      <task-form />
    </div>
    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">all task</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>
    <!-- loading -->
    <div class="loading" v-if="taskStore.loading">Loading tasks...</div>
    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>Your have {{ taskStore.totalCount }} tasks left to do</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <task-details :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>Your have {{ taskStore.favCount }} favs to do</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <task-details :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import TaskDetails from "./components/TaskDetails.vue";
import { useTaskStore } from "./stores/TaskStore";
import TaskForm from "./components/TaskForm.vue";
export default {
  components: { TaskDetails, TaskForm },
  setup() {
    const taskStore = useTaskStore();
    const filter = ref("all");
    taskStore.getTasks();
    return { taskStore, filter };
  },
};
</script>

<style></style>
