function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;
}

var z = x();
console.log(z.toString());
z();
console.log('----------------------------------------------------')
function f1(){
    var v1 = 100;
    console.log('Inside f1 ops' ,f2(10));
    function f2(num){
        return v1 + (num*num);
    }
    return f2;
}

var f3 = f1();
var ans = f3(5);
console.log('Ans = ', ans);