let a = 10
const b = 20
var c =30
// console.log(a);
// console.log(b);
// console.log(c);
// its a global scop so all value should be printed but when we convert it local or block scop its will  be printed again.
if (true) {
    let a = 10
    const b = 20
    var c =30
};
// console.log(a);
// console.log(b);
// console.log(c);
// nested scop => make a function in a function thats will be a nested scop 
function one() {
    let a = 10
    function two() {
        let b = 20 
        console.log(a);
        function three() {
            let c =30
            console.log(b);
            console.log(c);
            
        }
        three()
    }
    two()
}
one()
// using this scop we can add multiple function in a single function.