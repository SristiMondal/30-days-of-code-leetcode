/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe:(val1)=>{
            let result = val===val1;
            if(result===true) 
            {
                return true
             }
             else{ 
                 throw "Not Equal"
                 }
            },
        notToBe:(val1)=>{
            let result=val!==val1
             if(result===true) 
            {
                return true
             }
             else{ 
                 throw "Equal"
                 }
            }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
