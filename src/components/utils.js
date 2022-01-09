export function toArray(nodes) {
	return Array.prototype.slice.call(nodes);
}

export function $$(selector, context = document) {
	return context ? toArray(context.querySelectorAll(selector)) : [];
}