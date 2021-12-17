<template>
  <div class="app">
    <Header />

    <div class="main-content columns is-centered is-vcentered is-mobile">
      <nuxt />
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'

export default {
  components: {
    Footer,
    Header,
  },
}
</script>
