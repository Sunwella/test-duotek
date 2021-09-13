<template>
	<NuxtLink :to="`/company/${company.id}`">
		<div class="company-card" @mouseenter="hovered = true" @mouseleave="hovered = false">
			<img :src="company.picture" class="company-logo">
			<div class="company-info">
				<span class="company-title">{{ company.title }}</span>
				<span class="company-description">{{ company.description_short }}</span>
				<TagsList :tags="company.companySpecializations.map(i => i.title)" :white="hovered" />
				<div class="pointer">
					<img src="/img/red-pointer.svg" class="pointer-img">
				</div>
			</div>
		</div>
	</NuxtLink>
</template>

<script>
	export default {
		props: ['company'],
		data() {
			return {
				hovered: false,
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '~/styles/mixin';

	.company {
		&-logo {
			height: 90px;
			margin-bottom:20px;
		}

		&-card {
			padding-top: 32px;
			padding-bottom: 35px;
			padding-left: 9px;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			margin-bottom: 3px;
			border: 1px solid #F7F7F7;
			border-radius:10px;

			&:hover {
				background: rgba(3, 9, 83, 0.03);
				border-radius: 8px;
				margin-left: -23.5px;
				padding-left: 32.5px;
				margin-right: -23.5px;
				cursor: pointer;

				.company-title {
					color: #EF3E4A;
				}

				.company-specialization {
					background: #FFFFFF;
				}

				.pointer {
					display: flex;
				}
			}
		}

		&-info {
			display: grid;
		}

		&-title {
			font-size: 24px;
			margin-bottom: 16px;
			color: #030953;
		}

		&-description {
			font-size: 14px;
			color: #333333;
			margin-bottom: 16px;
		}
	}

	.pointer {
		display: none;
		justify-content: flex-end;

		&-img {
			margin-right: 23px;
		}
	}

	@include mediaUp(md) {
		.company {
			&-logo {
				height: 30px;
			}

			&-card {
				align-items: start;
				display: grid;
				grid-template-columns: 70px 1fr;
				border: none;
			}
		}
	}
</style>