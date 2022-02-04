interface Entity {
  id: number;
  title: string;
}

interface Album extends Entity {
  //la palabra reservada extends relaciona dos interfaces
  description: string;
}

interface Picture extends Entity {
  id: number;
  title: string;
  orientation: PhotoOrientation;
}

const album: Album = {
  id: 1,
  title: "sanabsaa",
  description: "casascasknck",
};

const picture: Picture = {
  id: 1,
  title: "sancaksn",
  orientation: PhotoOrientation.Landscape,
};

let newPicture = {} as Picture; // el as es para dar el tipo de dato

function name(params: string) {}
