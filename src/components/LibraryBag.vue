<template>
    <div>
        <h1>Library Bag</h1>
        <p v-for="item in bag">{{item.libraryItem.title}}</p>
        <button></button>

	</div>
</template>

<script>



export default {
    name: "LibraryBag",


};

</script>

<style scoped>

</style>