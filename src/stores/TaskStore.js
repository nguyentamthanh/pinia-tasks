import { defineStore } from "pinia";

export const useTaskStore = defineStore(`taskStore`, {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: "milk",
        isFav: false,
      },
      {
        id: 2,
        title: "tea",
        isFav: true,
      },
    ],
    name: "Thanh Kun",
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
});
