/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. *Window* When using 'this' in a global scope, it takes on the value and refers to the main container of the webpage (global window object).
* 2. *Implicit* When a dot appears before a function , the object to the left of it takes the value of 'this'.
* 3. *Explicit* 'This" is explicity defined when the call and apply method is used. 
* 4.  *New* 'this' refrs to the object that is created and returned by a constructor function. Specifically when a constructor function is used. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding

const cuteObj = {
    greeting: 'Hey',
    speak: function() {
        return `${this.greeting}, ya'll!`
    }
};
console.log(cuteObj.speak());

// Principle 3

// code example for New Binding

function HumanSpeak(greeter) {
    this.greeting = 'Sup';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const sonic = new HumanSpeak('Tails');
const tails = new HumanSpeak('Sonic');

console.log(sonic.speak());
console.log(tails.speak());

// Principle 4

// code example for Explicit Binding

console.log(sonic.speak.call(tails));
console.log(tails.speak.apply(sonic));