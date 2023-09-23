<template>
  <div class="app">
    <AppHeader />

    <div class="main-content columns">
      <div class="container column">
        <slot />
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultLayout',
})
</script>
