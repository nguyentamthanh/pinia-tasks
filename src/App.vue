<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="" />
      <h1>{{ taskStore.name }}</h1>
    </header>
    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">all task</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>
    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>Your have {{ taskStore }}</p>
      <p>all tasks</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <task-details :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>fav tasks</p>
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
export default {
  components: { TaskDetails },
  setup() {
    const taskStore = useTaskStore();
    const filter = ref("all");
    console.log("🚀 ~ file: App.vue ~ line 38 ~ setup ~ filter", filter);

    return { taskStore, filter };
  },
};
</script>

<style></style>
