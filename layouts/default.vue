<template>
  <div class="body">
    <Header />

    <section class="main-content columns">
      <div class="container column is-12">
        <nuxt />
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'

export default {
  components: {
    Footer,
    Header
  }
}
</script>

<style scoped>
.body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.main-content {
  flex: 1;
}
</style>
