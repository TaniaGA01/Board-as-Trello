<script setup lang="ts">
import { Column } from '~~/types';
import { cardsData } from '~~/services/cardsDatas'
import draggable from 'vuedraggable'
const columns = ref<Column[]>(cardsData)
</script>
<template>
    <div >
    <draggable 
    v-model="columns"
    :animation="150"
    handle=".drag-handle"
    group="columns"
    item-key="id"
    class="flex gap-4 overflow-x-auto items-start"
    >
        <template #item="{ element:column } : { element:Column}">
        <div 
            class="column bg-slate-200 pl-5 pr-5 pb-5 pt-2 rounded min-w[250px]">
                <DragHandle />
                <header class="font-bold mb-2 text-sm">
                    {{ column.title }}
                </header>
                <TrelloBoardTask :task="task" v-for="task in column.tasks"/>
                <footer>
                    <button class="text-gray-500 text-xs">+ ajouter une carte</button>
                </footer>
            </div>
        </template>
    </draggable>
        
    </div>
</template>