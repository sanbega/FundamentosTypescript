//const landscape = 0;
//const portrait = 1;
//const square = 2;
//const panomara = 3;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panomara"] = 3] = "Panomara";
})(PhotoOrientation || (PhotoOrientation = {}));
var Landscape = PhotoOrientation.Landscape;
console.log("landscape", Landscape);
console.log("landscape", PhotoOrientation[Landscape]); // para ver el estado y el nombre de la enumeracion 0
