<template>
	<div class="navbar-wrapper" :class="{ dark }">
		<Container>
			<div class="navbar">
				<div class="flex">
					<img class="logo-img" :src="`/img/navbar-logo${dark ? '-dark' : ''}.svg`">
					<FontAwesomeIcon class="mobile-menu-btn" icon="bars" @click="isMenuOpen = !isMenuOpen" />
					<ul class="menu">
						<li class="menu-item"><a>Тендеры</a></li>
						<li class="menu-item"><a>Компании</a></li>
						<li class="menu-item"><a>Продукты</a></li>
						<li class="menu-item"><a>Кейсы</a></li>
						<li class="menu-item"><a>Блог</a></li>
					</ul>
					<a class="menu-item">Вход и регистрация</a>
				</div>
				<template v-if="isMenuOpen">
					<ul class="mobile-menu">
						<li class="mobile-menu-item"><a>Тендеры</a></li>
						<li class="mobile-menu-item"><a>Компании</a></li>
						<li class="mobile-menu-item"><a>Продукты</a></li>
						<li class="mobile-menu-item"><a>Кейсы</a></li>
						<li class="mobile-menu-item"><a>Блог</a></li>
						<li class="mobile-menu-item login"><a>Вход и регистрация</a></li>
					</ul>
				</template>
			</div>
		</Container>
	</div>
</template>

<script>
	import Container from './Container.vue'

	export default {
		props: {
			dark: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				isMenuOpen: false,
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '~/styles/mixin';

	a {
		color: #030953;

		&:hover {
			opacity: 0.3;
			cursor: pointer;
		}
	}

	.flex {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.mobile-menu {
		display: grid;
		grid-gap: 20px;
		margin-top: 28px;
		margin-bottom: 20px;

		&-item {
			margin-right: 40px;

			@include mediaUp(md) {
				display: none;
			}

			&.login {
				margin-top: 20px;
			}
		}

		&-btn {
			height: 30px;
			color: #030953;

			@include mediaUp(md) {
				display: none;
			}
		}

		&-icon {
			height: 100%;
		}
	}

	.menu {
		display: none;

		@include mediaUp(md) {
			display: flex;
		}

		&-item {
			display: none;
			margin-right: 40px;

			&:last-child {
				margin-right: 0;
			}

			@include mediaUp(md) {
				display: block;
			}
		}
	}

	.navbar-wrapper {
		border-bottom: 1px solid #F2F2F2;
		padding-top: 22px;
		padding-bottom: 24px;

		&.dark {
			background-color: #030953;

			a {
				color: #ffffff;
			}

			.mobile-menu-btn {
				color: #fff;
			}
		}
	}

	.navbar {
		display: grid;

		@include mediaUp(md) {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}

	.logo-img {
		height: 30px;

		@include mediaUp(md) {
			height: 50px;
		}
	}
</style>
