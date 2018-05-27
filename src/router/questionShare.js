
export default {
	path: '/question-share',
	name: 'questionShare',
	meta: {
		requiredAuth: true,
		label: '个人中心'
	},
	component(resolve) {
		require.ensure([], () => resolve(require('../modules/questionShare')));
	},
	children: []
}