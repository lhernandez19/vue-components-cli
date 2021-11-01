<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="container">
      <div class="row" >
        <div class="col-md-9">
            <library :add-to-bag="(item) => libraryBag.addItem(item)"></library>     
        </div>
        <div class="col-md-3">
            <library-bag :library-bag-items="libraryBag"></library-bag>      
        </div>
      </div>
    </div>
	</div>

</template>

<script>
import Library from "@/components/Library";
import LibraryBagModel from "@/models/LibraryBag";
import LibraryBag from './components/LibraryBag.vue';
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    Library,
    LibraryBag,
    NavBar,
  },

data(){
  return {
    libraryBag: new LibraryBagModel(),
  }
}

}


</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
