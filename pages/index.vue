<template>
	<div>
		<Page title="Каталог компаний">
			<div>
				<SearchBar :search-query.sync="searchQuery" />
				<div v-for="(company, index) in companies" :key="index">
					<CompanyCard :company="company" />
				</div>
			</div>
			
			<template #sidebar>
				<SelectBar 
					:industry-id.sync="industryId"
					:specialization-id.sync="specializationId" 
				/>
			</template>
		</Page>
		<Pagination 
			:page.sync="page"
			:per-page.sync="perPage"
			:total="totalCompanies"
		/>		
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		layout: 'default',
		data() {
			const { specialization, industry, search, page, per_page } = this.$route.query;

			return {
				companies: [],
				searchQuery: search || '',
				specializationId: Number(specialization) || null,
				industryId: Number(industry) || null,
				page: Number(page) || 1,
				perPage: Number(per_page) || 5,
				totalCompanies: 0,
			}
		},
		async fetch() {
			const params = {
				specialization: this.specializationId || undefined,
				industry: this.industryId || undefined,
				search: this.searchQuery || undefined,
				page: this.page,
				per_page: this.perPage,
			};

			let response = await axios.get('http://api-test.duotek.ru/companies', { params });
			this.$router.replace({ query: params });
			
			this.companies = response.data.data;
			this.totalCompanies = response.data.meta.total;
		},
		watch: {
			page() {
				this.$fetch();
			},
			perPage() {
				this.$fetch();
			},
			searchQuery() {
				this.$fetch();
			},
			industryId() {
				this.$fetch();
			},
			specializationId() {
				this.$fetch();
			}
		},
	}
</script>