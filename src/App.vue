<template>
  <div id="app">

    <div class="container">
      <div class="row" >
        <div class="col-md-9">
            <library :add-to-bag="(item) => libraryBag.addItem(item)"></library>     
        </div>
        <div class="col-md-3">
            <!-- <h1>Bag</h1>
            <p v-for="item in libraryBag" :key="item.libraryItem.title">{{item.libraryItem.title}}</p>
            <button @click="libraryBag.checkout()">Checkout</button>  -->
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

export default {
  name: 'App',
  components: {
    Library,
    LibraryBag,
  },

data(){
  return {
    libraryBag: new LibraryBagModel(),
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
