<template>
  <a class="button" target="_blank" :href="url">
    <span>{{ label }}</span>
    <span class="icon is-small">
      <i :class="icon"></i>
    </span>
  </a>
</template>

<script setup lang="ts">
interface Props {
  url: string
  label: string
  icon: string
}

const { url, label, icon } = defineProps<Props>()
</script>
