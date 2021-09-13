<template>
	<div>
		<div class="title" @click="opened = !opened">
			<span>{{ title }}</span>
			<FontAwesomeIcon class="chevron" :icon="`chevron-${opened ? 'up' : 'down'}`" />
		</div>
		<ul v-if="opened">
			<li v-for="(menuItem, index) in menuGroup" :key="index" :class="{ 'button': menuItem.button, 'red': menuItem.red }">
				{{ menuItem.name }}
			</li>
		</ul>
		<ul class="menu-items">
			<li v-for="(menuItem, index) in menuGroup" :key="index" :class="{ 'button': menuItem.button, 'red': menuItem.red }">
				{{ menuItem.name }}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ['menuGroup', 'title'],
		data() {
			return {
				opened: false,
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '~/styles/mixin';

	ul {
		margin-top: 16px;
		padding-left: 16px;

		@include mediaUp(md) {
			padding-left: 0;
		}
	}

	li {
		padding: 0;
		margin: 0;
		width: fit-content;
		padding: 7px 0px;
		background: #ffffff;
		margin-bottom: 16px;
		font-size: 14px;
		font-family: 'IBM Plex Sans', sans-serif;

		&:hover {
			cursor: pointer;
			opacity: 0.3;
		}
	}

	.menu-items {
		display: none;

		@include mediaUp(md) {
			display: block;
		}
	}

	.button {
		width: fit-content;
		padding: 7px 17px;
		background: #030953;
		color: #ffffff;
		cursor: pointer;
		border-radius: 4px;

		&.red {
			background: #EF3E4A;
		}
	}

	.title {
		margin: 20px 0px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.chevron {
		height: 10px;

		@include mediaUp(md) {
			display: none;
		}
	}
</style>