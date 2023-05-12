<!--
  Shows a list of items. The list can be edited, sorted and items can be removed as well as added.
 
  @example
  <List editable="false" sortable="true" removable="false" addable="false" :list="someStore.someList" /> 
-->
<template>
  <div class="list">
    <div class="list-items"
         v-if="!sortable">
      <ListItem v-for="(item, index) in internalList"
                :key="index"
                :item="item"
                :editable="editable"
                :sortable="sortable"
                :removable="removable"
                :mode="'normal'"
                @edit="onItemEdit"
                @remove="onItemRemove" />
    </div>
    <draggable v-else
               :list="internalList"
               item-key="id"
               handle=".sorting-handle"
               class="list-items"
               @change="onSort">
      <template #item="{ element }">
        <ListItem :item="element"
                  :editable="editable"
                  :sortable="sortable"
                  :removable="removable"
                  :mode="'normal'"
                  @edit="onItemEdit"
                  @remove="onItemRemove" />
      </template>
    </draggable>
    <div class="list-add"
         v-if="addable">
      <SpreadsheetCell v-model="toAdd"
                       :editable="true"
                       :mode="'input'"
                       :type="type"
                       class="add-input" />
      <button class="add-button"
              @click="addItem"><svg xmlns="http://www.w3.org/2000/svg"
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
        </svg></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ListItem from './ListItem.vue';
import SpreadsheetCell from './SpreadsheetCell.vue';
import draggable from 'vuedraggable';
import { watch } from 'vue';

export type ListItem = { id: number, value: string | number | boolean };

const onItemEdit = (item: ListItem) => {
  const index = internalList.value.findIndex(i => i.id === item.id);
  internalList.value[index].value = item.value;
  props.list[index] = item.value;
  emit('edit', item.value, index);
};

const onItemRemove = (item: ListItem) => {
  const index = internalList.value.findIndex(i => i.id === item.id);
  internalList.value.splice(index, 1);
  props.list.splice(index, 1);
  emit('remove', item.value);
};

const onSort = (evt: { moved?: { oldIndex: number, newIndex: number, element: ListItem } }) => {
  if (!evt.moved) return;
  props.list.splice(evt.moved.oldIndex, 1);
  (props.list as (typeof toAdd.value)[]).splice(evt.moved.newIndex, 0, evt.moved.element.value);
  emit('sort', props.list);
};

const addItem = () => {
  internalList.value.push({ id: internalList.value.reduce((max, item) => Math.max(item.id, max), 0) + 1, value: toAdd.value });
  (props.list as (typeof toAdd.value)[]).push(toAdd.value);
  emit('add', toAdd.value);
  toAdd.value = '';
}

const createInternalList = () => {
  return props.list.map((item, index) => {
    return {
      id: index,
      value: item
    } as ListItem;
  });
};

const internalList = ref(createInternalList());
const toAdd = ref<string | number | boolean>('');

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
   * The list to be displayed.
   */
  list: string[] | number[] | boolean[];
  /**
   * The type of the list.
   */
  type: 'string' | 'number' | 'boolean';
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
  (e: 'add', item: string | number | boolean): void;
  /**
   * Emitted when an item is removed from the list.
   */
  (e: 'remove', item: string | number | boolean): void;
  /**
   * Emitted when an item is edited in the list.
   */
  (e: 'edit', item: string | number | boolean, index: number): void;
  /**
   * Emitted when the list is sorted.
   */
  (e: 'sort', list: string[] | number[] | boolean[]): void;
}>();

watch(() => props.list, () => {
  // Check if lists match up
  if (internalList.value.length === props.list.length) {
    for (let i = 0; i < internalList.value.length; i++) {
      if (internalList.value[i].value !== props.list[i]) {
        internalList.value = createInternalList();
        break;
      }
    }
  } else {
    internalList.value = createInternalList();
  }
});
</script>

<style scoped lang="postcss">
:where(.list) {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

:where(.list-items) {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

:where(.list-add) {
  display: flex;
  gap: 0.5rem;

  :where(.add-input) {
    flex: 1;
  }
}
</style>