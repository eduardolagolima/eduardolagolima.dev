<template>
  <article class="tile is-child notification is-primary">
    <p class="title custom-title">
      <b-icon :icon="course.icon" size="is-medium" />
      <span class="custom-title-span">{{ course.name }}</span>
    </p>
    <div class="content">
      <b-button
        target="_blank"
        :href="course.urlCertificate"
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
    course: {
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
