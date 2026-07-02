// Datos reales del Distrito de Guadalupe, provincia de Pacasmayo,
// departamento de La Libertad, Perú. Fuentes: Municipalidad Distrital
// de Guadalupe, INEI, Mincetur y Gobierno del Perú.

export const distrito = {
  nombre: "Guadalupe",
  provincia: "Pacasmayo",
  departamento: "La Libertad",
  pais: "Perú",
  capital: "Guadalupe",
  altitud: "40 m s. n. m.",
  clima: "Cálido y seco, temperatura promedio anual 22 °C",
  poblacion: "Aproximadamente 42 000 habitantes (INEI, censo 2017)",
  superficie: "180.62 km²",
  fundacion: "Fundado el 8 de diciembre de 1550 por frailes agustinos",
  aniversario: "8 de diciembre (Día de la Inmaculada Concepción)",
  ubicacion:
    "El distrito de Guadalupe se ubica en el valle del río Jequetepeque, al norte del departamento de La Libertad, en la provincia de Pacasmayo. Limita al norte con el departamento de Lambayeque, al sur con el distrito de Pacanga, al este con San José de Moro y al oeste con el distrito de Pueblo Nuevo.",
  descripcion:
    "Guadalupe es un distrito con profunda raíz agustina, cuna de tradiciones religiosas, cultura mochica y chimú, y despensa agrícola del valle Jequetepeque. Reconocido por su arroz, sus dulces conventuales y por ser la puerta de acceso a importantes sitios arqueológicos y balnearios del norte peruano.",
};

export type Atractivo = {
  id: string;
  titulo: string;
  resumen: string;
  descripcion: string;
  ubicacion?: string;
  imgPrompt: string;
};

export const atractivos: Atractivo[] = [
  {
    id: "pueblo-historico",
    titulo: "Pueblo Histórico de Guadalupe",
    resumen:
      "Casco urbano colonial fundado en 1550 por la orden agustina, con calles empedradas y casonas republicanas.",
    descripcion:
      "El Pueblo Histórico conserva el trazo damero original de la fundación agustina de 1550. Sus calles, plazuelas y casonas de adobe y balcones de madera reflejan la impronta colonial y republicana del valle Jequetepeque. Es escenario cada año de la procesión de la Virgen de Guadalupe, patrona del distrito.",
    ubicacion: "Cercado de Guadalupe",
    imgPrompt: "Plaza colonial de Guadalupe Perú con iglesia agustina",
  },
  {
    id: "iglesia-matriz",
    titulo: "Iglesia Matriz Nuestra Señora de Guadalupe",
    resumen:
      "Templo agustino levantado en el siglo XVI, alberga la venerada imagen de la Virgen de Guadalupe.",
    descripcion:
      "La Iglesia Matriz de Guadalupe es uno de los templos más antiguos del norte peruano. Fue edificada por los agustinos poco después de la fundación del pueblo en 1550 y custodia la imagen de la Virgen de Guadalupe, réplica traída desde Extremadura, España. Su retablo, altares laterales y arquitectura de adobe y quincha la convierten en patrimonio religioso y arquitectónico del valle.",
    ubicacion: "Plaza de Armas de Guadalupe",
    imgPrompt: "Fachada de iglesia colonial agustina de adobe",
  },
  {
    id: "pakatnamu",
    titulo: "Sala de Exposiciones Pakatnamú",
    resumen:
      "Museo local que exhibe piezas mochica, chimú y coloniales halladas en el complejo arqueológico Pacatnamú.",
    descripcion:
      "La Sala de Exposiciones Pakatnamú resguarda cerámica, textilería y objetos rituales de las culturas Mochica, Lambayeque y Chimú, además de piezas de la etapa colonial. Es el punto de partida ideal para comprender la ocupación milenaria del valle Jequetepeque antes de visitar el complejo arqueológico Pacatnamú, a orillas del Pacífico.",
    ubicacion: "Guadalupe, cercado",
    imgPrompt: "Sala de museo con cerámica mochica y chimú",
  },
  {
    id: "playa-bocana",
    titulo: "Playa La Bocana",
    resumen:
      "Playa en la desembocadura del río Jequetepeque, ideal para pesca artesanal y paseos familiares.",
    descripcion:
      "La Bocana se ubica en la desembocadura del río Jequetepeque en el océano Pacífico. Sus arenas amplias y aguas tranquilas la convierten en un refugio para la pesca artesanal, la observación de aves y los paseos familiares. Es también un mirador natural del encuentro entre el valle y el mar.",
    ubicacion: "Litoral del distrito, sector Jequetepeque",
    imgPrompt: "Playa peruana en desembocadura de río con botes de pescadores",
  },
  {
    id: "pacatnamu",
    titulo: "Complejo Arqueológico Pacatnamú",
    resumen:
      "Ciudadela prehispánica sobre acantilados frente al mar, ocupada por Mochica, Lambayeque y Chimú.",
    descripcion:
      "Pacatnamú es uno de los complejos arqueológicos más extensos de la costa norte. Emplazado sobre los acantilados de la margen norte del río Jequetepeque, reúne pirámides truncas, plazas y cementerios de las culturas Mochica, Lambayeque y Chimú. Su ubicación estratégica frente al mar lo convirtió en un importante centro ceremonial y administrativo.",
    ubicacion: "Margen norte de la desembocadura del río Jequetepeque",
    imgPrompt: "Pirámides truncas de adobe sobre acantilados costeros",
  },
  {
    id: "campina",
    titulo: "Campiña y Valle Jequetepeque",
    resumen:
      "Extensos arrozales, chacras de frutales y canales de regadío que dibujan el paisaje agrícola del distrito.",
    descripcion:
      "La campiña de Guadalupe es célebre por sus arrozales, maizales y huertos de frutales alimentados por el sistema de riego del reservorio Gallito Ciego. Recorrer sus caminos rurales permite conocer de cerca la vida agrícola del valle Jequetepeque y disfrutar de gastronomía de campo.",
    ubicacion: "Zona rural del distrito",
    imgPrompt: "Arrozales verdes del valle Jequetepeque al amanecer",
  },
];

