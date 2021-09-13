<template>
	<div class="page">
		<Container>
			<slot name="top" />
			<span class="page-title">{{ title }}</span>
			<div class="page-content">
				<slot />
				<slot name="sidebar" />
			</div>
		</Container>
	</div>
</template>

<script>
	import Container from './Container.vue'

	export default {
		props: ['title'],
		components: {
			Container
		}
	}
</script>

<style lang="scss" scoped>
	@import '~/styles/mixin';

	.page {
		margin-top: 75px;

		&-title {
			font-family: 'Raleway', sans-serif;
			font-size: 36px;
		}

		&-content {
			display: flex;
			flex-direction: column-reverse;
			grid-gap: 60px;
			margin-top: 26px;

			@include mediaUp(md) {
				display: grid;
				grid-template-columns: 65% 1fr;
			}
		}
	}
</style>