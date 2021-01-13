<template>
	<breadcrumb>
			<button class="p-2 bg-white rounded-full hover:bg-gray-200 focus:outline-none focus:ring">
				<svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
				</svg>
			</button>

			<button class="p-2 ml-2 bg-white rounded-full hover:bg-gray-200 focus:outline-none focus:ring">
				<svg class="w-6 h-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</button>

			<button class="p-2 ml-2 bg-white rounded-full hover:bg-gray-200 focus:outline-none focus:ring">
				<svg class="w-6 h-6 text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
				</svg>
			</button>
	</breadcrumb>

	<!-- Table see (https://tailwindui.com/components/application-ui/lists/tables) -->
	<div class="flex flex-col mt-6">
		<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
				<div class="overflow-hidden border-b border-gray-200 rounded-md shadow-md">
					<table class="min-w-full overflow-x-scroll divide-y divide-gray-200">
						<thead class="bg-gray-50">
							<tr>
								<th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
									Name
								</th>
								<th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
									Title
								</th>
								<th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
									Status
								</th>
								<th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
									Role
								</th>
								<th scope="col" class="relative px-6 py-3">
									<span class="sr-only">Edit</span>
								</th>
							</tr>
						</thead>
						<tbody class="bg-white divide-y divide-gray-200">
							<span >
								<tr class="transition-all hover:bg-gray-100 hover:shadow-lg">
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="flex-shrink-0 w-10 h-10">
												<img class="w-10 h-10 rounded-full" src="https://avatars0.githubusercontent.com/u/57622665?s=460&amp;u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&amp;v=4" alt="">
											</div>
											<div class="ml-4">
												<div class="text-sm font-medium text-gray-900">Ahmed Kamel</div>
												<div class="text-sm text-gray-500">ahmed.kamel@example.com</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-900">Regional Paradigm Technician</div>
										<div class="text-sm text-gray-500">Optimization</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
											Active
										</span>
									</td>
									<td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Admin</td>
									<td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
										<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
									</td>
								</tr>
							</span>
						
								<tr class="transition-all hover:bg-gray-100 hover:shadow-lg">
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="flex-shrink-0 w-10 h-10">
												<img class="w-10 h-10 rounded-full" src="https://avatars0.githubusercontent.com/u/57622665?s=460&amp;u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&amp;v=4" alt="">
											</div>
											<div class="ml-4">
												<div class="text-sm font-medium text-gray-900">Ahmed Kamel</div>
												<div class="text-sm text-gray-500">ahmed.kamel@example.com</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-900">Regional Paradigm Technician</div>
										<div class="text-sm text-gray-500">Optimization</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
											Active
										</span>
									</td>
									<td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Admin</td>
									<td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
										<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
									</td>
								</tr>
							
								<tr class="transition-all hover:bg-gray-100 hover:shadow-lg">
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="flex-shrink-0 w-10 h-10">
												<img class="w-10 h-10 rounded-full" src="https://avatars0.githubusercontent.com/u/57622665?s=460&amp;u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&amp;v=4" alt="">
											</div>
											<div class="ml-4">
												<div class="text-sm font-medium text-gray-900">Ahmed Kamel</div>
												<div class="text-sm text-gray-500">ahmed.kamel@example.com</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-900">Regional Paradigm Technician</div>
										<div class="text-sm text-gray-500">Optimization</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
											Active
										</span>
									</td>
									<td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Admin</td>
									<td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
										<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
									</td>
								</tr>
							
								<tr class="transition-all hover:bg-gray-100 hover:shadow-lg">
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="flex-shrink-0 w-10 h-10">
												<img class="w-10 h-10 rounded-full" src="https://avatars0.githubusercontent.com/u/57622665?s=460&amp;u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&amp;v=4" alt="">
											</div>
											<div class="ml-4">
												<div class="text-sm font-medium text-gray-900">Ahmed Kamel</div>
												<div class="text-sm text-gray-500">ahmed.kamel@example.com</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-900">Regional Paradigm Technician</div>
										<div class="text-sm text-gray-500">Optimization</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
											Active
										</span>
									</td>
									<td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Admin</td>
									<td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
										<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
									</td>
								</tr>
							
								<tr class="transition-all hover:bg-gray-100 hover:shadow-lg">
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="flex-shrink-0 w-10 h-10">
												<img class="w-10 h-10 rounded-full" src="https://avatars0.githubusercontent.com/u/57622665?s=460&amp;u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&amp;v=4" alt="">
											</div>
											<div class="ml-4">
												<div class="text-sm font-medium text-gray-900">Ahmed Kamel</div>
												<div class="text-sm text-gray-500">ahmed.kamel@example.com</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-900">Regional Paradigm Technician</div>
										<div class="text-sm text-gray-500">Optimization</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
											Active
										</span>
									</td>
									<td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Admin</td>
									<td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
										<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
									</td>
								</tr>
							
								<tr class="transition-all hover:bg-gray-100 hover:shadow-lg">
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="flex-shrink-0 w-10 h-10">
												<img class="w-10 h-10 rounded-full" src="https://avatars0.githubusercontent.com/u/57622665?s=460&amp;u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&amp;v=4" alt="">
											</div>
											<div class="ml-4">
												<div class="text-sm font-medium text-gray-900">Ahmed Kamel</div>
												<div class="text-sm text-gray-500">ahmed.kamel@example.com</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-900">Regional Paradigm Technician</div>
										<div class="text-sm text-gray-500">Optimization</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
											Active
										</span>
									</td>
									<td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Admin</td>
									<td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
										<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
									</td>
								</tr>
							
								<tr class="transition-all hover:bg-gray-100 hover:shadow-lg">
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="flex-shrink-0 w-10 h-10">
												<img class="w-10 h-10 rounded-full" src="https://avatars0.githubusercontent.com/u/57622665?s=460&amp;u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&amp;v=4" alt="">
											</div>
											<div class="ml-4">
												<div class="text-sm font-medium text-gray-900">Ahmed Kamel</div>
												<div class="text-sm text-gray-500">ahmed.kamel@example.com</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-900">Regional Paradigm Technician</div>
										<div class="text-sm text-gray-500">Optimization</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
											Active
										</span>
									</td>
									<td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Admin</td>
									<td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
										<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
									</td>
								</tr>
							
								<tr class="transition-all hover:bg-gray-100 hover:shadow-lg">
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="flex-shrink-0 w-10 h-10">
												<img class="w-10 h-10 rounded-full" src="https://avatars0.githubusercontent.com/u/57622665?s=460&amp;u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&amp;v=4" alt="">
											</div>
											<div class="ml-4">
												<div class="text-sm font-medium text-gray-900">Ahmed Kamel</div>
												<div class="text-sm text-gray-500">ahmed.kamel@example.com</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-900">Regional Paradigm Technician</div>
										<div class="text-sm text-gray-500">Optimization</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
											Active
										</span>
									</td>
									<td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Admin</td>
									<td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
										<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
									</td>
								</tr>
							
								<tr class="transition-all hover:bg-gray-100 hover:shadow-lg">
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="flex-shrink-0 w-10 h-10">
												<img class="w-10 h-10 rounded-full" src="https://avatars0.githubusercontent.com/u/57622665?s=460&amp;u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&amp;v=4" alt="">
											</div>
											<div class="ml-4">
												<div class="text-sm font-medium text-gray-900">Ahmed Kamel</div>
												<div class="text-sm text-gray-500">ahmed.kamel@example.com</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-900">Regional Paradigm Technician</div>
										<div class="text-sm text-gray-500">Optimization</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
											Active
										</span>
									</td>
									<td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Admin</td>
									<td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
										<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
									</td>
								</tr>
							
								<tr class="transition-all hover:bg-gray-100 hover:shadow-lg">
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="flex-shrink-0 w-10 h-10">
												<img class="w-10 h-10 rounded-full" src="https://avatars0.githubusercontent.com/u/57622665?s=460&amp;u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&amp;v=4" alt="">
											</div>
											<div class="ml-4">
												<div class="text-sm font-medium text-gray-900">Ahmed Kamel</div>
												<div class="text-sm text-gray-500">ahmed.kamel@example.com</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-900">Regional Paradigm Technician</div>
										<div class="text-sm text-gray-500">Optimization</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
											Active
										</span>
									</td>
									<td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Admin</td>
									<td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
										<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
									</td>
								</tr>
							
								<tr class="transition-all hover:bg-gray-100 hover:shadow-lg">
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="flex-shrink-0 w-10 h-10">
												<img class="w-10 h-10 rounded-full" src="https://avatars0.githubusercontent.com/u/57622665?s=460&amp;u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&amp;v=4" alt="">
											</div>
											<div class="ml-4">
												<div class="text-sm font-medium text-gray-900">Ahmed Kamel</div>
												<div class="text-sm text-gray-500">ahmed.kamel@example.com</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-900">Regional Paradigm Technician</div>
										<div class="text-sm text-gray-500">Optimization</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
											Active
										</span>
									</td>
									<td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Admin</td>
									<td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
										<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
									</td>
								</tr>
							</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { computed } from 'vue'

	export default {
		setup() {			
			return{
				name: 'Luis'
			}
		}
	}
</script>
