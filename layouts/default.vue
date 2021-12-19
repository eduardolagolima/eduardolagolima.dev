<template>
  <div class="app">
    <MainHeader />

    <div class="main-content columns">
      <div class="container column">
        <nuxt />
      </div>
    </div>

    <MainFooter />
  </div>
</template>

<script>
import MainHeader from '~/components/Header/MainHeader'
import MainFooter from '~/components/Footer/MainFooter'

export default {
  name: 'DefaultLayout',
  components: {
    MainHeader,
    MainFooter,
  },
}
</script>
