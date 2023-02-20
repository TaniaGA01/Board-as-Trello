<script setup lang="ts">
import { Task, ID } from '@/types/index'

const props = defineProps<{
    task: Task
}>()

const emit = defineEmits<{
    (e:"delete", playload:ID):void
}>()

const focused = ref(false)

onKeyStroke("Backspace", (e) => {
    if (focused.value) emit("delete", props.task.id);
});
</script>
<template>
    <div
    :title="task.createdAt.toString()"
    class="task bg-white p-2 mb-2 rounded shadow-sm sm:max-w-[250px] text-sm flex"
    @focus="focused = true"
    @blur="focused = false"
    tabindex="0"
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
.task:focus,
.task:focus-visible{
    @apply outline-gray-400 !important;
    outline: gray auto 1px;
}
</style>