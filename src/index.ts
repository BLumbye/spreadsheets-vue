import { App, defineAsyncComponent } from 'vue';

export * from './array';
export * from './functions';
export * from './exporting';
export * from './importing';
export * from './validation';

export const spreadsheetsPlugin = (app: App) => {
  app.component(
    'SpreadsheetList',
    defineAsyncComponent(() => import('./components/SpreadsheetList.vue')),
  );
  app.component(
    'SpreadsheetTable',
    defineAsyncComponent(() => import('./components/SpreadsheetTable.vue')),
  );
};
