<template>
  <div class="app">
    <MainHeader />

    <div class="main-content columns is-centered is-vcentered is-mobile">
      <slot />
    </div>

    <MainFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import MainHeader from '~/components/Header/MainHeader.vue'
import MainFooter from '~/components/Footer/MainFooter.vue'

export default defineComponent({
  name: 'AboutLayout',
  components: {
    MainHeader,
    MainFooter,
  },
})
</script>
