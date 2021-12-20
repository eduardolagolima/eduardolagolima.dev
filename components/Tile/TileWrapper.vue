<template>
  <Fragment>
    <TileAncestor
      v-for="(chunk, index) in chunks"
      :key="index"
      :items="chunk"
      :items-per-row="itemsPerRow"
      :type="type"
    />
  </Fragment>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

import { Fragment } from 'vue-fragment'
import chunk from 'lodash/chunk'

import TileAncestor from '~/components/Tile/TileAncestor.vue'

import { Item } from '~/types/item'

export default Vue.extend({
  components: {
    Fragment,
    TileAncestor,
  },
  props: {
    items: {
      type: Array,
      required: true,
    } as PropOptions<Item[]>,
    itemsPerRow: {
      type: Number,
      default: 2,
    },
    type: {
      type: String,
      default: 'is-primary',
    },
  },
  computed: {
    chunks() {
      return chunk(this.items, this.itemsPerRow)
    },
  },
})
</script>
