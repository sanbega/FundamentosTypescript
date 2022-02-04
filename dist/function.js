function createPicture(title, date, size) {
    // el signo de pregunta esta diciendo que es un parametro opcional eso quiere decir que se lo podemos enviar si queremos y no nos va salir error
    console.log("create Picture using", title, date, size);
}
createPicture("My", "2222-22-22", "SquareSize");
createPicture("My", "2222-22-22");
// flat array function
var createPic = function (title, date, size) {
    //return {
    //title: title,
    //date: date,
    //size: size,
    //};
    return { title: title, date: date, size: size };
};
var pictur = createPic("plazti", "2222-22-22", "1000*1000");
console.log("pictur", pictur);
// Nota  esta bien escrito pero por buenas practicas se debe hacer la forma de abajo
function handlerError(code, message) {
    //procesamiento del codigo, mensaje
    if (message === "error") {
        throw new Error(message + ".Code error: " + code); // la palabra recervada throw es para enlasar el error
    }
    else {
        return "An error has ocurret";
    }
}
try {
    var result = handleError(200, "ok"); //string
    console.log("result", result);
    result = handleError(404, "error"); //never
    console.log("result", result);
}
catch (error) { }
