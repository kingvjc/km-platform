import {getUserInfoUrl} from './api.js';

export async function getUserInfo({commit}) {
	const data = await getUserInfoUrl();
    if (Object.is(data.status, 1)) {
    	commit('SET_USER_INFO', data);
    }
	console.log(data);
	return data;
}