import { SimpleTable } from '../types';
export type TableRow = {
    id: number;
    value: Record<string, any>;
};
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * Whether the list should be editable.
     */
    editable?: boolean | undefined;
    /**
     * Whether the list should be sortable.
     */
    sortable?: boolean | undefined;
    /**
     * Whether the list should be removable
     */
    removable?: boolean | undefined;
    /**
     * Whether the list should be addable.
     */
    addable?: boolean | undefined;
    /**
     * The table to be displayed.
     */
    table: SimpleTable;
    /**
     * The elements of the table to be displayed.
     */
    headers: Record<string, string>;
    /**
     * The elements of the table to be displayed.
     */
    types: Record<string, "string" | "number" | "boolean">;
}>, {
    editable: boolean;
    sortable: boolean;
    removable: boolean;
    addable: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    add: (row: Record<string, any>) => void;
    remove: (row: Record<string, any>) => void;
    edit: (row: Record<string, any>, index: number, key: string, value: any) => void;
    sort: (table: SimpleTable) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * Whether the list should be editable.
     */
    editable?: boolean | undefined;
    /**
     * Whether the list should be sortable.
     */
    sortable?: boolean | undefined;
    /**
     * Whether the list should be removable
     */
    removable?: boolean | undefined;
    /**
     * Whether the list should be addable.
     */
    addable?: boolean | undefined;
    /**
     * The table to be displayed.
     */
    table: SimpleTable;
    /**
     * The elements of the table to be displayed.
     */
    headers: Record<string, string>;
    /**
     * The elements of the table to be displayed.
     */
    types: Record<string, "string" | "number" | "boolean">;
}>, {
    editable: boolean;
    sortable: boolean;
    removable: boolean;
    addable: boolean;
}>>> & {
    onRemove?: ((row: Record<string, any>) => any) | undefined;
    onEdit?: ((row: Record<string, any>, index: number, key: string, value: any) => any) | undefined;
    onSort?: ((table: SimpleTable) => any) | undefined;
    onAdd?: ((row: Record<string, any>) => any) | undefined;
}, {
    editable: boolean;
    sortable: boolean;
    removable: boolean;
    addable: boolean;
}>;
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
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
