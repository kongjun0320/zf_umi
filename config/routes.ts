export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    icon: 'HomeOutlined',
    path: '/home',
    name: '首页',
    component: './home/index',
  },
  {
    icon: 'UserOutlined',
    path: '/user',
    name: '用户管理',
    component: './user/index',
    routes: [
      {
        icon: 'UserOutlined',
        name: '添加用户',
        path: '/user/add',
        component: './user/add/index',
      },
      {
        icon: 'UserOutlined',
        name: '添加列表',
        path: '/user/list',
        component: './user/list/index',
      },
      {
        icon: 'UserOutlined',
        name: '用户详情',
        path: '/user/detail/:id',
        component: './user/detail/index',
        hideInMenu: true,
      },
    ],
  },
];
