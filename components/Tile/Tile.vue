<template>
  <article class="tile is-child notification is-primary">
    <p class="title custom-title">
      <b-icon :icon="item.icon" size="is-medium" />
      <span class="custom-title-span">{{ item.title }}</span>
    </p>
    <p v-if="item.subtitle" class="subtitle">
      {{ item.subtitle }}
    </p>
    <div class="content">
      <p v-if="item.techs">
        <span>Tecnologias:</span>
        <strong>{{ item.techs.join(', ') }}</strong>
      </p>
      <Button
        icon="open-in-new"
        label="Certificado"
        :url="item.certificateUrl"
      />
      <Button icon="github" label="Repositório" :url="item.repositoryUrl" />
    </div>
  </article>
</template>

<script>
import Button from '../Button/Button.vue'

export default {
  components: {
    Button
  },
  props: {
    item: {
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
