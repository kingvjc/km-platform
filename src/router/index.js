import Vue from 'vue';
import Router from 'vue-router';
import nameRules from './nameRules';
import questionShare from './questionShare';
import {getUserAuth} from 'modules/global/auth';

Vue.use(Router)

const home = {
	path: '/',
	redirect: to => {
		return 'name-rules';
	},
	name: 'home',
}
const router = new Router({
    routes: [home, nameRules, questionShare]
});
//登录前判断路由的跳转
// router.beforeEach(async (to, from, next) => {
// 	console.log(to.matched.some(recode => recode.meta.requiredAuth));
// 	if (to.matched.some(recode => recode.meta.requiresAuth)) {
// 		const hasAuth = await getUserAuth();
// 		console.log(hasAuth);
// 		if (!hasAuth) {
// 			next(false);
// 			return;
// 		} else {
// 			next()
// 		}
// 	}
// })
export default router;
