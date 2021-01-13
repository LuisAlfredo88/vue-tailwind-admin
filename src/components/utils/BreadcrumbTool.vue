<template>
	<!-- Main content header -->
	<div class="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
		<h1 class="text-2xl font-semibold whitespace-nowrap">{{ currentRoute }}</h1>
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
	import { computed, defineComponent, ref } from 'vue'
	import { useRoute } from 'vue-router'

	export default defineComponent({
		setup() {
			const route = useRoute();
			const currentRoute = ref(route.name);

			return {
				currentRoute: currentRoute.value
			}
		}
	});
</script>