export type Cultura = {
  id: string;
  titulo: string;
  resumen: string;
  descripcion: string;
  icono: string;
};

export const cultura: Cultura[] = [
  {
    id: "historia",
    titulo: "Historia",
    resumen:
      "Fundado en 1550 por los agustinos, Guadalupe fue centro evangelizador y agrícola del valle Jequetepeque.",
    descripcion:
      "El pueblo fue fundado el 8 de diciembre de 1550 por frailes de la orden de San Agustín, quienes trajeron desde Extremadura la advocación de la Virgen de Guadalupe. Durante el Virreinato se consolidó como centro doctrinero y productor agrícola. En la etapa republicana fue elevado a distrito y desde entonces mantiene su rol de capital cultural del valle Jequetepeque.",
    icono: "Landmark",
  },
  {
    id: "tradiciones",
    titulo: "Tradiciones",
    resumen:
      "Procesiones marianas, danzas de pallas y ferias agropecuarias marcan el calendario guadalupano.",
    descripcion:
      "Entre las tradiciones más arraigadas están las procesiones a la Virgen de Guadalupe, la danza de las Pallas, los desfiles cívicos por el aniversario y las ferias agropecuarias que reúnen a productores del valle. Los platos servidos en cada celebración son parte inseparable de la fiesta.",
    icono: "Sparkles",
  },
  {
    id: "costumbres",
    titulo: "Costumbres",
    resumen:
      "Vida en torno a la plaza, dulces conventuales y hospitalidad campesina caracterizan al guadalupano.",
    descripcion:
      "La vida cotidiana gira alrededor de la Plaza de Armas, los mercados y la iglesia matriz. Las familias mantienen la costumbre de preparar dulces conventuales heredados de las monjas agustinas, y de compartir con los visitantes los productos del valle.",
    icono: "Users",
  },
  {
    id: "festividades",
    titulo: "Festividades",
    resumen:
      "El 8 de diciembre se celebra a la Virgen de Guadalupe, patrona y aniversario del distrito.",
    descripcion:
      "La festividad principal es la de la Virgen de Guadalupe, cada 8 de diciembre, con novena, misa central, procesión, quema de castillos y ferias. También destacan la Semana Santa, la fiesta de San Pedro (patrón de los pescadores en Jequetepeque) y el aniversario de creación política del distrito.",
    icono: "CalendarHeart",
  },
  {
    id: "patrimonio",
    titulo: "Patrimonio",
    resumen:
      "Iglesia Matriz, casonas coloniales y sitios arqueológicos como Pacatnamú integran su patrimonio.",
    descripcion:
      "El patrimonio guadalupano combina lo colonial y lo prehispánico: la Iglesia Matriz, casonas del casco histórico, la Sala Pakatnamú y los complejos arqueológicos de Pacatnamú y San José de Moro conforman un valioso conjunto reconocido por el Ministerio de Cultura del Perú.",
    icono: "Building2",
  },
  {
    id: "arte",
    titulo: "Arte y Artesanía",
    resumen:
      "Imaginería religiosa, cerámica inspirada en Mochica y tejidos tradicionales del valle.",
    descripcion:
      "Los artesanos locales trabajan la imaginería religiosa, la cerámica con motivos mochica y chimú, y el tejido en algodón nativo. Estas piezas se pueden apreciar en ferias del aniversario y en talleres familiares del distrito.",
    icono: "Palette",
  },
  {
    id: "religion",
    titulo: "Religión",
    resumen:
      "Mayoritariamente católica, con profunda devoción mariana a la Virgen de Guadalupe.",
    descripcion:
      "La religiosidad católica es el eje espiritual del distrito. La devoción a la Virgen de Guadalupe convoca cada año a peregrinos de toda la macrorregión norte, convirtiendo a Guadalupe en un importante destino de turismo religioso.",
    icono: "Church",
  },
];

