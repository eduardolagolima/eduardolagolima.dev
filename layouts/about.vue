<template>
  <div class="app">
    <MainHeader />

    <div class="main-content columns is-centered is-vcentered is-mobile">
      <nuxt />
    </div>

    <MainFooter />
  </div>
</template>

<script>
import MainHeader from '~/components/Header/MainHeader'
import MainFooter from '~/components/Footer/MainFooter'

export default {
  name: 'AboutLayout',
  components: {
    MainHeader,
    MainFooter,
  },
}
</script>
