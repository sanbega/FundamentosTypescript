export {};
let user: [number, string];
user = [1, "sabev"];

console.log("user", user);

//tuplas con varios valores

let userInfo: [number, string, boolean];
userInfo = [2, "assas", true];

console.log("userInfo", userInfo);

//array de tuplas

let array: [number, string][]; //el array a la ultimo es que le esta diciendo que va hacer un array de tuplas
let array = [];
array.push([1, "sa"]); // 0 position
array.push([2, "nb"]); // 1 position
array.push([3, "ega"]); // 2 position

//console.log("array", array);

//uso de funciones Array tuplas

array[2][1] = array[2][1].concat("001"); //

console.log("array", array);
