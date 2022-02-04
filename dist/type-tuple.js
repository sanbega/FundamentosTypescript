"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user;
user = [1, "sabev"];
console.log("user", user);
//tuplas con varios valores
var userInfo;
userInfo = [2, "assas", true];
console.log("userInfo", userInfo);
//array de tuplas
var array; //el array a la ultimo es que le esta diciendo que va hacer un array de tuplas
var array = [];
array.push([1, "sa"]); // 0 position
array.push([2, "nb"]); // 1 position
array.push([3, "ega"]); // 2 position
//console.log("array", array);
//uso de funciones Array tuplas
array[2][1] = array[2][1].concat("001"); //
console.log("array", array);
