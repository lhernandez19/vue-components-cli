<template>
	<div class="container">
		<h3>Bag</h3>
        <library-bag-item				
            v-for="item in libraryBag"
            :key="item.libraryItem.title"
            >{{ item.libraryItem.title }}
        </library-bag-item>
		<button @click="libraryBag.checkout()">Checkout</button>
	</div>
</template>

<script>
import LibraryBag from '@/models/LibraryCollection'
// import { Book, Movie, Album } from '@/models/LibraryItems'
import LibraryBagItem from '@/components/LibraryBagItem'


export default {
	name: 'LibraryBag',
	components: {
		LibraryBagItem
	},

	data() {
		return {
			library: new LibraryBag(),
		}
	},
}
</script>

<style scoped></style>
