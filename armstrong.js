/**
 * @param {Function} fn
 */
function memoize(fn) {
	const cache = {};
	return function (...args) {
		if (cache[`${fn.name}(${args})`] == null) {
			cache[`${fn.name}(${args})`] = fn(...args);
		}
		return cache[`${fn.name}(${args})`];
	}
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */