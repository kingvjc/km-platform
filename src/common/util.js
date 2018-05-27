
export function formUrl(url, domain=location.host, urlConfig = urlConfig) {
	if (domain === 'localhost:8080') {
	    url='http://localhost:3000' + url;
	 }
	 return url;
}
/**
 * 获取日期格式输出
 * @param  {Date}   time   时间
 * @param  {String} format 输出格式，要求必须含有yyyy,mm,dd
 * @return {String}        默认返回yyyymmdd格式时间
 */
 export function getTimeStr(time, format = 'yyyy-MM-dd HH:mm:ss') {
    if (typeof time === 'string' ||
        typeof time === 'number') {
        time = new Date(time);
        return format
            .replace('yyyy', time.getFullYear())
            .replace('MM', leftpad(time.getMonth() + 1, 2, '0'))
            .replace('dd', leftpad(time.getDate(), 2, '0'))
            .replace('HH', leftpad(time.getHours(), 2, '0'))
            .replace('mm', leftpad(time.getMinutes(), 2, '0'))
            .replace('ss', leftpad(time.getSeconds(), 2, '0'));
    }
    return '';
}

function leftpad(str, len, ch = ' ') {
    str = str + '';
    len = len - str.length;
    if (len <= 0) {
        return str;
    }
    ch = ch + '';
    let pad = '';
    while (len) {
        if (len & 1) {
            pad += ch;
        }
        len >>= 1;
        ch += ch;
    }
    return pad + str;
}
/**
 * [formParams 去除空的字段]
 * @param  {[type]} params [目标对象]
 * @return {[type]}        [null]
 */
export function formParams(params) {
    for(let k in params) {
        if(!params[k]) {
            delete params[k];
        }
    }
}
