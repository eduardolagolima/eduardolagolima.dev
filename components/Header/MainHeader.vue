<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink class="navbar-item" to="/">
        Eduardo Lago Lima
      </NuxtLink>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar" class="navbar-menu">
      <div class="navbar-end">
        <template v-for="({ to, description }, key) of headerItems">
          <MainHeaderItem :key="key" :to="to" :description="description" />
        </template>
      </div>
    </div>
  </nav>

</template>

<script lang="ts">
import Vue from 'vue'

import MainHeaderItem from '~/components/Header/MainHeaderItem.vue'

import { headerItems } from '~/data/headerItems'

export default Vue.extend({
  components: {
    MainHeaderItem,
  },
  data: () => ({
    headerItems,
  }),
})
</script>
