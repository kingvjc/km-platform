
import request from 'common/request';

export async function articleListUrl(params){
	return await request({
		method: 'get',
		url: '/api/articleList',
		params: params
	})
}

export async function acticleSaveUrl(params){
	return await request({
		method: 'post',
		url: '/api/articleSave',
		params: params
	})
}
export async function acticleDetailUrl(params){
	return await request({
		method: 'get',
		url: '/api/articleDetail',
		params: params
	})
}
