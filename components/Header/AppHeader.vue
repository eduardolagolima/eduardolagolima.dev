<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink class="navbar-item" to="/"> Eduardo Lago Lima </NuxtLink>

      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': isOpened }"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar"
        @click="isOpened = !isOpened"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar" class="navbar-menu" :class="{ 'is-active': isOpened }">
      <div class="navbar-end">
        <template v-for="{ to, description } of headerItems" :key="to">
          <NuxtLink
            class="navbar-item"
            exact-active-class="is-active"
            :to="to"
            @click="isOpened = false"
          >
            {{ description }}
          </NuxtLink>
        </template>
      </div>
    </div>
  </nav>

  <hr class="m-0" />
</template>

<script setup lang="ts">
import { headerItems } from '~/data/headerItems'

const isOpened = ref(false)
</script>
