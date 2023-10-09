/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

 var curVal=null
 var prevInit=null
var createCounter = function(init) {
    if(prevInit!==init){
        prevInit=init
        curVal=init
    }
    return {
        increment:()=>{
           curVal= curVal+1
            return curVal
            },
        decrement:()=>{
             curVal= curVal-1
            return curVal
            },
        reset:()=>{
            curVal=init
            return curVal
            },
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
