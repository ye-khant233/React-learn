
// imperative approach

// const points = [4, 2, 5, 3, 2, 7, 1, 4];

// const uniqueArray = []; //state

// for(let point of points){
//     if(!uniqueArray.includes(point)){
//         uniqueArray.push(point);
//     }
 
// }
// console.log(uniqueArray);



 const points = [4, 2, 5, 3, 2, 7, 1, 4];

//  const uniqueArray = new Set(points);
//  console.log(uniqueArray);

// const newPoints = [...points , "add"];
;
// console.log(newPoints);

// immpure function with side effect

let total = 0;
function add (x){
    total +=x;
    return total;
}

console.log(add(10));
console.log(add(10));