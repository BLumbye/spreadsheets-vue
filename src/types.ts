import type SpreadsheetList from './components/SpreadsheetList.vue';
import type SpreadsheetTable from './components/SpreadsheetTable.vue';
export * from './index';

export type SimpleTable = Record<string, any>[];
export type NestedTable = { items: SimpleTable; [key: string]: any }[]
export type Table = SimpleTable | NestedTable;

declare module 'vue' {
  interface GlobalComponents {
    SpreadsheetList: typeof SpreadsheetList;
    SpreadsheetTable: typeof SpreadsheetTable;
  }
}
