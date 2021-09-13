<template>
	<div class="per-page">
		<div>Показывать по:</div>
		<ul>
			<li v-for="per_page in perPages" :key="per_page" @click="changePerPage(per_page)">
				{{ per_page }}
			</li>
			
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				perPages: [5, 10, 15, 20],
				internalPerPage: null,
			}
		},
		methods: {
			changePerPage(i) {
				this.internalPerPage = i;
				this.$emit('internal-per-page', this.internalPerPage);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.per-page {
		color: #808080;
		display: flex;
		align-items: center;
	}

	ul {
		display: flex;
		margin-left: 10px;
	}

	li {
		margin: 0 12px;
		cursor: pointer;
	}
</style>