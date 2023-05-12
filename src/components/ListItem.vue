<template>
  <div class="list-item">
    <div class="sorting-handle"><svg xmlns="http://www.w3.org/2000/svg"
           width="24"
           height="24"
           viewBox="0 0 24 24"
           fill="currentColor"
           stroke-width="2"
           class="ai ai-DragVerticalFill">
        <path fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
        <path fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
        <path fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
        <path fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
        <path fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
        <path fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
      </svg></div>
    <SpreadsheetCell :editable="editable"
                     :mode="mode"
                     :model-value="item.value"
                     @update:model-value="$emit('edit', { id: item.id, value: $event })"
                     class="spreadsheet-cell" />
    <button v-if="removable"
            class="remove-button"
            @click="$emit('remove', item)"><svg xmlns="http://www.w3.org/2000/svg"
           width="20"
           height="20"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           stroke-width="2"
           stroke-linecap="round"
           stroke-linejoin="round"
           class="ai ai-Cross">
        <path d="M20 20L4 4m16 0L4 20" />
      </svg></button>
  </div>
</template>

<script setup lang="ts">
import { ListItem } from './List.vue';
import SpreadsheetCell from './SpreadsheetCell.vue';

const props = defineProps<{
  /**
   * The list to be displayed.
   */
  item: ListItem;
  editable: boolean;
  sortable: boolean;
  removable: boolean;
  mode: 'input' | 'normal';
}>();

const emit = defineEmits<{
  /**
   * Emitted when this item is removed from the list.
   */
  (e: 'remove', item: ListItem): void;
  /**
   * Emitted when this item is edited.
   */
  (e: 'edit', item: ListItem): void;
}>();
</script>

<style scoped lang="postcss">
:where(.list-item) {
  display: flex;
  gap: 0.5rem;

  :where(.spreadsheet-cell) {
    flex: 1;
  }
}
</style>