<template>
	<div class="company">
		<div class="company-nums">
			<div class="company-age">
				<span class="num">{{ company.age }}</span>
				<span>лет</span>
			</div>
			<div class="company-age">
				<span class="num">{{ company.staff }}</span>
				<span>человек</span>
			</div>
		</div>
		<span class="description-short">{{ company.description_short }}</span>
		<span class="description-full">{{ company.description_full }}</span>

		<div class="tags-group">
			<div class="tags-group-name">Проектная специализация</div>
			<TagsList :tags="company.companySpecializations.map(i => i.title)" />
		</div>
		<div class="tags-group">
			<div class="tags-group-name">Технологии</div>
			<TagsList :tags="company.industries.map(i => i.title)" />
		</div>
	</div>
</template>

<script>
	export default {
		props: ['company'],
	}
</script>

<style lang="scss" scoped>
	.num {
		font-size: 60px;
		color: #EF3E4A;
		margin-right: 5px;
	}
	
	.company {
		display: grid;

		&-age {
			margin-right: 20px;
			display: flex;
		}

		&-nums {
			display: flex;
			margin-bottom: 10px;
		} 

		&-specialization {
			background: #F7F7F7;
			border-radius: 200px;
			padding: 7px 22px;
			margin-right: 4px;
			height: fit-content;

			&-title {
				font-size: 14px;
				color: #333333;
			}
		}
	}

	.tags {
		display: flex;

		&-group {
			margin-bottom: 40px;

			&-name {
				font-size: 18px;
				margin-bottom: 24px;
			}
		}
	}

	.description {

		&-short {
			font-size: 18px;
			line-height: 140%;
			margin-bottom: 24px;
		}

		&-full {
			font-size: 14px;
			margin-bottom: 40px;
			line-height: 150%;
		}
	}
</style>