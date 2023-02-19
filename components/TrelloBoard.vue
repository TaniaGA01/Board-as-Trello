<script setup lang="ts">
import { Column, Task } from '~~/types';
import { cardsData } from '~~/services/cardsDatas'
import draggable from 'vuedraggable'
const columns = ref<Column[]>(cardsData)
const alt = useKeyModifier("Alt")
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
                    <DragHandle class="text-right w-full inline-block"/>
                    <header class="font-bold mb-2 text-sm">
                        {{ column.title }}
                    </header>
                    <!-- <draggable 
                        v-model="column.tasks"
                        :animation="150"
                        handle=".drag-handle"
                        group="tasks"
                        item-key="id"
                        
                    > -->
                    <draggable 
                            v-model="column.tasks"
                            :animation="150"
                            handle=".drag-handle"
                            :group="{ name:'tasks', pull: alt ? 'clone': true}"
                            item-key="id"
                            
                        >
                        <template #item="{ element:task } : {element:Task}">
                            <TrelloBoardTask :task="task" />
                        </template>
                    </draggable>
                    <footer>
                        <button class="text-gray-500 text-xs">+ ajouter une carte</button>
                    </footer>
                </div>
            </template>
        </draggable>
    </div>
</template>