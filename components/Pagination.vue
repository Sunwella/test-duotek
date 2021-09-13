<template>
	<Container>
		<div class="flex">
			<nav>
				<ul class="pagination">
					<li 
						v-for="(pagPage, index) in pagination" 
						:key="index" 
						:class="{'current-page': pagPage == page}" 
						class="pagination-elem"
						type="button"  
						@click="changePage(pagPage)" 
					>
						<span>{{ pagPage }}</span>
					</li>
				</ul>
			</nav>
			<PerPage @internal-per-page="changePerPage" />
		</div>
	</Container>
</template>

<script>
	export default {
		props: ['total', 'page', 'perPage'],
		data() {
			return {
				shownSideButtonsCount: 5,
			}
		},
		methods: {
			changePage(page) {
				this.$emit('update:page', page);
			},
			changePerPage(perPage) {
				this.$emit('update:perPage', perPage);
			}
		},
		computed: {
			pagesCount() {
				let from = (this.page - 1) * this.perPage;
				let to = from + this.perPage;
				this.$emit("page-elem", from, to);
				return Math.ceil(this.total / this.perPage);
			},
			pages() {
				let arr = [];
				for (let i = 1; i <= this.pagesCount; i++) {
					arr.push(i);
				}
				return arr;
			},
			pagination() {
				let pagination = [];
				let negativeNumberDifference = this.page - this.shownSideButtonsCount <= 1;
				let sumPaginationElem = this.page + this.shownSideButtonsCount;
				let maxPaginationElemOnPage = this.shownSideButtonsCount * 2 + 1;
				
				if (negativeNumberDifference && sumPaginationElem <= maxPaginationElemOnPage) {
					for (let i = 0; i <= this.shownSideButtonsCount * 2; i++) {
						if(this.pages[i] != undefined) {
							pagination.push(this.pages[i]);
						}
					}
				} else if (!negativeNumberDifference && sumPaginationElem <= this.pagesCount) {
					for (let i = this.page - this.shownSideButtonsCount - 1; i < this.page + this.shownSideButtonsCount; i++) {
						pagination.push(this.pages[i]);
					}
				} else if (sumPaginationElem > this.pagesCount) {
					for (let i = this.pagesCount - this.shownSideButtonsCount * 2 - 1; i < this.pagesCount; i++) {
						pagination.push(this.pages[i]);
					}
				}
				return pagination;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '~/styles/mixin';

	.flex {
		display: grid;
		justify-content: center;
		grid-gap: 10px;
		align-items: center;

		@include mediaUp(md) {
			grid-template-columns: 1fr 30%;
		}
	}

	.pagination {
		display: flex;
		align-items: center;
		justify-content: center;

		&-elem {
			color: #030953;
			background: #ffffff;
			border: none;
			padding: 8px 16px;
			margin-right: 4px;
			cursor: pointer;
		}
	}
		

	.current-page {
		background: #F7F7F7;
		color: #808080;
		border-radius: 4px
	}
</style>