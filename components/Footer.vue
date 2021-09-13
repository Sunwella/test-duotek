<template>
	<div class="footer-wrapper">
		<Container>
			<div class="footer">
				<div v-for="(menuGroup, index) in menuGroups" :key="index">
					<MenuGroup :menu-group="menuGroup.items" :title="menuGroup.title" />
				</div>
			</div>
			<div class="flex">
				<div class="social-networks">
					<img src="/img/facebook.svg" class="social-network">
					<img src="/img/vk.svg" class="social-network">
					<img src="/img/youtube.svg" class="social-network">
				</div>
				<div class="footer-end">
					<span class="mr-20">О проекте</span>
					<span>Пользовательское соглашение</span>
				</div>
			</div>
		</Container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				menuGroups: [
					{
						title: 'Тендеры',
						items: [
							{ name: 'Добавить тендер', button: true },
							{ name: 'Каталог тендеров' },
							{ name: 'Работа с клиентами' },
							{ name: 'Управление проектами' },
							{ name: 'Маркетинг' },
							{ name: 'Финансы' },
							{ name: 'Управление бизнесом' },
						]
					},
					{
						title: 'Компании',
						items: [
							{ name: 'Добавить компанию', button: true, red: true },
							{ name: 'Рейтинги' },
							{ name: 'Отраслевая специализация' },
							{ name: 'Интеграторы' },
							{ name: 'Решения для бизнеса крепеж' },
							{ name: 'Разработка сайтов' },
							{ name: 'Мобильные приложения' },
							{ name: 'Онлайн-реклама' },
							{ name: 'Контент' },
						]
					},
					{
						title: 'Продукты',
						items: [
							{ name: 'Рейтинги' },
							{ name: 'По отраслям' },
							{ name: 'Работа с клиентами' },
							{ name: 'Управление проектами' },
							{ name: 'Маркетинг' },
							{ name: 'Финансы' },
							{ name: 'Управление бизнесом' },
						]
					},
					{
						title: 'Кейсы',
						items: [
							{ name: 'Автоматизация сантехников' },
							{ name: 'Автоматизация клининга' },
							{ name: 'Автоматизация СТО' },
							{ name: 'Автоматизация сантехников' },
							{ name: 'Автоматизация клининга' },
							{ name: 'Автоматизация СТО' },
						]
					},
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '~/styles/mixin';

	.footer {

		@include mediaUp(md) {
			display: grid;
			grid-template-columns: repeat(4, auto);
			grid-gap: 95px;
		}

		&-wrapper {
			margin-top: 44px;
			border-top: 1px solid #F2F2F2;
			padding-bottom: 20px;

			@include mediaUp(md) {
				padding-top: 80px;
				padding-bottom: 80px;
			}
		}

		&-end {
			font-size: 12px;
			color: #808080;
		}

		&-mobile {
			display: block;

			@include mediaUp(md) {
				display: none;
			}
		}
	}

	.flex {
		margin-top: 17px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}

	.social-networks {
		display: flex;
		margin-bottom: 12px;

		@include mediaUp(md) {
			margin-bottom: 0;
		}
	}

	.social-network {
		margin-right: 20px;
	}

	.mr-20 {
		margin-right: 20px;
	}
</style>