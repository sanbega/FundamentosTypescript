console.log("hola");
//tipado explicito tipo de datos numericos
var phone;
phone: 1;
//tipado inferido tipos de dato Boolenos
var isPro = true;
isPro = false;
var username = "sanbega";
//template String uso de backtick es basicamente como un objeto
var userInfo = "\n  User Info:\n  userName : " + username + " \n  firsName: " + (username + " Beltran") + "\n  phone: " + phone + "\n  isPro: " + isPro + "\n";
//nota se nombra lo que quieres llamar entre parentecis y al lado lo que vas a traer
console.log("userInfo", userInfo);
