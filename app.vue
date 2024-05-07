<template>
  <div class="wallet-main">
    <Card/>
    <Nav/>
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

  #__nuxt {
    height: 100%;
  }
}
.wallet-main {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(to bottom, #7fa595,#5d8072);
}
</style>