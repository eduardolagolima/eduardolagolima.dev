<template>
  <div class="app">
    <MainHeader />

    <div class="main-content columns">
      <div class="container column">
        <nuxt />
      </div>
    </div>

    <MainFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import MainHeader from '~/components/Header/MainHeader.vue'
import MainFooter from '~/components/Footer/MainFooter.vue'

export default Vue.extend({
  name: 'DefaultLayout',
  components: {
    MainHeader,
    MainFooter,
  },
})
</script>
