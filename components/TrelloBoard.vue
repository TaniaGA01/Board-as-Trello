<script setup lang="ts">
import { Column, Task } from '~~/types';
import { cardsData } from '~~/services/cardsDatas'
import draggable from 'vuedraggable'
import { nanoid } from 'nanoid';
const columns = useLocalStorage<Column[]>("", cardsData)
const alt = useKeyModifier("Alt")

//Connect to server
watch(
    columns,
    () => {
        // petition ajax
    },
    {
        deep: true
    }
);

const createColumn = () => {
    const column: Column = {
        id:nanoid(),
        title: '',
        tasks:[]
    }
    columns.value.push(column)

    nextTick(() => {
        (document.querySelector(".col-block:last-child .title-input") as HTMLInputElement).focus()
    })
}

</script>
<template>
    <div class="md:flex md:items-start overflow-x-auto gap-4">
        <draggable 
            v-model="columns"
            :animation="150"
            handle=".drag-handle"
            group="columns"
            item-key="id"
            class="sm:flex gap-4 items-start"
        >
            <template #item="{ element:column } : { element:Column}">
                <div class="col-block">
                    <div 
                        class="column bg-slate-200 pl-5 pr-5 pb-5 pt-2 rounded min-w[250px]"
                        >
                        <DragHandle class="text-right w-full inline-block"/>
                        <header class="font-bold mb-2 text-sm">
                            <input
                            class="bg-transparent focus:bg-white rounded px-1 w-full title-input"
                            @keyup.enter="($event.target as HTMLInputElement).blur()"
                            @keydown.backspace="
                                column.title === ''
                                    ? columns = columns.filter((col) => col.id !== column.id)
                                    : null
                            "
                            type="text"
                            v-model="column.title"
                            placeholder="+ Ajouter un titre"
                            />
                        </header>
                        <draggable 
                                v-model="column.tasks"
                                :animation="150"
                                handle=".drag-handle"
                                :group="{ name: 'tasks', pull: alt ? 'clone' : true }"
                                item-key="id"
                                
                            >
                            <template #item="{ element: task } : { element: Task }">
                                <div>
                                    <TrelloBoardTask 
                                    :task="task"
                                    @delete="column.tasks = column.tasks.filter((t) => t.id !== $event)"
                                     />
                                </div>
                            </template>
                        </draggable>
                        <footer>
                            <!-- <button class="text-gray-500 text-xs">+ ajouter une carte</button> -->
                            <NewTask @add="column.tasks.push($event)" />
                        </footer>
                    </div>
                </div>
            </template>
        </draggable>
        <button
        @click="createColumn"
        class="bg-gray-200 whitespace-nowrap p-2 rounded opacity-50 text-sm"
        >
        + Ajouter une colonne
        </button>
    </div>
</template>
<style>
.column.sortable-ghost {
    @apply bg-slate-100 rounded
}
.sortable-drag .column,
.sortable-drag .column input
{
    transform: rotate(5deg);
}
</style>