export type Plato = {
  id: string;
  nombre: string;
  descripcion: string;
  ingredientes: string[];
  historia: string;
  imgPrompt: string;
};

export const platos: Plato[] = [
  {
    id: "sudado-lifes",
    nombre: "Sudado de Lifes",
    descripcion:
      "Plato emblemático del valle Jequetepeque, preparado con lifes (pez de río) en un aromático guiso de chicha, ají y culantro.",
    ingredientes: [
      "Lifes frescos del río Jequetepeque",
      "Chicha de jora",
      "Ají amarillo y ají panca",
      "Cebolla, tomate, ajo",
      "Culantro fresco",
      "Yuca sancochada",
    ],
    historia:
      "El sudado de lifes es reconocido como uno de los platos bandera de Guadalupe y del valle Jequetepeque. Se prepara con el life, pequeño pez de río abundante en la cuenca, y refleja el mestizaje entre la despensa fluvial y las técnicas culinarias norteñas.",
    imgPrompt: "Sudado peruano de pescado life con culantro en olla de barro",
  },
  {
    id: "arroz-pato",
    nombre: "Arroz con Pato a la Norteña",
    descripcion:
      "Arroz verde cocinado en culantro, chicha y cerveza negra, acompañado de presa de pato criollo dorada.",
    ingredientes: [
      "Pato criollo",
      "Arroz",
      "Culantro molido",
      "Chicha de jora y cerveza negra",
      "Ají amarillo y ají panca",
      "Loche o zapallo",
    ],
    historia:
      "Distintivo de la costa norte, el arroz con pato encontró en Guadalupe una preparación arraigada gracias a la crianza tradicional de patos y al arroz cultivado en el valle Jequetepeque.",
    imgPrompt: "Arroz con pato verde norteño peruano en plato blanco",
  },
  {
    id: "seco-cabrito",
    nombre: "Seco de Cabrito con Frijoles",
    descripcion:
      "Cabrito tierno guisado en culantro y chicha, servido con frijoles canarios y arroz blanco.",
    ingredientes: [
      "Cabrito tierno",
      "Culantro molido",
      "Chicha de jora",
      "Ají amarillo, ajo, cebolla",
      "Frijoles canarios",
      "Arroz blanco graneado",
    ],
    historia:
      "Herencia de la cocina virreinal norteña, el seco de cabrito es infaltable en las mesas guadalupanas de fiesta patronal y celebraciones familiares.",
    imgPrompt: "Seco de cabrito norteño con frijoles y arroz",
  },
  {
    id: "dulces",
    nombre: "Dulces Conventuales",
    descripcion:
      "Alfajores, king kong, natillas y king kong de manjar herederos de la tradición agustina y monástica.",
    ingredientes: [
      "Harina, manteca y azúcar",
      "Manjar blanco de leche de vaca",
      "Dulce de piña, maní y camote",
      "Yemas, chancaca y clavo de olor",
    ],
    historia:
      "Los dulces conventuales de Guadalupe son herencia directa de la orden agustina que fundó el pueblo. Recetas transmitidas por generaciones aún se venden en la plaza y en dulcerías familiares del distrito.",
    imgPrompt: "Dulces peruanos tradicionales alfajores king kong natilla",
  },
];

export type Evento = {
  fecha: string; // ISO YYYY-MM-DD
  titulo: string;
  tipo: "religiosa" | "civica" | "cultural" | "tradicional";
  descripcion: string;
};

export const eventos: Evento[] = [
  {
    fecha: "2026-01-06",
    titulo: "Bajada de Reyes",
    tipo: "religiosa",
    descripcion:
      "Celebración de la Epifanía con misa, adoración al Niño y compartir en las capillas del distrito.",
  },
  {
    fecha: "2026-03-29",
    titulo: "Semana Santa Guadalupana",
    tipo: "religiosa",
    descripcion:
      "Procesiones, viacrucis y celebraciones litúrgicas en la Iglesia Matriz Nuestra Señora de Guadalupe.",
  },
  {
    fecha: "2026-06-29",
    titulo: "Fiesta de San Pedro",
    tipo: "tradicional",
    descripcion:
      "Homenaje al patrón de los pescadores en la caleta de Jequetepeque y La Bocana, con procesión marina.",
  },
  {
    fecha: "2026-07-28",
    titulo: "Fiestas Patrias del Perú",
    tipo: "civica",
    descripcion:
      "Desfile cívico escolar y ceremonias oficiales en la Plaza de Armas de Guadalupe.",
  },
  {
    fecha: "2026-10-18",
    titulo: "Señor de los Milagros",
    tipo: "religiosa",
    descripcion:
      "Procesión del Cristo Morado por las calles del distrito, con acompañamiento de hermandades.",
  },
  {
    fecha: "2026-12-08",
    titulo: "Aniversario de Guadalupe y Fiesta Patronal",
    tipo: "religiosa",
    descripcion:
      "Fiesta central de la Virgen de Guadalupe, aniversario del distrito: novena, misa, procesión, quema de castillos y feria agropecuaria.",
  },
];

