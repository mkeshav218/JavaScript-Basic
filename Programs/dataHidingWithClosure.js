function counter(){
    var count = 0;
    return function incrementCounter(){
        return ++count;
    }
}

var counter1 = counter();
console.log('counter1 :- ', counter1());
console.log('counter1 :- ', counter1());
console.log('counter1 :- ', counter1());

var counter2 = counter();
console.log('counter2 :- ', counter2()); 