<template>
  <article class="tile is-child notification" :class="colorType">
    <p class="title">{{ event.name }}</p>
    <div class="content">
      <ul>
        <li>
          <span>Local:</span>
          <strong>{{ event.location }}</strong>
        </li>
        <li>
          <span>Data:</span>
          <strong>{{ event.date }}</strong>
        </li>
        <li>
          <span>Carga horária:</span>
          <strong>{{ event.hours }} horas</strong>
        </li>
        <li>
          <span>Certificado:</span>
          <a target="_blank" :href="event.urlCertificate"
            ><strong>Link</strong></a
          >
        </li>
      </ul>
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
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
