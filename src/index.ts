import { App, defineAsyncComponent } from 'vue';

export * from './functions';
export * from './exporting';
export * from './validation';

export const spreadsheetsPlugin = (app: App) => {
  app.component(
    'List',
    defineAsyncComponent(() => import('./components/List.vue')),
  );
};
