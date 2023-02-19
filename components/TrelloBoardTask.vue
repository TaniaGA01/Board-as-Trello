<script setup lang="ts">
import { Task } from '@/types/index'
defineProps<{
    task: Task
}>()
</script>
<template>
    <div
    :title="task.createdAt.toLocaleDateString()"
    class="task bg-white p-2 mb-2 rounded shadow-sm max-w-[250px] text-sm flex"
    >
        <DragHandle class="pr-2" />
        <span>{{ task.title }}</span>
    </div>
</template>