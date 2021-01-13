<template>
	<div class="h-screen overflow-hidden items-center justify-center">
		<div class="flex h-screen overflow-y-hidden bg-white">

			<left-layout :show="showSideBar" />

			<div class="flex flex-col flex-1 h-full overflow-hidden">
				<top-layout @toggleSideBar="toggleSideBar" :show="showSideBar" />
<!-- 				
				<div class="absolute right-0 bottom-0 m-5">
					<div class="flex items-center bg-green-500 border-l-4 border-green-700 py-4 px-3 shadow-md mb-2">
						<div class="text-green-500 rounded-full bg-white mr-3">
							<svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
							</svg>
						</div>
						
						<div class="text-white max-w-xs ">
							{{ message.body }}
						</div>
					</div>
				</div> -->

				<!-- <div class="fixed inset-x-0 bottom-0 flex px-4 py-6 pointer-events-none p-6 items-start justify-end">
					<div class="max-w-sm w-full">
							<div class="transform ease-out duration-300 transition delay-300">
								<div
									class="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-4"
								>
									<div class="flex justify-center items-center w-12 bg-red-500">
									<svg
										class="h-6 w-6 fill-current text-white"
										viewBox="0 0 40 40"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
										d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
										></path>
									</svg>
									</div>

									<div class="-mx-3 py-2 px-4">
									<div class="mx-3">
										<span class="text-red-500 font-semibold">Hola</span>
										<p class="text-gray-600 text-sm">Mundo</p>
									</div>
									</div>
								</div>
							</div>
					</div>
				</div> -->
				
				<main class="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll bg-gray-100">
					<router-view></router-view>
				</main>
				<footer-layout />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { computed, defineComponent, ref } from 'vue'
	import { getModule } from 'vuex-module-decorators'
	import TopLayout from '@/components/admin_layout/Header.vue'
	import LeftLayout from '@/components/admin_layout/Aside.vue'
	import FooterLayout from '@/components/admin_layout/Footer.vue'
	import { useRoute } from 'vue-router'
	import SystemModule from '@/store/modules/system'
	//import Notification from '@/components/utils/Notification.vue'

	export default defineComponent({
		components:{
			TopLayout,
			LeftLayout,
			FooterLayout,
	//		Notification
		},

		setup() {
			const route = useRoute();
			const currentRoute = ref(route.name);
			const showSideBar = ref(true);
			const system = getModule(SystemModule);
			
			const toggleSideBar = ()=>{
				showSideBar.value = !showSideBar.value;
			}

			return {
				currentRoute: currentRoute.value,
				showSideBar:  computed(()=> showSideBar.value ),
				message:  computed(()=> system.message ),
				toggleSideBar
			}
		}
	});
</script>