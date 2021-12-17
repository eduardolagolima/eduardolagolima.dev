<template>
  <div class="app">
    <Header />

    <div class="main-content columns">
      <div class="container column">
        <nuxt />
      </div>
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
