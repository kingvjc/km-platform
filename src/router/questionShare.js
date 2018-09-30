const root = {
	path: '/',
	redirect: 'list'
};
const list = {
	path: 'list',
	name: 'articleList',
	meta: {
		requiresAuth: true,
		label: '问题列表'
	},
	component(resolve) {
		require.ensure([], () => resolve(require('../modules/questionShare/share/list')));
	},
};
const edit = {
	path: 'edit',
	name: 'articleEdit',
	meta: {
		requiresAuth: true,
		label: '问题编辑'
	},
	component(resolve) {
		require.ensure([], () => resolve(require('../modules/questionShare/share/edit')));
	},
};
const share = {
	path: 'share',
	name: 'share',
	meta: {
		requiresAuth: true,
		label: '问题分享'
	},
	component(resolve) {
		require.ensure([], () => resolve(require('../modules/questionShare/share')));
	},
	children: [root, list, edit]
};
export default {
	path: '/question-share',
	name: 'questionShare',
	redirect: '/question-share/list',
	icon: 'el-icon-setting',
	meta: {
		requiresAuth: true,
		label: '问题管理'
	},
	component(resolve) {
		require.ensure([], () => resolve(require('../modules/questionShare')));
	},
	children: [share]
}