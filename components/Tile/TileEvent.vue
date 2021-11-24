<template>
  <article class="tile is-child notification is-primary">
    <p class="title custom-title">
      <b-icon :icon="event.icon" size="is-medium" />
      <span class="custom-title-span">{{ event.name }}</span>
    </p>
    <div class="content">
      <b-button
        target="_blank"
        :href="event.certificateUrl"
        tag="a"
        type="is-primary"
        inverted
        outlined
        icon-right="open-in-new"
      >
        Certificado
      </b-button>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.custom-title {
  display: flex;
  align-items: center;
}

.custom-title-span {
  margin-left: 10px;
}
</style>
