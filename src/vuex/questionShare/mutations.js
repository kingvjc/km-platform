import {getNewArray} from '../nameRules/config';
import {getTimeStr} from 'common/util';

export function SET_ARTICLE_LIST(state, data) {
	state.articleOption.articleList = getNewArray(data.list, ['createTime'], getTimeStr);
	state.articleOption.pageQuery.total = data.total;
}