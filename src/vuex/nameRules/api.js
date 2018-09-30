
import request from 'common/request';
import jsonp from 'common/jsonp';
//
export async function codeListUrl(params){
	return await request({
		method: 'get',
		url: '/api/codeList',
		params: params
	})
}
export async function addCodeUrl(params){
	return await request({
		method: 'post',
		url: '/api/addCode',
		params: params
	})
}
export async function deleteCodeUrl(params){
	return await request({
		method: 'post',
		url: '/api/codeDel',
		params: params
	})
}
export async function editCodeUrl(params){
	return await request({
		method: 'post',
		url: '/api/codeEdit',
		params: params
	})
}
export async function jsonptestUrl(params){
	return new Promise(function(resolve, reject) {
		jsonp('http://localhost:3000/api/jsonp', params, function(data){
			resolve(data);
		});
	})
}

