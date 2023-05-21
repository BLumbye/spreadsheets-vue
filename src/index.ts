import { App, defineAsyncComponent } from 'vue';

export * from './array';
export * from './exporting';
export * from './importing';
export * from './validation';

export * as formula from '@formulajs/formulajs';

export const spreadsheets = {
  install: (app: App) => {
    app.component(
      'SpreadsheetList',
      defineAsyncComponent(() => import('./components/SpreadsheetList.vue')),
    );
    app.component(
      'SpreadsheetTable',
      defineAsyncComponent(() => import('./components/SpreadsheetTable.vue')),
    );
  }
};
