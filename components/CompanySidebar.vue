<template>
	<div>
		<img :src="company.picture" class="company-logo">
		<div class="contact-item">
			<span class="contact-title">Сайт:</span>
			<span class="contact">{{ company.url }}</span>
		</div>
		<div class="contact-item">
			<span class="contact-title">E-mail:</span>
			<span class="contact">{{ company.contact_email }}</span>
		</div>
		<div class="contact-item">
			<span class="contact-title">Телефон:</span>
			<span>{{ company.contact_phone }}</span>
		</div>
		<div class="contact-item">
			<span class="contact-title">Офис:</span>
			<span>{{ company.url }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['company'],
	}
</script>

<style lang="scss" scoped>
	@import '~/styles/mixin';

	.company-logo {
		width: 100%;
		margin-bottom: 16px;

		@include mediaUp(md) {
			height: 120px;
			width: auto;
		}

	}

	.contact {
		color: #030953;

		&-item {
			display: grid;
			grid-template-columns: 25% 1fr;
			grid-gap: 20px;
			margin-bottom: 20px;

			@include mediaUp(md) {
				grid-template-columns: none;
				grid-gap: 0;
			}
		}

		&-title {
			color: #808080;
			margin-bottom: 10px;
		}
	}
</style>