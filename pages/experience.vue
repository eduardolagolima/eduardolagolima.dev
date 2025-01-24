<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">Experiência</h3>

    <div class="timeline is-centered">
      <header class="timeline-header">
        <span class="tag is-medium">{{ new Date().getFullYear() }}</span>
      </header>

      <div
        v-for="(experience, key) of experiences"
        :key="key"
        class="timeline-item"
      >
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <p class="heading">{{ experience.when }}</p>
          <p>{{ experience.role }}</p>
          <p class="is-size-7 mt-1">{{ experience.company }}</p>
        </div>
      </div>

      <div class="timeline-header">
        <span class="tag is-medium">2016</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experiences } from '~/data/experiences'
</script>
