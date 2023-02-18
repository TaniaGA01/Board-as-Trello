<script setup lang="ts">
import { Column } from '~~/types';
import { nanoid} from "nanoid"
const columns = ref<Column[]>([
    {
        id: nanoid(),
        title: " Create Marketing LandingPage",
        tasks:[]
    }
])
</script>
<template></template>