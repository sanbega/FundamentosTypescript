//Void

//Tipo explicito
//funcion que recibe un objeto que es de valor any

function showInfo(user: any): any {
  console.log("User Info", user.id, user.userName, user.firsName);
}
showInfo({
  id: 1,
  username: "sanbega",
  firsName: "beltran",
});

//tipo inferido
//funcion que recibe un objeto que es de valor any
function showFormattedInfo(user: any) {
  console.log(
    "User Info",
    `
    id : ${user.id}
    username: ${user.userName}
    firstName: ${user.firstName}
  `
  );
}
showFormattedInfo({ id: 1, username: "sanbega", firsName: "beltran" });

//tipo void, como tipo de dato en una variable

//tipo Explicito
//tipo de dato vacio o null o undefined que se llama void
let unusable: void;
unusable = null;
unusable = undefined;

//Tipo never
//tipo Explicito
//a esta funcion se le dice que tido de dato es como en este caso es never ya que no retorna nada ningun valor
function handleError(code: number, message: string): never {
  //process your code here

  //Generate a message
  throw new Error(`${message}. Code: ${code}`);
  //el throw es para capturar codigo como en este es un error
}
try {
  handleError(404, "not found");
} catch (error) {}

console.log("handleError", handleError);

function sumNumbers(limit: number): never {
  let sum = 0;
  while (true) {
    sum++;
  }
}

sumNumbers(10);
