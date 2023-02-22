// A function that calls itself until it doesnt

// The process of doing recursion has to be the same each time/run, each time we run the function or run the recursion the problem becomes smaller and smaller

// Our base case is when our function receives the proper outcome. It is called a recursive case when the function has to call itself again or when it does not have the proper outcome in the if statement

// A "stack overflow" is when the recursion loop is an infinite loop

// The "call stack" is the order that our operations execute in, one function or portion of a function runs first and the code cannot moce forward until that portion of the call stack has been ran

// A factorial looks like this "5!" and it equates to 5 * 4 * 3 * 2 * 1

function factorial(n) {
    if (n === 1) return 1
    return n * factorial(n-1)
}