<template>
	<div class="tags">
		<div v-for="(tag, index) in tags" :key="index" class="tag" :class="{ white }">
			{{ tag }}
		</div>
	</div>
</template>

<script>
	export default {
		props: ['tags', 'white'],
	}
</script>

<style lang="scss" scoped>

	.tags {
		display: flex;
		flex-wrap: wrap;
		grid-gap: 4px;
	}

	.tag {
		background: #F7F7F7;
		text-align: center;
		border-radius: 200px;
		padding: 7px 22px;
		font-size: 14px;
		color: #333333;
	}

	.white {
		background: #ffffff;
	}
</style>