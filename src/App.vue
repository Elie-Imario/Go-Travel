<template>
  <div id="app">
      <router-view name="header"></router-view>
      <main>
            <router-view/>          
      </main>
      <router-view name="footer"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
    background-color: #f5f5f5;
}
</style>
