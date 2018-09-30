/**
 * @file    jsonp请求
 * @author  chuntyang
 * sep,30 2018 
 */

function getGuid() {
	const a = new Date().getUTCMilliseconds();
	const b = Math.round(Math.random() * 146284220 * a);
	return b % 100000000;
}
export default function jsonp(url, params, callback) {
	const goid = getGuid();
	const callback_name = `fun_callback${goid}`;

	let queryUrl = '';
	if (params && Object.keys(params).length > 0) {
		for (let key in params) {
			queryUrl+= key + '=' + params[key] + '&';
		}
	}

	window[callback_name] = callback;
	var script = document.createElement('script');

	script.onload = script.onreadystatechange = function () {
		try {
			callback();
		} finally {
			script.parentNode.removeChild(script);
			script = null;
			delete window[callback_name];
		}
    };

	script.type = 'text/javascript';
    script.setAttribute('charset', 'utf-8');
    script.src = `${url}?${queryUrl}callback=${callback_name}`;
    document.getElementsByTagName('head')[0].appendChild(script);
}
