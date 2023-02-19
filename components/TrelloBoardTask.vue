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
<style>
/** Ces trois classes sont par default dans Sortable */
.sortable-chosen .task{
    @apply bg-slate-100 rounded
}
.sortable-chosen .task span {
    cursor: grab;
}

.sortable-drag .task {
    transform: rotate(5deg);
}
.sortable-drag .task span{
    cursor: grabbing;
}

.sortable-ghost .task{
    position: relative;
}
.sortable-ghost .task::after{
    content: "";
    @apply absolute top-0 bottom-0 left-0 right-0 bg-slate-300 rounded
}
</style>