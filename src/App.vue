<template>
  <div id="app">
    <router-view v-if="isLoaded"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isLoaded: false,
    }
  },
  mounted() {
    this.getDict();
  },
  methods: {
    // 获取字典集
    getDict() {
      const postData = {
        method: 'get',
        url: `/dictionary/dict/all`,
      };
      this.$http(postData).then(res => {
        const dict = res.data || {};
        this.$store.commit('SetDict', dict);
      }).finally(() => {
        this.isLoaded = true;
      })
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html{
    width: 100%;
    height: 100%;
  }
  body{
    height: 100%;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-width: 1200px;
    height: 100%;
  }
</style>
