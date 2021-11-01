<template>
	<div class="myNavBar">
		<nav class="navbar navbar-light bg-dark text-light">
			<a class="navbar-brand"
				><i class="fas fa-shopping-bag mx-2"></i> CHECK IT OUT!</a
			>
			<form class="form-inline" >
				<input
					class="form-control mr-sm-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
					v-model="search"
				/>
				<button class="btn btn-success my-2 my-sm-0" type="submit" @click.prevent="submitSearch">
					Search
				</button>
			</form>
		</nav>

		<div class="container">
			<section v-if="errored">
				<p>
					We're sorry, we're not able to retrieve this information at the
					moment, please try back later
				</p>
			</section>

			<section v-else>
				<ul class="list-group">
					<li v-if="loading" class="list-group-item">Loading...</li>
					<li
						v-else
						v-for="record in info"
						class="list-group-item"
						:key="record.id"
					>
						{{ record.trackName }} - {{ record.artistName }} -
						{{ record.country }} 
					</li>
				</ul>
			</section>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'Navbar',

	data() {
		return {
			info: null,
			loading: true,
			errored: false,
			search: '...',
		}
	},


	methods: {
		submitSearch() {
		axios
			.get('https://itunes.apple.com/search?', {
				params: {
					term: this.search,
					entity: 'movie',
					limit: 10,
				},
			})
			.then(response => {
				this.info = response.data.results
			})
			.catch(error => {
				console.log(error)
				this.errored = true
			})
			.finally(() => (this.loading = false))
		},
	},

	// mounted() {
	// 	axios
	// 		.get('https://itunes.apple.com/search?', {
	// 			params: {
	// 				term: this.search,
	// 				entity: 'movie',
	// 				limit: 10,
	// 			},
	// 		})
	// 		.then(response => {
	// 			this.info = response.data.results
	// 		})
	// 		.catch(error => {
	// 			console.log(error)
	// 			this.errored = true
	// 		})
	// 		.finally(() => (this.loading = false))
	// },
}
</script>

<style scoped>
.myNavBar {
	margin-bottom: 50px;
}
</style>
