<template>
  <div class="wallet-main">
    <Card />
  </div>
</template>
<script>
</script>

<style lang="scss">
@use '~/assets/scss/element/index.scss';

body {
  color: #000;
  font-family: system-ui;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: linear-gradient(to bottom, #7fa595, #5d8072);

  #__nuxt {
    height: 100%;
    background: #000;
  }
}

.wallet-main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  background: #000
}
</style>