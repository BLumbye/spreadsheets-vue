import { ListItem } from './List.vue';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    /**
     * The list to be displayed.
     */
    item: ListItem;
    editable: boolean;
    sortable: boolean;
    removable: boolean;
    mode: "input" | "normal";
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    remove: (item: ListItem) => void;
    edit: (item: ListItem) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    /**
     * The list to be displayed.
     */
    item: ListItem;
    editable: boolean;
    sortable: boolean;
    removable: boolean;
    mode: "input" | "normal";
}>>> & {
    onRemove?: ((item: ListItem) => any) | undefined;
    onEdit?: ((item: ListItem) => any) | undefined;
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
