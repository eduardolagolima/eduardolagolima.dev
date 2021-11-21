<template>
  <article class="tile is-child notification is-primary">
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
    course: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
