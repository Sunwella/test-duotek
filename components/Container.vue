<template>
	<div class="container">
		<slot></slot>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="scss" scoped>
	@import "~/styles/mixin";

	$containerMaxWidths: (
		md: 944px,
		lg: 1144px
	);

	$defaultContainerPadding: 16px;
	$containerPaddings: (
		md: 24px,
		lg: 28px
	);

	@mixin paddings($size) {
		padding-right: $size;
		padding-left: $size;
	}

	.container {
		width: 100%;
		margin-right: auto;
		margin-left: auto;
		@include paddings($defaultContainerPadding);

		&.fluid {
			max-width: 100%;
		}
	}

	@each $breakpoint, $containerMaxWidth in $containerMaxWidths {
		$containerPadding: map-get($containerPaddings, $breakpoint);

		@include mediaUp($breakpoint, $gridBreakpoints) {
			.container {
				max-width: $containerMaxWidth;
				@include paddings($containerPadding);
			}
		}
	}
</style>