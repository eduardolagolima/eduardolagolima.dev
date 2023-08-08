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

import MainHeader from '~/components/Header/MainHeader.vue'
import MainFooter from '~/components/Footer/MainFooter.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    MainHeader,
    MainFooter,
  },
})
</script>
