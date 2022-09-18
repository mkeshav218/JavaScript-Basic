var x = 1;
a();
console.log(b)
console.log(x);

function a(){
    var x = 10;
    console.log(x);
}

var  b = () => {
    var x = 20;
    console.log(x);
}

b();