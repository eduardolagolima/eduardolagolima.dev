<template>
  <article :class="['tile', 'is-child', 'notification', type]">
    <TileChildTitle :title="item.title" :icon="item.icon" />
    <TileChildSubtitle :subtitle="item.subtitle" />
    <TileChildContent :actions="item.actions" :tags="item.tags" />
  </article>
</template>

<script>
import TileChildTitle from './TileChildTitle'
import TileChildSubtitle from './TileChildSubtitle'
import TileChildContent from './TileChildContent'

export default {
  components: {
    TileChildSubtitle,
    TileChildTitle,
    TileChildContent,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
}
</script>
