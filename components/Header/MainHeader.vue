<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink class="navbar-item" to="/">
        Eduardo Lago Lima
      </NuxtLink>

      <a
        @click="isOpened = !isOpened"
        role="button"
        class="navbar-burger"
        :class="{'is-active': isOpened}"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbar"
      class="navbar-menu"
      :class="{'is-active': isOpened}"
    >
      <div class="navbar-end">
        <template v-for="({ to, description }) of headerItems">
          <MainHeaderItem :to="to" :description="description" />
        </template>
      </div>
    </div>
  </nav>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

import MainHeaderItem from '~/components/Header/MainHeaderItem.vue'

import { headerItems } from '~/data/headerItems'

export default defineComponent({
  components: {
    MainHeaderItem,
  },
  data: () => ({
    headerItems,
    isOpened: false,
  }),
})
</script>
