/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
	return async function (...args) {

		let promiseFn = fn(...args);
		let promiseTimeout = await new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log('Time Limit Exceeded');
			}, t);
		});
		return Promise.race([promiseFn, promiseTimeout]);
	}
};

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms