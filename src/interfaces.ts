interface Picture {
  title: string;
  date: string;
  orientation: PhotoOrientation;
}
function showPicture(picture: {
  title: string;
  date: string;
  orientation: PhotoOrientation;
}) {
  console.log(`[title: ${picture.title},
    date: ${picture.date},
    orienta: ${picture.orientation}
  ]`);
}

let myPic = {
  title: "test",
  date: "2020",
  orientation: PhotoOrientation.Landscape,
};

showPicture(myPic);

interface PictureConfig {
  title?: string;
  date?: string;
  orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
  const pic = { title: "defautl", date: "2200" };
  if (config.title) {
    pic.title = config.title;
  }
  if (config.date) {
    pic.date = config.date;
  }
  return pic;
}

let picture = generatePicture({});
console.log("picture", picture);
picture = generatePicture({ title: "travel" });
console.log("picture", picture);

//interface: user

interface User {
  readonly id: number; // el atributo readonly quiere decir que es solo de lectura
  username: string;
  isPro: boolean;
}

let user: User;
user = { id: 10, username: "lasasca", isPro: true };
console.log("user", user);
user.username = "sasasas";
//user.id = 20;
console.log("user", user);
