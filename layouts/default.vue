<template>
  <div class="app">
    <AppHeader />

    <div class="main-content columns">
      <div class="container column">
        <slot />
      </div>
    </div>

    <AppFooter />
  </div>
</template>
