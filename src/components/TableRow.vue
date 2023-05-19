<!-- 
  This component is used to display a single row in a table.
  It is used by the SpreadsheetTable component.
 -->
<template>
  <tr class="table-row">
    <td class="sorting-handle"
        v-if="sortable">
      <svg xmlns="http://www.w3.org/2000/svg"
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
      </svg>
    </td>
    <td v-for="header of Object.keys(headers)">
      <SpreadsheetCell :editable="editable"
                       :mode="mode"
                       :model-value="row.value[header]"
                       @update:model-value="$emit('edit', row, header, $event)"
                       class="spreadsheet-cell" />
    </td>
    <td>
      <button v-if="removable"
              class="remove-button"
              @click="$emit('remove', row)">
        <svg xmlns="http://www.w3.org/2000/svg"
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
        </svg>
      </button>
    </td>
  </tr>
</template>

<script setup lang="ts">
import SpreadsheetCell from './SpreadsheetCell.vue';
import { TableRow } from './SpreadsheetTable.vue';

const props = defineProps<{
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
  mode: 'input' | 'normal';
}>();

const emit = defineEmits<{
  /**
   * Emitted when this item is removed from the list.
   */
  (e: 'remove', row: TableRow): void;
  /**
   * Emitted when this item is edited.
   */
  (e: 'edit', row: TableRow, key: string, value: any): void;
}>();
</script>

<style scoped lang="postcss"></style>