<template>
  <article class="tile is-child notification is-primary">
    <p class="title">{{ course.name }}</p>
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

<style></style>
