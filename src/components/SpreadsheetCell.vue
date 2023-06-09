<!-- 
  Creates an input field. The input field can either be a text input, a number input or a checkbox for booleans.
 -->
<template>
  <span v-if="(type || typeof modelValue) === 'string' && mode === 'normal'"
        @input="$emit('update:modelValue', ($event.target as HTMLSpanElement).innerText)"
        :contenteditable="editable">{{ modelValue }}</span>
  <span v-else-if="(type || typeof modelValue) === 'number' && mode === 'normal'"
        @input="$emit('update:modelValue', Number(($event.target as HTMLSpanElement).innerText))"
        @beforeinput="validate(isNumber())"
        :contenteditable="editable">{{ modelValue }}</span>
  <input v-else-if="(type || typeof modelValue) === 'string' && mode === 'input'"
         :value="modelValue"
         @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
         :disabled="!editable"
         type="text" />
  <input v-else-if="(type || typeof modelValue) === 'number' && mode === 'input'"
         :value="modelValue"
         @input="$emit('update:modelValue', Number(($event.target as HTMLInputElement).value))"
         @beforeinput="validate(isNumber())"
         :disabled="!editable"
         inputmode="decimal"
         type="text" />
  <input v-else-if="(type || typeof modelValue) === 'boolean'"
         :checked="(modelValue as boolean)"
         @input="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
         type="checkbox"
         :disabled="!editable" />
  <span v-else>Unsupported type</span>
</template>

<script setup lang="ts">
import { isNumber, validate } from '..';

const props = defineProps<{
  /**
   * Whether the cell is editable.
   */
  editable: boolean;
  /**
   * The current mode of the cell.
   */
  mode: 'input' | 'normal';
  /**
   * The value of the cell.
   */
  modelValue: string | number | boolean;
  /**
   * The type of the cell.
   */
  type?: 'string' | 'number' | 'boolean';
}>();

defineEmits<{
  (e: 'update:modelValue', value: string | number | boolean): void;
}>();
</script>

<style scoped lang="postcss"></style>