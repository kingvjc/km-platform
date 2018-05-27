
import store from 'vuex/store';
export async function getUserAuth() {
	if (!store.getters.userIsLogin) {
		try {
			await store.dispatch('getUserInfo');
		} catch (e) {
			throw e;
		}
		return false;
	}
	return true;
}