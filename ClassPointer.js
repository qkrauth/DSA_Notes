class Cookie {

}

// when you create a class you always capitalize the name of the Class
// A class always has something called "constructor" this creates new "Cookies" of the class

class Cookie {
    constructor(color) {
        this.color = color
    }
}

let cookieOne = new Cookie("green")


// cookieOne is the specific instance of Cookie that we are creating, we do this by using the "new" keyword that calls the constructor, we are passing it the color green. so now "this" cookie is green, "this" keyword refers to a specific instance

class Cookie {
    constructor(color) {
        this.color = color
    }
    getColor() {
        return this.color
    }
    setColor(color) {
        this.color = color
    }
}

let cookieTwo = new Cookie("blue")

// we have a getColor and setColor functions, these are the two broad categories of methods we can create "getters" and "setters"

// POINTERS // 

let num1 = 5
let num2 = num1

// this is not permanent, this is making num2 equal to 5 at the time we create the variable (NOT A POINTER)

let obj1 = {
    value: 11
}
let obj2 = obj1

// when you set a variable equal to an object you are saying obj1 points to this object (IT IS A POINTER)
// so here obj2 is pointing to the exact same value or object in memory in obj1 (IT IS THE EXACT SAME THING IN MEMORY)
// if you have an object that nothing is pointing to it cannot be used and is just taking up space in memory