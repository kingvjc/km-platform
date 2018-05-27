export function resetObject(object) {
	for (let k in object) {
		object[k] = '';
	}
}
export function setObject(target, object) {
	for(let k in target) {
		target[k] = object[k];
	}
}