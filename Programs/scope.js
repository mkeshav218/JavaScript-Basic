console.log(b);
//console.log(c);  // ReferenceError
//console.log(d);  // ReferenceError
function a(){
    console.log(b);
    console.log(c);
    console.log(d);

    function e() {
        console.log(b);
        console.log(c);
        console.log(d);
    }

    e();
}
var b = 10;
let c = 100;
const d = 1000;
a();