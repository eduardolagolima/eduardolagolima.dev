<template>
  <article class="tile is-child notification is-primary">
    <p class="title">{{ event.name }}</p>
    <div class="content">
      <a target="_blank" :href="event.urlCertificate">
        <strong>Certificado</strong>
      </a>
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

<style></style>