export type DirectorioItem = {
  id: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  telefono?: string;
  direccion?: string;
  mapsQuery: string;
  icono: string;
};

export const directorio: DirectorioItem[] = [
  {
    id: "municipalidad",
    nombre: "Municipalidad Distrital de Guadalupe",
    categoria: "Municipalidad",
    descripcion:
      "Gobierno local del distrito. Atención al ciudadano, trámites y servicios municipales.",
    telefono: "(044) 566-020",
    direccion: "Jr. Grau s/n, Plaza de Armas, Guadalupe",
    mapsQuery: "Municipalidad Distrital de Guadalupe Pacasmayo",
    icono: "Building2",
  },
  {
    id: "hospital",
    nombre: "Hospital Tomás Lafora",
    categoria: "Hospital",
    descripcion:
      "Establecimiento de salud de referencia del distrito y del valle Jequetepeque.",
    telefono: "(044) 566-030",
    direccion: "Av. Ramón Castilla, Guadalupe",
    mapsQuery: "Hospital Tomás Lafora Guadalupe La Libertad",
    icono: "Stethoscope",
  },
  {
    id: "comisaria",
    nombre: "Comisaría PNP Guadalupe",
    categoria: "Policía",
    descripcion:
      "Comisaría de la Policía Nacional del Perú. Emergencias y seguridad ciudadana.",
    telefono: "105",
    direccion: "Cercado de Guadalupe",
    mapsQuery: "Comisaría PNP Guadalupe Pacasmayo",
    icono: "Shield",
  },
  {
    id: "bomberos",
    nombre: "Compañía de Bomberos",
    categoria: "Bomberos",
    descripcion:
      "Atención de emergencias, incendios y rescate. Coordinación con estaciones de Pacasmayo y Chepén.",
    telefono: "116",
    direccion: "Guadalupe, referencial",
    mapsQuery: "Bomberos Pacasmayo",
    icono: "Flame",
  },
  {
    id: "mercado",
    nombre: "Mercado Central de Guadalupe",
    categoria: "Mercados",
    descripcion:
      "Principal centro de abastos del distrito, con productos del valle Jequetepeque.",
    direccion: "Cercado de Guadalupe",
    mapsQuery: "Mercado Central Guadalupe La Libertad",
    icono: "ShoppingBasket",
  },
  {
    id: "hoteles",
    nombre: "Hoteles y Hospedajes",
    categoria: "Hoteles",
    descripcion:
      "Directorio de hoteles y hospedajes en Guadalupe y en la vecina Pacasmayo. Contenido editable.",
    mapsQuery: "Hoteles Guadalupe Pacasmayo",
    icono: "BedDouble",
  },
  {
    id: "restaurantes",
    nombre: "Restaurantes Típicos",
    categoria: "Restaurantes",
    descripcion:
      "Picanterías y restaurantes que sirven sudado de lifes, arroz con pato y seco de cabrito.",
    mapsQuery: "Restaurantes Guadalupe La Libertad",
    icono: "UtensilsCrossed",
  },
  {
    id: "farmacias",
    nombre: "Farmacias y Boticas",
    categoria: "Farmacias",
    descripcion:
      "Boticas y farmacias del distrito. Información referencial editable por la municipalidad.",
    mapsQuery: "Farmacias Guadalupe La Libertad",
    icono: "Pill",
  },
  {
    id: "bancos",
    nombre: "Bancos y Agentes",
    categoria: "Bancos",
    descripcion:
      "Agencias bancarias, cajeros y agentes corresponsales disponibles en el distrito.",
    mapsQuery: "Bancos Guadalupe Pacasmayo",
    icono: "Landmark",
  },
  {
    id: "transporte",
    nombre: "Terminal Terrestre",
    categoria: "Transporte",
    descripcion:
      "Servicios de transporte interprovincial hacia Trujillo, Chiclayo, Chepén y Pacasmayo.",
    mapsQuery: "Terminal Terrestre Guadalupe La Libertad",
    icono: "Bus",
  },
];

export const categoriasDirectorio = Array.from(
  new Set(directorio.map((d) => d.categoria)),
);
