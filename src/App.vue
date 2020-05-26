<template>
  <div id="lokapp"  class="full" :class="{ 'wpadminbar': hasTopBar }">
    <router-view class="full" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      hasTopBar: false
    }
  },
  mounted () {
    const found = document.querySelector('#wpadminbar')
    if (found) {
      this.hasTopBar = true
    }
  }
}
</script>

<style>
#lokapp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  color: black;
}
#lokapp .wpadminbar{
  height: calc(100% - 32px);
}
body,
html{
  background: transparent !important;
  height: 100%;
}
</style>
