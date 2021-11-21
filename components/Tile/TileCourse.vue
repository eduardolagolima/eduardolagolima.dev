<template>
  <article class="tile is-child notification" :class="colorType">
    <p class="title">{{ course.name }}</p>
    <div class="content">
      <a target="_blank" :href="course.urlCertificate">
        <strong>Certificado</strong>
      </a>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    colorType: {
      type: String,
      required: true
    },
    course: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
