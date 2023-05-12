export type ListItem = {
    id: number;
    value: string | number | boolean;
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
     * The list to be displayed.
     */
    list: string[] | number[] | boolean[];
    /**
     * The type of the list.
     */
    type: "string" | "number" | "boolean";
}>, {
    editable: boolean;
    sortable: boolean;
    removable: boolean;
    addable: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    add: (item: string | number | boolean) => void;
    remove: (item: string | number | boolean) => void;
    edit: (item: string | number | boolean, index: number) => void;
    sort: (list: string[] | number[] | boolean[]) => void;
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
     * The list to be displayed.
     */
    list: string[] | number[] | boolean[];
    /**
     * The type of the list.
     */
    type: "string" | "number" | "boolean";
}>, {
    editable: boolean;
    sortable: boolean;
    removable: boolean;
    addable: boolean;
}>>> & {
    onSort?: ((list: string[] | number[] | boolean[]) => any) | undefined;
    onAdd?: ((item: string | number | boolean) => any) | undefined;
    onRemove?: ((item: string | number | boolean) => any) | undefined;
    onEdit?: ((item: string | number | boolean, index: number) => any) | undefined;
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
