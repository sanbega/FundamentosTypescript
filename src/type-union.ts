export {};

//unir dos tipos de datos de diferente tipo de forma explicita

//let idUser: number | string; // este signo | significa que esta uniendo los dos valores
//idUSer = 10;
//idUSer = "10";

// como buscar username dado un id

//function getUserNameById(id: number | string) {
//  //la logica de negocio, find the user
//  return "luixaviles";
//}

// getUserNameById(20);
// getUserNameById("20");

//alias de types : TS
//el alias se crea con la palabra reservada type
type IdUser = number | string;

let idUser: IdUser; // este signo | significa que esta uniendo los dos valores
idUSer = 10;
idUSer = "10";

// como buscar username dado un id

function getUserNameById(id: IdUser) {
  //la logica de negocio, find the user
  return "luixaviles";
}

getUserNameById(20);
getUserNameById("20");

//tipos literales

type SquareSize = "100*100" | "1000*1000" | "500*500"; // se une igual con el mismo signo "|"

let smallPicture: SquareSize = "1000*1000";
