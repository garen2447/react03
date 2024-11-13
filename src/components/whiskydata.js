// src/whiskysData.js

const whiskydata = [
    {
      id: 1,
      nombre: "Glenfiddich 12",
      año: 2009,
      marca: "Glenfiddich",
      precio: "$50",
      descripcion: "Un whisky escocés de malta pura, suave y afrutado.",
      foto: "https://www.glenfiddich.com/media/3549/glenfiddich-12.jpg"
    },
    {
      id: 2,
      nombre: "Johnnie Walker Black Label",
      año: 2005,
      marca: "Johnnie Walker",
      precio: "$40",
      descripcion: "Whisky blended, con un sabor profundo y equilibrado.",
      foto: "https://www.johnniewalker.com/media/1088/johnnie-walker-black-label-bottle_01.jpg"
    },
    {
      id: 3,
      nombre: "Macallan 18",
      año: 2002,
      marca: "Macallan",
      precio: "$250",
      descripcion: "Un whisky escocés con una rica historia de barricas de jerez.",
      foto: "https://www.themacallan.com/sites/default/files/2020-04/macallan-18yo.jpg"
    },
    {
      id: 4,
      nombre: "Ardbeg 10 Year Old",
      año: 2012,
      marca: "Ardbeg",
      precio: "$70",
      descripcion: "Whisky ahumado y torbado de Islay, con notas intensas de sal marina.",
      foto: "https://www.ardbeg.com/sites/default/files/styles/product_image/public/2020-09/Ardbeg%2010%20Year%20Old.jpg"
    },
    {
      id: 5,
      nombre: "Laphroaig 10 Year Old",
      año: 2010,
      marca: "Laphroaig",
      precio: "$60",
      descripcion: "Ahumado y medicinal, un whisky de Islay con un fuerte sabor a turba.",
      foto: "https://www.laphroaig.com/sites/default/files/laphroaig-10-year-old.jpg"
    },
    {
      id: 6,
      nombre: "Glenlivet 18",
      año: 2005,
      marca: "Glenlivet",
      precio: "$120",
      descripcion: "Un whisky escocés suave y equilibrado con notas de fruta madura.",
      foto: "https://www.theglenlivet.com/sites/default/files/styles/product_hero/public/2020-08/glenlivet-18.jpg"
    },
    {
      id: 7,
      nombre: "Highland Park 18 Year Old",
      año: 2002,
      marca: "Highland Park",
      precio: "$150",
      descripcion: "Un whisky de las Islas Orcadas con una mezcla de dulzura y ahumado.",
      foto: "https://www.highlandparkwhisky.com/sites/default/files/highlandpark-18-year-old.jpg"
    },
    {
      id: 8,
      nombre: "Talisker 10 Year Old",
      año: 2008,
      marca: "Talisker",
      precio: "$75",
      descripcion: "Whisky de la isla de Skye, con notas de mar y especias, y un toque de humo.",
      foto: "https://www.taliskerwhisky.com/sites/default/files/talisker-10.jpg"
    },
    {
      id: 9,
      nombre: "Buffalo Trace Bourbon",
      año: 2015,
      marca: "Buffalo Trace",
      precio: "$35",
      descripcion: "Un bourbon estadounidense, con notas de caramelo, vainilla y un toque especiado.",
      foto: "https://www.buffalotracedistillery.com/sites/default/files/buffalo-trace.jpg"
    },
    {
      id: 10,
      nombre: "Yamazaki 12 Year Old",
      año: 2010,
      marca: "Suntory",
      precio: "$150",
      descripcion: "Un whisky japonés que mezcla sutilmente sabores florales, afrutados y especiados.",
      foto: "https://www.suntory.com/sites/default/files/yamazaki12.jpg"
    },
    {
      id: 11,
      nombre: "Glenmorangie 18 Year Old",
      año: 2003,
      marca: "Glenmorangie",
      precio: "$170",
      descripcion: "Un whisky de las Highlands escocesas, con notas de frutos secos y chocolate.",
      foto: "https://www.glenmorangie.com/sites/default/files/glenmorangie-18-year-old.jpg"
    },
    {
      id: 12,
      nombre: "Bushmills 16 Year Old",
      año: 2005,
      marca: "Bushmills",
      precio: "$80",
      descripcion: "Un whisky irlandés madurado en barricas de roble y jerez, suave y con notas especiadas.",
      foto: "https://www.bushmills.com/sites/default/files/bushmills-16-year-old.jpg"
    },
    {
      id: 13,
      nombre: "Powers Gold Label",
      año: 2015,
      marca: "Powers",
      precio: "$40",
      descripcion: "Un whisky irlandés con un sabor rico y especiado, ideal para combinar.",
      foto: "https://www.powerswhiskey.com/sites/default/files/powers-gold-label.jpg"
    },
    {
      id: 14,
      nombre: "Clynelish 14 Year Old",
      año: 2007,
      marca: "Clynelish",
      precio: "$110",
      descripcion: "Whisky de la región de Highland, con un sabor frutal y suave toque a cera de abejas.",
      foto: "https://www.clynelishwhisky.com/sites/default/files/clynelish-14-year-old.jpg"
    }
  ];
  
  export const fetchWhiskys = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(whiskydata); // Simulamos que los datos llegan con un delay de 2 segundos
      }, 1000);
    });
  };
  