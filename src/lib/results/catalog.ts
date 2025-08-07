import type { Catalog } from "../quiz/scoring";

// Diccionario completo provisto por el usuario
export const defaultCatalog: Catalog = {
  ENTJ: {
    EI: {
      libros: [
        { titulo: "Fahrenheit 451", anio: 1953 },
        { titulo: "1984", anio: 1949 },
        { titulo: "El cuento de la criada", anio: 1985 }
      ],
      texto: "Como ENTJ sociable y orientado a grandes cambios, te gusta enfrentarte a sociedades que necesitan despertar. Tu libro ideal es {titulo}: te hará liderar revoluciones desde tu sillón."
    },
    SN: {
      libros: [
        { titulo: "Fundación", anio: 1951 },
        { titulo: "La mano izquierda en la oscuridad", anio: 1969 },
        { titulo: "La Quinta Estación", anio: 2015 }
      ],
      texto: "Tu mente estratégica disfruta de la ciencia‑ficción dura. Con {titulo} podrás ver cómo la lógica y la planificación cambian imperios."
    },
    TF: {
      libros: [
        { titulo: "El cuento de la criada", anio: 1985 },
        { titulo: "1984", anio: 1949 }
      ],
      texto: "Eres un ENTJ racional: prefieres tramas que cuestionan el poder con fría inteligencia. {titulo} alimentará tu mente ambiciosa."
    },
    JP: {
      libros: [
        { titulo: "La Quinta Estación", anio: 2015 }
      ],
      texto: "Siempre buscas cerrar los ciclos y entender sistemas complejos; {titulo} te llevará por mundos en los que el orden y el caos se enfrentan."
    }
  },
  INTJ: {
    EI: {
      libros: [
        { titulo: "El portal de los obeliscos", anio: 2016 }
      ],
      texto: "Como INTJ introvertido, disfrutas de historias profundas en las que un individuo cambia el destino del mundo. {titulo} despertará tu estratega interior."
    },
    SN: {
      libros: [
        { titulo: "Fundación e imperio", anio: 1952 },
        { titulo: "La Segunda Fundación", anio: 1953 }
      ],
      texto: "Tienes predilección por universos estructurados y leyes científicas. {titulo} te sumergirá en planes que sólo una mente brillante sabría ejecutar."
    },
    TF: {
      libros: [
        { titulo: "Escuadrón", anio: 2018 }
      ],
      texto: "Aunque racional, no renuncias a la épica. {titulo} mezcla tecnología y emoción de forma perfecta para ti."
    },
    JP: {
      libros: [
        { titulo: "El cielo de piedra", anio: 2017 }
      ],
      texto: "Las finales cerradas y satisfactorias te fascinan. {titulo} ofrece la conclusión que todo planificador merece."
    }
  },
  ESTJ: {
    EI: {
      libros: [
        { titulo: "Diez negritos", anio: 1939 },
        { titulo: "Asesinato en el Expreso Oriente", anio: 1934 }
      ],
      texto: "Eres un ESTJ sociable y directo: te encantan los misterios donde todos son sospechosos. {titulo} será tu nueva reunión de comunidad… ¡con cadáver incluido!"
    },
    SN: {
      libros: [
        { titulo: "Cianuro Espumoso", anio: 1945 },
        { titulo: "La pareja de al lado", anio: 2016 }
      ],
      texto: "Los detalles y la coherencia te atrapan. {titulo} te ofrece un crimen perfectamente armado que podrás resolver con tu orden natural."
    },
    TF: {
      libros: [
        { titulo: "El psicoanalista", anio: 2002 }
      ],
      texto: "La lógica es tu guía. En {titulo} descubrirás un juego mental donde la estrategia lo es todo."
    },
    JP: {
      libros: [
        { titulo: "Los hombres que no amaban a las mujeres", anio: 2005 }
      ],
      texto: "Te gustan historias claras con justicia contundente. {titulo} hace caer el peso de la ley sobre quienes lo merecen, como a ti te gusta."
    }
  },
  ISTJ: {
    EI: {
      libros: [
        { titulo: "Voces de Chernóbil", anio: 1997 }
      ],
      texto: "Eres introspectivo y responsable: prefieres relatos reales que conmuevan desde el silencio. {titulo} recoge voces que resuenan con tu profundidad."
    },
    SN: {
      libros: [
        { titulo: "Salisbury", anio: 2020 },
        { titulo: "Fundación", anio: 1951 }
      ],
      texto: "Las estructuras claras y la precisión te fascinan. {titulo} reconstruye hechos con orden y paciencia, ideal para ti."
    },
    TF: {
      libros: [
        { titulo: "Crimen y Castigo", anio: 1866 }
      ],
      texto: "La moralidad y las consecuencias te interesan. {titulo} te pondrá frente a dilemas que tu mente analítica sabrá valorar."
    },
    JP: {
      libros: [
        { titulo: "La guerra no tiene rostro de mujer", anio: 1985 }
      ],
      texto: "Disfrutas de narrativas disciplinadas y documentadas. Con {titulo} sentirás el peso de la historia narrada con rigor."
    }
  },
  ESFJ: {
    EI: {
      libros: [
        { titulo: "El tiempo entre costuras", anio: 2009 }
      ],
      texto: "Eres un anfitrión nato: disfrutas de novelas donde las relaciones sociales son protagonistas. {titulo} te hará sentir en el centro de las miradas."
    },
    SN: {
      libros: [
        { titulo: "Emma", anio: 1815 },
        { titulo: "Orgullo y Prejuicio", anio: 1813 }
      ],
      texto: "Los clásicos de época te encantan. {titulo} combina drama familiar y costumbres sociales como ningún otro."
    },
    TF: {
      libros: [
        { titulo: "Sensatez y sentimiento", anio: 1811 },
        { titulo: "Jane Eyre", anio: 1847 }
      ],
      texto: "Te dejas llevar por el corazón. {titulo} está lleno de sentimientos, ideales y romances que te harán suspirar."
    },
    JP: {
      libros: [
        { titulo: "Ana de las Tejas Verdes", anio: 1908 }
      ],
      texto: "Las sagas familiares y las historias de crecimiento te atrapan. {titulo} te acompañará con dulzura y estructura a partes iguales."
    }
  },
  ISFJ: {
    EI: {
      libros: [
        { titulo: "La señora Dalloway", anio: 1925 }
      ],
      texto: "Eres sensible y observador, disfrutas de pasear por la mente de otros. {titulo} te permitirá acompañar silenciosamente a sus personajes."
    },
    SN: {
      libros: [
        { titulo: "Persépolis", anio: 2000 },
        { titulo: "Hierba", anio: 2017 }
      ],
      texto: "Aprecias los relatos históricos y biográficos. {titulo} refleja vidas reales con un toque humano que adorarás."
    },
    TF: {
      libros: [
        { titulo: "La última Niebla", anio: 1934 }
      ],
      texto: "Te conmueven las historias íntimas y melancólicas. {titulo} te envolverá en su atmósfera nebulosa y lírica."
    },
    JP: {
      libros: [
        { titulo: "Pollo con ciruelas", anio: 2004 },
        { titulo: "El buzón de las impuras", anio: 2021 }
      ],
      texto: "Eres ordenado y protector. {titulo} habla de tradiciones y familia con el cariño y estructura que valoras."
    }
  },
  ESTP: {
    EI: {
      libros: [
        { titulo: "Los hombres que no amaban a las mujeres", anio: 2005 },
        { titulo: "La pareja de al lado", anio: 2016 }
      ],
      texto: "Amas la acción y las sorpresas. {titulo} ofrece giros, conspiraciones y adrenalina para mantenerte al borde del asiento."
    },
    SN: {
      libros: [
        { titulo: "El silencio de los malditos", anio: 2020 },
        { titulo: "Monster", anio: 1994 }
      ],
      texto: "Los thrillers realistas te mantienen atento. {titulo} presenta crímenes oscuros con pistas que te encantarán descifrar."
    },
    TF: {
      libros: [
        { titulo: "Drácula/cuentos macabros", anio: 1897 },
        { titulo: "Uzumaki/Macabros", anio: 1998 },
        { titulo: "Cuentos de amor, locura y muerte", anio: 1917 },
        { titulo: "Kaiki. Cuentos de terror y locura", anio: 2000 },
        { titulo: "El Monje", anio: 1796 }
      ],
      texto: "Buscas emociones fuertes y oscuras. {titulo} mezcla horror y locura para que explores tus límites."
    },
    JP: {
      libros: [
        { titulo: "En el bosque, bajo los cerezos en flor", anio: 1950 }
      ],
      texto: "Eres espontáneo: disfrutas de narraciones excéntricas y violentas. Con {titulo} sentirás que nada está escrito de antemano."
    }
  },
  ISTP: {
    EI: {
      libros: [
        { titulo: "Muerte en el Nilo", anio: 1937 }
      ],
      texto: "Prefieres los enigmas en silencio. En {titulo} podrás analizar pistas y resolver misterios a tu ritmo."
    },
    SN: {
      libros: [
        { titulo: "El silencio en la ciudad blanca", anio: 2016 }
      ],
      texto: "Te atraen historias actuales con mucha investigación. {titulo} es un thriller en el que tu mente lógica encontrará todo lo necesario."
    },
    TF: {
      libros: [
        { titulo: "Frankenstein", anio: 1818 }
      ],
      texto: "El conflicto entre ciencia y ética te interesa. {titulo} te hará pensar en el precio de crear vida."
    },
    JP: {
      libros: [
        { titulo: "La Sombra del viento", anio: 2001 },
        { titulo: "El juego del Ángel", anio: 2008 },
        { titulo: "El prisionero del cielo", anio: 2011 }
      ],
      texto: "Las series misteriosas te fascinan. {titulo} te llevará por caminos oscuros llenos de secretos y sorpresas."
    }
  },
  ESFP: {
    EI: {
      libros: [
        { titulo: "Mort", anio: 1987 }
      ],
      texto: "Eres divertido y sociable; te encantarán aventuras extravagantes como {titulo}, donde incluso la Muerte tiene sentido del humor."
    },
    SN: {
      libros: [
        { titulo: "La guía del autoestopista galáctico", anio: 1979 }
      ],
      texto: "Disfrutas de lo absurdo y de los viajes intergalácticos. {titulo} te llevará a los confines del universo con risas aseguradas."
    },
    TF: {
      libros: [
        { titulo: "Buenos presagios", anio: 1990 }
      ],
      texto: "El equilibrio entre lo sentimental y lo cómico te seduce. {titulo} combina profecías, ángeles y demonios en un cóctel perfecto."
    },
    JP: {
      libros: [
        { titulo: "El restaurante del fin del mundo", anio: 1980 },
        { titulo: "La vida, el universo y todo lo demás", anio: 1982 }
      ],
      texto: "Amas el caos creativo. {titulo} es una fiesta literaria que desafía el orden y se disfruta sin plan alguno."
    }
  },
  ISFP: {
    EI: {
      libros: [
        { titulo: "Tengo miedo torero", anio: 2001 }
      ],
      texto: "Eres romántico y callado. {titulo} cuenta una historia de amor imposible que resonará con tu corazón rebelde."
    },
    SN: {
      libros: [
        { titulo: "Hierba", anio: 2017 },
        { titulo: "Bluebells", anio: 2024 }
      ],
      texto: "Te atraen relatos sobre épocas y lugares lejanos. {titulo} te permitirá pasear por paisajes delicados y emotivos."
    },
    TF: {
      libros: [
        { titulo: "El jardín Secreto", anio: 1911 }
      ],
      texto: "La belleza y la inocencia te conmueven. {titulo} te devolverá a la niñez con una sensibilidad encantadora."
    },
    JP: {
      libros: [
        { titulo: "La última Niebla", anio: 1934 }
      ],
      texto: "Prefieres mundos oníricos y poéticos. {titulo} te sumergirá en un sueño nebuloso donde las reglas se diluyen."
    }
  },
  ENTP: {
    EI: {
      libros: [
        { titulo: "American Gods", anio: 2001 }
      ],
      texto: "Eres ingenioso y extrovertido: disfrutas de mezclar mitologías y realidades. {titulo} te llevará por carreteras insospechadas junto a dioses modernos."
    },
    SN: {
      libros: [
        { titulo: "La Tierra Errante", anio: 2008 }
      ],
      texto: "Te gustan las ideas grandiosas. {titulo} explora futuros colosales y te invita a pensar en el destino de la humanidad."
    },
    TF: {
      libros: [
        { titulo: "Rayuela", anio: 1963 }
      ],
      texto: "Valoras las historias experimentales. {titulo} es un libro–juego que te obligará a decidir cómo se lee."
    },
    JP: {
      libros: [
        { titulo: "El Ciclo onírico de Randolph Carter", anio: 1995 },
        { titulo: "El hombre en el castillo", anio: 1962 }
      ],
      texto: "Amas la irreverencia y el surrealismo. {titulo} te transportará a mundos oníricos y realidades alternativas que desafían tu percepción."
    }
  },
  INTP: {
    EI: {
      libros: [
        { titulo: "Crónicas Marcianas", anio: 1950 }
      ],
      texto: "Eres observador y curioso: viaja por el cosmos interior con {titulo}, una colección de relatos que te harán reflexionar."
    },
    SN: {
      libros: [
        { titulo: "El nombre de la rosa", anio: 1980 }
      ],
      texto: "Te encantan los enigmas históricos. {titulo} pone a prueba tu mente con un misterio medieval lleno de simbolismo."
    },
    TF: {
      libros: [
        { titulo: "22/11/63", anio: 2011 }
      ],
      texto: "Disfrutas de la ciencia y los dilemas temporales. {titulo} te llevará a una misión en el tiempo con consecuencias filosóficas."
    },
    JP: {
      libros: [
        { titulo: "El portal de los obeliscos", anio: 2016 }
      ],
      texto: "Buscas estructuras inusuales. {titulo} es una fantasía dura que convierte la ciencia en poesía épica."
    }
  },
  ENFJ: {
    EI: {
      libros: [
        { titulo: "El nombre del viento", anio: 2007 }
      ],
      texto: "Eres carismático y generoso. {titulo} presenta a un héroe cuya historia te atrapará y te hará soñar con compartir canciones."
    },
    SN: {
      libros: [
        { titulo: "La historia interminable", anio: 1979 }
      ],
      texto: "Amas los mundos infinitos donde la amistad lo puede todo. {titulo} es un viaje a un reino donde la imaginación no tiene límites."
    },
    TF: {
      libros: [
        { titulo: "El jardín Secreto", anio: 1911 }
      ],
      texto: "Te conmueven los cuentos de crecimiento y ternura. {titulo} te recordará que la infancia y la naturaleza son refugios del alma."
    },
    JP: {
      libros: [
        { titulo: "Buenos presagios", anio: 1990 }
      ],
      texto: "Disfrutas de la espontaneidad y del humor apocalíptico. {titulo} te divertirá con profecías, ángeles y demonios que no se toman nada en serio."
    }
  },
  INFJ: {
    EI: {
      libros: [
        { titulo: "El cuento de la criada", anio: 1985 }
      ],
      texto: "Eres introspectivo y visionario. {titulo} narra una distopía que resonará con tu sentido de justicia y tu empatía."
    },
    SN: {
      libros: [
        { titulo: "Un mago de Terramar", anio: 1968 },
        { titulo: "La vida invisible de Addie LaRue", anio: 2020 }
      ],
      texto: "Tu imaginación y tu compasión te llevan a mundos de fantasía. {titulo} mezcla magia y soledad de manera sublime."
    },
    TF: {
      libros: [
        { titulo: "La ladrona de libros", anio: 2005 }
      ],
      texto: "Te conmueven las historias sobre memoria y sacrificio. {titulo} te hará llorar y pensar en la importancia de las palabras."
    },
    JP: {
      libros: [
        { titulo: "La Vegetariana", anio: 2007 }
      ],
      texto: "Buscas libros que rompan estructuras. {titulo} explora la identidad y la opresión con una prosa perturbadora."
    }
  },
  ENFP: {
    EI: {
      libros: [
        { titulo: "El hobbit", anio: 1937 }
      ],
      texto: "Eres entusiasta y aventurero. {titulo} es un viaje iniciático lleno de criaturas y humor que te hará vibrar."
    },
    SN: {
      libros: [
        { titulo: "Las tumbas de Atuan", anio: 1971 },
        { titulo: "La costa más lejana/Tehanu", anio: 1972 }
      ],
      texto: "Tu imaginación arde sin límites. {titulo} te transporta a islas perdidas, laberintos y magia ancestral."
    },
    TF: {
      libros: [
        { titulo: "Buenos presagios", anio: 1990 }
      ],
      texto: "Te encanta mezclar lo ridículo con lo entrañable. {titulo} juega con ángeles, demonios y profecías para que rías y reflexiones."
    },
    JP: {
      libros: [
        { titulo: "Mort", anio: 1987 },
        { titulo: "La guía del autoestopista galáctico", anio: 1979 }
      ],
      texto: "Eres espontáneo y creativo. {titulo} te llevará de viaje con guías galácticos y conversaciones absurdas que te harán feliz."
    }
  },
  INFP: {
    EI: {
      libros: [
        { titulo: "El nombre del viento", anio: 2007 }
      ],
      texto: "Eres un soñador silencioso. {titulo} narra la vida de un héroe sensible que busca su lugar en el mundo, igual que tú."
    },
    SN: {
      libros: [
        { titulo: "Un mago de Terramar", anio: 1968 },
        { titulo: "Las tumbas de Atuan", anio: 1971 },
        { titulo: "La historia interminable", anio: 1979 }
      ],
      texto: "Te dejas llevar por sagas mágicas y paisajes literarios. {titulo} te hará volar entre dragones, hechiceros y secretos antiguos."
    },
    TF: {
      libros: [
        { titulo: "Las cosas que perdimos en el fuego", anio: 2016 }
      ],
      texto: "Adoras las historias de amistad y esperanza. {titulo} mezcla aventura y lirismo con un mensaje que tocará tu corazón."
    },
    JP: {
      libros: [
        { titulo: "La vida invisible de Addie LaRue", anio: 2020 },
        { titulo: "La Vegetariana", anio: 2007 }
      ],
      texto: "Tu alma creativa no teme la oscuridad. {titulo} combina lo onírico y lo perturbador para que explores emociones profundas."
    }
  }
};
