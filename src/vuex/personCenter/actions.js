import {
	getBackgroundUrl,
	getHeadImgUrl,
	testurl
} from './api';

export async function getBackground({commit}, userid) {
	let data = await getBackgroundUrl(userid);
	commit('SET_BACKGROUND', data.imgPre);
	return data;
}

export async function getHeadImg({commit}, userid) {
	let data = await getHeadImgUrl(userid);
	if (data.headImg) {
		commit('SET_HEADI_IMG', data.headImg);
	}
	return data;
}
export async function test({commit}) {
	const data = await testurl();
	console.log(data);
	return data;
}