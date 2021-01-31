<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      user: {}
    };
  },
  created() {
    // authentication state managament
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
