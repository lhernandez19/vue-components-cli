<template>
	<div class="container">
		<h3>Library Bag</h3>
        <p				
            v-for="item in libraryBagItems"
            :key="item.libraryItem.title"
            >{{ item.libraryItem.title }}
        </p>
		<button @click="libraryBagItems.checkout()">Checkout</button>
	</div>
</template>

<script>

export default {
	name: 'LibraryBag',
	components: {
		// LibraryBagItem
	},

	props: {
		libraryBagItems: Array,
	},

	// data(){
	// return {
	// 	libraryBag: new LibraryBag(),
	// 	}
	// }
}
</script>

<style scoped></style>
