const arr = [5,1,3,2,6];
console.log(arr);
function double(x){
    return 2*x;
}

let output = arr.map(double);
console.log(output);

function triple(x){
    return 3*x;
}

output = arr.map(triple);
console.log(output);

function binary(x){
    return x.toString(2);
}

output = arr.map(binary);
console.log(output);

function isOdd(x){
    if(x%2==1){
        return x;
    }
}

output = arr.filter(isOdd);
console.log(output);

function findSum(x){
    let sum = 0;
    for(let i=0;i<x.length;i++){
        sum += x[i];
    }
    return sum;
}
console.log('Sum = ', findSum(arr));

output = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
} ,0)
console.log('Sum using reduce = ',output);

output = arr.reduce((max,curr) => {
    if(max<curr){
        max = curr;
    }
    return max;
},-1)
console.log('Max using reduce = ',output);

const users = [
    {firstName:"keshav",lastName:"mishra",age:23},
    {firstName:"donald",lastName:"trump",age:75},
    {firstName:"elon",lastName:"musk",age:50},
    {firstName:"shahrukh",lastName:"khan",age:50}
]

// Print Name of all users
output = users.map(x => x.firstName + " " + x.lastName);
console.log(output);

//List of user-details having age 50
output = users.filter((x)=>{
    if(x.age==50){
        return x;
    }
})
console.log(output);

//List of user-name having age 50
output = users.reduce((acc,curr)=>{
    if(curr.age==50){
        acc.push(curr.firstName+" "+curr.lastName);
    }
    return acc;
},[])
console.log(output);

// {23:1,50:2,75:1}
output = users.reduce((acc,curr)=>{
    if(acc[curr.age]){
        acc[curr.age] = acc[curr.age]+1;
    }else{
        acc[curr.age] = 1;
    }
    return acc;
},{})
console.log(output);

//firstname of all people whose age is less than 60
output = users.reduce((acc,curr) =>{
    if(curr.age<60){
        acc.push(curr.firstName);
    }
    return acc;
},[])
console.log(output);

output = users.filter((x)=>x.age<60).map((x)=>x.firstName);
console.log(output);