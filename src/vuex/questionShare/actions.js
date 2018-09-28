
import * as Api from './api';

//获取文章列表
export async function getArticleList({commit}, params) {
	const data = await Api.articleListUrl(params);
	commit('SET_ARTICLE_LIST',data);
	return data;
}
export async function articleSave({commit}, params) {
	return await Api.acticleSaveUrl(params);
}
export async function getArticleDetail({commit}, params) {
	return await Api.acticleDetailUrl(params);
}