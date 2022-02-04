//tipo de dato clase son un conjunto de objetos
//import {PhotoOrientation} from './' es para traer algo especifico de algun archivo o carpeta
export enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

class Picture {
  public id: number;
  private title: string;
  orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.id = id; //la palabra reservada this para hacer referencia a las diferentes propiedades que tiene la clase
    this.title = title;
    this.orientation = orientation;
  }
}

//la palabra reservada public es para dar acceso publico
//la palabra reservada private es para dar acceso privado
