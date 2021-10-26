<template>
	<div class="card-columns">
		<library-item
			v-for="(item, i) in library"
			:item="item"
			:remove-function="item => library.removeItem(item)"
			:add-to-bag="addToBag"
			:key="item.id"
			:forlater="i"
		></library-item>
		<p >Checked Out: {{ library.checkedOutItems().length }}</p>

	</div>
</template>

<script>
import LibraryCollection from '@/models/LibraryCollection'
import { Book, Movie, Album } from '@/models/LibraryItems'
import LibraryItem from '@/components/LibraryItem'

export default {
	name: 'Library',
	components: {
		LibraryItem,
	},

	props: {
		addToBag: Function,
	},

	data() {
		return {
			library: new LibraryCollection()
				.addItem(new Book('Star Wars', 'Space Opera', 345))
				.addItem(new Movie('Star Wars 1', 'Space Opera', 345))
				.addItem(new Movie('Star Wars 2', 'Space Opera', 345))
				.addItem(new Album('Hybrid theory', 'Linkin Park', 12))
				.addItem(new Movie('Star Wars 3', 'Space Opera', 345)),
		}
	},
}
</script>

<style scoped></style>
