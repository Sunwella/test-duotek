<template>
	<div class="search-bar">
		<div class="search-input">
			<img class="search-img" src="/img/search.svg">
			<input 
				v-model="internalSearchQuery"
				placeholder="Поиск продукта или отрасли"
				@keyup.enter="find"
			>
		</div>
		<button class="search-btn" @click="find">Найти</button>
	</div>
</template>

<script>
	export default {
		props: ['searchQuery'],
		data() {
			return {
				internalSearchQuery: '',
			};
		},
		watch: {
			searchQuery: {
				immediate: true,
				handler(val) {
					this.internalSearchQuery = val;
				},
			},
		},
		methods: {
			find() {
				this.$emit("update:searchQuery", this.internalSearchQuery);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search {
		
		&-bar {
			display: flex;
			margin-bottom: 38px;
		}

		&-input {
			display: flex;
			align-items: center;
			border: 1px solid #E5E5E5;
			border-radius: 4px 0px 0px 4px;
			font-family: 'Raleway', sans-serif;
			padding: 10px 14px;
			flex: 1;
		}

			&-btn {
			background-color: #030953;
			border-radius: 0px 4px 4px 0px;
			border: none;
			color: #fff;
			font-size: 14px;
			padding: 9px 18px;
			cursor: pointer;
		}

		&-img {
			width: 20px;
			margin-right: 10px;
		}
	}

	input {
		border: none;
		background-color: white;
		width: fit-content;
		outline: none;
		width: -webkit-fill-available;
		cursor: pointer;
	}
</style>