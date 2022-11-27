import { defineStore } from "pinia";

export const useTaskStore = defineStore(`taskStore`, {
  state: () => ({
    tasks: [],
    name: "Thanh Kun",
    loading: false,
  }),
  getters: {
    favs() {
      return this.tasks.filter((t) => t.isFav);
    },
    favCount() {
      return this.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p;
      }, 0);
    },
    totalCount: (state) => {
      return state.tasks.length;
    },
  },
  actions: {
    async getTasks() {
      this.loading = true;
      const res = await fetch(
        "https://6214967f89fad53b1f17fd73.mockapi.io/api/noitu/todolist"
      );
      const data = await res.json();
      this.tasks = data;
      this.loading = false;
    },
    async addTask(task) {
      this.tasks.push(task);
      const res = await fetch(
        "https://6214967f89fad53b1f17fd73.mockapi.io/api/noitu/todolist",
        {
          method: "POST",
          body: JSON.stringify(task),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res.error) {
        console.log(res.error);
      }
      await this.getTasks();
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== id;
      });
      const res = await fetch(
        "https://6214967f89fad53b1f17fd73.mockapi.io/api/noitu/todolist/" + id,
        {
          method: "DELETE",
        }
      );
      if (res.error) {
        console.log(res.error);
      }
    },
    async toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFav = !task.isFav;

      const res = await fetch(
        "https://6214967f89fad53b1f17fd73.mockapi.io/api/noitu/todolist/" + id,
        {
          method: "PUT",
          body: JSON.stringify({ isFav: task.isFav }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.error) {
        console.log(res.error);
      }
    },
  },
});
