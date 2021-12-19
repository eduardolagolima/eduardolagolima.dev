<template>
  <b-navbar type="is-primary">
    <template slot="brand">
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
        Eduardo Lago Lima
      </b-navbar-item>
    </template>

    <template slot="end">
      <template v-for="({ to, description }, key) of headerItems">
        <MainHeaderItem :key="key" :to="to" :description="description" />
      </template>
    </template>
  </b-navbar>
</template>

<script>
import MainHeaderItem from '~/components/Header/MainHeaderItem'

import { headerItems } from '~/data/headerItems'

export default {
  components: {
    MainHeaderItem,
  },
  data: () => ({
    headerItems,
  }),
}
</script>
