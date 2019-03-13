function find_average(array){
let sum = 0;
array.forEach(function (x){
sum += x;
})
return sum/array.length;
}
