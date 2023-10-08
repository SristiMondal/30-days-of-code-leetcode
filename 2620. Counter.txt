/**
 * @param {number} n
 * @return {Function} counter
 */
 var counter=0
 var input=null
 var value=null
var createCounter = function(n) {
    if(input!==n){
        input=n
        counter=0
    }
    return function() {
        if(counter===0){
            value=n
        }
        else{
            value=value+1
        }
            counter=counter+1
       return value
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
