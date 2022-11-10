export default [{
    path: '/',
    name:"Home",
    component: () => import('../pages/Home.vue')
  },
  // {
  //   path: '/',
  //   name:"Main",
  //   component: () => import('../views/Main.vue'),
  //   children: [{
  //       path: '/home',
  //       name:"Home",
  //       component: () => import('../views/Home.vue'),
  //     },
  //   ],
  // },
   {
    path:"/:pathMatch(.*)",
    redirect: {
      name: 'Home'
    }
  }
]