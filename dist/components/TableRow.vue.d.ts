import { TableRow } from './SpreadsheetTable.vue';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    /**
     * The item to be displayed.
     */
    row: TableRow;
    /**
     * The headers to be displayed.
     */
    headers: Record<string, string>;
    /**
     * Whether the item is editable.
     */
    editable: boolean;
    /**
     * Whether the item is sortable.
     */
    sortable: boolean;
    /**
     * Whether the item is removable.
     */
    removable: boolean;
    /**
     * The current mode of the cell.
     */
    mode: "input" | "normal";
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    remove: (row: TableRow) => void;
    edit: (row: TableRow, key: string, value: any) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    /**
     * The item to be displayed.
     */
    row: TableRow;
    /**
     * The headers to be displayed.
     */
    headers: Record<string, string>;
    /**
     * Whether the item is editable.
     */
    editable: boolean;
    /**
     * Whether the item is sortable.
     */
    sortable: boolean;
    /**
     * Whether the item is removable.
     */
    removable: boolean;
    /**
     * The current mode of the cell.
     */
    mode: "input" | "normal";
}>>> & {
    onRemove?: ((row: TableRow) => any) | undefined;
    onEdit?: ((row: TableRow, key: string, value: any) => any) | undefined;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
