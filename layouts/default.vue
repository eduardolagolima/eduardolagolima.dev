<template>
  <div class="app">
    <MainHeader />

    <div class="main-content columns">
      <div class="container column">
        <slot />
      </div>
    </div>

    <MainFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultLayout',
})
</script>
