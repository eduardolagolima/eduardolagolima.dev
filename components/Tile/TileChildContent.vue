<template>
  <div class="content">
    <TileChildContentTags v-if="tags" :tags="tags" />
    <TileChildContentActions v-if="actions" :actions="actions" />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

import TileChildContentTags from '~/components/Tile/TileChildContentTags.vue'
import TileChildContentActions from '~/components/Tile/TileChildContentActions.vue'

import { Action } from '~/types/action'

export default Vue.extend({
  components: {
    TileChildContentTags,
    TileChildContentActions,
  },
  props: {
    actions: {
      type: Array,
      default: null,
    } as PropOptions<Action[]>,
    tags: {
      type: Array,
      default: null,
    },
  },
})
</script>
