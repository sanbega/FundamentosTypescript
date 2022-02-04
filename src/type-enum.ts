//const landscape = 0;
//const portrait = 1;
//const square = 2;
//const panomara = 3;

export enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panomara,
}

const Landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log("landscape", Landscape);
console.log("landscape", PhotoOrientation[Landscape]); // para ver el estado y el nombre de la enumeracion 0
