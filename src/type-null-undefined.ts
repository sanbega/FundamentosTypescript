//explicita
//tipo de dato null
let nullVariable: null;
nullVariable = null;

let otherVariable = null;
otherVariable = "test";

console.log("nullVariable", nullVariable);
console.log("otherVariable", otherVariable);

//tipo de dato undefined
let undefinedVariable: undefined = undefined;
undefinedVariable: undefined;

console.log("undefinedVariable", undefinedVariable);

// --strictNullChecks este flag es para buscar errores mas puntuales y se puede utilizar en un comando que su sintaxis es asi "tsc "la carpeta donde esta el archivo" "nombre del archivo" --strictNullChecks" o de la otra forma es habilitandolo en el archivo tsconfig
let albumName: string;
albumName = "saneba";
