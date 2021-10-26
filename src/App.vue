<template>
  <div id="app">
    <library :add-to-bag="(item) => libraryBag.addItem(item)"></library>
 
    <h1>Bag</h1>
    <p v-for="item in libraryBag" :key="item.libraryItem.title">{{item.libraryItem.title}}</p>
    <button @click="libraryBag.checkout()">Checkout</button>
  </div>




</template>

<script>
import Library from "@/components/Library";
import LibraryBag from "@/models/LibraryBag";

export default {
  name: 'App',
  components: {
    Library
  },

data(){
  return {
    libraryBag: new LibraryBag(),
  }
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
