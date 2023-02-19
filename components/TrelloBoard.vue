<script setup lang="ts">
import { Column } from '~~/types';
import {cardsData} from '~~/services/cardsDatas'

const columns = ref<Column[]>(cardsData)
</script>
<template>
    <div class="flex gap-4 overflow-x-auto items-start">
        <div 
        v-for="column in columns" :key="column.id"
        class="column bg-slate-200 p-5 rounded min-w[250px]">
            <header class="font-bold mb-2 text-sm">
                {{ column.title }}
            </header>
            <TrelloBoardTask :task="task" v-for="task in column.tasks"/>
            <footer>
                <button class="text-gray-500 text-xs">+ ajouter une carte</button>
            </footer>
        </div>
    </div>
</template>