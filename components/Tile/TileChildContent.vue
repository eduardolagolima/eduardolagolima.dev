<template>
  <div class="content">
    <TileChildContentTags v-if="tags" :tags="tags" />
    <TileChildContentActions v-if="actions" :actions="actions" />
  </div>
</template>

<script>
import TileChildContentTags from './TileChildContentTags'
import TileChildContentActions from './TileChildContentActions'

export default {
  components: {
    TileChildContentTags,
    TileChildContentActions,
  },
  props: {
    actions: {
      type: Array,
      default: null,
    },
    tags: {
      type: Array,
      default: null,
    },
  },
}
</script>
