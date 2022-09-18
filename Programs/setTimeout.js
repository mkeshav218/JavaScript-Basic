async function x(){
    var j = 10;
    setTimeout(function () {
        console.log(j);
    },3000);
    console.log('Hello World');
    for(var i=1;i<5;i++){
        setTimeout(function () {
            console.log('With var',i);
        },3000*i);
    }
    for(let k=1;k<5;k++){
        setTimeout(function () {
            console.log('with let',k);
        },3000*k);
    }
    for(var i=1;i<5;i++){
        function timer(x){
            setTimeout(function () {
                console.log('With var modified',x);
            },3000*x);
        }
        timer(i);
    }
    for(var i=1;i<5;i++){
        async function close(){
            await setTimeout(function () {
                console.log('With var',i);
            },3000*i);
        }
        await close();
    }
}
x();
