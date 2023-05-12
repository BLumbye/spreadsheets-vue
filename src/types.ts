import type List from './components/List.vue';
export * from './index';

declare module 'vue' {
  interface GlobalComponents {
    List: typeof List;
  }
}
