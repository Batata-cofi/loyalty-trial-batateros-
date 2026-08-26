(function () {
  'use strict';

  var GOOGLE_RATING = 4.8;
  var GOOGLE_REVIEW_COUNT = 310;

  var SERVING_NOW = {
    espresso: {
      label: 'En espresso',
      origin: 'Colombia, Caldas',
      process: 'Lavado',
      variety: 'Caturra, Castillo, Colombia',
      image: 'img/productos/ficha-espresso.jpg?v=25f'
    },
    filtrado: {
      label: 'En filtrado',
      origin: 'El Salvador',
      process: 'Natural anaeróbico',
      variety: 'Pacamara',
      image: 'img/productos/ficha-filtrado.jpg?v=25f'
    }
  };

  var PANTRY = [
    { name: 'Café en granos',  desc: 'El mismo que tomás acá. Tostado de la semana.',  image: 'img/pantry/cafe.jpg?v=25b',      available: true  },
    { name: 'Miel orgánica',   desc: 'De productores familiares. Pura, sin filtrar.',  image: 'img/pantry/miel.jpg?v=25b',      available: true  },
    { name: 'Aceite de oliva', desc: 'De fincas de Valle de Uno. Extra virgen.',       image: 'img/pantry/aceite.jpg?v=25b',    available: true  },
    { name: 'Mermelada casera',desc: 'Hecha en casa con frutas de estación.',          image: 'img/logo.png', available: false, placeholder: true },
    { name: 'Granola',         desc: 'La que servimos en el yogurt. Hecha por nosotros.', image: 'img/logo.png', available: false, placeholder: true }
  ];

  var TESTIMONIALS = [
    {
      quote: 'Fuimos hoy a merendar, el lugar es lindo y la comida muy rica. La atención es buena también. Lo que mas nos gustó fue el latte patagónico y el suave (el almíbar le daba ese toque más dulce muy rico). Y de comida el tostado es un 10/10, el resto de cosas también ricas y se veían bien. Lo único que quizás es medio chico el lugar, no había espacio cuando llegamos pero eso demuestra que se come y pasa bien. Recomendado si querés tomar una rica merienda en un lindo lugar.',
      author: 'mica.c',
      source: 'Google'
    },
    {
      quote: 'Hermoso lugar. Merendé con una amiga y su mascota. Nos trajeron agua para la perrita. Super atentos y buenísima atención. Además que todo muy rico. El café un 10.',
      author: 'Mariel Cardoso',
      source: 'Google'
    },
    {
      quote: 'El mejor café de Avellaneda. Todo es muy rico y es hecho con mucho amor. Siempre que ando por la zona paso, 100% recomendado.',
      author: 'Martina Panetta',
      source: 'Google'
    }
  ];

  var INSTAGRAM_FEED = [
    { image: 'img/instagram/ig-1.jpg',  alt: 'Cuadro y plantas en el interior del local'   },
    { image: 'img/instagram/ig-2.jpg',  alt: 'Cata de café con grupo de personas'          },
    { image: 'img/instagram/ig-3.jpg',  alt: 'Preparando sándwiches en la cocina'          },
    { image: 'img/instagram/ig-4.jpg',  alt: 'Filmando en la vereda del local'             },
    { image: 'img/instagram/ig-5.jpg',  alt: 'DJ con controladora en la vereda'            },
    { image: 'img/instagram/ig-6.jpg',  alt: 'DJs musicalizando en la puerta del local'    },
    { image: 'img/instagram/ig-7.jpg',  alt: 'Amigos charlando en la vereda'               },
    { image: 'img/instagram/ig-9.jpg',  alt: 'Notas de cata sobre la barra'                },
    { image: 'img/instagram/ig-10.jpg', alt: 'Máquina de espresso con stickers'            }
  ];

  // IMPORTANTE: cada vez que se reemplaza el archivo de una foto (mismo nombre,
  // contenido nuevo), hay que subir el número de "?v=" en esa línea puntual.
  // Si no se sube el número, los navegadores van a seguir mostrando la versión
  // vieja desde su caché aunque el archivo en el servidor ya esté actualizado.
  var PRODUCT_IMAGES = {
    'Espresso':                        'img/menu/espresso.jpg',
    'Espresso doble':                  'img/menu/espresso-doble.jpg',
    'Espresso largo':                  'img/menu/espresso-largo.jpg',
    'Americano':                       'img/menu/americano-mediano.jpg',
    'Filtrado':                        'img/menu/filtrado.jpg?v=25',
    'Cortado':                         'img/menu/cortado.jpg',
    'Cappu':                           'img/menu/cappu.jpg',
    'Cappu doble':                     'img/menu/cappu-doble.jpg',
    'Flat white':                      'img/menu/flat-white.jpg',
    'Latte':                           'img/menu/latte.jpg',
    'Té':                              'img/menu/te.jpg',
    'Dame números':                    'img/menu/dame-numeros.jpg',
    'Cappusotto':                      'img/menu/cappusotto.jpg',
    'Choco caliente':                  'img/menu/choco-caliente.jpg',
    'Cappu marplatense':               'img/menu/cappu-marplatense.jpg',
    'Suaave':                          'img/menu/suaave.jpg',
    'Americano especiado':             'img/menu/americano-especiado.jpg',
    'Tostadas':                        'img/productos/tostadas.jpg?v=2',
    'Tostada saludable':               'img/productos/tostada-saludable.jpg',
    'Yogurt':                          'img/productos/yogurt.jpg',
    'Pancakes':                        'img/productos/pancakes.jpg?v=2',
    'Sandwich bondiola braseada':      'img/menu/sandwich-bondiola-braseada.jpg',
    'Sandwich mortadela':              'img/menu/sandwich-mortadela.jpg',
    'Sandwich de hongos':              'img/productos/sandwich-hongos.jpg',
    'Tostado':                         'img/productos/tostado-lomito-y-queso.jpg',
    'Medialuna rellena':               'img/menu/medialuna-rellena.jpg',
    'Chipa prensado':                  'img/menu/chipa-prensado.jpg',
    'Tostón de palta':                 'img/productos/toston-de-palta.jpg?v=2',
    'Tostón de perso':                 'img/productos/toston-de-perso.jpg?v=2',
    'Mandarinada':                     'img/menu/mandarinada.jpg',
    'Exprimido de naranja':            'img/menu/exprimido-naranja.jpg',
    'Latte + cookie frambuesa':        'img/menu/latte-y-cookie-pistacho-o-frambuesa.jpg',
    'Latte + tostadas':                'img/menu/latte-y-tostadas.jpg',
    'Latte + tostado':                 'img/menu/latte-y-tostado.jpg',
    'Latte + chipa':                   'img/menu/latte-y-chipa.jpg',
    'Latte + alfajor de almendras':    'img/menu/latte-y-alfajor-de-almendras.jpg',
    'Sandwich bondiola braseada + limonada': 'img/menu/sandwich-bondiola-braseada.jpg',
    'Sandwich mortadela + limonada':   'img/menu/sandwich-mortadela.jpg',
    'Sandwich de hongos + limonada':   'img/productos/sandwich-hongos.jpg',
  };

  var PRODUCT_IMAGES_LOWER = {};

  function rebuildImageLookup() {
    PRODUCT_IMAGES_LOWER = {};
    for (var k in PRODUCT_IMAGES) {
      if (Object.prototype.hasOwnProperty.call(PRODUCT_IMAGES, k)) {
        PRODUCT_IMAGES_LOWER[k.toLowerCase()] = { name: k, image: PRODUCT_IMAGES[k] };
      }
    }
  }
  rebuildImageLookup();

  function lookupProductImage(name) {
    if (!name) return null;
    return PRODUCT_IMAGES_LOWER[name.toLowerCase()] || null;
  }

  function loadMenuImages() {
    if (typeof fetch !== 'function') return;
    fetch('menu-images.json')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (manifest) {
        if (!manifest) return;
        for (var key in manifest) {
          if (Object.prototype.hasOwnProperty.call(manifest, key)) {
            PRODUCT_IMAGES[key] = manifest[key];
          }
        }
        rebuildImageLookup();
        var active = document.querySelector('.tab--active');
        if (active) switchTab(active.dataset.tab);
      })
      .catch(function () {});
  }

  var PASTRY_DESCRIPTIONS = {
    'Alfa nevado':          'Alfajor mar del plata, tapas de limón, relleno de dulce de leche, corazón de pasta de dátiles y cacao, cobertura de merengue y azúcar impalpable.',
    'Alfajor de almendras': 'Tapa de almendras, relleno de dulce de leche.',
    'Alfranui':             'Tapas de cacao, crema bariloche, crocante de choco blanco, reducción de frambuesas, cobertura parcial de chocolate.',
    'Budín de banana':      'Con nueces y salsa de dulce de leche por encima.',
    'Chipá':                'Sin gluten. Quesos: reggianito, provolone y gouda.',
    'Cookie de frambuesa':  'Cookie de frambuesa y choco blanco.',
    'Cookie de pistacho':   'Cookie de pistacho y naranja.',
    'Cookie vegana':        'De mantequilla de maní con escamas de sal.',
    'Medialuna':            'De Matenca. Argentina y gigante.',
    'Tita':                 'Galletita de limón, rellena de crema de limón, delicado baño de chocolate.',
    'Cookie de choco':      'Cacao y chocolate, nada más. Ingredientes premium posta. Sale calentita.',
    'Budín de limón':       'Clásico con amapolas y glaseado. Esponjoso, delicioso.'
  };

  var PASTRY_LIST = [
    { image: 'img/pasteleria/alfa-nevado.jpg',            caption: 'Alfa nevado',          price: '$5.200' },
    { image: 'img/pasteleria/alfajor-de-almendras-2.jpg', caption: 'Alfajor de almendras', price: '$3.800' },
    { image: 'img/pasteleria/alfranui.jpg',               caption: 'Alfranui',             price: '$5.200' },
    { image: 'img/pasteleria/budin-de-banana.jpg',        caption: 'Budín de banana',      price: '$5.300' },
    { image: 'img/pasteleria/chipa.jpg',                  caption: 'Chipá',                price: '$4.300' },
    { image: 'img/pasteleria/cookie-frambuesa.jpg',       caption: 'Cookie de frambuesa',  price: '$5.100' },
    { image: 'img/pasteleria/cookie-pistacho.jpg',        caption: 'Cookie de pistacho',   price: '$5.100' },
    { image: 'img/pasteleria/cookie-vegana.jpg',          caption: 'Cookie vegana',        price: '$4.800' },
    { image: 'img/pasteleria/cookie-choco.jpg',           caption: 'Cookie de choco',      price: '$5.100', position: '35% center' },
    { image: 'img/pasteleria/budin-de-limon.jpg',         caption: 'Budín de limón',       price: '$5.300' },
    { image: 'img/pasteleria/medialuna.jpg',              caption: 'Medialuna',            price: '$3.900' },
    { image: 'img/pasteleria/tita.jpg',                   caption: 'Tita',                 price: '$4.200' }
  ];

  var TORTAS_LIST = [
    { image: 'img/tortas/torta-batata-1.jpg',       caption: 'Torta batata' },
    { image: 'img/tortas/marquise-2.jpg',            caption: 'Marquise' },
    { image: 'img/tortas/key-lime-2.jpg',            caption: 'Key lime' },
    { image: 'img/tortas/cheesecake.jpg',            caption: 'Cheesecake' },
    { image: 'img/tortas/torta-maracuya-1.jpg',      caption: 'Torta maracuyá' },
    { image: 'img/tortas/torta-mama-2.jpg',           caption: 'Torta mamá' },
    { image: 'img/tortas/torta-vasca-frutal.jpg',    caption: 'Torta vasca frutal' },
    { image: 'img/tortas/torta-arandanos-limon.jpg', caption: 'Torta arándanos y limón' }
  ];

  var INSTAGRAM_URL = 'https://www.instagram.com/batata.cofi/';

  var COMBOS_BY_TIMESLOT = {
    manana: {
      label: 'Arrancá bien el día',
      title: 'Para empezar',
      sub: 'Combos de mañana — disponibles de martes a viernes hasta las 13:30.',
      cards: [
        { name: 'Latte + cookie', desc: 'Cookie de frambuesa con choco blanco', price: '$8.000', image: 'img/menu/latte-y-cookie-pistacho-o-frambuesa.jpg' },
        { name: 'Latte + alfajor', desc: 'Alfajor de almendras', price: '$8.000', image: 'img/menu/latte-y-alfajor-de-almendras.jpg' },
        { name: 'Latte + chipa', desc: 'Chipa recién horneado', price: '$8.000', image: 'img/menu/latte-y-chipa.jpg' }
      ],
      restLabel: 'También de mañana',
      rest: [
        { name: 'Latte + tostadas con mermelada y queso crema', price: '$9.900' },
        { name: 'Latte + tostado', price: '$12.300' }
      ]
    },
    mediodia: {
      label: 'La pausa que te merecés',
      title: 'Para el mediodía',
      sub: 'Sandwich + limonada. Agregá espresso largo o cortado por $2.000. Hasta las 13:30.',
      cards: [
        { name: 'Sandwich bondiola braseada', desc: 'Brioche, bondiola desmechada, pepinillos, lechuga, honey mustard + chips. Agregá espresso por $2.000', price: '$16.000', image: 'img/menu/sandwich-bondiola-braseada.jpg' },
        { name: 'Sandwich mortadela', desc: 'Masa madre, pesto, mortadela de pistachos, danbo + chips. Agregá espresso por $2.000', price: '$12.500', image: 'img/menu/sandwich-mortadela.jpg' },
        { name: 'Sandwich de hongos', desc: 'Masa madre, champiñones grillados, cebolla caramelizada, danbo, espinaca + chips. Agregá espresso por $2.000', price: '$16.000', image: 'img/productos/sandwich-hongos.jpg' }
      ],
      restLabel: 'También a esta hora',
      rest: [
        { name: 'Tostón de palta', price: '$11.000', desc: 'Masa madre, queso crema, palta, tomate cherry, oliva y semillas de sésamo', tag: 'Vegetariano' },
        { name: 'Tostón de perso', price: '$9.000', desc: 'Masa madre, queso crema, tomates contados, granola y oliva', tag: 'Vegetariano' }
      ]
    },
    tarde: {
      label: 'La tarde es nuestra',
      title: 'Sugerencias de tarde',
      sub: 'Los combos batateros son hasta las 13:30. A esta hora servimos esto, suelto. Consultá precio en el local.',
      cards: [
        { name: 'Flat white', desc: 'Doble ristretto con leche emulsionada', price: '$6.200', image: 'img/menu/flat-white.jpg' },
        { name: 'Alfranui', desc: 'Tapas de cacao, crema bariloche, crocante de choco blanco, reducción de frambuesas', price: '$5.200', image: 'img/pasteleria/alfranui.jpg' },
        { name: 'Chipa prensado', desc: 'Nuestro chipa relleno de lomito y queso o capresse. Sale tostado y calentito', price: '$9.100', image: 'img/menu/chipa-prensado.jpg' }
      ],
      restLabel: 'También de tarde',
      rest: [
        { name: 'Dame números', price: '$7.000' },
        { name: 'Cappusotto', price: '$7.100' }
      ]
    },
    'after-hours': {
      label: 'Estamos cerrados',
      title: 'Guardá esto para mañana',
      sub: 'Una muestra de lo que tenemos cuando abrimos. La carta completa está más abajo.',
      cards: [
        { name: 'Latte + cookie', desc: 'Combo de mañana — $8.000', price: '$8.000', image: 'img/menu/latte-y-cookie-pistacho-o-frambuesa.jpg' },
        { name: 'Sandwich bondiola braseada', desc: 'Combo de almuerzo con limonada', price: '$16.000', image: 'img/menu/sandwich-bondiola-braseada.jpg' },
        { name: 'Filtrado del día', desc: 'Café de origen en V60', price: '$7.500', image: 'img/menu/filtrado.jpg?v=25b' }
      ],
      restLabel: null,
      rest: null,
      showHoursCta: true
    }
  };

  var MENU = {
    cafe: [
      { name: 'Espresso', desc: 'Solo o doble', price: 4200 },
      { name: 'Espresso doble', desc: 'Doble shot', price: 5200 },
      { name: 'Espresso largo', desc: 'Más agua, misma base', price: 4200 },
      { name: 'Americano', desc: 'Café negro suave', price: 5500, variants: [
        { label: 'Americano mediano', image: 'img/menu/americano-mediano.jpg' },
        { label: 'Americano grande', image: 'img/menu/americano-grande.jpg' }
      ]},
      { name: 'Filtrado', desc: 'Método de goteo', price: 7500 },
      { name: 'Cortado', desc: 'Espresso con un toque de leche', price: 5000 },
      { name: 'Cappu', desc: 'Cappuccino simple', price: 5400, variants: [
        { label: 'Cappu', image: 'img/menu/cappu.jpg' },
        { label: 'Cappu doble', image: 'img/menu/cappu-doble.jpg' }
      ]},
      { name: 'Cappu doble', desc: 'Cappuccino doble', price: 6400 },
      { name: 'Flat white', desc: 'Doble ristretto con leche emulsionada', price: 6200 },
      { name: 'Latte', desc: 'Café con leche suave', price: 6000 },
      { name: 'Té', desc: 'Consultar variedad', price: 5000 }
    ],
    especiales: [
      { name: 'Dame números', desc: 'Cappu doble con base de batata horneada, chocolate, cardamomo', price: 7000 },
      { name: 'Cappusotto', desc: 'Cappu doble, pasta de frutos secos, choco blanco, especias, ralladura de naranja', price: 7100 },
      { name: 'Choco caliente', desc: 'Chocolate, batata, cardamomo, leche emulsionada', price: 6000 },
      { name: 'Cappu marplatense', desc: 'Choco, dulce de leche, mantequilla de maní, sal marina', price: 6300 },
      { name: 'Suaave', desc: 'Latte frío, almíbar de lavanda — se puede pedir frío', price: 6700 },
      { name: 'Americano especiado', desc: 'Agua de pimienta rosa y coriandro, doble shot de café', price: 5300 }
    ],
    desayuno: [
      { name: 'Tostadas', desc: '2 rodajas de pan de molde, queso y mermelada casera', price: 7000 },
      { name: 'Tostada saludable', desc: 'Pan de molde, pasta de maní, rodajas de banana y miel', price: 7500 },
      { name: 'Yogurt', desc: 'Yogur natural, granola casera, miel y frutas de estación', price: 9200 },
      { name: 'Pancakes', desc: 'Dos pancakes de almendras con pasta de maní, miel, frutillas, banana y granola', price: 11000, tag: 'Sin gluten' }
    ],
    sandwiches: [
      { name: 'Sandwich bondiola braseada', desc: 'Pan brioche, bondiola desmechada, pepinillos, lechuga, honey mustard. Con chips de batatas', price: 16000 },
      { name: 'Sandwich mortadela', desc: 'Pan de masa madre con pesto, mortadela de pistachos, queso danbo y tomates contados. Con chips de batatas', price: 12500 },
      { name: 'Sandwich de hongos', desc: 'Pan de masa madre, queso danbo, champiñones grillados, cebolla caramelizada, espinaca. Con chips de batatas', price: 16000, tag: 'Vegetariano' },
      { name: 'Tostado', desc: 'Pan blanco de molde, lomito y queso o capresse', price: 9500, tag: 'Vegetariano' },
      { name: 'Medialuna rellena', desc: 'Rellena de queso danbo y lomito o capresse. Sale calentita', price: 10000, tag: 'Vegetariano' },
      { name: 'Chipa prensado', desc: 'Nuestro chipa relleno de lomito y queso o capresse. Sale tostado y calentito', price: 9100, tag: 'Sin gluten' }
    ],
    tostones: [
      { name: 'Tostón de palta', desc: 'Masa madre, queso crema, palta, tomate cherry, oliva y semillas de sésamo', price: 11000, tag: 'Vegetariano' },
      { name: 'Tostón de perso', desc: 'Masa madre, queso crema, tomates contados, granola y oliva', price: 9000, tag: 'Vegetariano' }
    ],
    bebidas: [
      { name: 'Mandarinada', desc: 'Jugo de mandarina, limón, cardamomo y almíbar de banana', price: 5000 },
      { name: 'Exprimido de naranja', desc: 'Fresco y natural', price: 4500 }
    ],
    combos: {
      horario: 'Martes a viernes, 8:30 a 13:30',
      desayuno: [
        { name: 'Latte + cookie frambuesa', desc: 'Café con leche 1 shot o americano', price: 8000 },
        { name: 'Latte + tostadas', desc: 'Café con leche 1 shot o americano + tostadas con mermelada casera y queso', price: 9900 },
        { name: 'Latte + tostado', desc: 'Café con leche 1 shot o americano + tostado', price: 12300 },
        { name: 'Latte + chipa', desc: 'Café con leche 1 shot o americano + chipa', price: 8000 },
        { name: 'Latte + alfajor de almendras', desc: 'Café con leche 1 shot o americano + alfajor de almendras', price: 8000 }
      ],
      almuerzo: [
        { name: 'Sandwich bondiola braseada + limonada', desc: 'Combo almuerzo completo. Agregá espresso largo o cortado por $2.000', price: 16000 },
        { name: 'Sandwich mortadela + limonada', desc: 'Combo almuerzo completo. Agregá espresso largo o cortado por $2.000', price: 12500 },
        { name: 'Sandwich de hongos + limonada', desc: 'Combo almuerzo completo. Agregá espresso largo o cortado por $2.000', price: 16000 }
      ]
    }
  };

  var SCHEDULE = {
    monday:    [],
    tuesday:   [{open: 510, close: 1170}],
    wednesday: [{open: 510, close: 1170}],
    thursday:  [{open: 510, close: 1170}],
    friday:    [{open: 510, close: 1170}],
    saturday:  [{open: 600, close: 840}, {open: 960, close: 1170}],
    sunday:    [{open: 960, close: 1170}]
  };

  var WEEKDAYS_TUVW = ['tuesday', 'wednesday', 'thursday', 'friday'];
  var DAY_ORDER = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  var DAY_NAMES_ES = {
    sunday: 'el domingo', monday: 'el lunes', tuesday: 'el martes',
    wednesday: 'el miércoles', thursday: 'el jueves', friday: 'el viernes',
    saturday: 'el sábado'
  };

  function formatPrice(n) {
    var s = String(n);
    var result = '';
    for (var i = s.length - 1, count = 0; i >= 0; i--, count++) {
      if (count > 0 && count % 3 === 0) result = '.' + result;
      result = s.charAt(i) + result;
    }
    return '$' + result;
  }

  function formatTime(minutes) {
    var h = Math.floor(minutes / 60);
    var m = minutes % 60;
    return h + ':' + (m < 10 ? '0' + m : m);
  }

  function getBuenosAiresTime() {
    var now = new Date();
    var parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Argentina/Buenos_Aires',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
      weekday: 'long'
    }).formatToParts(now);

    var weekday = '';
    var hour = 0;
    var minute = 0;
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i];
      if (p.type === 'weekday') weekday = p.value.toLowerCase();
      else if (p.type === 'hour') hour = parseInt(p.value, 10) % 24;
      else if (p.type === 'minute') minute = parseInt(p.value, 10);
    }

    return { weekday: weekday, hour: hour, minute: minute, timeInMinutes: hour * 60 + minute };
  }

  function tagClass(tag) {
    var map = {
      'Vegetariano': 'vegetariano',
      'Sin gluten': 'sin-gluten',
      'Sin lácteos': 'sin-lacteos'
    };
    return map[tag] || '';
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getStoreStatus() {
    var t = getBuenosAiresTime();
    var slots = SCHEDULE[t.weekday] || [];

    var open = false;
    for (var i = 0; i < slots.length; i++) {
      if (t.timeInMinutes >= slots[i].open && t.timeInMinutes < slots[i].close) {
        open = true;
        break;
      }
    }
    if (open) return { open: true, message: 'Estamos abiertos' };

    var laterToday = null;
    for (var j = 0; j < slots.length; j++) {
      if (slots[j].open > t.timeInMinutes) { laterToday = slots[j]; break; }
    }
    if (laterToday) {
      return { open: false, message: 'Abrimos ' + formatTime(laterToday.open) };
    }

    var todayIndex = DAY_ORDER.indexOf(t.weekday);
    for (var k = 1; k <= 7; k++) {
      var nextDay = DAY_ORDER[(todayIndex + k) % 7];
      var nextSlots = SCHEDULE[nextDay];
      if (nextSlots && nextSlots.length > 0) {
        var timeStr = formatTime(nextSlots[0].open);
        return {
          open: false,
          message: k === 1 ? 'Abrimos mañana ' + timeStr : 'Abrimos ' + DAY_NAMES_ES[nextDay] + ' ' + timeStr
        };
      }
    }
    return { open: false, message: 'Consultá horarios en Instagram' };
  }

  function updateStoreStatus() {
    var status = getStoreStatus();
    var indicator = document.getElementById('store-status');
    if (!indicator) return;
    indicator.classList.toggle('is-open', status.open);
    indicator.classList.toggle('is-closed', !status.open);
    var msgEl = indicator.querySelector('.store-status__message');
    if (msgEl) msgEl.textContent = status.message;

    var dot = document.getElementById('status-dot');
    if (dot) {
      dot.classList.toggle('status-dot--open', status.open);
      dot.classList.toggle('status-dot--closed', !status.open);
    }
  }

  function heroMessage(t) {
    var wd = t.weekday, m = t.timeInMinutes;
    if (wd === 'monday') return 'Hoy descansamos';
    if (WEEKDAYS_TUVW.indexOf(wd) !== -1) {
      if (m < 510)  return 'Abrimos a las 8:30';
      if (m < 720)  return 'Buen día';
      if (m < 1170) return 'Buenas tardes';
      return 'Ya cerramos';
    }
    if (wd === 'saturday') {
      if (m < 600)  return 'Abrimos a las 10';
      if (m < 840)  return 'Buen día';
      if (m < 960)  return 'Volvemos a las 16';
      if (m < 1170) return 'Buenas tardes';
      return 'Ya cerramos';
    }
    if (wd === 'sunday') {
      if (m < 960)  return 'Abrimos a las 16';
      if (m < 1170) return 'Buenas tardes';
      return 'Ya cerramos';
    }
    return '';
  }

  function heroHeadline(t) {
    var wd = t.weekday, m = t.timeInMinutes;
    if (wd === 'monday') return 'Hoy descansamos. Volvé mañana.';
    var slots = SCHEDULE[wd] || [];
    var open = false;
    for (var i = 0; i < slots.length; i++) {
      if (m >= slots[i].open && m < slots[i].close) { open = true; break; }
    }
    if (!open) return 'Ahora estamos cerrados';
    if (m < 690) return 'El café que te falta conocer';
    if (m < 900) return 'Una pausa que sabe a algo hecho de verdad.';
    return 'El turno tarde es para los que saben vivir.';
  }

  function bannerContent(t) {
    var wd = t.weekday, m = t.timeInMinutes;
    if (wd === 'monday') {
      return { title: 'Hoy descansamos', sub: 'Nos vemos mañana a las 8:30. Mientras, mirá la carta.' };
    }
    if (WEEKDAYS_TUVW.indexOf(wd) !== -1) {
      if (m < 510) {
        return {
          title: 'Abrimos a las 8:30',
          sub: 'Combos batateros de desayuno y almuerzo',
          items: [
            { name: 'Latte + cookie', price: 8000 },
            { name: 'Latte + tostadas', price: 9900 },
            { name: 'Latte + tostado', price: 12300 }
          ]
        };
      }
      if (m < 810) {
        return {
          title: 'Combos batateros',
          sub: 'Desayuno y almuerzo hasta las 13:30',
          items: [
            { name: 'Latte + cookie', price: 8000 },
            { name: 'Latte + tostadas', price: 9900 },
            { name: 'Sandwich bondiola braseada combo', price: 16000 }
          ]
        };
      }
      if (m < 1170) {
        return {
          title: 'La hora del especial',
          sub: 'Dame números: cappu doble con batata, chocolate y cardamomo. ' + formatPrice(7000)
        };
      }
      return { title: 'Ya cerramos', sub: 'Nos vemos mañana a las 8:30' };
    }
    if (wd === 'saturday') {
      if (m < 600)  return { title: 'Sábado batatero', sub: 'Abrimos a las 10. Pastelería fresca y cafés especiales' };
      if (m < 840)  return { title: 'Sábado batatero', sub: 'Pastelería fresca de mostrador y cafés especiales' };
      if (m < 960)  return { title: 'Volvemos a las 16', sub: 'Reabrimos a las 16:00 con tortas y pastelería' };
      if (m < 1170) return { title: 'Sábado batatero', sub: 'Tortas y pastelería de la tarde' };
      return { title: 'Ya cerramos', sub: 'Nos vemos mañana a las 16' };
    }
    if (wd === 'sunday') {
      if (m < 960)  return { title: 'Domingo de tortas', sub: 'Hoy abrimos solo de tarde, 16 a 19:30' };
      if (m < 1170) {
        return {
          title: 'Domingo de tortas',
          sub: 'Consultá en Instagram las tortas del día',
          link: { url: 'https://www.instagram.com/batata.cofi/', text: '@batata.cofi' }
        };
      }
      return { title: 'Ya cerramos', sub: 'Nos vemos el martes a las 8:30' };
    }
    return { title: '', sub: '' };
  }

  function getTimeslot(t) {
    if (t.weekday === 'monday') return 'after-hours';
    var slots = SCHEDULE[t.weekday] || [];
    var open = false;
    for (var i = 0; i < slots.length; i++) {
      if (t.timeInMinutes >= slots[i].open && t.timeInMinutes < slots[i].close) { open = true; break; }
    }
    if (!open) return 'after-hours';
    if (t.timeInMinutes < 690) return 'manana';
    if (t.timeInMinutes < 900) return 'mediodia';
    return 'tarde';
  }

  function renderCombosByTimeslot(t) {
    var slot = getTimeslot(t);
    var data = COMBOS_BY_TIMESLOT[slot];
    if (!data) return;
    var section   = document.getElementById('combos-feature');
    var labelEl   = document.getElementById('combos-label');
    var titleEl   = document.getElementById('combos-title');
    var subEl     = document.getElementById('combos-sub');
    var cardsEl   = document.getElementById('combos-cards');
    var restWrap  = document.getElementById('combos-rest');
    var restLabel = document.getElementById('combos-rest-label');
    var restList  = document.getElementById('combos-rest-list');
    var afterCta  = document.getElementById('combos-after-hours-cta');
    if (!section || !cardsEl) return;
    section.dataset.timeslot = slot;
    if (labelEl) labelEl.textContent = data.label;
    if (titleEl) titleEl.textContent = data.title;
    if (subEl)   subEl.textContent   = data.sub;
    var cardsHtml = '';
    for (var i = 0; i < data.cards.length; i++) {
      var c = data.cards[i];
      var stagger = ' data-stagger="' + i + '"';
      var priceBadge = c.consultar
        ? '<span class="combo-card__price-badge combo-card__price-badge--consultar">Consultar</span>'
        : '<span class="combo-card__price-badge">' + escapeHtml(c.price) + '</span>';
      var hint = c.consultar
        ? '<a class="combo-card__hint combo-card__hint--ig" href="' + INSTAGRAM_URL + '" target="_blank" rel="noopener">Consultar por Instagram</a>'
        : '<span class="combo-card__hint">Ver el producto</span>';
      var dataAttrs = c.consultar
        ? ''
        : ' data-combo-image="' + escapeHtml(c.image) + '"' +
          ' data-combo-name="'  + escapeHtml(c.name)  + '"' +
          ' data-combo-price="' + escapeHtml(c.price) + '"' +
          ' data-combo-alt="'   + escapeHtml(c.name)  + '"';
      cardsHtml +=
        '<article class="combo-card' + (c.consultar ? ' combo-card--consultar' : '') + '" role="listitem"' + dataAttrs + ' data-reveal' + stagger + '>' +
          '<div class="combo-card__image-wrap">' +
            '<img class="combo-card__image" src="' + escapeHtml(c.image) + '" alt="" loading="lazy" width="640" height="540">' +
            priceBadge +
          '</div>' +
          '<div class="combo-card__body">' +
            '<h3 class="combo-card__name">' + escapeHtml(c.name) + '</h3>' +
            '<p class="combo-card__desc">' + escapeHtml(c.desc) + '</p>' +
            hint +
          '</div>' +
        '</article>';
    }
    cardsEl.innerHTML = cardsHtml;
    if (data.rest && data.rest.length) {
      restWrap.hidden = false;
      if (restLabel) restLabel.textContent = data.restLabel || 'Más opciones';
      var restHtml = '';
      for (var j = 0; j < data.rest.length; j++) {
        var r = data.rest[j];
        var imgMatch = PRODUCT_IMAGES_LOWER[r.name.toLowerCase()];
        var priceCol = r.consultar
          ? '<a class="combos-rest-list__price combos-rest-list__price--consultar" href="' + INSTAGRAM_URL + '" target="_blank" rel="noopener">Consultar →</a>'
          : '<span class="combos-rest-list__price">' + escapeHtml(r.price) + '</span>';
        var nameHtml = imgMatch
          ? '<span class="combos-rest-list__name has-photo" data-product-image="' + escapeHtml(imgMatch.image) + '" data-product-name="' + escapeHtml(imgMatch.name) + '">' + escapeHtml(r.name) + ' <span class="menu-item__photo-hint">📷</span></span>'
          : '<span class="combos-rest-list__name">' + escapeHtml(r.name) + '</span>';
        restHtml += '<li>' + nameHtml + priceCol + '</li>';
      }
      restList.innerHTML = restHtml;
    } else {
      restWrap.hidden = true;
    }
    if (afterCta) afterCta.hidden = !data.showHoursCta;
  }

  function defaultTab(t) {
    var wd = t.weekday, m = t.timeInMinutes;
    if (wd === 'monday') return 'cafe';
    if (WEEKDAYS_TUVW.indexOf(wd) !== -1) return m < 810 ? 'combos' : 'especiales';
    return 'especiales';
  }

  function renderBanner(data) {
    var el = document.getElementById('banner-content');
    if (!el) return;
    if (!data || !data.title) { el.innerHTML = ''; return; }
    var html = '<p class="banner__title">' + escapeHtml(data.title) + '</p>';
    var subHtml = escapeHtml(data.sub);
    if (data.link) {
      subHtml += ' <a href="' + escapeHtml(data.link.url) + '" target="_blank" rel="noopener">' + escapeHtml(data.link.text) + '</a>';
    }
    html += '<p class="banner__sub">' + subHtml + '</p>';
    if (data.items && data.items.length) {
      html += '<div class="banner__items">';
      for (var i = 0; i < data.items.length; i++) {
        var item = data.items[i];
        html += '<span class="banner__item"><strong>' + escapeHtml(item.name) + '</strong>'
              + '<span class="banner__price">' + formatPrice(item.price) + '</span></span>';
      }
      html += '</div>';
    }
    el.innerHTML = html;
  }

  var PHOTO_HINT_SVG = '<span class="menu-item__photo-hint" aria-hidden="true">'
    + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'
    + '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>'
    + '<circle cx="12" cy="13" r="4"/>'
    + '</svg></span>';

  var THUMB_STYLE = 'width:60px;height:60px;border-radius:50%;object-fit:cover;flex-shrink:0;margin-right:12px;align-self:center;';

  function renderItems(items, useThumbnail) {
    if (useThumbnail === undefined) useThumbnail = true;
    var html = '';
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var tagHtml = '';
      if (item.tag) {
        tagHtml = '<span class="menu-item__tag menu-item__tag--' + tagClass(item.tag) + '">' + escapeHtml(item.tag) + '</span>';
      }
      var photo = lookupProductImage(item.name);
      var hasVariants = item.variants && item.variants.length > 0;
      var openTag, hintHtml = '', thumbHtml = '';
      if (hasVariants) {
        openTag = '<div class="menu-item has-photo"'
                + ' data-product-variants="' + escapeHtml(JSON.stringify(item.variants)) + '"'
                + ' data-product-name="' + escapeHtml(item.name) + '"'
                + ' data-product-price="' + formatPrice(item.price) + '"'
                + ' data-product-desc="' + escapeHtml(item.desc) + '"'
                + ' role="button" tabindex="0"'
                + ' aria-label="Ver variantes de ' + escapeHtml(item.name) + '">';
        if (useThumbnail) {
          thumbHtml = '<img class="menu-item__thumb" style="' + THUMB_STYLE + '" src="' + escapeHtml(item.variants[0].image) + '" alt="" loading="lazy" width="60" height="60">';
        } else {
          hintHtml = PHOTO_HINT_SVG;
        }
      } else if (photo && useThumbnail) {
        openTag = '<div class="menu-item has-photo has-thumbnail"'
                + ' data-product-image="' + escapeHtml(photo.image) + '"'
                + ' data-product-name="' + escapeHtml(item.name) + '"'
                + ' data-product-price="' + formatPrice(item.price) + '"'
                + ' data-product-desc="' + escapeHtml(item.desc) + '"'
                + ' role="button" tabindex="0"'
                + ' aria-label="Ver foto de ' + escapeHtml(item.name) + '">';
        thumbHtml = '<img class="menu-item__thumb" style="' + THUMB_STYLE + '" src="' + escapeHtml(photo.image) + '" alt="" loading="lazy" width="60" height="60">';
      } else if (photo) {
        openTag = '<div class="menu-item has-photo"'
                + ' data-product-image="' + escapeHtml(photo.image) + '"'
                + ' data-product-name="' + escapeHtml(item.name) + '"'
                + ' data-product-price="' + formatPrice(item.price) + '"'
                + ' data-product-desc="' + escapeHtml(item.desc) + '"'
                + ' role="button" tabindex="0"'
                + ' aria-label="Ver foto de ' + escapeHtml(item.name) + '">';
        hintHtml = PHOTO_HINT_SVG;
      } else {
        openTag = '<div class="menu-item">';
      }
      html += openTag
            +   thumbHtml
            +   '<div class="menu-item__info">'
            +     '<span class="menu-item__name">' + escapeHtml(item.name) + hintHtml + '</span>'
            +     '<span class="menu-item__desc">' + escapeHtml(item.desc) + '</span>'
            +     tagHtml
            +   '</div>'
            +   '<span class="menu-item__price">' + formatPrice(item.price) + '</span>'
            + '</div>';
    }
    return html;
  }

  function renderPastry() {
    var grid = document.getElementById('pastry-grid');
    if (!grid) return;
    var html = '';
    for (var i = 0; i < PASTRY_LIST.length; i++) {
      var item = PASTRY_LIST[i];
      var desc = PASTRY_DESCRIPTIONS[item.caption] || '';
      var posStyle = item.position ? ' style="object-position:' + escapeHtml(item.position) + ';"' : '';
      html += '<figure class="pastry-card has-photo"'
            +   ' data-product-image="' + escapeHtml(item.image) + '"'
            +   ' data-product-name="' + escapeHtml(item.caption) + '"'
            +   ' data-product-price="' + escapeHtml(item.price || '') + '"'
            +   (desc ? ' data-product-desc="' + escapeHtml(desc) + '"' : '')
            +   ' role="button" tabindex="0"'
            +   ' aria-label="Ver foto de ' + escapeHtml(item.caption) + '"'
            +   ' data-reveal data-stagger="' + (i % 6) + '">'
            +   '<img src="' + escapeHtml(item.image) + '" alt="' + escapeHtml(item.caption) + '" loading="lazy" width="640" height="540"' + posStyle + '>'
            +   '<figcaption class="pastry-card__caption">' + escapeHtml(item.caption) + '</figcaption>'
            + '</figure>';
    }
    grid.innerHTML = html;
  }

  function renderCombos(combos) {
    return '<div class="combos-section">'
      + '<p class="combos__horario">' + escapeHtml(combos.horario) + '</p>'
      + '<h3 class="combos__subtitle">Desayuno</h3>'
      + renderItems(combos.desayuno)
      + '<div class="combos__divider"></div>'
      + '<h3 class="combos__subtitle">Almuerzo</h3>'
      + renderItems(combos.almuerzo)
      + '</div>';
  }

  function switchTab(name) {
    var list = document.getElementById('menu-list');
    if (!list) return;
    var tabs = document.querySelectorAll('.tab');
    for (var i = 0; i < tabs.length; i++) {
      var isActive = tabs[i].dataset.tab === name;
      tabs[i].classList.toggle('tab--active', isActive);
      tabs[i].setAttribute('aria-selected', isActive ? 'true' : 'false');
    }
    list.classList.add('fading');
    setTimeout(function () {
      list.classList.toggle('menu-list--combos', name === 'combos');
      if (name === 'combos') {
        list.innerHTML = renderCombos(MENU.combos);
      } else if (MENU[name]) {
        list.innerHTML = renderItems(MENU[name]);
      } else {
        list.innerHTML = '';
      }
      list.classList.remove('fading');
    }, 150);
  }

  function initComboModal() {
    var modal = document.getElementById('combo-modal');
    if (!modal) return;
    var imgEl = modal.querySelector('.combo-modal__image');
    var nameEl = modal.querySelector('.combo-modal__name');
    var priceEl = modal.querySelector('.combo-modal__price');
    var closeBtn = modal.querySelector('.combo-modal__close');
    var lastFocused = null;

    function clearCarousel() {
      var existing = modal.querySelector('.product-modal__carousel');
      if (existing) existing.remove();
      var existingDots = modal.querySelector('.product-modal__dots');
      if (existingDots) existingDots.remove();
      var existingDesc = modal.querySelector('.pastry-modal__description');
      if (existingDesc) existingDesc.remove();
      imgEl.style.display = '';
      priceEl.style.paddingBottom = '';
      modal.classList.remove('combo-modal--slim-title');
    }

    function openWith(image, name, price, alt) {
      if (!image || !name) return;
      lastFocused = document.activeElement;
      clearCarousel();
      imgEl.src = image;
      imgEl.alt = alt || name;
      nameEl.textContent = name;
      priceEl.textContent = price || '';
      modal.hidden = false;
      document.body.classList.add('modal-open');
      requestAnimationFrame(function () { modal.classList.add('is-visible'); });
      if (closeBtn) closeBtn.focus();
    }

    function openWithCarousel(variants, name, price, description) {
      lastFocused = document.activeElement;
      clearCarousel();
      imgEl.style.display = 'none';
      nameEl.textContent = name;
      priceEl.textContent = price || '';
      var carouselHtml = '<div class="product-modal__carousel">';
      for (var i = 0; i < variants.length; i++) {
        var labelSpan = variants[i].title ? '' : '<span class="product-modal__slide-label">' + escapeHtml(variants[i].label) + '</span>';
        var slideClass = variants[i].title ? ' product-modal__slide--tall' : '';
        carouselHtml += '<div class="product-modal__slide' + slideClass + '">'
          + '<img src="' + escapeHtml(variants[i].image) + '" alt="' + escapeHtml(variants[i].label) + '" width="640" height="480">'
          + labelSpan
          + '</div>';
      }
      carouselHtml += '</div>';
      if (variants[0] && variants[0].title) {
        nameEl.textContent = variants[0].title;
        modal.classList.add('combo-modal--slim-title');
      }
      var dotsHtml = '<div class="product-modal__dots">';
      for (var j = 0; j < variants.length; j++) {
        dotsHtml += '<button class="product-modal__dot' + (j === 0 ? ' is-active' : '') + '" data-slide="' + j + '" aria-label="Slide ' + (j + 1) + '"></button>';
      }
      dotsHtml += '</div>';
      imgEl.insertAdjacentHTML('afterend', carouselHtml + dotsHtml);
      if (description) {
        var dotsEl = modal.querySelector('.product-modal__dots');
        var target = dotsEl || modal.querySelector('.product-modal__carousel');
        if (target) {
          priceEl.style.paddingBottom = '0';
          target.insertAdjacentHTML('afterend', '<p class="pastry-modal__description" style="margin-top:8px;">' + escapeHtml(description) + '</p>');
        }
      }
      var carousel = modal.querySelector('.product-modal__carousel');
      var dots = modal.querySelectorAll('.product-modal__dot');
      if (carousel && dots.length) {
        carousel.addEventListener('scroll', function () {
          var activeIndex = Math.round(carousel.scrollLeft / carousel.offsetWidth);
          for (var k = 0; k < dots.length; k++) {
            dots[k].classList.toggle('is-active', k === activeIndex);
          }
          if (variants[activeIndex] && variants[activeIndex].title) {
            nameEl.textContent = variants[activeIndex].title;
          }
        }, { passive: true });
        for (var d = 0; d < dots.length; d++) {
          dots[d].addEventListener('click', function () {
            carousel.scrollTo({ left: parseInt(this.dataset.slide, 10) * carousel.offsetWidth, behavior: 'smooth' });
          });
        }
      }
      modal.hidden = false;
      document.body.classList.add('modal-open');
      requestAnimationFrame(function () { modal.classList.add('is-visible'); });
      if (closeBtn) closeBtn.focus();
    }

    function openWithDescription(image, name, description, price) {
      lastFocused = document.activeElement;
      clearCarousel();
      imgEl.src = image;
      imgEl.alt = name;
      nameEl.textContent = name;
      priceEl.textContent = price || '';
      if (description) {
        priceEl.style.paddingBottom = '0';
        priceEl.insertAdjacentHTML('afterend', '<p class="pastry-modal__description" style="margin-top:8px;">' + escapeHtml(description) + '</p>');
      }
      modal.hidden = false;
      document.body.classList.add('modal-open');
      requestAnimationFrame(function () { modal.classList.add('is-visible'); });
      if (closeBtn) closeBtn.focus();
    }

    function close() {
      modal.classList.remove('is-visible');
      setTimeout(function () {
        modal.hidden = true;
        document.body.classList.remove('modal-open');
        clearCarousel();
        if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
      }, 250);
    }

    var encargarBtn = document.getElementById('combo-modal-encargar');

    function openFromTrigger(el) {
      if (el.classList.contains('combo-card')) {
        openWith(el.dataset.comboImage, el.dataset.comboName, el.dataset.comboPrice, el.dataset.comboAlt);
      } else if (el.dataset.productVariants) {
        openWithCarousel(JSON.parse(el.dataset.productVariants), el.dataset.productName, el.dataset.productPrice || '', el.dataset.productDesc || '');
      } else if (el.dataset.productDesc) {
        openWithDescription(el.dataset.productImage, el.dataset.productName, el.dataset.productDesc || '', el.dataset.productPrice || '');
      } else {
        openWith(el.dataset.productImage, el.dataset.productName, el.dataset.productPrice || '', el.dataset.productName);
      }
      if (encargarBtn) {
        var isTorta = el.classList.contains('torta-card');
        encargarBtn.hidden = !isTorta;
        if (isTorta) encargarBtn.href = 'encargo.html?torta=' + encodeURIComponent(el.dataset.productName || '');
      }
    }

    document.addEventListener('click', function (e) {
      var trigger = e.target.closest && e.target.closest('.combo-card[data-combo-image], .menu-item.has-photo, .pastry-card.has-photo, .torta-card.has-photo, .combos-rest-list__name.has-photo, #trust-cafe-trigger, #serving-espresso-trigger');
      if (trigger) { e.preventDefault(); openFromTrigger(trigger); return; }
      if (e.target === modal || e.target === closeBtn) close();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hidden) { close(); return; }
      if (e.key === 'Enter' || e.key === ' ') {
        var active = document.activeElement;
        if (active && active.matches && active.matches('.combo-card[data-combo-image], .menu-item.has-photo, .pastry-card.has-photo, .torta-card.has-photo, .combos-rest-list__name.has-photo, #trust-cafe-trigger, #serving-espresso-trigger')) {
          e.preventDefault();
          openFromTrigger(active);
        }
      }
    });
  }

  function initParallax() {
    var bg = document.querySelector('.hero__bg');
    var scroll = document.querySelector('.hero__scroll');
    var hero = document.querySelector('.hero');
    if (!bg || !hero) return;
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var y = window.scrollY;
          if (y < hero.offsetHeight) bg.style.transform = 'translateY(' + (y * 0.25) + 'px)';
          if (scroll) scroll.style.opacity = Math.max(0, 1 - y / 180).toString();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (!href || href === '#') return;
        var target = document.querySelector(href);
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    });
  }

  function initTabs() {
    document.querySelectorAll('.tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        switchTab(this.dataset.tab);
        this.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      });
    });
  }

  // ─── ANALYTICS HELPER ──────────────────────────────────────────────────────
  function trackEvent(name, params) {
    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', name, params || {});
      }
    } catch (err) {}
  }

  function handleQR() {
    if (window.location.search.indexOf('qr') !== -1 || window.location.hash.indexOf('qr') !== -1 || window.location.search.indexOf('ref=mesa') !== -1) {
      trackEvent('qr_scan', { qr_source: 'mesa' });
      var el = document.getElementById('cta-llegar');
      if (el && el.parentNode) el.parentNode.removeChild(el);
    }
  }

  function initScrollReveal() {
    var els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = (parseInt(entry.target.dataset.stagger || '0', 10) * 80) + 'ms';
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -18% 0px' });
    els.forEach(function (el) { observer.observe(el); });
  }

  function renderServingNow() {
    var espressoEl = document.querySelector('[data-serving="espresso"]');
    var filtradoEl = document.querySelector('[data-serving="filtrado"]');
    if (espressoEl && SERVING_NOW.espresso) {
      var e = SERVING_NOW.espresso;
      espressoEl.textContent = e.origin + ', ' + e.process + ' — ' + e.variety;
    }
    if (filtradoEl && SERVING_NOW.filtrado) {
      var f = SERVING_NOW.filtrado;
      filtradoEl.textContent = f.origin + ', ' + f.process + ' — ' + f.variety;
    }
  }

  function setupCafeOriginTrigger() {
    var e = SERVING_NOW.espresso;
    var f = SERVING_NOW.filtrado;
    var variants = [
      { label: e.label + ' — ' + e.origin + ', ' + e.process + ' — ' + e.variety, image: e.image, title: 'Espresso' },
      { label: f.label + ' — ' + f.origin + ', ' + f.process + ' — ' + f.variety, image: f.image, title: 'Filtrado' }
    ];

    var triggers = [
      document.getElementById('trust-cafe-trigger'),
      document.getElementById('serving-espresso-trigger')
    ];

    triggers.forEach(function (trigger) {
      if (!trigger) return;
      trigger.setAttribute('data-product-variants', JSON.stringify(variants));
      trigger.setAttribute('data-product-name', 'Nuestro café de origen');
      trigger.setAttribute('role', 'button');
      trigger.setAttribute('tabindex', '0');
      trigger.setAttribute('aria-label', 'Ver ficha técnica de nuestros cafés');
      trigger.style.cursor = 'pointer';
    });
  }

  function renderPantry() {
    var grid = document.getElementById('pantry-grid');
    if (!grid) return;
    var sorted = PANTRY.slice().sort(function (a, b) {
      return (a.available === b.available) ? 0 : (a.available ? -1 : 1);
    });
    var html = '';
    for (var i = 0; i < sorted.length; i++) {
      var p = sorted[i];
      var classes = 'pantry-card' + (p.available ? '' : ' pantry-card--coming-soon') + (p.placeholder ? ' pantry-card--placeholder' : '');
      html += '<article class="' + classes + '" data-reveal data-stagger="' + i + '">'
            +   '<div class="pantry-card__image-wrap">'
            +     '<img class="pantry-card__image" src="' + escapeHtml(p.image) + '" alt="' + escapeHtml(p.name) + '" loading="lazy" width="500" height="500">'
            +   '</div>'
            +   '<span class="pantry-card__badge">' + (p.available ? 'Disponible' : 'Próximamente') + '</span>'
            +   '<div class="pantry-card__body">'
            +     '<h3 class="pantry-card__name">' + escapeHtml(p.name) + '</h3>'
            +     '<p class="pantry-card__desc">' + escapeHtml(p.desc) + '</p>'
            +   '</div>'
            + '</article>';
    }
    grid.innerHTML = html;
  }

  function renderTortas() {
    var grid = document.getElementById('tortas-grid');
    if (!grid) return;
    var html = '';
    for (var i = 0; i < TORTAS_LIST.length; i++) {
      var item = TORTAS_LIST[i];
      html += '<figure class="torta-card has-photo"'
            +   ' data-product-image="' + escapeHtml(item.image) + '"'
            +   ' data-product-name="' + escapeHtml(item.caption) + '"'
            +   ' data-product-price="$70.000"'
            +   ' role="button" tabindex="0"'
            +   ' aria-label="Ver foto de ' + escapeHtml(item.caption) + '"'
            +   ' data-reveal data-stagger="' + (i % 4) + '">'
            +   '<img src="' + escapeHtml(item.image) + '" alt="' + escapeHtml(item.caption) + '" loading="lazy" width="640" height="540">'
            +   '<figcaption class="torta-card__caption">' + escapeHtml(item.caption) + '</figcaption>'
            +   '<span class="torta-card__price">$70.000</span>'
            + '</figure>';
    }
    grid.innerHTML = html;
  }

  function renderTestimonials() {
    var grid = document.getElementById('testimonials-grid');
    if (!grid) return;
    var html = '';
    for (var i = 0; i < TESTIMONIALS.length; i++) {
      var t = TESTIMONIALS[i];
      html += '<article class="testimonial-card" data-reveal data-stagger="' + i + '">'
            +   '<svg class="testimonial-card__quote-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">'
            +     '<path d="M7 7v6c0 2-2 4-4 4v2c4 0 7-3 7-7V7H7zm10 0v6c0 2-2 4-4 4v2c4 0 7-3 7-7V7h-3z"/>'
            +   '</svg>'
            +   '<blockquote class="testimonial-card__quote">' + escapeHtml(t.quote) + '</blockquote>'
            +   '<footer class="testimonial-card__author">'
            +     '<span class="testimonial-card__name">' + escapeHtml(t.author) + '</span>'
            +     '<span class="testimonial-card__source">via ' + escapeHtml(t.source) + '</span>'
            +   '</footer>'
            + '</article>';
    }
    grid.innerHTML = html;
  }

  function renderInstagramFeed() {
    var grid = document.getElementById('instagram-feed-grid');
    if (!grid) return;
    var igIcon = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">'
      + '<path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>'
      + '</svg>';
    var html = '';
    for (var i = 0; i < INSTAGRAM_FEED.length; i++) {
      var item = INSTAGRAM_FEED[i];
      html += '<a href="https://www.instagram.com/batata.cofi/" target="_blank" rel="noopener" class="ig-tile" aria-label="' + escapeHtml(item.alt) + '">'
            +   '<img src="' + escapeHtml(item.image) + '" alt="' + escapeHtml(item.alt) + '" loading="lazy" width="500" height="500">'
            +   '<span class="ig-tile__overlay" aria-hidden="true">' + igIcon + '</span>'
            + '</a>';
    }
    grid.innerHTML = html;
  }

  // ─── VOUCHER ───────────────────────────────────────────────────────────────

  var VOUCHER_STORAGE_KEY = 'batata_voucher';
  var VOUCHER_TTL_MS = 4 * 24 * 60 * 60 * 1000;
  var VOUCHER_DAYS_ES   = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
  var VOUCHER_MONTHS_ES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  var VOUCHER_ENDPOINT  = 'https://script.google.com/macros/s/AKfycbxSHDKj-5XNopH7Ntt-Q2airUUzyPrulqEKxyCmpMlR9_W5UB1YVXFE1e8qG_Tdpsa4cw/exec';

  function readStoredVoucher() {
    try {
      var raw = window.localStorage.getItem(VOUCHER_STORAGE_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed.expires !== 'number') return null;
      return parsed;
    } catch (err) { return null; }
  }

  function writeStoredVoucher(data) {
    try { window.localStorage.setItem(VOUCHER_STORAGE_KEY, JSON.stringify(data)); } catch (err) {}
  }

  function generateVoucherCode() {
    var ts   = Date.now().toString(36).toUpperCase().slice(-4);
    var rand = Math.random().toString(36).toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4);
    while (rand.length < 4) rand += 'X';
    return 'BATATA-' + ts + '-' + rand;
  }

  function formatVoucherDate(d) {
    return VOUCHER_DAYS_ES[d.getDay()] + ' ' + d.getDate() + ' de ' + VOUCHER_MONTHS_ES[d.getMonth()];
  }

  function initVoucher() {
    var modal      = document.getElementById('voucher-modal');
    if (!modal) return;
    var form       = document.getElementById('voucher-form');
    var closeBtn   = modal.querySelector('.voucher-modal__close');
    var codeField  = document.getElementById('voucher-code-field');
    var expiresField = document.getElementById('voucher-expires-field');
    var codeDisplay  = document.getElementById('voucher-code-display');
    var expiryDisplay = document.getElementById('voucher-expiry-display');
    var formView   = modal.querySelector('[data-voucher-view="form"]');
    var resultView = modal.querySelector('[data-voucher-view="result"]');
    var lastFocused = null;

    function showVoucher(code, expires) {
      codeDisplay.textContent  = code;
      expiryDisplay.textContent = formatVoucherDate(new Date(expires));
      formView.hidden  = true;
      resultView.hidden = false;
    }

    function openModal() {
      lastFocused = document.activeElement;
      var saved = readStoredVoucher();
      if (saved && saved.expires > Date.now()) {
        showVoucher(saved.code, saved.expires);
      } else {
        formView.hidden  = false;
        resultView.hidden = true;
      }
      modal.hidden = false;
      document.body.classList.add('modal-open');
      requestAnimationFrame(function () { modal.classList.add('is-visible'); });
      if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
      modal.classList.remove('is-visible');
      setTimeout(function () {
        modal.hidden = true;
        document.body.classList.remove('modal-open');
        if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
      }, 250);
    }

    document.querySelectorAll('[data-open-voucher]').forEach(function (btn) {
      btn.addEventListener('click', openModal);
    });

    modal.addEventListener('click', function (e) {
      if (e.target === modal || e.target === closeBtn) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hidden) closeModal();
    });

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Leer todos los campos ANTES de cualquier otra operación
        var nombreInput  = form.querySelector('[name="nombre"]');
        var emailInput   = form.querySelector('[name="email"]');
        var resenaInput  = form.querySelector('[name="resena_url"]');

        var nombre   = nombreInput  ? nombreInput.value.trim()  : '';
        var email    = emailInput   ? emailInput.value.trim()   : '';
        var linkResena = resenaInput ? resenaInput.value.trim() : '';

        // Validar link de reseña
        if (!linkResena) {
          alert('Por favor pegá el link de tu reseña en Google Maps para continuar.');
          return;
        }
        if (
          linkResena.indexOf('google.com/maps') === -1 &&
          linkResena.indexOf('maps.google') === -1 &&
          linkResena.indexOf('maps.app.goo.gl') === -1 &&
          linkResena.indexOf('goo.gl/maps') === -1
        ) {
          alert('El link no parece ser de Google Maps. Copiá el link directo de tu reseña y pegalo acá.');
          return;
        }

        var submitBtn   = form.querySelector('button[type="submit"]');
        var originalLabel = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Generando…';

        var code    = generateVoucherCode();
        var expires = Date.now() + VOUCHER_TTL_MS;

        if (codeField)   codeField.value   = code;
        if (expiresField) expiresField.value = new Date(expires).toISOString();

        writeStoredVoucher({ code: code, expires: expires, created: Date.now() });

        var fechaVence    = new Date(expires);
        var fechaVenceStr = VOUCHER_DAYS_ES[fechaVence.getDay()] + ' ' + fechaVence.getDate() + ' de ' + VOUCHER_MONTHS_ES[fechaVence.getMonth()];

        function finalize() {
          formView.hidden  = true;
          resultView.hidden = false;
          if (codeDisplay)   codeDisplay.textContent   = '📬 Revisá tu correo electrónico';
          if (expiryDisplay) expiryDisplay.textContent = 'Te enviamos el voucher a ' + email + '. Mostralo en el local para canjear tu latte gratis.';
          submitBtn.disabled  = false;
          submitBtn.textContent = originalLabel;
          updateVoucherButtonsLabel();
          trackEvent('qr_voucher_claimed', {
            qr_source: isQRVisit() ? 'mesa' : 'web'
          });
        }

        // Enviar al Apps Script
        fetch(VOUCHER_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({
            codigo:    code,
            nombre:    nombre,
            email:     email,
            linkResena: linkResena
          }),
          mode: 'no-cors'
        }).then(finalize).catch(finalize);
      });
    }

    updateVoucherButtonsLabel();
  }

  function updateVoucherButtonsLabel() {
    var saved    = readStoredVoucher();
    var hasActive = !!(saved && saved.expires > Date.now());
    document.querySelectorAll('[data-open-voucher]').forEach(function (btn) {
      btn.textContent = hasActive ? 'Ver mi voucher activo' : 'Reclamar mi latte gratis';
    });
  }

  // ─── BATATEROS (loyalty) ───────────────────────────────────────────────────
  //
  // Modelo de puntos (definido 2026-08-06): canje SECUENCIAL y OBLIGATORIO,
  // 1→2→3→4→5, sin saltos. Cada canje resetea el contador a 0 — para
  // desbloquear el nivel N+1 hay que juntar sus puntos desde cero, no son
  // acumulativos entre niveles. `clientes_loyalty.nivel_premiado` es el
  // nivel más alto ya premiado y NUNCA baja (evita doble entrega del mismo
  // premio pase lo que pase con la inactividad). Lo que sí se resetea por
  // inactividad (LOYALTY_VENCIMIENTO_DIAS sin cargar puntos) es el AVANCE hacia el próximo
  // premio, no el nivel ya obtenido — así nunca se re-abre un premio ya dado.

  var LOYALTY_TIERS = [400, 650, 900, 1200, 1500];
  var LOYALTY_TIER_NAMES = [
    'Bienvenida Batatera',
    'Amigo de la Casa',
    'Batatero de Ley',
    'Super Batatero',
    'Prestige Batata Friend'
  ];
  var LOYALTY_TIER_IMAGES = [
    'img/menu/latte.jpg',
    'img/menu/latte-y-cookie-pistacho-o-frambuesa.jpg',
    'img/menu/suaave.jpg',
    'img/productos/toston-de-palta.jpg',
    'img/menu/latte-y-chipa.jpg'
  ];
  var LOYALTY_VENCIMIENTO_DIAS = 30;
  var LOYALTY_PENDING_KEY = 'batata_loyalty_pending';
  var CLIENTE_COLUMNS = 'id, nombre, apellido, numero_socio, nivel_premiado, vuelta, nivel_ciclo, created_at, email, telefono, newsletter';

  // Mismo Apps Script que ya usa el sitio para el voucher del latte y el
  // newsletter de mesa — le sumamos un tipo nuevo ('batateros_bienvenida')
  // en vez de armar un mecanismo de mails aparte.
  var BATATEROS_WELCOME_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxSHDKj-5XNopH7Ntt-Q2airUUzyPrulqEKxyCmpMlR9_W5UB1YVXFE1e8qG_Tdpsa4cw/exec';

  function sendBatakerosBienvenida(pending, numeroSocio) {
    try {
      fetch(BATATEROS_WELCOME_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          tipo: 'batateros_bienvenida',
          nombre: pending.nombre + (pending.apellido ? ' ' + pending.apellido : ''),
          email: pending.email,
          numeroSocio: numeroSocio,
          consentimiento: !!pending.newsletter
        }),
        mode: 'no-cors'
      });
    } catch (err) {}
  }

  function loyaltyTierClass(index) {
    if (index < 2) return 'is-reached';
    if (index < 4) return 'is-reached-copper';
    return 'is-reached-gold';
  }

  function loyaltyTierName(nivel) {
    return nivel > 0 ? LOYALTY_TIER_NAMES[nivel - 1] : 'Todavía sin nivel';
  }

  // Posición dentro del circuito de premios (1-5) que gobierna qué se puede
  // canjear/mostrar como progreso. Antes de llegar a nivel 5 es simplemente
  // nivel_premiado; una vez ahí (permanente, nunca vuelve a bajar), pasa a
  // ser nivel_ciclo, que da la vuelta infinitamente por los mismos 5 premios.
  function nivelCicloEfectivo(cliente) {
    return cliente.nivel_premiado < 5 ? cliente.nivel_premiado : cliente.nivel_ciclo;
  }

  function escapeHtml(str) {
    return String(str == null ? '' : str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function addDays(isoOrDate, dias) {
    var d = new Date(isoOrDate);
    d.setDate(d.getDate() + dias);
    return d;
  }

  function formatFecha(date) {
    return date.getDate() + ' de ' + VOUCHER_MONTHS_ES[date.getMonth()];
  }

  // `new Date('2026-09-23')` parsea como medianoche UTC — en Argentina
  // (UTC-3) eso cae el 22 a las 21hs local, y .getDate() usa hora local:
  // muestra un día menos. Las columnas `date` (fecha_vencimiento) hay que
  // parsearlas como fecha calendario local, no como instante UTC.
  function parseFechaLocal(fechaStr) {
    var partes = String(fechaStr).slice(0, 10).split('-');
    return new Date(Number(partes[0]), Number(partes[1]) - 1, Number(partes[2]));
  }

  // "Hoy" en hora Argentina (UTC-3, sin horario de verano), no UTC — entre
  // las 21:00 y las 23:59 hora local, `new Date().toISOString()` ya cayó en
  // el día siguiente en UTC y marcaría puntos vigentes como vencidos antes
  // de tiempo.
  function hoyArgentina() {
    return new Date(Date.now() - 3 * 3600000).toISOString().slice(0, 10);
  }

  function renderVueltaBadge(cliente) {
    var el = document.getElementById('loyalty-card-vuelta');
    if (!el) return;
    if (cliente.vuelta >= 2) {
      el.hidden = false;
      el.textContent = cliente.vuelta + 'ª vuelta';
    } else {
      el.hidden = true;
    }
  }

  function renderLoyaltyTrack(nivelPremiado) {
    var track = document.getElementById('loyalty-card-track');
    if (!track) return;
    var html = '';
    for (var i = 0; i < LOYALTY_TIERS.length; i++) {
      var reached = i < nivelPremiado;
      html += '<span class="loyalty-card__dot' + (reached ? ' ' + loyaltyTierClass(i) : '') + '"></span>';
    }
    track.innerHTML = html;
  }

  function initLoyalty() {
    var modal = document.getElementById('loyalty-modal');
    if (!modal || typeof bataterosClient === 'undefined') return;

    var closeBtn = modal.querySelector('.loyalty-modal__close');
    var views = {
      register: modal.querySelector('[data-loyalty-view="register"]'),
      login:    modal.querySelector('[data-loyalty-view="login"]'),
      forgot:   modal.querySelector('[data-loyalty-view="forgot"]'),
      reset:    modal.querySelector('[data-loyalty-view="reset"]'),
      pending:  modal.querySelector('[data-loyalty-view="pending"]'),
      card:     modal.querySelector('[data-loyalty-view="card"]'),
      staff:    modal.querySelector('[data-loyalty-view="staff"]')
    };
    var lastFocused = null;
    var currentClienteActividad = null;
    var staffCurrentCliente = null;
    var staffCurrentProgreso = 0;
    var staffSelectedBeneficio = null;
    var staffDescuentosActivos = [];

    function showView(name) {
      Object.keys(views).forEach(function (key) {
        views[key].hidden = key !== name;
      });
    }

    function openModal() {
      lastFocused = document.activeElement;
      modal.hidden = false;
      document.body.classList.add('modal-open');
      requestAnimationFrame(function () { modal.classList.add('is-visible'); });
      if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
      modal.classList.remove('is-visible');
      setTimeout(function () {
        modal.hidden = true;
        document.body.classList.remove('modal-open');
        if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
      }, 250);
    }

    function readPending() {
      try {
        var raw = window.localStorage.getItem(LOYALTY_PENDING_KEY);
        return raw ? JSON.parse(raw) : null;
      } catch (err) { return null; }
    }
    function writePending(data) {
      try { window.localStorage.setItem(LOYALTY_PENDING_KEY, JSON.stringify(data)); } catch (err) {}
    }
    function clearPending() {
      try { window.localStorage.removeItem(LOYALTY_PENDING_KEY); } catch (err) {}
    }

    function showFieldError(fieldId, message) {
      var el = document.getElementById(fieldId);
      if (!el) return;
      el.textContent = message;
      el.hidden = false;
    }
    function clearFieldError(fieldId) {
      var el = document.getElementById(fieldId);
      if (!el) return;
      el.hidden = true;
    }

    // Balance de puntos con vencimiento por compra (FIFO): cada compra suma
    // puntos que vencen LOYALTY_PUNTOS_VENCIMIENTO_DIAS días después de esa
    // compra puntual, no según inactividad general. Al canjear, se consume
    // primero de las compras más viejas (las que vencen antes) — se simula
    // recorriendo las compras en orden cronológico y "pagando" el total
    // histórico canjeado contra ellas, para saber cuánto le queda vivo a
    // cada una hoy.
    function loadProgress(cliente, callback) {
      bataterosClient
        .from('puntos')
        .select('puntos_otorgados, fecha_acumulado, fecha_vencimiento')
        .eq('cliente_id', cliente.id)
        .order('fecha_acumulado', { ascending: true })
        .then(function (puntosRes) {
          var rows = puntosRes.data || [];
          var fechaUltimaCarga = null;
          rows.forEach(function (r) {
            if (!fechaUltimaCarga || r.fecha_acumulado > fechaUltimaCarga) fechaUltimaCarga = r.fecha_acumulado;
          });

          bataterosClient
            .from('canjes')
            .select('puntos_utilizados')
            .eq('cliente_id', cliente.id)
            .then(function (canjesRes) {
              var gastoRestante = (canjesRes.data || []).reduce(function (acc, c) {
                return acc + (c.puntos_utilizados || 0);
              }, 0);

              var hoy = hoyArgentina();
              var balance = 0;
              var porFecha = {};
              rows.forEach(function (r) {
                var consumido = Math.min(r.puntos_otorgados, gastoRestante);
                gastoRestante -= consumido;
                var restante = r.puntos_otorgados - consumido;
                var vigente = !r.fecha_vencimiento || r.fecha_vencimiento >= hoy;
                if (restante > 0 && vigente) {
                  balance += restante;
                  porFecha[r.fecha_vencimiento] = (porFecha[r.fecha_vencimiento] || 0) + restante;
                }
              });
              var proximoVencimiento = null;
              Object.keys(porFecha).forEach(function (f) {
                if (!proximoVencimiento || f < proximoVencimiento) proximoVencimiento = f;
              });
              var proximoVencimientoMonto = proximoVencimiento ? porFecha[proximoVencimiento] : 0;

              var fechaReferencia = fechaUltimaCarga || cliente.created_at;
              var diasInactivo = (Date.now() - new Date(fechaReferencia).getTime()) / 86400000;
              // Nivel vigente: baja un escalón por cada LOYALTY_VENCIMIENTO_DIAS de
              // inactividad (en cascada) — gobierna solo el descuento accesorio,
              // regla aparte del vencimiento por compra de arriba.
              // nivel_premiado (el premio grande ya entregado) nunca se toca acá.
              var escalonesPerdidos = Math.floor(diasInactivo / LOYALTY_VENCIMIENTO_DIAS);
              var nivelVigente = Math.max(0, cliente.nivel_premiado - escalonesPerdidos);
              callback({
                puntos: balance,
                fechaReferencia: fechaReferencia,
                proximoVencimiento: proximoVencimiento,
                proximoVencimientoMonto: proximoVencimientoMonto,
                nivelVigente: nivelVigente
              });
            });
        });
    }

    function loadProximoBeneficio(nivelActual, callback) {
      // nivelActual ya viene loop-aware (nivelCicloEfectivo): con el circuito
      // infinito una vez en nivel 5, siempre hay un "próximo premio" válido.
      bataterosClient
        .from('beneficios')
        .select('id, nivel, nombre, puntos_requeridos')
        .eq('nivel', nivelActual + 1)
        .eq('activo', true)
        .maybeSingle()
        .then(function (res) { callback(res.data || null); });
    }

    var CATEGORIA_NOMBRES = { cafe: 'Café', retail: 'Retail', pasteleria: 'Pastelería', cocina: 'Cocina' };

    // Fidelidad v2: el descuento ya no es un % único por nivel, es una
    // matriz nivel × categoría (café/retail/pastelería/cocina, con montos
    // distintos entre sí). Se aplica manualmente en Fudo por el staff — acá
    // solo se muestra como referencia.
    function loadDescuentosPorNivel(nivel, callback) {
      if (nivel < 1) { callback([]); return; }
      bataterosClient
        .from('descuentos_categoria')
        .select('categoria, porcentaje')
        .eq('nivel', nivel)
        .order('categoria', { ascending: true })
        .then(function (res) { callback(res.data || []); });
    }

    function formatMesAno(iso) {
      var d = new Date(iso);
      return VOUCHER_MONTHS_ES[d.getMonth()] + ' de ' + d.getFullYear();
    }

    function iniciales(nombre, apellido) {
      var a = (nombre || '').trim().charAt(0);
      var b = (apellido || '').trim().charAt(0);
      return (a + b).toUpperCase() || '—';
    }

    function openPremioModal(nivel, premioNombre) {
      var premioModal = document.getElementById('club-premio-modal');
      if (!premioModal) return;
      document.getElementById('club-premio-modal-img').src = LOYALTY_TIER_IMAGES[nivel - 1] || '';
      document.getElementById('club-premio-modal-title').textContent = LOYALTY_TIER_NAMES[nivel - 1] || '';
      document.getElementById('club-premio-modal-meta').textContent = LOYALTY_TIERS[nivel - 1] + ' puntos';
      document.getElementById('club-premio-modal-desc').textContent = premioNombre || 'Todavía no cargamos la descripción de este premio.';
      premioModal.hidden = false;
      document.body.classList.add('modal-open');
      requestAnimationFrame(function () { premioModal.classList.add('is-visible'); });
    }

    function openDescuentoModal(nivel, descuentos) {
      var modalEl = document.getElementById('club-descuento-modal');
      if (!modalEl) return;
      document.getElementById('club-descuento-modal-title').textContent = 'Nivel ' + nivel + ' · ' + loyaltyTierName(nivel);
      document.getElementById('club-descuento-modal-list').innerHTML = descuentos.map(function (d) {
        return '<div class="loyalty-descuento__row"><span>' + (CATEGORIA_NOMBRES[d.categoria] || d.categoria) + '</span><strong>' + d.porcentaje + '%</strong></div>';
      }).join('');
      modalEl.hidden = false;
      document.body.classList.add('modal-open');
      requestAnimationFrame(function () { modalEl.classList.add('is-visible'); });
    }

    function closeDescuentoModal() {
      var modalEl = document.getElementById('club-descuento-modal');
      if (!modalEl) return;
      modalEl.classList.remove('is-visible');
      setTimeout(function () {
        modalEl.hidden = true;
        document.body.classList.remove('modal-open');
      }, 250);
    }

    function closePremioModal() {
      var premioModal = document.getElementById('club-premio-modal');
      if (!premioModal) return;
      premioModal.classList.remove('is-visible');
      setTimeout(function () {
        premioModal.hidden = true;
        document.body.classList.remove('modal-open');
      }, 250);
    }

    function renderPremiosTab(cliente) {
      var listEl = document.getElementById('club-tier-list');

      bataterosClient
        .from('beneficios')
        .select('nivel, nombre')
        .order('nivel', { ascending: true })
        .then(function (res) {
          var beneficiosPorNivel = {};
          (res.data || []).forEach(function (b) { beneficiosPorNivel[b.nivel] = b.nombre; });

          var nivelEfectivo = nivelCicloEfectivo(cliente);
          var html = '';
          for (var i = 0; i < LOYALTY_TIERS.length; i++) {
            var nivel = i + 1;
            var estado = nivel <= nivelEfectivo ? 'done' : (nivel === nivelEfectivo + 1 ? 'current' : 'locked');
            var badgeContent = estado === 'done'
              ? '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>'
              : nivel;
            var badgeStyle = estado === 'done'
              ? 'background:var(--loyalty-borravino);color:#fff;'
              : estado === 'current'
                ? 'background:#fff;border:1.5px solid var(--loyalty-copper);color:var(--loyalty-copper);'
                : 'background:var(--cream-darker);color:var(--ink-mid);';
            var tagHtml = estado === 'done'
              ? '<span class="club-tier-tag" style="color:var(--loyalty-borravino);">Logrado</span>'
              : estado === 'current'
                ? '<span class="club-tier-tag" style="color:var(--loyalty-copper);">En camino</span>'
                : '';
            var premioNombre = beneficiosPorNivel[nivel] || '';
            html += '<button type="button" class="club-tier-row is-' + estado + '" data-tier-nivel="' + nivel + '" data-tier-premio="' + escapeHtml(premioNombre) + '">' +
              '<div class="club-tier-badge" style="' + badgeStyle + '">' + badgeContent + '</div>' +
              '<div class="club-tier-info"><div class="club-tier-name">' + escapeHtml(LOYALTY_TIER_NAMES[i]) + '</div>' +
              '<div class="club-tier-meta">' + LOYALTY_TIERS[i] + ' puntos</div>' +
              (premioNombre ? '<div class="club-tier-premio">' + escapeHtml(premioNombre) + '</div>' : '') +
              '</div>' +
              tagHtml +
              '</button>';
          }
          listEl.innerHTML = html;

          listEl.querySelectorAll('[data-tier-nivel]').forEach(function (btn) {
            btn.addEventListener('click', function () {
              openPremioModal(parseInt(btn.getAttribute('data-tier-nivel'), 10), btn.getAttribute('data-tier-premio'));
            });
          });
        });

      bataterosClient
        .from('descuentos_categoria')
        .select('nivel, categoria, porcentaje')
        .order('nivel', { ascending: true })
        .then(function (res) {
          var rows = res.data || [];
          var porNivel = {};
          rows.forEach(function (r) {
            if (!porNivel[r.nivel]) porNivel[r.nivel] = [];
            porNivel[r.nivel].push(r);
          });
          var niveles = Object.keys(porNivel).map(Number).sort(function (a, b) { return a - b; });
          var gridEl = document.getElementById('club-disc-grid');
          gridEl.innerHTML = niveles.map(function (nivel) {
            var items = porNivel[nivel];
            var maxPct = Math.max.apply(null, items.map(function (d) { return d.porcentaje; }));
            return '<button type="button" class="club-disc-cell" data-disc-nivel="' + nivel + '">' +
              '<span class="club-disc-pct">' + maxPct + '%</span>' +
              '<span class="club-disc-lvl">Nivel ' + nivel + '</span>' +
              '</button>';
          }).join('');
          gridEl.querySelectorAll('[data-disc-nivel]').forEach(function (btn) {
            var nivel = parseInt(btn.getAttribute('data-disc-nivel'), 10);
            btn.addEventListener('click', function () { openDescuentoModal(nivel, porNivel[nivel]); });
          });
        });
    }

    function renderPerfilTab(cliente) {
      document.getElementById('club-avatar-initials').textContent = iniciales(cliente.nombre, cliente.apellido);
      document.getElementById('club-profile-name').textContent =
        cliente.nombre + (cliente.apellido ? ' ' + cliente.apellido : '');
      document.getElementById('club-profile-since').textContent = 'Socio desde ' + formatMesAno(cliente.created_at);
      document.getElementById('club-profile-email').textContent = cliente.email || '—';
      document.getElementById('club-profile-telefono').textContent = cliente.telefono || '—';
      document.getElementById('club-profile-socio').textContent = cliente.numero_socio || '—';

      var toggle = document.getElementById('club-newsletter-toggle');
      toggle.classList.toggle('is-off', !cliente.newsletter);
      toggle.onclick = function () {
        var estaApagado = toggle.classList.toggle('is-off');
        bataterosClient.from('clientes_loyalty').update({ newsletter: !estaApagado }).eq('id', cliente.id).then(function () {});
      };
    }

    function formatRelativo(iso) {
      var d = new Date(iso);
      var diffDias = Math.floor((Date.now() - d.getTime()) / 86400000);
      if (diffDias <= 0) return 'Hoy';
      if (diffDias === 1) return 'Ayer';
      if (diffDias < 7) return 'Hace ' + diffDias + ' días';
      if (diffDias < 30) {
        var semanas = Math.floor(diffDias / 7);
        return 'Hace ' + semanas + (semanas === 1 ? ' semana' : ' semanas');
      }
      if (diffDias < 365) {
        var meses = Math.floor(diffDias / 30);
        return 'Hace ' + meses + (meses === 1 ? ' mes' : ' meses');
      }
      var anios = Math.floor(diffDias / 365);
      return 'Hace ' + anios + (anios === 1 ? ' año' : ' años');
    }

    function formatMonto(n) {
      return '$' + Math.round(n || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    function formatVencimiento(fechaVencimiento) {
      if (!fechaVencimiento) return '';
      var hoy = hoyArgentina();
      var texto = formatFecha(parseFechaLocal(fechaVencimiento));
      return fechaVencimiento < hoy
        ? '<small class="club-activity-vence is-vencido">Venció el ' + texto + '</small>'
        : '<small class="club-activity-vence">Vence el ' + texto + '</small>';
    }

    function buildActivityRowHtml(r) {
      return '<div class="club-activity-row">' +
        '<div class="club-activity-icon"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--loyalty-borravino)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h13a3 3 0 0 1 0 6h-1"/><path d="M4 8v8a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2"/></svg></div>' +
        '<div class="club-activity-desc"><strong>Compra en Batata Cofi</strong><small>' + formatRelativo(r.fecha_acumulado) + ' · ' + formatMonto(r.monto_compra) + '</small>' + formatVencimiento(r.fecha_vencimiento) + '</div>' +
        '<span class="club-activity-pts">+' + r.puntos_otorgados + ' pts</span>' +
        '</div>';
    }

    function renderActividadReciente(cliente) {
      currentClienteActividad = cliente;
      var lastBtn = document.getElementById('club-activity-last');
      bataterosClient
        .from('puntos')
        .select('monto_compra, puntos_otorgados, fecha_acumulado')
        .eq('cliente_id', cliente.id)
        .order('fecha_acumulado', { ascending: false })
        .limit(1)
        .then(function (res) {
          var rows = res.data || [];
          if (!rows.length) {
            lastBtn.hidden = true;
            return;
          }
          lastBtn.hidden = false;
          lastBtn.innerHTML =
            '<div class="club-activity-icon"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--loyalty-borravino)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h13a3 3 0 0 1 0 6h-1"/><path d="M4 8v8a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2"/></svg></div>' +
            '<div class="club-activity-desc"><strong>Compra en Batata Cofi</strong><small>' + formatRelativo(rows[0].fecha_acumulado) + ' · ' + formatMonto(rows[0].monto_compra) + '</small></div>' +
            '<span class="club-activity-pts">+' + rows[0].puntos_otorgados + ' pts</span>' +
            '<svg class="club-activity-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>';
        });
    }

    function openActividadModal() {
      if (!currentClienteActividad) return;
      var actModal = document.getElementById('club-activity-modal');
      var listEl = document.getElementById('club-activity-modal-list');
      if (!actModal || !listEl) return;

      listEl.innerHTML = '<div class="club-activity-empty">Cargando…</div>';
      actModal.hidden = false;
      document.body.classList.add('modal-open');
      requestAnimationFrame(function () { actModal.classList.add('is-visible'); });

      bataterosClient
        .from('puntos')
        .select('monto_compra, puntos_otorgados, fecha_acumulado, fecha_vencimiento')
        .eq('cliente_id', currentClienteActividad.id)
        .order('fecha_acumulado', { ascending: false })
        .limit(20)
        .then(function (res) {
          var rows = res.data || [];
          listEl.innerHTML = rows.length
            ? rows.map(buildActivityRowHtml).join('')
            : '<div class="club-activity-empty">Todavía no registrás compras. ¡Tu próxima compra suma acá!</div>';
        });
    }

    function closeActividadModal() {
      var actModal = document.getElementById('club-activity-modal');
      if (!actModal) return;
      actModal.classList.remove('is-visible');
      setTimeout(function () {
        actModal.hidden = true;
        document.body.classList.remove('modal-open');
      }, 250);
    }

    function renderCard(cliente) {
      clearPending();
      document.getElementById('loyalty-card-nombre').textContent =
        cliente.nombre + (cliente.apellido ? ' ' + cliente.apellido : '');
      document.getElementById('club-hero-nombre').textContent = cliente.nombre || '—';
      document.getElementById('loyalty-card-socio').textContent =
        cliente.numero_socio ? 'Socio N.° ' + cliente.numero_socio : '';
      renderVueltaBadge(cliente);
      renderLoyaltyTrack(nivelCicloEfectivo(cliente));
      renderPremiosTab(cliente);
      renderPerfilTab(cliente);
      renderActividadReciente(cliente);

      loadProgress(cliente, function (progreso) {
        // La jerarquía visible (badge + descuento) sigue el nivel VIGENTE
        // (baja por inactividad, se recupera solo) — nivel_premiado es el
        // techo permanente que solo gobierna qué premios ya se entregaron
        // y nunca se vuelven a ofrecer, no lo que se muestra como "nivel
        // actual" del cliente.
        document.getElementById('loyalty-card-tier').textContent = loyaltyTierName(progreso.nivelVigente);
        document.getElementById('loyalty-card-saldo').textContent = progreso.puntos;
        document.getElementById('loyalty-card-vence').textContent = progreso.proximoVencimiento
          ? progreso.proximoVencimientoMonto + ' vencen el ' + formatFecha(parseFechaLocal(progreso.proximoVencimiento))
          : '';

        loadProximoBeneficio(nivelCicloEfectivo(cliente), function (proximo) {
          var nextEl = document.getElementById('loyalty-card-next');
          var rewardEl = document.getElementById('loyalty-card-reward');
          if (!proximo) {
            nextEl.textContent = '¡Llegaste al máximo nivel!';
            rewardEl.textContent = '';
            return;
          }
          var enVuelta = cliente.nivel_premiado >= 5;
          var faltan = Math.max(0, proximo.puntos_requeridos - progreso.puntos);
          nextEl.textContent = faltan > 0
            ? 'Faltan ' + faltan + ' puntos para ' + (enVuelta ? 'tu próximo premio' : LOYALTY_TIER_NAMES[proximo.nivel - 1])
            : '¡Ya podés canjear tu próximo premio!';
          rewardEl.textContent = proximo.nombre || '';
        });

        var wrap = document.getElementById('loyalty-descuento');
        if (progreso.nivelVigente < 2) {
          wrap.hidden = true;
        } else {
          wrap.hidden = false;
          loadDescuentosPorNivel(progreso.nivelVigente, function (descuentos) {
            var listEl = document.getElementById('loyalty-descuento-list');
            listEl.innerHTML = descuentos.length
              ? descuentos.map(function (d) {
                  return '<div class="loyalty-descuento__row"><span>' + (CATEGORIA_NOMBRES[d.categoria] || d.categoria) + '</span><strong>' + d.porcentaje + '%</strong></div>';
                }).join('')
              : '<p class="loyalty-descuento__text">Sin descuentos activos en tu nivel actual.</p>';
          });
        }
      });

      modal.querySelectorAll('[data-club-tab]').forEach(function (b) { b.classList.toggle('is-active', b.getAttribute('data-club-tab') === 'inicio'); });
      modal.querySelectorAll('.club-panel').forEach(function (p) { p.classList.toggle('is-active', p.id === 'club-panel-inicio'); });

      showView('card');
    }

    function completeRegistration(userId, pending) {
      bataterosClient
        .from('clientes_loyalty')
        .insert({
          auth_user_id: userId,
          nombre: pending.nombre,
          apellido: pending.apellido,
          fecha_nacimiento: pending.fecha_nacimiento,
          telefono: pending.telefono,
          email: pending.email,
          newsletter: !!pending.newsletter
        })
        .select(CLIENTE_COLUMNS)
        .single()
        .then(function (res) {
          if (res.error) {
            // Puede que la fila ya exista (doble confirmación / reintento) — la releemos.
            bataterosClient
              .from('clientes_loyalty')
              .select(CLIENTE_COLUMNS)
              .eq('auth_user_id', userId)
              .maybeSingle()
              .then(function (r2) {
                if (r2.data) renderCard(r2.data);
                else showView('register');
              });
            return;
          }
          sendBatakerosBienvenida(pending, res.data.numero_socio);
          renderCard(res.data);
        });
    }

    function resetStaffPanel() {
      document.getElementById('staff-search-panel').hidden = false;
      document.getElementById('staff-detail-panel').hidden = true;
      document.getElementById('staff-search-input').value = '';
      document.getElementById('staff-results').innerHTML = '';
      document.getElementById('staff-search-error').hidden = true;
      staffCurrentCliente = null;
    }

    function runStaffSearch() {
      var input = document.getElementById('staff-search-input');
      var term = input.value.trim();
      var errEl = document.getElementById('staff-search-error');
      var resultsEl = document.getElementById('staff-results');
      errEl.hidden = true;
      resultsEl.innerHTML = '';
      if (!term) return;

      var escaped = term.replace(/[%,]/g, '');
      var orParts = ['nombre.ilike.%' + escaped + '%', 'apellido.ilike.%' + escaped + '%'];
      if (/^\d+$/.test(term)) orParts.push('numero_socio.eq.' + term);

      bataterosClient
        .from('clientes_loyalty')
        .select(CLIENTE_COLUMNS)
        .or(orParts.join(','))
        .limit(15)
        .then(function (res) {
          if (res.error) {
            errEl.textContent = res.error.message;
            errEl.hidden = false;
            return;
          }
          renderStaffResults(res.data || []);
        });
    }

    function renderStaffResults(rows) {
      var resultsEl = document.getElementById('staff-results');
      if (!rows.length) {
        resultsEl.innerHTML = '<li class="staff-results__empty">Sin resultados</li>';
        return;
      }
      resultsEl.innerHTML = rows.map(function (c) {
        return '<li><button type="button" class="staff-results__item" data-cliente-id="' + c.id + '">' +
          '<span class="staff-results__avatar">' + iniciales(c.nombre, c.apellido) + '</span>' +
          '<span class="staff-results__text"><strong>' + escapeHtml(c.nombre + (c.apellido ? ' ' + c.apellido : '')) + '</strong>' +
          '<span>Socio N.° ' + (c.numero_socio || '—') + (c.telefono ? ' · ' + escapeHtml(c.telefono) : '') + '</span></span>' +
          '</button></li>';
      }).join('');
      resultsEl.querySelectorAll('[data-cliente-id]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var id = btn.getAttribute('data-cliente-id');
          var row = rows.filter(function (r) { return r.id === id; })[0];
          if (row) openStaffDetail(row);
        });
      });
    }

    function renderStaffCanjeNext(proximo, puntosActuales) {
      var list = document.getElementById('staff-canje-options');
      hideCanjeConfirm();
      if (!proximo) {
        list.innerHTML = '<li class="staff-canje__empty">Ya alcanzó el nivel máximo — no hay más premios para canjear.</li>';
        return;
      }
      var alcanza = puntosActuales >= proximo.puntos_requeridos;
      list.innerHTML = '<li><button type="button" class="staff-canje__btn" id="staff-canje-btn"' +
        (alcanza ? '' : ' disabled') + '>' +
        '<span class="staff-canje__btn-name">' + escapeHtml(proximo.nombre) + '</span>' +
        '<span class="staff-canje__btn-points">' + proximo.puntos_requeridos + ' pts</span>' +
        '</button></li>';
      var btn = document.getElementById('staff-canje-btn');
      if (btn) {
        btn.addEventListener('click', function () { selectCanjeOption(proximo, btn); });
      }
    }

    function hideCanjeConfirm() {
      staffSelectedBeneficio = null;
      var confirmEl = document.getElementById('staff-canje-confirm');
      if (confirmEl) confirmEl.hidden = true;
      var btn = document.getElementById('staff-canje-btn');
      if (btn) btn.classList.remove('is-selected');
    }

    function selectCanjeOption(beneficio, btnEl) {
      staffSelectedBeneficio = beneficio;
      btnEl.classList.add('is-selected');
      document.getElementById('staff-canje-error').hidden = true;
      document.getElementById('staff-canje-success').hidden = true;
      document.getElementById('staff-canje-confirm-text').textContent = staffCurrentCliente && staffCurrentCliente.nivel_premiado >= 5
        ? 'Se entrega el premio: ' + beneficio.nombre + '.'
        : 'Se entrega el premio y el cliente pasa a Nivel ' + beneficio.nivel + ' · ' + LOYALTY_TIER_NAMES[beneficio.nivel - 1] + '.';
      document.getElementById('staff-canje-confirm').hidden = false;
    }

    // Canje atómico vía función de Postgres: actualiza nivel_premiado e
    // inserta el canje en la misma transacción, con el nivel anterior como
    // guarda — imposible que dos clics/canjes casi simultáneos dupliquen
    // el premio (el segundo choca con la condición y falla).
    function redeemBeneficio(beneficio) {
      var errEl = document.getElementById('staff-canje-error');
      var okEl  = document.getElementById('staff-canje-success');
      errEl.hidden = true;
      okEl.hidden = true;

      if (!staffCurrentCliente) return;

      bataterosClient.rpc('canjear_premio', {
        p_cliente_id: staffCurrentCliente.id,
        p_beneficio_id: beneficio.id,
        p_puntos_utilizados: beneficio.puntos_requeridos
      }).then(function (res) {
        if (res.error) {
          errEl.textContent = res.error.message;
          errEl.hidden = false;
          return;
        }
        okEl.textContent = 'Canjeado: ' + beneficio.nombre + '.';
        okEl.hidden = false;
        // Releemos el cliente en vez de parchear nivel_premiado a mano: una
        // vez en el circuito de vueltas, el canje puede tocar nivel_ciclo
        // y/o vuelta en vez de nivel_premiado, según corresponda.
        bataterosClient
          .from('clientes_loyalty')
          .select(CLIENTE_COLUMNS)
          .eq('id', staffCurrentCliente.id)
          .single()
          .then(function (clienteRes) {
            if (clienteRes.data) staffCurrentCliente = clienteRes.data;
            refreshStaffDetailStats();
          });
      });
    }

    function refreshStaffDetailStats() {
      if (!staffCurrentCliente) return;

      var vueltaEl = document.getElementById('staff-detail-vuelta');
      if (vueltaEl) vueltaEl.textContent = staffCurrentCliente.vuelta || 1;

      loadProgress(staffCurrentCliente, function (progreso) {
        // El chip "Nivel" muestra la jerarquía VIGENTE (baja por inactividad,
        // se recupera sola) — si está por debajo del techo permanente que ya
        // tiene ganado, lo aclaramos para que el staff entienda por qué no
        // se le puede volver a ofrecer un premio ya entregado.
        var nivelEl = document.getElementById('staff-detail-nivel');
        nivelEl.textContent = 'Nivel ' + progreso.nivelVigente + ' · ' + loyaltyTierName(progreso.nivelVigente) +
          (progreso.nivelVigente < staffCurrentCliente.nivel_premiado
            ? ' (bajó desde Nivel ' + staffCurrentCliente.nivel_premiado + ')'
            : '');

        staffCurrentProgreso = progreso.puntos;
        document.getElementById('staff-detail-saldo').textContent = progreso.puntos;
        loadProximoBeneficio(nivelCicloEfectivo(staffCurrentCliente), function (proximo) {
          renderStaffCanjeNext(proximo, progreso.puntos);
        });

        var descEl = document.getElementById('staff-detail-descuento');
        var marcarBtn = document.getElementById('staff-marcar-descuento-btn');
        document.getElementById('staff-marcar-descuento-error').hidden = true;
        document.getElementById('staff-marcar-descuento-success').hidden = true;
        if (progreso.nivelVigente < 2) {
          descEl.textContent = 'Ninguno';
          staffDescuentosActivos = [];
          marcarBtn.hidden = true;
          return;
        }
        loadDescuentosPorNivel(progreso.nivelVigente, function (descuentos) {
          descEl.textContent = descuentos.length
            ? descuentos.map(function (d) { return (CATEGORIA_NOMBRES[d.categoria] || d.categoria) + ' ' + d.porcentaje + '%'; }).join(' · ') +
              (progreso.nivelVigente < staffCurrentCliente.nivel_premiado ? ' (bajó por inactividad)' : '')
            : 'Ninguno';
          staffDescuentosActivos = descuentos;
          marcarBtn.hidden = descuentos.length === 0;
        });
      });
    }

    function openStaffDetail(cliente) {
      staffCurrentCliente = cliente;
      document.getElementById('staff-search-panel').hidden = true;
      document.getElementById('staff-detail-panel').hidden = false;
      document.getElementById('staff-detail-avatar').textContent = iniciales(cliente.nombre, cliente.apellido);
      document.getElementById('staff-detail-name').textContent =
        cliente.nombre + (cliente.apellido ? ' ' + cliente.apellido : '');
      document.getElementById('staff-detail-meta').textContent =
        'Socio N.° ' + (cliente.numero_socio || '—') + (cliente.telefono ? ' · ' + cliente.telefono : '');
      document.getElementById('staff-canje-error').hidden = true;
      document.getElementById('staff-canje-success').hidden = true;
      refreshStaffDetailStats();
    }

    function loadCard() {
      bataterosClient.auth.getSession().then(function (res) {
        var session = res.data && res.data.session;
        if (!session) { showView('register'); return; }

        bataterosClient
          .from('staff_members')
          .select('id')
          .eq('auth_user_id', session.user.id)
          .maybeSingle()
          .then(function (staffRes) {
            if (staffRes.data) {
              showView('staff');
              resetStaffPanel();
              return;
            }

            bataterosClient
              .from('clientes_loyalty')
              .select(CLIENTE_COLUMNS)
              .eq('auth_user_id', session.user.id)
              .maybeSingle()
              .then(function (result) {
                if (result.error || !result.data) {
                  var pending = readPending();
                  if (pending) {
                    completeRegistration(session.user.id, pending);
                  } else {
                    showView('register');
                  }
                  return;
                }
                renderCard(result.data);
              });
          });
      });
    }

    document.querySelectorAll('[data-open-loyalty]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        openModal();
        loadCard();
      });
    });

    modal.addEventListener('click', function (e) {
      if (e.target === modal || e.target === closeBtn) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hidden) closeModal();
    });

    modal.querySelectorAll('[data-loyalty-switch]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        showView(btn.getAttribute('data-loyalty-switch'));
      });
    });

    modal.querySelectorAll('[data-club-tab]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var name = btn.getAttribute('data-club-tab');
        modal.querySelectorAll('[data-club-tab]').forEach(function (b) { b.classList.toggle('is-active', b === btn); });
        modal.querySelectorAll('.club-panel').forEach(function (p) { p.classList.toggle('is-active', p.id === 'club-panel-' + name); });
      });
    });

    if (views.card) {
      var clubTabOrder = ['inicio', 'premios', 'perfil'];
      var swipeStartX = 0;
      var swipeStartY = 0;
      views.card.addEventListener('touchstart', function (e) {
        swipeStartX = e.changedTouches[0].clientX;
        swipeStartY = e.changedTouches[0].clientY;
      }, { passive: true });
      views.card.addEventListener('touchend', function (e) {
        var dx = e.changedTouches[0].clientX - swipeStartX;
        var dy = e.changedTouches[0].clientY - swipeStartY;
        if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
        var activeBtn = modal.querySelector('[data-club-tab].is-active');
        var idx = clubTabOrder.indexOf(activeBtn ? activeBtn.getAttribute('data-club-tab') : 'inicio');
        var nextIdx = dx < 0 ? idx + 1 : idx - 1;
        if (nextIdx < 0 || nextIdx >= clubTabOrder.length) return;
        var nextBtn = modal.querySelector('[data-club-tab="' + clubTabOrder[nextIdx] + '"]');
        if (nextBtn) nextBtn.click();
      }, { passive: true });
    }

    var activityLastBtn = document.getElementById('club-activity-last');
    if (activityLastBtn) activityLastBtn.addEventListener('click', openActividadModal);

    var activityModal = document.getElementById('club-activity-modal');
    if (activityModal) {
      var activityModalClose = activityModal.querySelector('.club-activity-modal__close');
      activityModal.addEventListener('click', function (e) {
        if (e.target === activityModal || e.target === activityModalClose) closeActividadModal();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !activityModal.hidden) closeActividadModal();
      });
    }

    var premioModal = document.getElementById('club-premio-modal');
    if (premioModal) {
      var premioModalClose = premioModal.querySelector('.club-activity-modal__close');
      premioModal.addEventListener('click', function (e) {
        if (e.target === premioModal || e.target === premioModalClose) closePremioModal();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !premioModal.hidden) closePremioModal();
      });
    }

    var descuentoModal = document.getElementById('club-descuento-modal');
    if (descuentoModal) {
      var descuentoModalClose = descuentoModal.querySelector('.club-activity-modal__close');
      descuentoModal.addEventListener('click', function (e) {
        if (e.target === descuentoModal || e.target === descuentoModalClose) closeDescuentoModal();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !descuentoModal.hidden) closeDescuentoModal();
      });
    }

    var registerForm = document.getElementById('loyalty-register-form');
    if (registerForm) {
      registerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        clearFieldError('loyalty-register-error');

        var nombre = registerForm.querySelector('[name="nombre"]').value.trim();
        var apellido = registerForm.querySelector('[name="apellido"]').value.trim();
        var fechaNacimiento = registerForm.querySelector('[name="fecha_nacimiento"]').value;
        var telefono = registerForm.querySelector('[name="telefono"]').value.trim();
        var email = registerForm.querySelector('[name="email"]').value.trim();
        var password = registerForm.querySelector('[name="password"]').value;
        var newsletter = registerForm.querySelector('[name="newsletter"]').checked;

        var submitBtn = registerForm.querySelector('button[type="submit"]');
        var originalLabel = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Creando…';

        var pendingData = { nombre: nombre, apellido: apellido, fecha_nacimiento: fechaNacimiento, telefono: telefono, email: email, newsletter: newsletter };

        bataterosClient.auth.signUp({ email: email, password: password, options: { data: { nombre: nombre } } }).then(function (res) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;

          if (res.error) {
            showFieldError('loyalty-register-error', res.error.message);
            return;
          }

          writePending(pendingData);

          if (res.data.session) {
            completeRegistration(res.data.user.id, pendingData);
          } else {
            document.getElementById('loyalty-pending-text').textContent =
              'Te mandamos un mail de confirmación a ' + email + '. Abrilo, tocá el link y volvé a esta pantalla.';
            showView('pending');
          }
        });
      });
    }

    var loginForm = document.getElementById('loyalty-login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        clearFieldError('loyalty-login-error');

        var email = loginForm.querySelector('[name="email"]').value.trim();
        var password = loginForm.querySelector('[name="password"]').value;

        var submitBtn = loginForm.querySelector('button[type="submit"]');
        var originalLabel = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Entrando…';

        bataterosClient.auth.signInWithPassword({ email: email, password: password }).then(function (res) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;

          if (res.error) {
            showFieldError('loyalty-login-error', res.error.message);
            return;
          }
          loadCard();
        });
      });
    }

    var forgotForm = document.getElementById('loyalty-forgot-form');
    if (forgotForm) {
      forgotForm.addEventListener('submit', function (e) {
        e.preventDefault();
        clearFieldError('loyalty-forgot-error');
        document.getElementById('loyalty-forgot-success').hidden = true;

        var email = forgotForm.querySelector('[name="email"]').value.trim();
        var submitBtn = forgotForm.querySelector('button[type="submit"]');
        var originalLabel = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando…';

        bataterosClient.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin + window.location.pathname
        }).then(function (res) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;

          if (res.error) {
            showFieldError('loyalty-forgot-error', res.error.message);
            return;
          }
          forgotForm.hidden = true;
          var okEl = document.getElementById('loyalty-forgot-success');
          okEl.textContent = 'Te mandamos un link a ' + email + '. Abrilo para elegir una nueva contraseña.';
          okEl.hidden = false;
        });
      });
    }

    var resetForm = document.getElementById('loyalty-reset-form');
    if (resetForm) {
      resetForm.addEventListener('submit', function (e) {
        e.preventDefault();
        clearFieldError('loyalty-reset-error');

        var password = resetForm.querySelector('[name="password"]').value;
        var submitBtn = resetForm.querySelector('button[type="submit"]');
        var originalLabel = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Guardando…';

        bataterosClient.auth.updateUser({ password: password }).then(function (res) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;

          if (res.error) {
            showFieldError('loyalty-reset-error', res.error.message);
            return;
          }
          loadCard();
        });
      });
    }

    var pendingRefreshBtn = document.getElementById('loyalty-pending-refresh');
    if (pendingRefreshBtn) pendingRefreshBtn.addEventListener('click', loadCard);

    var logoutBtn = document.getElementById('loyalty-logout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function () {
        bataterosClient.auth.signOut().then(function () { showView('register'); });
      });
    }

    var staffLogoutBtn = document.getElementById('staff-logout');
    if (staffLogoutBtn) {
      staffLogoutBtn.addEventListener('click', function () {
        bataterosClient.auth.signOut().then(function () { showView('register'); });
      });
    }

    var staffSearchBtn = document.getElementById('staff-search-btn');
    if (staffSearchBtn) staffSearchBtn.addEventListener('click', runStaffSearch);

    var staffSearchInput = document.getElementById('staff-search-input');
    if (staffSearchInput) {
      staffSearchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); runStaffSearch(); }
      });
    }

    var staffDetailBack = document.getElementById('staff-detail-back');
    if (staffDetailBack) {
      staffDetailBack.addEventListener('click', function () {
        document.getElementById('staff-detail-panel').hidden = true;
        document.getElementById('staff-search-panel').hidden = false;
      });
    }

    var staffCanjeCancelBtn = document.getElementById('staff-canje-cancel-btn');
    if (staffCanjeCancelBtn) staffCanjeCancelBtn.addEventListener('click', hideCanjeConfirm);

    var staffCanjeConfirmBtn = document.getElementById('staff-canje-confirm-btn');
    if (staffCanjeConfirmBtn) {
      staffCanjeConfirmBtn.addEventListener('click', function () {
        if (staffSelectedBeneficio) redeemBeneficio(staffSelectedBeneficio);
      });
    }

    var staffMarcarDescuentoBtn = document.getElementById('staff-marcar-descuento-btn');
    if (staffMarcarDescuentoBtn) {
      staffMarcarDescuentoBtn.addEventListener('click', function () {
        var errEl = document.getElementById('staff-marcar-descuento-error');
        var okEl = document.getElementById('staff-marcar-descuento-success');
        errEl.hidden = true;
        okEl.hidden = true;
        if (!staffCurrentCliente || !staffDescuentosActivos.length) return;

        var filas = staffDescuentosActivos.map(function (d) {
          return { cliente_id: staffCurrentCliente.id, categoria: d.categoria, porcentaje: d.porcentaje };
        });
        bataterosClient.from('descuentos_aplicados').insert(filas).then(function (res) {
          if (res.error) {
            errEl.textContent = res.error.message;
            errEl.hidden = false;
          } else {
            okEl.textContent = 'Descuento registrado.';
            okEl.hidden = false;
          }
        });
      });
    }

    bataterosClient.auth.onAuthStateChange(function (event) {
      if (event === 'PASSWORD_RECOVERY') {
        openModal();
        showView('reset');
        return;
      }
      if (event === 'SIGNED_IN' && !modal.hidden) loadCard();
    });
  }

  // ─── POPUP RESEÑA + NEWSLETTER ────────────────────────────────────────────

  var QR_VISIT_COUNT_KEY   = 'batata_qr_visit_count';
  var GOOGLE_REVIEW_URL    = 'https://www.google.com/maps/place/Batata+Cofi/@-34.6624108,-58.3641898,17z/data=!4m8!3m7!1s0x95a333298b4b82f3:0x723b6f2db688e5e3!8m2!3d-34.6624108!4d-58.3616149!9m1!1b1!16s%2Fg%2F11lds5r3mb?entry=ttu';
  var REVIEW_POPUP_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxSHDKj-5XNopH7Ntt-Q2airUUzyPrulqEKxyCmpMlR9_W5UB1YVXFE1e8qG_Tdpsa4cw/exec';

  function isQRVisit() {
    var search = window.location.search;
    var hash   = window.location.hash;
    return search.indexOf('qr') !== -1 || hash.indexOf('qr') !== -1 || search.indexOf('ref=mesa') !== -1;
  }

  function dismissedKeyFor(variant) {
    return variant === 'mesa' ? 'batata_review_popup_done' : 'batata_newsletter_popup_done';
  }

  function reviewPopupAlreadyShown(variant) {
    try { return window.localStorage.getItem(dismissedKeyFor(variant)) === '1'; } catch (err) { return false; }
  }

  function markReviewPopupShown(variant) {
    try { window.localStorage.setItem(dismissedKeyFor(variant), '1'); } catch (err) {}
  }

  function registerQRVisitAndCheckIfSecondPlus() {
    try {
      var count = parseInt(window.localStorage.getItem(QR_VISIT_COUNT_KEY) || '0', 10);
      count += 1;
      window.localStorage.setItem(QR_VISIT_COUNT_KEY, String(count));
      return count >= 2;
    } catch (err) { return true; }
  }

  function buildReviewPopupMarkup(variant) {
    var collapsedTitle = '¿Ya sabés del curso de barista?';
    var collapsedSub   = 'Próximo curso: 24/8 · Sumate a las novedades';

    var reviewBlock = '';

    var cursoWhatsappUrl = 'https://wa.me/5491134316255?text=' + encodeURIComponent('Hola Batata! Quiero anotarme al curso de barista del 24/8.');
    var cursoBlock = ''
      + '    <div class="review-popup__curso">'
      + '      <p class="review-popup__curso-text">☕ ¿Te enteraste de nuestros cursos de barista? Próximo curso comienza el 24/8.</p>'
      + '      <a class="review-popup__btn-whatsapp" href="' + cursoWhatsappUrl + '" target="_blank" rel="noopener">Consultar por WhatsApp</a>'
      + '    </div>';

    var dividerBlock = ''
      + '    <div class="review-popup__divider-row">'
      + '      <span class="review-popup__divider-line"></span>'
      + '      <span class="review-popup__divider-text">y sumate al newsletter</span>'
      + '      <span class="review-popup__divider-line"></span>'
      + '    </div>';

    return ''
      + '<div class="review-bar" id="review-popup-overlay" role="dialog" aria-labelledby="review-popup-title">'
      + '  <div class="review-bar__collapsed" id="review-bar-collapsed">'
      + '    <span class="review-bar__icon" aria-hidden="true">☕</span>'
      + '    <div class="review-bar__text">'
      + '      <p class="review-bar__title" id="review-popup-title">' + collapsedTitle + '</p>'
      + '      <p class="review-bar__subtitle">' + collapsedSub + '</p>'
      + '    </div>'
      + '    <button class="review-bar__cta" id="review-bar-expand">Ver</button>'
      + '    <button class="review-bar__close" id="review-popup-close" aria-label="Cerrar">&times;</button>'
      + '  </div>'
      + '  <div class="review-bar__expanded" id="review-bar-expanded" hidden>'
      +      reviewBlock
      +      cursoBlock
      +      dividerBlock
      + '    <form id="review-popup-form">'
      + '      <input class="review-popup__mail-input" type="email" name="email" placeholder="tu@mail.com" required />'
      + '      <label class="review-popup__checkbox-row">'
      + '        <input type="checkbox" name="newsletter_consent" checked />'
      + '        <span class="review-popup__checkbox-text">Quiero recibir novedades, promos y noticias de Batata por mail</span>'
      + '      </label>'
      + '      <button type="submit" class="review-popup__btn-secondary">Confirmar mail</button>'
      + '    </form>'
      + '    <p class="review-popup__success" id="review-popup-success" hidden>¡Gracias! Ya estás sumado a nuestras novedades.</p>'
      + '  </div>'
      + '</div>';
  }

  function injectReviewPopupStyles() {
    if (document.getElementById('review-popup-styles')) return;
    var style = document.createElement('style');
    style.id = 'review-popup-styles';
    style.textContent = ''
      + '.review-bar{position:fixed;left:12px;right:12px;bottom:12px;z-index:9999;background:#EDE4D8;border-radius:14px;box-shadow:0 8px 28px rgba(26,26,26,0.18);font-family:"Raleway",sans-serif;opacity:0;transform:translateY(16px);transition:opacity .5s cubic-bezier(0.16,1,0.3,1),transform .5s cubic-bezier(0.16,1,0.3,1);box-sizing:border-box;max-width:420px;margin:0 auto;}'
      + '.review-bar.is-visible{opacity:1;transform:translateY(0);}'
      + '.review-bar__collapsed{display:flex;align-items:center;gap:14px;padding:20px 16px 20px 20px;}'
      + '.review-bar__icon{font-size:34px;line-height:1;flex-shrink:0;}'
      + '.review-bar__text{flex:1;min-width:0;}'
      + '.review-bar__title{margin:0;font-size:22px;font-weight:700;color:#1A1A1A;line-height:1.25;}'
      + '.review-bar__subtitle{margin:4px 0 0;font-size:15px;color:rgba(26,26,26,0.6);line-height:1.3;}'
      + '.review-bar__cta{flex-shrink:0;background:#8B2A4A;color:#EDE4D8;border:none;border-radius:10px;padding:14px 22px;font-size:16px;font-weight:700;cursor:pointer;white-space:nowrap;}'
      + '.review-bar__close{flex-shrink:0;background:none;border:none;font-size:24px;line-height:1;color:#1A1A1A;opacity:.4;cursor:pointer;padding:4px;}'
      + '.review-bar__expanded{padding:0 18px 20px;}'
      + '.review-popup__btn-primary{display:block;width:100%;background:#8B2A4A;color:#EDE4D8;border:none;border-radius:10px;padding:14px;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;margin-bottom:14px;text-align:center;text-decoration:none;box-sizing:border-box;}'
      + '.review-popup__curso{background:rgba(139,42,74,0.06);border-radius:10px;padding:12px;margin-bottom:14px;}'
      + '.review-popup__curso-text{margin:0 0 10px;font-size:13px;font-weight:600;color:#1A1A1A;line-height:1.4;text-align:center;}'
      + '.review-popup__btn-whatsapp{display:block;width:100%;background:#25D366;color:#fff;border:none;border-radius:10px;padding:12px;font-family:"Raleway",sans-serif;font-size:13px;font-weight:700;text-align:center;text-decoration:none;box-sizing:border-box;}'
      + '.review-popup__divider-row{display:flex;align-items:center;gap:10px;margin-bottom:14px;}'
      + '.review-popup__divider-line{flex:1;height:1px;background:rgba(26,26,26,0.15);}'
      + '.review-popup__divider-text{font-size:10px;color:rgba(26,26,26,0.45);text-transform:uppercase;letter-spacing:.08em;white-space:nowrap;}'
      + '.review-popup__mail-input{width:100%;border:1px solid rgba(26,26,26,0.2);border-radius:8px;padding:11px 14px;font-family:"Raleway",sans-serif;font-size:13px;background:#fff;margin-bottom:10px;box-sizing:border-box;}'
      + '.review-popup__checkbox-row{display:flex;align-items:flex-start;gap:8px;margin-bottom:14px;cursor:pointer;}'
      + '.review-popup__checkbox-row input{margin-top:2px;}'
      + '.review-popup__checkbox-text{font-size:11px;color:rgba(26,26,26,0.6);line-height:1.4;}'
      + '.review-popup__btn-secondary{width:100%;background:transparent;color:#8B2A4A;border:1.5px solid #8B2A4A;border-radius:10px;padding:12px;font-family:"Raleway",sans-serif;font-size:13px;font-weight:600;cursor:pointer;}'
      + '.review-popup__btn-secondary[disabled]{opacity:.6;cursor:default;}'
      + '.review-popup__success{text-align:center;font-size:13px;color:#1A1A1A;margin:6px 0 0;}';
    document.head.appendChild(style);
  }

  function showReviewPopup(variant) {
    if (document.getElementById('review-popup-overlay')) return;
    injectReviewPopupStyles();
    var wrapper = document.createElement('div');
    wrapper.innerHTML = buildReviewPopupMarkup(variant);
    document.body.appendChild(wrapper.firstChild);

    trackEvent('qr_popup_shown', { qr_source: variant });

    var bar        = document.getElementById('review-popup-overlay');
    var closeBtn    = document.getElementById('review-popup-close');
    var expandBtn   = document.getElementById('review-bar-expand');
    var collapsed   = document.getElementById('review-bar-collapsed');
    var expanded    = document.getElementById('review-bar-expanded');
    var form        = document.getElementById('review-popup-form');
    var successMsg  = document.getElementById('review-popup-success');

    requestAnimationFrame(function () { bar.classList.add('is-visible'); });

    function closeBar() {
      bar.classList.remove('is-visible');
      setTimeout(function () {
        if (bar.parentNode) bar.parentNode.removeChild(bar);
      }, 500);
    }

    closeBtn.addEventListener('click', closeBar);
    document.addEventListener('keydown', function escListener(e) {
      if (e.key === 'Escape') { closeBar(); document.removeEventListener('keydown', escListener); }
    });

    if (expandBtn) {
      expandBtn.addEventListener('click', function () {
        collapsed.hidden = true;
        expanded.hidden = false;
        trackEvent('qr_popup_expanded', { qr_source: variant });
      });
    }

    var googleBtn = document.getElementById('review-popup-google-btn');
    if (googleBtn) {
      googleBtn.addEventListener('click', function () {
        markReviewPopupShown(variant);
        trackEvent('qr_review_click', { qr_source: variant });
      });
    }

    var cursoBtn = bar.querySelector('.review-popup__btn-whatsapp');
    if (cursoBtn) {
      cursoBtn.addEventListener('click', function () {
        trackEvent('curso_barista_whatsapp_click', { qr_source: variant });
      });
    }

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var emailField   = form.querySelector('[name="email"]');
        var consentField = form.querySelector('[name="newsletter_consent"]');
        var email   = emailField   ? emailField.value.trim()  : '';
        var consent = consentField ? consentField.checked     : false;
        if (!email) return;

        var submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando…';

        function finalize() {
          form.hidden = true;
          successMsg.hidden = false;
          markReviewPopupShown(variant);
          trackEvent('qr_newsletter_signup', { qr_source: variant });
        }

        fetch(REVIEW_POPUP_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({
            tipo:          'newsletter_mesa',
            email:         email,
            consentimiento: consent,
            origen:        variant === 'mesa' ? 'QR mesa' : 'Web directa'
          }),
          mode: 'no-cors'
        }).then(finalize).catch(finalize);
      });
    }
  }

  function initReviewPopup() {
    var variant = isQRVisit() ? 'mesa' : 'web';
    if (reviewPopupAlreadyShown(variant)) return;
    if (variant === 'mesa') {
      var isSecondPlusVisit = registerQRVisitAndCheckIfSecondPlus();
      if (!isSecondPlusVisit) {
        try { window.sessionStorage.setItem('batata_qr_session', '1'); } catch(ex) {}
        return;
      }
    }
    if (variant === 'web') {
      try { if (window.sessionStorage.getItem('batata_qr_session') === '1') return; } catch(ex) {}
    }
    var triggered = false;
    function trigger() {
      if (triggered) return;
      triggered = true;
      showReviewPopup(variant);
    }
    var popupDelayMs = variant === 'mesa' ? 20000 : 10000;
    var reviewPopupTimeoutId = setTimeout(trigger, popupDelayMs);
    function checkScrollBottom() {
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 80)) {
        clearTimeout(reviewPopupTimeoutId);
        window.removeEventListener('scroll', checkScrollBottom);
        trigger();
      }
    }
    window.addEventListener('scroll', checkScrollBottom, { passive: true });
  }

  // ─── BARRA INFERIOR ───────────────────────────────────────────────────────

  function initCtaBar() {
    var bar = document.querySelector('.mobile-cta-bar');
    if (!bar) return;
    var isQR     = isQRVisit();
    var width    = window.innerWidth;
    var isTablet = width >= 768 && width < 1024;

    var despensaHTML = ''
      + '<span class="mobile-cta-bar__label" style="display:inline-flex;align-items:center;gap:8px;">'
      + '<span style="display:inline-flex;align-items:center;">'
      + '<img src="img/pantry/cafe.jpg?v=25b" alt="" width="26" height="26" style="width:26px;height:26px;object-fit:cover;border-radius:50%;border:1.5px solid rgba(255,255,255,0.5);">'
      + '<img src="img/pantry/miel.jpg?v=25b" alt="" width="26" height="26" style="width:26px;height:26px;object-fit:cover;border-radius:50%;border:1.5px solid rgba(255,255,255,0.5);margin-left:-7px;">'
      + '<img src="img/pantry/aceite.jpg?v=25b" alt="" width="26" height="26" style="width:26px;height:26px;object-fit:cover;border-radius:50%;border:1.5px solid rgba(255,255,255,0.5);margin-left:-7px;">'
      + '</span>Conocé nuestra despensa</span>'
      + '<span class="mobile-cta-bar__arrow" aria-hidden="true">→</span>';

    var pedidosHTML = ''
      + '<span class="mobile-cta-bar__label">'
      + '<svg class="mobile-cta-bar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
      + '<path d="M3 7h13l4 5v6h-2"/><path d="M3 7v11h11"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>'
      + '</svg>Pedir ahora</span>'
      + '<span class="mobile-cta-bar__arrow" aria-hidden="true">→</span>';

    if (isTablet) {
      bar.removeAttribute('href');
      bar.removeAttribute('target');
      bar.removeAttribute('rel');
      bar.style.cssText = 'display:flex;padding:0;';
      bar.innerHTML = ''
        + '<a href="https://www.pedidosya.com.ar/restaurantes/avellaneda/batata-cofi-a22a563b-8402-480d-8823-2dfb5d125331-menu" target="_blank" rel="noopener" style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px;padding:14px 12px;text-decoration:none;color:#fff;border-right:1px solid rgba(255,255,255,0.2);">'
        + pedidosHTML + '</a>'
        + '<a href="#despensa" class="cta-despensa-link" style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px;padding:14px 12px;text-decoration:none;color:#fff;">'
        + despensaHTML + '</a>';
      var dl = bar.querySelector('.cta-despensa-link');
      if (dl) {
        dl.addEventListener('click', function(e) {
          e.preventDefault();
          var t = document.getElementById('despensa');
          if (t) t.scrollIntoView({ behavior: 'smooth' });
        });
      }
    } else if (isQR) {
      bar.setAttribute('href', '#despensa');
      bar.removeAttribute('target');
      bar.removeAttribute('rel');
      bar.setAttribute('aria-label', 'Conocé nuestra despensa');
      bar.innerHTML = despensaHTML;
      bar.addEventListener('click', function(e) {
        e.preventDefault();
        var t = document.getElementById('despensa');
        if (t) t.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  // ─── OTROS ────────────────────────────────────────────────────────────────

  function initEducationVideo() {
    var video = document.querySelector('.education__video');
    if (!video || !video.querySelector('source')) return;
    function tryPlay() {
      video.preload = 'auto';
      video.load();
      var p = video.play();
      if (p && typeof p.then === 'function') {
        p.catch(function () {
          function retryOnInteract() {
            video.play().catch(function () {});
            document.removeEventListener('touchstart', retryOnInteract);
            document.removeEventListener('scroll', retryOnInteract);
          }
          document.addEventListener('touchstart', retryOnInteract, { once: true, passive: true });
          document.addEventListener('scroll', retryOnInteract, { once: true, passive: true });
        });
      }
    }
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { tryPlay(); observer.unobserve(entry.target); }
        });
      }, { rootMargin: '300px' });
      observer.observe(video);
    } else {
      tryPlay();
    }
  }

  function initSiteNav() {
    var nav = document.getElementById('site-nav');
    if (!nav) return;
    function updateNavOffset() { document.body.style.paddingTop = nav.offsetHeight + 'px'; }
    updateNavOffset();
    window.addEventListener('resize', updateNavOffset, { passive: true });
    function handleNavScroll() { nav.classList.toggle('scrolled', window.scrollY > 20); }
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();
    var navLinks = document.querySelectorAll('.site-nav__link');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.getElementById(this.getAttribute('href').substring(1));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    }
    var logo = document.querySelector('.site-nav__logo');
    if (logo) {
      logo.addEventListener('click', function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
    }
    var sectionIds = [];
    for (var j = 0; j < navLinks.length; j++) sectionIds.push(navLinks[j].getAttribute('data-section'));
    var sections = [];
    for (var k = 0; k < sectionIds.length; k++) {
      var sec = document.getElementById(sectionIds[k]);
      if (sec) sections.push(sec);
    }
    if (sections.length > 0 && 'IntersectionObserver' in window) {
      var navHeight = nav.offsetHeight;
      var activeObserver = new IntersectionObserver(function (entries) {
        for (var m = 0; m < entries.length; m++) {
          if (entries[m].isIntersecting) {
            for (var n = 0; n < navLinks.length; n++) navLinks[n].classList.remove('active');
            var activeLink = document.querySelector('.site-nav__link[data-section="' + entries[m].target.id + '"]');
            if (activeLink) activeLink.classList.add('active');
          }
        }
      }, { rootMargin: '-' + (navHeight + 20) + 'px 0px -60% 0px', threshold: 0 });
      for (var p = 0; p < sections.length; p++) activeObserver.observe(sections[p]);
    }
  }

  function initHamburger() {
    var btn  = document.getElementById('nav-hamburger');
    var menu = document.getElementById('nav-menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', function () {
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !isOpen);
      btn.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
      menu.classList.toggle('is-open', !isOpen);
    });
    menu.querySelectorAll('.site-nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Abrir menú');
        menu.classList.remove('is-open');
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Abrir menú');
        menu.classList.remove('is-open');
        btn.focus();
      }
    });
    document.addEventListener('click', function (e) {
      if (btn.getAttribute('aria-expanded') === 'true' && !e.target.closest('.site-nav')) {
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Abrir menú');
        menu.classList.remove('is-open');
      }
    });
  }

  function initCursosUrgency() {
    var spotsEl = document.getElementById('cursos-spots');
    var urgEl   = document.getElementById('cursos-urgency');
    if (!spotsEl || !urgEl) return;
    spotsEl.textContent = 3 + Math.floor(Math.random() * 3);
    urgEl.hidden = false;
  }

  // ─── INIT ─────────────────────────────────────────────────────────────────

  var statusInterval = null;

  function init() {
    var t = getBuenosAiresTime();

    var heroEl = document.getElementById('hero-headline');
    if (heroEl) heroEl.textContent = heroHeadline(t);

    var ratingTextEl = document.querySelector('.hero__rating-text');
    if (ratingTextEl) {
      ratingTextEl.innerHTML = '<strong>' + GOOGLE_RATING + '</strong> · ' + GOOGLE_REVIEW_COUNT + ' reseñas en Google';
    }

    renderBanner(bannerContent(t));
    renderCombosByTimeslot(t);
    switchTab(defaultTab(t));
    updateStoreStatus();
    if (statusInterval) clearInterval(statusInterval);
    statusInterval = setInterval(updateStoreStatus, 60000);
    renderServingNow();
    setupCafeOriginTrigger();
    renderPastry();
    renderPantry();
    renderTortas();
    renderTestimonials();
    renderInstagramFeed();
    initTabs();
    initComboModal();
    initVoucher();
    initLoyalty();
    initParallax();
    initSmoothScroll();
    handleQR();
    initScrollReveal();
    initEducationVideo();
    initCursosUrgency();
    initHamburger();
    initSiteNav();
    loadMenuImages();
    initReviewPopup();
    initCtaBar();
  }

  (function() {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = function() { emailjs.init('lzWqlAeU6ejqBHLDH'); };
    document.head.appendChild(script);
  })();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();