<template>
  <div id="app">
    <library></library>
    <library-bag></library-bag>
  </div>
</template>

<script>
import Library from "@/components/Library";
import LibraryBag from "@/components/LibraryBag";

export default {
  name: 'App',
  components: {
    Library,
    LibraryBag
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
