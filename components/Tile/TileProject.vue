<template>
  <article class="tile is-child notification" :class="project.type">
    <p class="title">{{ project.name }}</p>
    <p class="subtitle">{{ project.description }}</p>
    <div class="content">
      <ul>
        <li>
          <span>Projeto no github:</span>
          <a target="_blank" :href="project.urlGithub"><strong>Link</strong></a>
        </li>
        <li v-if="project.urlProduction">
          <span>Projeto em produção:</span>
          <a target="_blank" :href="project.urlProduction"
            ><strong>Link</strong></a
          >
        </li>
        <li>
          <span>Tecnologias usadas:</span>
          <strong>{{ project.techs.join(', ') }}</strong>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
