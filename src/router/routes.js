
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PagePlayers.vue') },
      { path: 'help', component: () => import('pages/PageHelp.vue') },
      { path: 'settings', component: () => import('pages/PageSettings.vue') },
      { path: 'settings/values', component: () => import('pages/PageValues.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
