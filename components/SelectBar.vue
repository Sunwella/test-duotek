<template>
	<div class="select-bar">
		<div class="select-industy">
			<span class="select-title">Отрасль</span>
			<v-select
				v-model="internalIndustryId"
				label="title" 
				:reduce="val => val.id"
				:options="industries" 
				placeholder="Все отрасли" 
			/>
		</div>
		<div class="select-specialization">
			<span class="select-title">Специализация</span>
			<v-select
				v-model="internalSpecializationId"
				label="title"
				:reduce="val => val.id"
				:options="specializations"
				placeholder="Все специализации" 
			/>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		props:['industryId', 'specializationId'],
		data() {
			return {
				industries: [],
				specializations: [],
			}
		},
		async fetch() {
			let response = await axios.get('http://api-test.duotek.ru/definitions');
			this.industries = response.data.Industry;
			this.specializations = response.data.CompanySpecialization;
		},
		computed: {
			internalIndustryId: {
				get() {
					return this.industryId;
				},
				set(val) {
					this.$emit('update:industryId', val);
				},
			},
			internalSpecializationId: {
				get() {
					return this.specializationId;
				},
				set(val) {
					this.$emit('update:specializationId', val);
				},
			}
		}
	}
</script>

<style lang="scss" scoped>
	.v-select {
		background-color: #ffffff;
		margin-top: 16px;
	}

	.select {

		&-bar {
			background: #F7F7F7;
			border-radius: 4px;
			padding: 18px 20px;
			height: fit-content;
		}

		&-industy {
			margin-bottom: 24px;
		}
	}
</style>