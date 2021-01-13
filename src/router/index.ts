import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/about',
		name: 'About',
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},

	//Admin views
	{
		path: "/admin",
		name: "admin",
		component: () => import('@/layouts/Admin.vue'),
		children: [
			{
				path: "", name: "Denuncias",
				component: () => import('@/views/complaints/Grid.vue')
			},
			{
				path: "/form:id?", name: "Denuncias/Form",
				component: () => import('@/views/complaints/Grid.vue')
			},			
		],
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
