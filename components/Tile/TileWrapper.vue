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

<script>
import { Fragment } from 'vue-fragment'
import chunk from 'lodash/chunk'

import TileAncestor from './TileAncestor'

export default {
  components: {
    Fragment,
    TileAncestor,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
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
}
</script>
