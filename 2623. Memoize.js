/**
 * @param {Function} fn
 */
function memoize(fn) {
    var obj={}
    return function(...args) {
       const key=String(args)
       if(key in obj){
           return obj[key]
       }
        let a=fn(...args)
        obj[key]=a
        return a 
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
