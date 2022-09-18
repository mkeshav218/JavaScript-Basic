function Counter(){
    var count = 0;
    this.incrementCounter = () =>{
        count += 1;
        return count;
    }
    this.decrementCounter = () =>{
        return count -= 1;
    }
}

var counter1 = new Counter();
console.log('counter1 :- ', counter1.incrementCounter());
console.log('counter1 :- ', counter1.incrementCounter());
console.log('counter1 :- ', counter1.incrementCounter());

var counter2 = new Counter();
console.log('counter2 :- ', counter2.decrementCounter()); 