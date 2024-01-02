// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

// The time limited function should follow these rules:

// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

var timeLimit = function(fn, t) {
    
    return async function(...args) {
        // store function in variable
            const promise = fn(...args)
        //  use Promise when there's a plan for data in the future not known when the Promise gets defined
        // Promise takes a arg for resolve  (.then) and optionally one for rejection (.catch) 
            const promiseReject = new Promise((res, reject) =>{
        // in this case we set a timeout, by the end of t reject will run
                setTimeout(()=>{
                    reject('Time Limit Exceeded')
                }, t)
            })
            // Promise.race() runs 2 Promises and returns the fastest one
            // if t is shorter than fn timeout 
            return Promise.race([promise, promiseReject])
    }
};