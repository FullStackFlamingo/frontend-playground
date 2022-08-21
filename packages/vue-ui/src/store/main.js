import { defineStore } from 'pinia';

export const useStoreMain = defineStore('main', {
  state: () => ({
    language: 'en',
    config: {
      baseUrl: '/',
    },
  }),
});
