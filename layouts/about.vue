<template>
  <div class="app">
    <AppHeader />

    <div class="main-content columns is-centered is-vcentered is-mobile">
      <slot />
    </div>

    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutLayout',
})
</script>
