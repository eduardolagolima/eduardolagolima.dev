<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ event.name }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <p><strong>Local: </strong>{{ event.location }}</p>
        <p><strong>Duração: </strong>{{ event.duration }}</p>
        <p><strong>Carga horária: </strong>{{ event.hours }} horas</p>
      </div>
    </div>
  </div>
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
