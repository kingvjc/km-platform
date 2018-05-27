const root = {
    path: '/',
    redirect: 'list'
};
const list = {
	path: 'list',
	name: 'codeList',
	meta: {
		requiresAuth: true,
		label: '列表'
	},
	component(resolve) {
		require.ensure([], () => resolve(require('../modules/nameRules/list')));
	},
};
export default {
	path: '/name-rules',
	name: 'nameRules',
	meta: {
		requiresAuth: true,
		label: '公共主页'
	},
	component(resolve) {
		require.ensure([], () => resolve(require('../modules/nameRules')));
	},
	children: [root, list]
}
