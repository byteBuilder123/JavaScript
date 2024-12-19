// Immediately Invoked Function Expressions (IIFE)
// used to avoid pollution from global scope

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('saba')

// ()1st for fun def ()2nd for fun execution