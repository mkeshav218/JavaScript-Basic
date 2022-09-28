console.log("start");

setTimeout(() => {
    console.log("After SetTimeout");
}, 5000);

let startDate = new Date().getTime();
let endDate = startDate;
let count = 0;
while(endDate < startDate + 1000){
    endDate = new Date().getTime();
    ++count;
}
console.log('While Expires ',count);

let radius = [1,2,3,4];
let area = function(r){
    return Math.PI*r*r;
}
let perimeter = function(r){
    return 2*Math.PI*r;
}
let diameter = function(r){
    return 2*r;
}

let calculate = function(radius,method){
    let result = [];
    for(let i=0;i<radius.length;i++){
        result.push(method(radius[i]));
    }
    return result;
}

Array.prototype.calculateCircleInfo = function(method){
    let result = [];
    for(let i=0;i<radius.length;i++){
        result.push(method(radius[i]));
    }
    return result;
}

console.log('Area = ', calculate(radius,area));
console.log('Area = ', radius.map(area));
console.log('Area = ', radius.calculateCircleInfo(area));


console.log('Perimeter = ', calculate(radius,perimeter));
console.log('Perimeter = ', radius.calculateCircleInfo(perimeter));

console.log('Diameter = ', calculate(radius,diameter));
console.log('Diameter = ', radius.calculateCircleInfo(diameter));