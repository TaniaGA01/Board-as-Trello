<script setup lang="ts">
import { Task } from '@/types/index'
import { nanoid } from "nanoid"

const emit = defineEmits<{
    (e: "add", payload : Task):void
}>()

const focused = ref(false)
const title = ref('')

const createTask = (e: Event) => {
    if (title.value.trim()) {
        e.preventDefault();
        emit('add', {
            title: title.value.trim(),
            createdAt: new Date(),
            id: nanoid()
        } as Task)
    }
    title.value = ''
}
</script>
<template>
    <div>
        <textarea 
        v-model="title"
        @keydown.tab="createTask"
        @keyup.enter="createTask"
        class="focus:bg-white focus:shadow resize-none rounded w-full border-none bg-transparent p-2 cursor-pointer text-sm"
        :class="!focused ? 'h-7' : 'h-20'"
        style="outline:none !important"
        @focus="focused = true"
        @blur="focused = false"
        :placeholder="!focused ? '+ Ajouter une carte' : 'Ajouter un titre pour cette carte'"
        />
    </div>
</template>