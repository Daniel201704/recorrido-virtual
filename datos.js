// Generado con editor.html — 23/11/2026, 2:51:16 p.m.
const PUNTOS = [
  {
    "id": "edificio_a",
    "nombre": "EDIFICIO A",
    "foto": "fotos/EDIFICIO A.jpeg",
    "lat": 19.585633,
    "lng": -99.284072,
    "angulo": 180,
    "descripcion": "Control Escolar, Extensión y Vinculación, Servicio Social, Titulación y laboratorios de cómputo.",
    "caminos": [
      {
        "a": "a_casco",
        "yaw": -32
      },
      {
        "a": "canchas_de_bolley",
        "yaw": 11
      },
      {
        "a": "edificio_a_planta_baja",
        "yaw": -77
      }
    ]
  },
  {
    "id": "a_casco",
    "nombre": "A – CASCO",
    "foto": "fotos/A - CASCO.jpeg",
    "lat": 19.585804,
    "lng": -99.283903,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "casco",
        "yaw": -18
      },
      {
        "a": "edificio_a",
        "yaw": 42
      }
    ]
  },
  {
    "id": "casco",
    "nombre": "CASCO",
    "foto": "fotos/CASCO.jpeg",
    "lat": 19.585718,
    "lng": -99.283715,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "casco_b",
        "yaw": 11
      },
      {
        "a": "a_casco",
        "yaw": 55
      }
    ]
  },
  {
    "id": "casco_b",
    "nombre": "CASCO – B",
    "foto": "fotos/CASCO - B.jpeg",
    "lat": 19.585602,
    "lng": -99.283614,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "edificio_b",
        "yaw": -69
      },
      {
        "a": "canchas_de_bolley",
        "yaw": 10
      },
      {
        "a": "camino_a_canchas_de_bolley",
        "yaw": -29
      },
      {
        "a": "casco",
        "yaw": 55
      }
    ]
  },
  {
    "id": "edificio_b",
    "nombre": "EDIFICIO B",
    "foto": "fotos/EDIFICIO B.jpeg",
    "lat": 19.585779,
    "lng": -99.283249,
    "angulo": 180,
    "descripcion": "Papelería.",
    "caminos": [
      {
        "a": "b_c",
        "yaw": 9
      },
      {
        "a": "casco_b",
        "yaw": 49
      }
    ]
  },
  {
    "id": "b_c",
    "nombre": "B – C",
    "foto": "fotos/B - C.jpeg",
    "lat": 19.585658,
    "lng": -99.28319,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "edificio_c",
        "yaw": -2
      },
      {
        "a": "edificio_b",
        "yaw": -68
      }
    ]
  },
  {
    "id": "edificio_c",
    "nombre": "EDIFICIO C",
    "foto": "fotos/EDIFICIO C.jpeg",
    "lat": 19.585483,
    "lng": -99.283056,
    "angulo": 180,
    "descripcion": "Difusión Cultural.",
    "caminos": [
      {
        "a": "c_d",
        "yaw": 8
      },
      {
        "a": "b_c",
        "yaw": 54
      }
    ]
  },
  {
    "id": "c_d",
    "nombre": "C – D",
    "foto": "fotos/C - D.jpeg",
    "lat": 19.58538,
    "lng": -99.283085,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "edificio_d",
        "yaw": -65
      },
      {
        "a": "e_zona_verde",
        "yaw": -15
      },
      {
        "a": "edificio_c",
        "yaw": 47
      }
    ]
  },
  {
    "id": "edificio_d",
    "nombre": "EDIFICIO D",
    "foto": "fotos/EDIFICIO D.jpeg",
    "lat": 19.585243,
    "lng": -99.28297,
    "angulo": 180,
    "descripcion": "Laboratorio Digital de Idiomas y Aula Digital.",
    "caminos": [
      {
        "a": "edificio_e",
        "yaw": -44
      },
      {
        "a": "d_incubadora",
        "yaw": 63
      },
      {
        "a": "c_d",
        "yaw": 8
      }
    ]
  },
  {
    "id": "edificio_e",
    "nombre": "EDIFICIO E",
    "foto": "fotos/EDIFICIO E.jpeg",
    "lat": 19.585114,
    "lng": -99.283136,
    "angulo": 180,
    "descripcion": "Laboratorio de Arquitectura de Computadoras y Sala de Audiencias.",
    "caminos": [
      {
        "a": "edificio_d",
        "yaw": 11
      },
      {
        "a": "e_zona_verde",
        "yaw": -46
      }
    ]
  },
  {
    "id": "d_incubadora",
    "nombre": "D – INCUBADORA",
    "foto": "fotos/D - INCUBADORA.jpeg",
    "lat": 19.585344,
    "lng": -99.282809,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "incubadora_de_empresas",
        "yaw": -64
      },
      {
        "a": "edificio_d",
        "yaw": -11
      }
    ]
  },
  {
    "id": "incubadora_de_empresas",
    "nombre": "INCUBADORA DE EMPRESAS",
    "foto": "fotos/INCUBADORA DE EMPRESAS.jpeg",
    "lat": 19.585301,
    "lng": -99.282736,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "edificio_f",
        "yaw": -22
      },
      {
        "a": "d_incubadora",
        "yaw": 20
      }
    ]
  },
  {
    "id": "edificio_f",
    "nombre": "EDIFICIO F",
    "foto": "fotos/EDIFICIO F.jpeg",
    "lat": 19.585039,
    "lng": -99.282541,
    "angulo": 180,
    "descripcion": "Laboratorio de Inteligencia Artificial (IA).",
    "caminos": [
      {
        "a": "incubadora_de_empresas",
        "yaw": 39
      }
    ]
  },
  {
    "id": "e_zona_verde",
    "nombre": "E – ZONA VERDE",
    "foto": "fotos/E - ZONA VERDE.jpeg",
    "lat": 19.585296,
    "lng": -99.283343,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "edificio_e",
        "yaw": -68
      },
      {
        "a": "c_d",
        "yaw": 58
      },
      {
        "a": "camino_a_canchas_de_bolley",
        "yaw": 1
      }
    ]
  },
  {
    "id": "camino_a_canchas_de_bolley",
    "nombre": "CAMINO A CANCHAS DE VOLEIBOL",
    "foto": "fotos/CAMINO A CANCHAS DE BOLLEY.jpeg",
    "lat": 19.585362,
    "lng": -99.283555,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "e_zona_verde",
        "yaw": 14
      },
      {
        "a": "canchas_de_bolley",
        "yaw": 77
      },
      {
        "a": "camino_a_auditorio",
        "yaw": 55
      },
      {
        "a": "casco_b",
        "yaw": -70
      }
    ]
  },
  {
    "id": "canchas_de_bolley",
    "nombre": "CANCHAS DE VOLEIBOL",
    "foto": "fotos/CANCHAS DE BOLLEY.jpeg",
    "lat": 19.5854,
    "lng": -99.283893,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "edificio_a",
        "yaw": -1
      },
      {
        "a": "camino_a_auditorio",
        "yaw": -67
      },
      {
        "a": "camino_a_canchas_de_bolley",
        "yaw": 49
      },
      {
        "a": "casco_b",
        "yaw": 28
      }
    ]
  },
  {
    "id": "camino_a_auditorio",
    "nombre": "CAMINO A AUDITORIO",
    "foto": "fotos/CAMINO A AUDITORIO.jpeg",
    "lat": 19.585269,
    "lng": -99.283828,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "auditorio",
        "yaw": 35
      },
      {
        "a": "camino_a_canchas_de_bolley",
        "yaw": -45
      },
      {
        "a": "canchas_de_bolley",
        "yaw": -78
      }
    ]
  },
  {
    "id": "auditorio",
    "nombre": "AUDITORIO",
    "foto": "fotos/AUDITORIO.jpeg",
    "lat": 19.584978,
    "lng": -99.284196,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "camino_a_biblioteca",
        "yaw": -70
      },
      {
        "a": "camino_a_auditorio",
        "yaw": 8
      }
    ]
  },
  {
    "id": "camino_a_biblioteca",
    "nombre": "CAMINO A BIBLIOTECA",
    "foto": "fotos/CAMINO A BIBLIOTECA.jpeg",
    "lat": 19.584642,
    "lng": -99.28463,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "biblioteca",
        "yaw": -70
      },
      {
        "a": "auditorio",
        "yaw": 27
      }
    ]
  },
  {
    "id": "biblioteca",
    "nombre": "BIBLIOTECA",
    "foto": "fotos/BIBLIOTECA.jpeg",
    "lat": 19.584422,
    "lng": -99.284635,
    "angulo": 180,
    "descripcion": "Sala Azul.",
    "caminos": [
      {
        "a": "camino_a_biblioteca",
        "yaw": 33
      },
      {
        "a": "biblioteca_canchas_basquet",
        "yaw": -73
      }
    ]
  },
  {
    "id": "biblioteca_canchas_basquet",
    "nombre": "BIBLIOTECA – CANCHAS DE BÁSQUET",
    "foto": "fotos/BIBLIOTECA - CANCHAS BASQUET.jpeg",
    "lat": 19.584247,
    "lng": -99.28437,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "biblioteca",
        "yaw": -3
      },
      {
        "a": "canchas_basquet",
        "yaw": -72
      }
    ]
  },
  {
    "id": "canchas_basquet",
    "nombre": "CANCHAS DE BÁSQUET",
    "foto": "fotos/CANCHAS BASQUET.jpeg",
    "lat": 19.5841,
    "lng": -99.28422,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "biblioteca_canchas_basquet",
        "yaw": 15
      },
      {
        "a": "canchas_basquet_2",
        "yaw": -68
      }
    ]
  },
  {
    "id": "canchas_basquet_2",
    "nombre": "CANCHAS DE BÁSQUET 2",
    "foto": "fotos/CANCHAS BASQUET 2.jpeg",
    "lat": 19.583943,
    "lng": -99.284011,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "canchas_basquet",
        "yaw": 13
      },
      {
        "a": "cancha_basquet_3",
        "yaw": -69
      }
    ]
  },
  {
    "id": "cancha_basquet_3",
    "nombre": "CANCHA DE BÁSQUET 3",
    "foto": "fotos/CANCHA BASQUET 3.jpeg",
    "lat": 19.583696,
    "lng": -99.283742,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "canchas_basquet_2",
        "yaw": 12
      },
      {
        "a": "cancha_fut_1",
        "yaw": -68
      }
    ]
  },
  {
    "id": "cancha_fut_1",
    "nombre": "CANCHA DE FUTBOL 1",
    "foto": "fotos/CANCHA FUT 1.jpeg",
    "lat": 19.583534,
    "lng": -99.283597,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "cancha_basquet_3",
        "yaw": 14
      },
      {
        "a": "vestidores_de_deportes",
        "yaw": -67
      }
    ]
  },
  {
    "id": "vestidores_de_deportes",
    "nombre": "VESTIDORES DE DEPORTES",
    "foto": "fotos/VESTIDORES DE DEPORTES.jpeg",
    "lat": 19.583271,
    "lng": -99.283292,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "cancha_fut_1",
        "yaw": 11
      },
      {
        "a": "camino_a_campo_de_americano",
        "yaw": -57
      }
    ]
  },
  {
    "id": "camino_a_campo_de_americano",
    "nombre": "CAMINO A CAMPO DE AMERICANO",
    "foto": "fotos/CAMINO A CAMPO DE AMERICANO.jpeg",
    "lat": 19.583074,
    "lng": -99.283141,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "vestidores_de_deportes",
        "yaw": -74
      },
      {
        "a": "camino_a_americano",
        "yaw": -31
      }
    ]
  },
  {
    "id": "camino_a_americano",
    "nombre": "CAMINO A AMERICANO",
    "foto": "fotos/CAMINO A AMERICANO.jpeg",
    "lat": 19.583008,
    "lng": -99.282535,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "camino_a_campo_de_americano",
        "yaw": 16
      },
      {
        "a": "campo_americano",
        "yaw": -69
      }
    ]
  },
  {
    "id": "campo_americano",
    "nombre": "CAMPO AMERICANO",
    "foto": "fotos/CAMPO AMERICANO.jpeg",
    "lat": 19.582806,
    "lng": -99.281543,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "camino_a_americano",
        "yaw": 9
      }
    ]
  },
  {
    "id": "edificio_a_planta_baja",
    "nombre": "EDIFICIO A, PLANTA BAJA",
    "foto": "fotos/EDIFICIO A, PLANTA BAJA.jpeg",
    "lat": 19.585667,
    "lng": -99.284228,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "edificio_a_planta_alta",
        "yaw": -71
      },
      {
        "a": "edificio_a",
        "yaw": 12
      }
    ]
  },
  {
    "id": "edificio_a_planta_alta",
    "nombre": "EDIFICIO A, PLANTA ALTA",
    "foto": "fotos/EDIFICIO A, PLANTA ALTA.jpeg",
    "lat": 19.585773,
    "lng": -99.284051,
    "angulo": 180,
    "descripcion": "",
    "caminos": [
      {
        "a": "edificio_a_planta_baja",
        "yaw": 8
      }
    ]
  }
];

const PROFESORES = [];
