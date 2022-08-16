import { defineStore } from 'pinia';

export const useStoreCounter = defineStore('counter', {
  state: () => ({
    value: 0,
  }),
});
