<!--
  The SpreadsheetTable component is a table that can be used to display a list of objects.
 
  @example
  <SpreadsheetTable :editable="true"
                    :sortable="true"
                    :removable="true"
                    :addable="true"
                    :table="table"
                    :headers="headers"
                    :types="types" />
-->
<template>
  <table class="spreadsheet-table">
    <thead>
      <tr>
        <th v-if="sortable"></th>
        <th v-for="(header, index) of Object.values(headers)"
            :key="index"
            class="spreadsheet-table-header">
          {{ header }}
        </th>
        <th v-if="removable || addable"></th>
      </tr>
    </thead>
    <tbody class="table-body"
           v-if="!sortable">
      <TableRow v-for="(row, index) in internalTable"
                :key="index"
                :row="row"
                :headers="headers"
                :editable="editable"
                :sortable="sortable"
                :removable="removable"
                :mode="'normal'"
                @edit="onItemEdit"
                @remove="onItemRemove" />
    </tbody>
    <draggable v-else
               :list="internalTable"
               item-key="id"
               handle=".sorting-handle"
               class="list-items"
               tag="tbody"
               @change="onSort">
      <template #item="{ element, index }">
        <TableRow :key="index"
                  :row="element"
                  :headers="headers"
                  :editable="editable"
                  :sortable="sortable"
                  :removable="removable"
                  :mode="'normal'"
                  @edit="onItemEdit"
                  @remove="onItemRemove" />
      </template>
    </draggable>
    <tfoot class="table-add"
           v-if="addable">
      <td v-if="sortable"></td>
      <td v-for="key in Object.keys(toAdd)">
        <SpreadsheetCell v-model="toAdd[key]"
                         :editable="true"
                         :mode="'input'"
                         :type="types[key]"
                         class="add-input" />
      </td>
      <td>
        <button class="add-button"
                @click="addItem">
          <svg xmlns="http://www.w3.org/2000/svg"
               width="20"
               height="20"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
               class="ai ai-Plus">
            <path d="M12 20v-8m0 0V4m0 8h8m-8 0H4" />
          </svg>
        </button>
      </td>
    </tfoot>
  </table>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TableRow from './TableRow.vue';
import SpreadsheetCell from './SpreadsheetCell.vue';
import draggable from 'vuedraggable';
import { watch } from 'vue';
import { SimpleTable } from '../types';

const props = withDefaults(defineProps<{
  /**
   * Whether the list should be editable.
   */
  editable?: boolean;
  /**
   * Whether the list should be sortable.
   */
  sortable?: boolean;
  /**
   * Whether the list should be removable
   */
  removable?: boolean;
  /**
   * Whether the list should be addable.
   */
  addable?: boolean;
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
  types: Record<string, 'string' | 'number' | 'boolean'>;
}>(), {
  editable: false,
  sortable: false,
  removable: false,
  addable: false
});

const emit = defineEmits<{
  /**
   * Emitted when an item is added to the list.
   */
  (e: 'add', row: Record<string, any>): void;
  /**
   * Emitted when an item is removed from the list.
   */
  (e: 'remove', row: Record<string, any>): void;
  /**
   * Emitted when an item is edited in the list.
   */
  (e: 'edit', row: Record<string, any>, index: number, key: string, value: any): void;
  /**
   * Emitted when the list is sorted.
   */
  (e: 'sort', table: SimpleTable): void;
}>();

export type TableRow = { id: number, value: Record<string, any> };

const onItemEdit = (row: TableRow, key: string, value: any) => {
  const index = internalTable.value.findIndex(i => i.id === row.id);
  internalTable.value[index].value[key] = value;
  props.table[index][key] = value;
  emit('edit', internalTable.value[index].value, index, key, value);
};

const onItemRemove = (row: TableRow) => {
  const index = internalTable.value.findIndex(i => i.id === row.id);
  internalTable.value.splice(index, 1);
  props.table.splice(index, 1);
  emit('remove', row.value);
};

const onSort = (evt: { moved?: { oldIndex: number, newIndex: number, element: TableRow } }) => {
  if (!evt.moved) return;
  props.table.splice(evt.moved.oldIndex, 1);
  props.table.splice(evt.moved.newIndex, 0, evt.moved.element.value);
  emit('sort', props.table);
};

const addItem = () => {
  internalTable.value.push({ id: internalTable.value.reduce((max, item) => Math.max(item.id, max), 0) + 1, value: toAdd.value });
  props.table.push(toAdd.value);
  emit('add', toAdd.value);
  toAdd.value = createEmptyToAdd();
}

const createInternalTable = () => {
  return props.table.map((item, index) => {
    return {
      id: index,
      value: item
    } as TableRow;
  });
};

const createEmptyToAdd = () => {
  return Object.keys(props.types).reduce((acc, key) => {
    acc[key] = props.types[key] === 'number' ? 0 : props.types[key] === 'boolean' ? false : '';
    return acc;
  }, {} as Record<string, any>);
};

const internalTable = ref(createInternalTable());
const toAdd = ref<Record<string, any>>(createEmptyToAdd());

watch(() => props.table, () => {
  // Check if lists match up
  if (internalTable.value.length === props.table.length) {
    for (let i = 0; i < internalTable.value.length; i++) {
      if (internalTable.value[i].value !== props.table[i]) {
        internalTable.value = createInternalTable();
        break;
      }
    }
  } else {
    internalTable.value = createInternalTable();
  }
});
</script>

<style scoped lang="postcss"></style>