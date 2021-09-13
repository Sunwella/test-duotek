<template>
	<div>
		<Page :title="company && company.title">
			<template #top>
				<div class="section-back" @click="to">
					<img src="/img/pointer-back.svg">
					<div class="back">Компании</div>
				</div>
			</template>

			<CompanyInfo v-if="company" :company="company" />

			<template #sidebar>
				<CompanySidebar v-if="company" :company="company" />
			</template>
		</Page>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		layout: 'dark',
		data() {
			return {
				company: null,
			}
		},
		async fetch() {
			let response = await axios.get(`http://api-test.duotek.ru/companies/info?id=${this.$route.params.id}`);
			this.company = response.data.data;
		},
		methods: {
			to() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.back {
		font-size: 14px;
		line-height: 150%;
		color: #030953;
		margin-left: 14px;
	}

	.section-back {
		display: flex;
		align-items: center;
		position: absolute;
		margin-top: -40px;
		cursor: pointer;
	}
</style>