//Immediate Invoke Function Expression
/*Immediately Invoked Function Expressions (IIFE) are 
JavaScript functions that are executed immediately after they
 are defined. They are typically used to create a local scope 
 for variables to prevent them from polluting the global scope.
 */
(function call(){
    console.log("Aman Tiwari ");
})();
// takisng parameter
(
    (name) => {
        console.log(`hay, my name ${name}`);
    }
)("Aman")