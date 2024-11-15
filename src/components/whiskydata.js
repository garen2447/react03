// src/whiskysData.js

const whiskydata = [
    {
      id: 1,
      nombre: "Glenfiddich 12",
      año: 2009,
      marca: "Glenfiddich",
      precio: "$50",
      descripcion: "Un whisky escocés de malta pura, suave y afrutado.",
      foto: "/glenfiddich-12.jpg"
    },
    {
      id: 2,
      nombre: "Johnnie Walker Black Label",
      año: 2005,
      marca: "Johnnie Walker",
      precio: "$40",
      descripcion: "Whisky blended, con un sabor profundo y equilibrado.",
      foto: "/jw-black.jpg"
    },
    {
      id: 3,
      nombre: "Macallan 18",
      año: 2002,
      marca: "Macallan",
      precio: "$250",
      descripcion: "Un whisky escocés con una rica historia de barricas de jerez.",
      foto: "/macallan-18.jpg"
    },
    {
      id: 4,
      nombre: "Ardbeg 10 Year Old",
      año: 2012,
      marca: "Ardbeg",
      precio: "$70",
      descripcion: "Whisky ahumado y torbado de Islay, con notas intensas de sal marina.",
      foto: "/ardbeg-10.jpg"
    },
    {
      id: 5,
      nombre: "Laphroaig 10 Year Old",
      año: 2010,
      marca: "Laphroaig",
      precio: "$60",
      descripcion: "Ahumado y medicinal, un whisky de Islay con un fuerte sabor a turba.",
      foto: "/laphroaig-10.jpg"
    },
    {
      id: 6,
      nombre: "Glenlivet 18",
      año: 2005,
      marca: "Glenlivet",
      precio: "$120",
      descripcion: "Un whisky escocés suave y equilibrado con notas de fruta madura.",
      foto: "/glenlivet-18.jpg"
    },
    {
      id: 7,
      nombre: "Highland Park 18 Year Old",
      año: 2002,
      marca: "Highland Park",
      precio: "$150",
      descripcion: "Un whisky de las Islas Orcadas con una mezcla de dulzura y ahumado.",
      foto: "/hp-18.jpg"
    }
  ];
  
  export const fetchWhiskys = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(whiskydata); // Simulamos que los datos llegan con un delay de 2 segundos
      }, 1000);
    });
  };
  