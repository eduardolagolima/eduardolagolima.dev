<template>
  <article class="tile is-child notification" :class="colorType">
    <p class="title">{{ course.name }}</p>
    <div class="content">
      <ul>
        <li>
          <span>Escola:</span>
          <strong>{{ course.school }}</strong>
        </li>
        <li>
          <span>Data:</span>
          <strong>{{ course.date }}</strong>
        </li>
        <li v-if="course.hours">
          <span>Carga horária:</span>
          <strong>{{ course.hours }} horas</strong>
        </li>
        <li v-if="course.urlCertificate">
          <span>Certificado:</span>
          <a target="_blank" :href="course.urlCertificate"
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
    course: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
