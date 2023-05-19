declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    /**
     * Whether the cell is editable.
     */
    editable: boolean;
    /**
     * The current mode of the cell.
     */
    mode: "input" | "normal";
    /**
     * The value of the cell.
     */
    modelValue: string | number | boolean;
    /**
     * The type of the cell.
     */
    type?: "string" | "number" | "boolean" | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    /**
     * Whether the cell is editable.
     */
    editable: boolean;
    /**
     * The current mode of the cell.
     */
    mode: "input" | "normal";
    /**
     * The value of the cell.
     */
    modelValue: string | number | boolean;
    /**
     * The type of the cell.
     */
    type?: "string" | "number" | "boolean" | undefined;
}>>> & {
    "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
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
