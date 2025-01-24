<template>
  <section class="section">
    <div class="is-flex is-justify-content-center">
      <figure class="image is-128x128">
        <img
          class="is-rounded"
          src="~/assets/images/avatar.jpg"
          alt="Eduardo Lago Lima"
        />
      </figure>
    </div>
    <div class="column has-text-centered">
      <p>{{ formatExperience(currentJob) }}</p>
      <p>Bacharelado, Sistemas de Informação - IMED</p>
      <p>Porto Alegre/RS</p>
    </div>
    <div class="is-flex is-justify-content-center">
      <template v-for="{ url, icon } of contacts" :key="url">
        <a target="_blank" :href="url">
          <span class="icon is-large has-text-light">
            <i :class="icon"></i>
          </span>
        </a>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { contacts } from '~/data/contacts'
import { experiences } from '~/data/experiences'
import type { Experience } from '~/types/experience'

definePageMeta({ layout: 'about' })

const currentJob = experiences[0]

const formatExperience = ({ role, company }: Experience) =>
  `${role} - ${company}`
</script>
