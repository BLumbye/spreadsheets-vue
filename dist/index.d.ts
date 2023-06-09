import { App } from 'vue';
export * from './array';
export * from './exporting';
export * from './importing';
export * from './validation';
export * as formula from '@formulajs/formulajs';
export declare const spreadsheets: {
    install: (app: App) => void;
};
