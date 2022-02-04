console.log("hola");
//tipado explicito tipo de datos numericos
let phone: number;
phone: 1;

//tipado inferido tipos de dato Boolenos

let isPro = true;
isPro = false;

const username = "sanbega";
//template String uso de backtick es basicamente como un objeto

let userInfo = `
  User Info:
  userName : ${username} 
  firsName: ${username + " Beltran"}
  phone: ${phone}
  isPro: ${isPro}
`;
//nota se nombra lo que quieres llamar entre parentecis y al lado lo que vas a traer
console.log("userInfo", userInfo);
