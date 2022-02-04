function showPicture(picture) {
    console.log("[title: " + picture.title + ",\n    date: " + picture.date + ",\n    orienta: " + picture.orientation + "\n  ]");
}
var myPic = {
    title: "test",
    date: "2020",
    orientation: PhotoOrientation.Landscape,
};
showPicture(myPic);
function generatePicture(config) {
    var pic = { title: "defautl", date: "2200" };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
var picture = generatePicture({});
console.log("picture", picture);
picture = generatePicture({ title: "travel" });
console.log("picture", picture);
var user;
user = { id: 10, username: "lasasca", isPro: true };
console.log("user", user);
user.username = "sasasas";
//user.id = 20;
console.log("user", user);
