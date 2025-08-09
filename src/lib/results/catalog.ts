import type { Catalog, MBTIType } from "../quiz/scoring";

/*
 * Este archivo contiene la versión ampliada del catálogo de recomendaciones.
 * Además de conservar el nombre del libro y el año de publicación, cada entrada
 * incluye ahora una sinopsis y un dato curioso sobre el autor o el contexto
 * de la obra. La propiedad `texto` en cada subtipo de MBTI sigue sirviendo
 * como nexo entre la personalidad del usuario y el libro recomendado.
 */

export const MBTI_TYPES: MBTIType[] = [
  "ISTJ","ISFJ","INFJ","INTJ",
  "ISTP","ISFP","INFP","INTP",
  "ESTP","ESFP","ENFP","ENTP",
  "ESTJ","ESFJ","ENFJ","ENTJ",
];

export const defaultCatalog: Catalog = {
  ENTJ: {
    EI: {
      libros: [
        {
          titulo: "Fahrenheit 451",
          anio: 1953,
          sinopsis: "En un futuro distópico donde los libros están prohibidos, Guy Montag trabaja como bombero encargado de quemarlos. Su encuentro con una joven inconformista despierta su curiosidad y lo lleva a cuestionar la sociedad y a leer en secreto, convirtiéndose en fugitivo para preservar el conocimiento.",
          datoCurioso: "Ray Bradbury escribió la novela en solo nueve días usando máquinas de escribir de alquiler en el sótano de la Biblioteca Powell; la obra se inspiró en la censura y la quema de libros."
        },
        {
          titulo: "1984",
          anio: 1949,
          sinopsis: "Esta novela relata la vida de Winston Smith en una sociedad totalitaria vigilada por el Gran Hermano. El Partido controla la información y el pensamiento mediante la neolengua y la vigilancia constante, mientras Winston se atreve a escribir un diario y a amar libremente, despertando su conciencia y rebelión.",
          datoCurioso: "George Orwell escribió 1984 mientras convalecía en la isla escocesa de Jura; el título original era ‘The Last Man in Europe’ y la novela popularizó términos como ‘Gran Hermano’ y ‘neolengua’."
        },
        {
          titulo: "El cuento de la criada",
          anio: 1985,
          sinopsis: "Ambientada en la teocracia totalitaria de Gilead, donde las mujeres fértiles son forzadas a servir como criadas, la narradora Offred cuenta su experiencia de opresión y su lucha por la libertad mientras recuerda su vida anterior y sueña con escapar.",
          datoCurioso: "Margaret Atwood se basó en regímenes reales para crear Gilead; escribió la novela en 1984 en Berlín Occidental, afirmando que no incluyó ningún evento que no hubiera sucedido en la historia."
        }
      ],
      texto: "Como un ENTJ sociable y orientado a los grandes cambios, posees una mezcla de carisma, estrategia y determinación que inspira a quienes te rodean. Te intriga cuestionar la autoridad y planificar revoluciones justas, y disfrutas cuando una historia refleja tu inclinación a transformar el mundo. Por eso {titulo} es tu aliado perfecto: la trama expone sociedades dormidas y te invita a liderar la chispa del cambio desde tu sillón, alimentando tu espíritu inconformista en cada página y recordándote tu vocación de líder visionario."
    },
    SN: {
      libros: [
        {
          titulo: "Fundación",
          anio: 1951,
          sinopsis: "Primera entrega de la saga de Isaac Asimov donde Hari Seldon, matemático del Imperio Galáctico, desarrolla la psicohistoria, una ciencia capaz de prever el futuro colectivo. Para reducir los años de barbarie que seguirán a la caída del imperio, crea la Fundación, una colonia de científicos que recopilan y preservan el conocimiento.",
          datoCurioso: "Asimov se inspiró en ‘La historia de la decadencia y caída del Imperio romano’ de Gibbon para estructurar la saga; la trilogía original ganó el premio Hugo a la mejor serie de ciencia ficción de todos los tiempos en 1966."
        },
        {
          titulo: "La mano izquierda en la oscuridad",
          anio: 1969,
          sinopsis: "La novela sigue al enviado Genly Ai en el planeta invernal de Gueden, cuyos habitantes son andróginos y adoptan género solo durante breves periodos. Genly debe negociar la entrada de Gueden en una alianza interplanetaria, aprendiendo sobre la cultura y forjando una amistad con el político Estraven.",
          datoCurioso: "Ursula K. Le Guin empleó temas de antropología y feminismo; la obra ganó los premios Hugo y Nebula en 1970 y es considerada un hito en la ciencia ficción literaria."
        },
        {
          titulo: "La Quinta Estación",
          anio: 2015,
          sinopsis: "En un mundo asolado por cataclismos, la Tierra ha sido dividida en “quintas estaciones” de caos. Una orogén llamada Essun intenta rescatar a su hija mientras se desatan terremotos y erupciones volcánicas, y se revelan conspiraciones sobre el origen del poder de los orogénes.",
          datoCurioso: "N. K. Jemisin se convirtió en la primera autora en ganar tres premios Hugo consecutivos con cada volumen de la trilogía ‘La Tierra Fragmentada’."
        }
      ],
      texto: "Bajo tu perfil ENTJ, tu mente estratégica no descansa: analizas patrones, observas tendencias y disfrutas trazando rutas hacia objetivos ambiciosos. Las historias de imperios en juego y ciencias ficticias robustas son un espejo de tu capacidad de planificación. Por eso {titulo} te atrapa: su mundo calculado, sus planes a largo plazo y sus dilemas sobre conocimiento y poder resonarán con tu naturaleza racional. Leerlo te hará sentir parte de una conspiración intelectual a la altura de tu genio."
    },
    TF: {
      libros: [
        {
          titulo: "El cuento de la criada",
          anio: 1985,
          sinopsis: "Ambientada en la teocracia totalitaria de Gilead, donde las mujeres fértiles son forzadas a servir como criadas, la narradora Offred cuenta su experiencia de opresión y su lucha por la libertad mientras recuerda su vida anterior y sueña con escapar.",
          datoCurioso: "Margaret Atwood se basó en regímenes reales para crear Gilead; escribió la novela en 1984 en Berlín Occidental, afirmando que no incluyó ningún evento que no hubiera sucedido en la historia."
        },
        {
          titulo: "1984",
          anio: 1949,
          sinopsis: "Esta novela relata la vida de Winston Smith en una sociedad totalitaria vigilada por el Gran Hermano. El Partido controla la información y el pensamiento mediante la neolengua y la vigilancia constante, mientras Winston se atreve a escribir un diario y a amar libremente, despertando su conciencia y rebelión.",
          datoCurioso: "George Orwell escribió 1984 mientras convalecía en la isla escocesa de Jura; el título original era ‘The Last Man in Europe’ y la novela popularizó términos como ‘Gran Hermano’ y ‘neolengua’."
        }
      ],
      texto: "Como ENTJ racional, tu brújula moral se rige por la lógica. Prefieres argumentos sólidos y tramas que desmantelan estructuras de poder con inteligencia y calculada frialdad. Tu energía competitiva se alimenta de desafíos intelectuales que pongan a prueba tu ingenio. {titulo} encaja contigo porque presenta un mundo en el que el pensamiento estratégico derrota la opresión; cada revelación satisfará tu espíritu competitivo y tu deseo de dominar situaciones complejas con claridad y decisión."
    },
    JP: {
      libros: [
        {
          titulo: "La Quinta Estación",
          anio: 2015,
          sinopsis: "En un mundo asolado por cataclismos, la Tierra ha sido dividida en “quintas estaciones” de caos. Una orogén llamada Essun intenta rescatar a su hija mientras se desatan terremotos y erupciones volcánicas, y se revelan conspiraciones sobre el origen del poder de los orogénes.",
          datoCurioso: "N. K. Jemisin se convirtió en la primera autora en ganar tres premios Hugo consecutivos con cada volumen de la trilogía ‘La Tierra Fragmentada’."
        }
      ],
      texto: "Tu naturaleza ENTJ organizada anhela cerrar ciclos y comprender sistemas completos. Te apasiona descubrir cómo se ordenan los procesos complejos y no descansas hasta ver concluido un plan. Cuando te sumerges en narrativas que equilibran caos y orden, sientes que podrías gobernar esos mundos. {titulo} te encantará porque narra un conflicto de magnitud épica donde entender las reglas y completar un ciclo es crucial. Te verás reflejado en personajes que toman las riendas para restaurar el equilibrio."
    }
  },
  INTJ: {
    EI: {
      libros: [
        {
          titulo: "El portal de los obeliscos",
          anio: 2016,
          sinopsis: "Segundo libro de la trilogía ‘La Tierra Fragmentada’, continúa la historia de Essun y su hija Nassun en un mundo destruido. Mientras Essun aprende a controlar antiguos obeliscos para detener la Quinta Estación, Nassun desarrolla sus propios poderes en una comunidad peligrosa.",
          datoCurioso: "La novela ganó el premio Hugo 2017; N. K. Jemisin amplía su exploración de opresión y resiliencia, combinando fantasía y ciencia ficción."
        }
      ],
      texto: "Aunque eres un INTJ que disfruta de su mundo interior, tu mente no se conforma con la teoría. Posees una combinación de introspección y ambición que te lleva a contemplar soluciones grandiosas y a mover hilos desde la sombra. {titulo} te conquista porque sigue a personajes que, desde la tranquilidad de su reflexión, influyen en acontecimientos globales. Sus intrigas, secretos y descubrimientos científicos harán vibrar tu intelecto y te inspirarán a ser el arquitecto de tu propio destino."
    },
    SN: {
      libros: [
        {
          titulo: "Fundación e imperio",
          anio: 1952,
          sinopsis: "Continuación de la saga ‘Fundación’, este volumen narra la expansión y desafíos de la Fundación ante el surgimiento del general Bel Riose y la aparición del Mulo, un mutante capaz de alterar emociones que amenaza el plan de Hari Seldon.",
          datoCurioso: "El personaje del Mulo fue inspirado en figuras carismáticas capaces de alterar el curso de la historia; Asimov reeditó la serie años después para unirla con sus novelas de robots."
        },
        {
          titulo: "La Segunda Fundación",
          anio: 1953,
          sinopsis: "Tercer libro de la trilogía original, relata la búsqueda de la mítica Segunda Fundación, guardiana secreta del Plan Seldon, mientras el Mulo intenta encontrarla y controlar la galaxia, y los primeros colonos luchan por su autonomía.",
          datoCurioso: "Asimov concibió la Segunda Fundación como un grupo de mentalistas psíquicos; su ubicación secreta es un enigma central de la saga."
        }
      ],
      texto: "Como INTJ con predilección por la lógica, te entusiasman universos con leyes claras y planes a escala galáctica. Disfrutas de diseccionar sistemas complejos, anticipar consecuencias y comprender la mecánica oculta tras grandes acontecimientos. {titulo} es ideal para ti porque despliega estrategias elaboradas, personajes intelectuales y tensiones históricas que requieren visión a largo plazo. Su lectura te permitirá imaginar cómo ajustarías cada variable del cosmos para alcanzar la perfección que tanto te gusta perseguir."
    },
    TF: {
      libros: [
        {
          titulo: "Escuadrón",
          anio: 2018,
          sinopsis: "Novela juvenil de Brandon Sanderson donde Spensa, una joven piloto, sueña con unirse a la fuerza de defensa humana contra misteriosos alienígenas. Luchando contra la reputación de su padre, que fue acusado de cobarde, descubre secretos sobre la guerra y sobre sí misma.",
          datoCurioso: "‘Escuadrón’ es el primer libro de la serie ‘Skyward’; Sanderson, conocido por su disciplina, escribe a un ritmo prolífico y es profesor en la universidad Brigham Young."
        }
      ],
      texto: "A pesar de tu inclinación intelectual, tu corazón INTJ aprecia la emoción de una epopeya bien construida. Valoras los héroes competentes que aprenden de sus errores y alcanzan sus objetivos mediante disciplina y razonamiento. {titulo} combina tecnología avanzada, batallas aéreas y un protagonista que desafía prejuicios con determinación. Cada página estimula tu mente analítica y te permite vivir el heroísmo a través de personajes que, como tú, piensan antes de actuar pero no temen arriesgar."
    },
    JP: {
      libros: [
        {
          titulo: "El cielo de piedra",
          anio: 2017,
          sinopsis: "Conclusión de la trilogía ‘La Tierra Fragmentada’. Essun debe decidir si sacrificar su humanidad para detener la Quinta Estación de manera definitiva, mientras Nassun considera destruir el mundo para crear uno nuevo. Ambas perspectivas chocan en un final épico.",
          datoCurioso: "El libro completó la hazaña de N. K. Jemisin de ganar el premio Hugo tres años consecutivos; la autora es geóloga de formación."
        }
      ],
      texto: "Eres un perfeccionista nato y disfrutas cuando los finales se atan sin cabos sueltos. Te gusta observar cómo las piezas encajan y ver cumplidos los planes minuciosamente trazados. {titulo} te resultará adictivo porque cierra una saga épica con precisión, ofreciendo un desenlace a la altura de una mente que calcula cada posibilidad. Seguirás a personajes que deben sacrificar y decidir, igual que tú disfrutas tomando decisiones difíciles para alcanzar un objetivo mayor."
    }
  },
  ESTJ: {
    EI: {
      libros: [
        {
          titulo: "Diez negritos",
          anio: 1939,
          sinopsis: "Un grupo de diez desconocidos son invitados a una isla aislada, donde una voz acusadora revela sus crímenes pasados. Uno por uno son asesinados según la letra de una macabra canción infantil, y los supervivientes intentan descubrir al asesino antes de que sea demasiado tarde.",
          datoCurioso: "Es la novela más vendida de Agatha Christie; originalmente llevaba un título ofensivo que fue cambiado en ediciones posteriores."
        },
        {
          titulo: "Asesinato en el Expreso Oriente",
          anio: 1934,
          sinopsis: "El detective belga Hércules Poirot investiga un asesinato durante un viaje en el lujoso Orient Express cuando el tren queda atrapado por la nieve. Descubre que cada pasajero alberga un secreto y que el crimen está relacionado con un secuestro infantil ocurrido años atrás.",
          datoCurioso: "Agatha Christie se inspiró en el secuestro del bebé de Charles Lindbergh; el tren Orient Express existía y Christie viajó en él."
        }
      ],
      texto: "Como ESTJ extrovertido, valoras las reglas claras, la justicia y el orden. Disfrutas liderar grupos y encontrar soluciones concretas a problemas prácticos. Los misterios donde cada personaje tiene algo que ocultar despiertan tu instinto organizador, ya que te gusta analizar pruebas y señalar culpables. {titulo} reúne un rompecabezas perfecto con tensiones sociales y un crimen que exige lógica y disciplina, permitiéndote jugar a detective mientras te sientes en el centro de la investigación."
    },
    SN: {
      libros: [
        {
          titulo: "Cianuro Espumoso",
          anio: 1945,
          sinopsis: "En esta novela de Christie, seis invitados son convocados a una cena para conmemorar el aniversario de la muerte de Rosemary, una mujer que se suicidó tras beber una copa de champán con cianuro. Su esposo sospecha de asesinato y planea desenmascarar al culpable con otra fiesta.",
          datoCurioso: "‘Cianuro Espumoso’ se publicó originalmente en 1945 con el título ‘Remembered Death’ en los Estados Unidos."
        },
        {
          titulo: "La pareja de al lado",
          anio: 2016,
          sinopsis: "Thriller de Shari Lapena en el que un bebé desaparece de su casa mientras sus padres cenan en la casa de al lado. La investigación revela secretos oscuros en la pareja y en sus vecinos, con múltiples giros hasta el sorprendente desenlace.",
          datoCurioso: "La autora canadiense Shari Lapena trabajó como abogada antes de dedicarse a escribir; ‘La pareja de al lado’ fue su debut en el género de suspense."
        }
      ],
      texto: "Eres meticuloso y fiel a los hechos. Te atraen historias donde los detalles importan y cada pista tiene un lugar en un esquema mayor. Te motiva comprender el cómo y el porqué de un crimen, aplicando tu sentido de la estructura para reconstruir acontecimientos. {titulo} te brindará un caso bien armado, lleno de giros y pistas que podrás ordenar con tu mente práctica. Tu satisfacción vendrá de ver que la verdad sale a la luz gracias a tu perseverancia."
    },
    TF: {
      libros: [
        {
          titulo: "El psicoanalista",
          anio: 2002,
          sinopsis: "Un thriller de John Katzenbach donde el doctor Frederick Starks recibe una carta anónima que le ordena descubrir la identidad del remitente en 15 días o enfrentarse al asesinato de sus seres queridos. El juego psicológico lo obliga a desatar su ingenio y cuestionar su propia identidad.",
          datoCurioso: "Katzenbach, periodista de tribunales, se inspiró en su experiencia reportando crímenes para crear sus novelas; ‘El psicoanalista’ es uno de sus mayores éxitos."
        }
      ],
      texto: "Tomas decisiones con la cabeza fría y no soportas las incoherencias. Como ESTJ racional, disfrutas de desafíos intelectuales en los que el orden y la estrategia son cruciales para superar la adversidad. {titulo} te enganchará porque es un juego psicológico en el que el protagonista debe pensar como un ajedrecista para sobrevivir. Cada movimiento, cada deducción apelará a tu fortaleza de planificar y ejecutar con precisión, demostrando que la lógica puede ser la mejor defensa."
    },
    JP: {
      libros: [
        {
          titulo: "Los hombres que no amaban a las mujeres",
          anio: 2005,
          sinopsis: "Primera entrega de la trilogía ‘Millennium’ de Stieg Larsson. El periodista Mikael Blomkvist y la hacker Lisbeth Salander investigan la desaparición de una heredera de 40 años atrás, destapando secretos familiares, corrupción y abusos de poder en Suecia.",
          datoCurioso: "Larsson escribió los tres libros de la trilogía antes de su muerte súbita en 2004; la serie fue publicada póstumamente y se convirtió en un fenómeno global."
        }
      ],
      texto: "Tu personalidad busca justicia y claridad; no toleras las injusticias y confías en que las reglas existan para cumplirse. Te encanta ver a los culpables rendir cuentas y a las víctimas recibir reparación. {titulo} conecta contigo al ofrecer una investigación meticulosa que destapa abusos ocultos y lleva a cabo castigos ejemplares. A medida que la trama avanza, tu lado íntegro y moral encontrará satisfacción en un desenlace donde la ley triunfa sobre el crimen."
    }
  },
  ISTJ: {
    EI: {
      libros: [
        {
          titulo: "Voces de Chernóbil",
          anio: 1997,
          sinopsis: "Obra de la periodista bielorrusa Svetlana Alexiévich que recopila testimonios de los supervivientes del desastre nuclear de Chernóbil. Mediante entrevistas, presenta una polifonía de voces que revelan el sufrimiento, valentía y negligencia detrás del accidente.",
          datoCurioso: "El libro contribuyó a que Alexiévich recibiera el Premio Nobel de Literatura en 2015 por su escritura polifónica que retrata el sufrimiento en la era soviética."
        }
      ],
      texto: "Eres reservado y reflexivo, aprecias las historias que honran la verdad y el esfuerzo de personas anónimas. Tu sentido del deber y de la memoria te hace conectarte con relatos que rescatan voces olvidadas. {titulo} te llegará al alma porque reúne testimonios reales y muestra cómo la responsabilidad colectiva puede prevenir desastres. Al leerlo sentirás que tu deseo de comprender el pasado y mantener la honestidad encuentran un espacio para nutrirse y aprender."
    },
    SN: {
      libros: [
        {
          titulo: "Salisbury",
          anio: 2020,
          sinopsis: "Retrato novelado de una comunidad británica a través del tiempo; el libro revisa la historia y las vidas de los habitantes de Salisbury con un tono íntimo e histórico.",
          datoCurioso: "La ciudad de Salisbury es conocida por su catedral de aguja más alta de Gran Bretaña y por su cercanía al monumento megalítico de Stonehenge."
        },
        {
          titulo: "Fundación",
          anio: 1951,
          sinopsis: "Primera entrega de la saga de Isaac Asimov donde Hari Seldon, matemático del Imperio Galáctico, desarrolla la psicohistoria, una ciencia capaz de prever el futuro colectivo. Para reducir los años de barbarie que seguirán a la caída del imperio, crea la Fundación, una colonia de científicos que recopilan y preservan el conocimiento.",
          datoCurioso: "Asimov se inspiró en ‘La historia de la decadencia y caída del Imperio romano’ de Gibbon para estructurar la saga; la trilogía original ganó el premio Hugo a la mejor serie de ciencia ficción de todos los tiempos en 1966."
        }
      ],
      texto: "Te atraen narraciones construidas con rigor histórico y coherencia. Prefieres datos verificables, lineamientos claros y secuencias lógicas que te permitan aprender mientras disfrutas. {titulo} satisfará tu necesidad de orden, ya que detalla hechos con paciencia y ofrece un relato que avanza con la exactitud que te gusta. Su estructura bien definida te permitirá apreciar cómo cada pieza encaja en la historia más amplia y cómo la disciplina lleva a grandes logros."
    },
    TF: {
      libros: [
        {
          titulo: "Crimen y Castigo",
          anio: 1866,
          sinopsis: "La novela de Fyodor Dostoyevski sigue a Rodion Raskólnikov, un estudiante pobre en San Petersburgo que asesina a una anciana usurera. Consumido por la culpa y la paranoia, explora temas de moralidad, redención y justicia a través de sus interacciones con otros personajes.",
          datoCurioso: "Dostoyevski concibió inicialmente la obra como una novela policíaca; la escribió bajo presión económica después de haber sido exiliado a Siberia."
        }
      ],
      texto: "Tu mente analítica no rehúye de las cuestiones éticas; de hecho, encuentras significado al explorar las repercusiones de las acciones humanas. Reconoces la importancia de asumir la responsabilidad y examinar la conciencia. {titulo} es una obra que te desafiará a evaluar qué es justicia, cuáles son las consecuencias de romper reglas y si la redención es posible. Es un campo de pruebas ideal para tu necesidad de comprender la moralidad con detalle."
    },
    JP: {
      libros: [
        {
          titulo: "La guerra no tiene rostro de mujer",
          anio: 1985,
          sinopsis: "Ensayo de Svetlana Alexiévich que recopila testimonios de mujeres soviéticas que lucharon en la Segunda Guerra Mundial. Ofrece una perspectiva íntima y emotiva del conflicto desde quienes sirvieron como enfermeras, francotiradoras y pilotos.",
          datoCurioso: "Publicado en 1985, el libro provocó controversia en la URSS por mostrar la guerra desde una óptica femenina no heroica; es parte del ciclo ‘Voces de la Utopía’."
        }
      ],
      texto: "Como persona disciplinada y fiel a la realidad, valoras las historias documentadas con cuidado y respeto. Te interesa conocer puntos de vista auténticos que se suelen ignorar en relatos oficiales. {titulo} ofrece un mosaico de voces femeninas sobre la guerra, rescatando testimonios con rigor. Leerlo alimentará tu pasión por la historia bien contada y por la justicia que se logra al dar voz a quienes han sido invisibilizados."
    }
  },
  ESFJ: {
    EI: {
      libros: [
        {
          titulo: "El tiempo entre costuras",
          anio: 2009,
          sinopsis: "Novela histórica de María Dueñas que narra la vida de Sira Quiroga, una joven modista madrileña cuya vida da un giro al estallar la Guerra Civil española. Exiliada en Tánger, se convierte en una espía al servicio de los aliados, bordando trajes para mujeres cercanas al régimen franquista.",
          datoCurioso: "La novela fue un éxito de ventas en España y dio lugar a una serie de televisión protagonizada por Adriana Ugarte emitida en 2013."
        }
      ],
      texto: "Eres sociable y protector, disfrutas de cuidar a los demás y de crear ambientes cálidos. Te encantan las historias en las que las relaciones personales son el motor de la trama y en las que la protagonista usa sus talentos para ayudar a quienes ama. {titulo} combina espionaje, romance y costura; mientras lo lees sentirás que acompañas a su protagonista en un viaje lleno de glamour y sacrificios, donde tu espíritu generoso se reflejará."
    },
    SN: {
      libros: [
        {
          titulo: "Emma",
          anio: 1815,
          sinopsis: "Clásico de Jane Austen que sigue a Emma Woodhouse, una joven rica y traviesa que se deleita en hacer de casamentera en su comunidad inglesa. Sus buenas intenciones generan enredos románticos, obligándola a madurar y a reconocer sus propios sentimientos.",
          datoCurioso: "Austen declaró que Emma era un personaje que ‘a nadie más que a mí le gustará mucho’; la novela ha inspirado numerosas adaptaciones cinematográficas y modernas."
        },
        {
          titulo: "Orgullo y Prejuicio",
          anio: 1813,
          sinopsis: "Ambientada a principios del siglo XIX, la novela retrata las peripecias de las hermanas Bennet y la evolución de la relación entre Elizabeth Bennet y el orgulloso señor Darcy. A través de diálogos ingeniosos, critica las normas sociales y de clase de la época.",
          datoCurioso: "Publicada en 1813, la obra originalmente se tituló ‘First Impressions’; es uno de los libros más amados de la literatura inglesa."
        }
      ],
      texto: "Tu naturaleza amable y orientada a la comunidad te hace disfrutar de novelas de época con personajes que buscan conectar y crecer. Aprecias las sutilezas de la etiqueta y las emociones contenidas, así como la evolución de las relaciones. {titulo} es la elección perfecta: sus bailes, cartas y enredos familiares te transportarán a una sociedad donde el amor, la amistad y las segundas oportunidades son tan importantes como las normas sociales. Tu lado romántico se deleitará."
    },
    TF: {
      libros: [
        {
          titulo: "Sensatez y sentimiento",
          anio: 1811,
          sinopsis: "Novela de Jane Austen que contrasta las personalidades de las hermanas Dashwood: Elinor, racional y contenida, y Marianne, apasionada y emotiva. Tras quedar en la indigencia, ambas buscan el amor y la seguridad en una sociedad rígida.",
          datoCurioso: "Fue la primera novela publicada de Austen (1811); originalmente se atribuyó a ‘una dama’ para ocultar su autoría."
        },
        {
          titulo: "Jane Eyre",
          anio: 1847,
          sinopsis: "Es la autobiografía ficticia de Jane Eyre, una huérfana que sufre maltratos en su niñez y trabaja como institutriz en la mansión Thornfield. Allí se enamora del señor Rochester, cuya mansión guarda un secreto oscuro en el ático.",
          datoCurioso: "La autora Charlotte Bronte publicó la novela en 1847 bajo el pseudónimo ‘Currer Bell’ para evitar prejuicios de género."
        }
      ],
      texto: "Eres una persona de sentimientos profundos que cree en el poder de la bondad. Buscas historias con moralejas sobre cómo la empatía puede sanar heridas y construir comunidades fuertes. {titulo} te brindará un viaje emotivo a través de personajes que enfrentan adversidad con dignidad y amor. Cada página celebrará tus valores de lealtad y cuidado, recordándote que la fuerza de un corazón generoso puede cambiar el mundo."
    },
    JP: {
      libros: [
        {
          titulo: "Ana de las Tejas Verdes",
          anio: 1908,
          sinopsis: "Cuenta la vida de Anne Shirley, una huérfana imaginativa que es adoptada por accidente por los hermanos Cuthbert en la isla del Príncipe Eduardo. Con su imaginación y carácter vivaz, transforma la vida de quienes la rodean.",
          datoCurioso: "Escrita por L. M. Montgomery en 1908, la novela ha sido traducida a decenas de idiomas y adaptada a series de televisión y películas en varias ocasiones."
        }
      ],
      texto: "Adoras las narraciones familiares que muestran cómo el cariño y la estructura ayudan a las personas a florecer. Eres un guardián de tradiciones y disfrutas ver cómo los personajes crecen bajo la guía de figuras sabias. {titulo} relata la vida de una niña adoptada que, con imaginación y resiliencia, transforma su entorno. Te encantará seguir su evolución y ver cómo la amistad, la disciplina y el afecto pueden crear un hogar lleno de luz."
    }
  },
  ISFJ: {
    EI: {
      libros: [
        {
          titulo: "La señora Dalloway",
          anio: 1925,
          sinopsis: "La novela de Virginia Woolf sigue un día en la vida de Clarissa Dalloway, una mujer de la alta sociedad londinense que organiza una fiesta. Mientras pasea por Londres, reflexiona sobre su pasado, sus decisiones y la fugacidad del tiempo; en paralelo se narra la historia de un veterano traumatizado.",
          datoCurioso: "La obra es conocida por su uso del flujo de conciencia y por transcurrir en un solo día; Woolf se inspiró en la técnica de James Joyce en ‘Ulises’."
        }
      ],
      texto: "Tu sensibilidad y tu capacidad de escuchar te hacen apreciar historias introspectivas donde lo cotidiano adquiere profundidad. Te gusta acompañar en silencio a los personajes mientras atraviesan sus pensamientos y recuerdos. {titulo} captura un día en la vida de su protagonista con tal detalle que sentirás que caminas a su lado. Las reflexiones sobre el tiempo, la memoria y la empatía resonarán con tu naturaleza protectora y tu deseo de entender a los demás."
    },
    SN: {
      libros: [
        {
          titulo: "Persépolis",
          anio: 2000,
          sinopsis: "Novela gráfica autobiográfica de Marjane Satrapi que narra su infancia en Irán durante la Revolución Islámica y la guerra con Irak. A través de dibujos en blanco y negro, muestra su lucha por mantener su identidad y libertad en medio de la represión.",
          datoCurioso: "Satrapi dirigió la adaptación cinematográfica de ‘Persépolis’ que ganó el Premio del Jurado en Cannes 2007 y fue nominada al Oscar."
        },
        {
          titulo: "Hierba",
          anio: 2017,
          sinopsis: "Novela gráfica surcoreana de Keum Suk Gendry-Kim basada en testimonios de mujeres coreanas que fueron esclavizadas sexualmente por el ejército japonés durante la Segunda Guerra Mundial. Sigue la vida de la superviviente Lee Ok‑sun desde su infancia hasta su vejez, exponiendo la memoria y el trauma.",
          datoCurioso: "El libro ganó el Premio Harvey a la mejor obra internacional; su autora se inspiró en entrevistas reales para crear la narrativa."
        }
      ],
      texto: "Te motiva conocer las experiencias reales de personas que han vivido situaciones extremas y aprender de su resiliencia. Amas las crónicas personales que muestran eventos históricos desde una perspectiva íntima y humana. {titulo} está lleno de historias de vida que inspiran respeto y compasión; cada viñeta te recordará que pequeñas voces pueden narrar grandes historias, reforzando tu inclinación a cuidar y honrar las experiencias de otros."
    },
    TF: {
      libros: [
        {
          titulo: "La última Niebla",
          anio: 1934,
          sinopsis: "Novela corta de María Luisa Bombal que explora la vida de una mujer que se siente atrapada en un matrimonio sin amor. A través de recuerdos y fantasías, la protagonista se adentra en un mundo nebuloso donde se confunden sueño y realidad.",
          datoCurioso: "Publicada en 1934, la obra es un clásico del modernismo chileno y destaca por su atmósfera onírica y sensual."
        }
      ],
      texto: "Eres un alma sensible y disfrutas de narraciones que se adentran en el interior de sus protagonistas. Te conectan los relatos líricos, los secretos no dichos y las atmósferas que evocan emociones profundas. {titulo} te envolverá con su mezcla de realidad y sueño, explorando temas de deseo y soledad. Tu empatía se identificará con la protagonista, y encontrarás consuelo en ver cómo un entorno nebuloso puede contener belleza y significado."
    },
    JP: {
      libros: [
        {
          titulo: "Pollo con ciruelas",
          anio: 2004,
          sinopsis: "Novela gráfica de Marjane Satrapi ambientada en Irán en 1958. Narra la historia del virtuoso tar Nasser Ali Khan, que decide dejarse morir tras romperse su instrumento favorito. Durante ocho días, rememora su vida, amores y arrepentimientos.",
          datoCurioso: "La novela fue adaptada al cine en 2011 por la propia Satrapi y Vincent Paronnaud; mezcla animación y acción real."
        },
        {
          titulo: "El buzón de las impuras",
          anio: 2021,
          sinopsis: "Obra contemporánea que aborda la correspondencia de mujeres marginadas y sus historias íntimas, explorando temas de género, tradición y emancipación.",
          datoCurioso: "Es una contribución reciente del cómic chileno que muestra el talento de autoras emergentes y su compromiso con temáticas de género."
        }
      ],
      texto: "Te gusta cuidar de los tuyos y de preservar tradiciones. Las historias que celebran la familia, la identidad y el legado cultural te resultan entrañables. {titulo} ofrece un viaje a través de generaciones y de cartas perdidas que revelan emociones profundas y secretos guardados. Con cada página sentirás que rescatas un trozo de historia familiar, y valorarás cómo el amor y la organización mantienen unidos a quienes se encuentran distantes."
    }
  },
  ESTP: {
    EI: {
      libros: [
        {
          titulo: "Los hombres que no amaban a las mujeres",
          anio: 2005,
          sinopsis: "Primera entrega de la trilogía ‘Millennium’ de Stieg Larsson. El periodista Mikael Blomkvist y la hacker Lisbeth Salander investigan la desaparición de una heredera de 40 años atrás, destapando secretos familiares, corrupción y abusos de poder en Suecia.",
          datoCurioso: "Larsson escribió los tres libros de la trilogía antes de su muerte súbita en 2004; la serie fue publicada póstumamente y se convirtió en un fenómeno global."
        },
        {
          titulo: "La pareja de al lado",
          anio: 2016,
          sinopsis: "Thriller de Shari Lapena en el que un bebé desaparece de su casa mientras sus padres cenan en la casa de al lado. La investigación revela secretos oscuros en la pareja y en sus vecinos, con múltiples giros hasta el sorprendente desenlace.",
          datoCurioso: "La autora canadiense Shari Lapena trabajó como abogada antes de dedicarse a escribir; ‘La pareja de al lado’ fue su debut en el género de suspense."
        }
      ],
      texto: "Eres audaz y no temes el riesgo. Te gustan las historias trepidantes, llenas de giros y acción, donde los protagonistas afrontan peligros de frente. Tu mente rápida y pragmática disfruta conectando pistas sobre la marcha sin detenerte demasiado en filosofías. {titulo} te brinda un misterio vertiginoso con conspiraciones y crímenes que te mantendrán alerta; te sentirás parte de una carrera contrarreloj que satisface tu necesidad de adrenalina y resolución."
    },
    SN: {
      libros: [
        {
          titulo: "El silencio de los malditos",
          anio: 2020,
          sinopsis: "Thriller del escritor español Carlos Portela ambientado en Galicia, donde la detective Sonia Ruiz investiga una serie de asesinatos que imitan antiguas leyendas. A medida que avanza, descubre secretos oscuros vinculados a rituales y a su propio pasado.",
          datoCurioso: "El autor combinó el suspense con elementos del folclore gallego; la novela ha sido elogiada por su atmósfera y ritmo vertiginoso."
        },
        {
          titulo: "Monster",
          anio: 1994,
          sinopsis: "Manga de Naoki Urasawa que sigue al neurocirujano Kenzo Tenma, quien salva la vida de un niño que luego resulta ser un psicópata responsable de múltiples asesinatos. Consumido por la culpa, Tenma emprende una búsqueda por Europa para detener al ‘monstruo’ y limpiar su nombre.",
          datoCurioso: "‘Monster’ ganó el Premio Eisner; Urasawa es conocido por sus tramas complejas y su desarrollo psicológico de personajes."
        }
      ],
      texto: "Como buscador de emociones, te encantan los thrillers anclados en la realidad. Valoras la crudeza de las calles y los casos policiales que pueden arrancar titulares. Tu capacidad para moverte rápido y adaptarte a nuevas pistas hace que disfrutes de investigaciones que no dan tregua. {titulo} mezcla crimen, tradición y suspenso de una forma que te hará sentir en plena acción. Te invitará a descifrar enigmas mientras exploras rincones oscuros del mundo real."
    },
    TF: {
      libros: [
        {
          titulo: "Drácula/cuentos macabros",
          anio: 1897,
          sinopsis: "‘Drácula’ de Bram Stoker sigue al abogado Jonathan Harker, quien viaja al castillo del conde Drácula en Transilvania, desatando una lucha contra el vampiro en Inglaterra. La edición ‘Cuentos macabros’ suele incluir relatos góticos de terror victoriano que exploran lo sobrenatural.",
          datoCurioso: "La forma epistolar de ‘Drácula’ contribuyó a su atmósfera realista; Stoker se inspiró en el príncipe Vlad el Empalador al crear al conde."
        },
        {
          titulo: "Uzumaki/Macabros",
          anio: 1998,
          sinopsis: "Manga de horror de Junji Ito centrado en la ciudad costera de Kurôzu‑cho, donde los habitantes se obsesionan con espirales que los llevan a deformaciones y locura. Las historias ‘Macabros’ recopilan relatos inquietantes de Ito sobre maldiciones y monstruos.",
          datoCurioso: "Junji Ito es considerado maestro del manga de terror; sus obras influyeron en el cine japonés y en creadores como Guillermo del Toro."
        },
        {
          titulo: "Cuentos de amor, locura y muerte",
          anio: 1917,
          sinopsis: "Colección de relatos de Horacio Quiroga publicada en 1917 que explora pasiones extremas y situaciones trágicas. Ambientados en la selva misionera y en ambientes urbanos, los cuentos muestran los límites entre la cordura y la demencia.",
          datoCurioso: "Quiroga, considerado el Edgar Allan Poe de la literatura hispanoamericana, sufrió múltiples tragedias personales que influyeron en su obra."
        },
        {
          titulo: "Kaiki. Cuentos de terror y locura",
          anio: 2000,
          sinopsis: "Antología de relatos japoneses de terror compilada por diversos autores que presenta historias de espíritus, maldiciones y obsesiones en la tradición kaidan. Introduce al lector a la riqueza del folclore sobrenatural japonés.",
          datoCurioso: "El término ‘kaiki’ se refiere a lo extraño o misterioso en japonés; la colección incluye autores clásicos como Lafcadio Hearn."
        },
        {
          titulo: "El Monje",
          anio: 1796,
          sinopsis: "Novela gótica de 1796 escrita por Matthew Lewis que sigue al monje Ambrosio, quien sucumbe a la tentación y comete crímenes impíos guiado por una mujer demoníaca. La historia combina horror, erotismo y crítica a la hipocresía religiosa.",
          datoCurioso: "La novela causó escándalo en su época por su contenido sexual y satánico; su autor tenía solo 19 años cuando la escribió."
        }
      ],
      texto: "Eres intrépido y te atraen los límites del miedo. Te encanta ponerte a prueba con historias de terror y locura que despiertan tus sentidos y desafían tu valentía. {titulo} es una colección de relatos escalofriantes, vampiros, espirales malditas y otros horrores que harán latir tu corazón. Sentirás el cosquilleo de lo desconocido, pero tu carácter aventurero te animará a seguir adelante, explorando sombras y misterios con una sonrisa temeraria."
    },
    JP: {
      libros: [
        {
          titulo: "En el bosque, bajo los cerezos en flor",
          anio: 1950,
          sinopsis: "Novela corta del escritor japonés Ango Sakaguchi que mezcla folclore y surrealismo. Cuenta la historia de un bandolero que secuestra a una mujer en un bosque embrujado, solo para descubrir que ella es más cruel y despiadada que cualquier demonio.",
          datoCurioso: "Sakaguchi perteneció al movimiento literario buraiha que exploraba el nihilismo en el Japón de la posguerra; la obra inspiró una película de 1975."
        }
      ],
      texto: "La aventura es tu segundo nombre. No te gustan los planes rígidos ni las respuestas predecibles; prefieres relatos excéntricos y violentos que muestren lo inesperado. {titulo} combina romance, locura y folklore en un entorno salvaje. Su mezcla de belleza y horror saciará tu apetito por lo extraordinario y te permitirá sentir que participas en una experiencia literaria única, sin reglas, tal como disfrutas vivir la vida."
    }
  },
  ISTP: {
    EI: {
      libros: [
        {
          titulo: "Muerte en el Nilo",
          anio: 1937,
          sinopsis: "Otra aventura de Hércules Poirot, donde el detective belga se encuentra de vacaciones en un crucero por el Nilo. El asesinato de una joven millonaria recién casada desencadena una investigación entre un elenco de pasajeros con motivos ocultos.",
          datoCurioso: "Christie viajó a Egipto de niña y de adulta, lo que inspiró la ambientación; la novela ha sido adaptada a cine y televisión varias veces."
        }
      ],
      texto: "Eres discreto y resolutivo: prefieres actuar y analizar con calma en lugar de hablar. Te atraen los rompecabezas que requieren astucia y perspicacia. {titulo} es el misterio perfecto para ti; podrás juntar las piezas, examinar huellas y relacionar detalles hasta dar con la solución antes que nadie. La serenidad de tu pensamiento te permitirá disfrutar cada giro y te hará sentir la satisfacción de resolver el caso desde la comodidad del sillón."
    },
    SN: {
      libros: [
        {
          titulo: "El silencio en la ciudad blanca",
          anio: 2016,
          sinopsis: "Primer libro de la trilogía de Eva García Sáenz de Urturi ambientado en Vitoria. El inspector Unai López de Ayala investiga unos asesinatos rituales que replican crímenes ocurridos veinte años antes, mientras lucha con traumas personales.",
          datoCurioso: "La autora documentó meticulosamente la historia de Álava; la trilogía impulsó el turismo literario en Vitoria."
        }
      ],
      texto: "Te gusta el suspense contemporáneo y los escenarios cercanos a la realidad. Tu lado analítico se deleita en seguir pistas coherentes y desentrañar la verdad en medio del caos. {titulo} ofrece un thriller moderno con ambiente urbano y personajes complejos. Mientras lees, tu mente práctica organizará los elementos de la trama, tejerá hipótesis y comprobará teorías, disfrutando la satisfacción de descifrar un crimen ingeniosamente diseñado."
    },
    TF: {
      libros: [
        {
          titulo: "Frankenstein",
          anio: 1818,
          sinopsis: "Novela de Mary Shelley en la que el joven Victor Frankenstein crea un ser humano a partir de restos cadavéricos. Horrorizado por su criatura, la abandona y desencadena una cadena de tragedias cuando ésta busca venganza por su soledad.",
          datoCurioso: "Shelley concibió la historia durante una noche tormentosa de 1816 en Ginebra, en un reto de cuentos de terror con Lord Byron y Percy Shelley."
        }
      ],
      texto: "Prefieres historias donde la ciencia y el ingenio se enfrentan a dilemas morales. Tu curiosidad se alimenta de debates sobre los límites de la creación y la responsabilidad. {titulo} es un clásico que te provocará reflexionar sobre lo que significa jugar a ser dios y sobre las consecuencias de desafiar las reglas naturales. Sentirás empatía por el creador y la criatura, y tu mente crítica explorará todos los matices éticos."
    },
    JP: {
      libros: [
        {
          titulo: "La Sombra del viento",
          anio: 2001,
          sinopsis: "Primera entrega de la saga ‘El Cementerio de los Libros Olvidados’ de Carlos Ruiz Zafón. Daniel Sempere descubre un misterioso libro y se obsesiona por conocer la historia de su autor Julián Carax, lo que lo llevará a desenterrar secretos en la Barcelona de posguerra.",
          datoCurioso: "Ruiz Zafón fue compositor y llegó a escribir música para bandas sonoras; la saga ha vendido millones de ejemplares en todo el mundo."
        },
        {
          titulo: "El juego del Ángel",
          anio: 2008,
          sinopsis: "Ambientada en la misma Barcelona gótica que ‘La Sombra del viento’, sigue al joven escritor David Martín, quien recibe la oferta de escribir una obra misteriosa a cambio de una fortuna, mientras lidia con amores imposibles y enigmas literarios.",
          datoCurioso: "Es la segunda novela de la tetralogía y funciona como precuela; Ruiz Zafón dedicó la obra a su editor, quien falleció antes de verla publicada."
        },
        {
          titulo: "El prisionero del cielo",
          anio: 2011,
          sinopsis: "Tercera entrega de la saga, en la que Daniel Sempere y Fermín Romero de Torres descubren pistas sobre el pasado de Fermín que los llevan al siniestro castillo de Montjuïc durante el franquismo.",
          datoCurioso: "La novela conecta las tramas de las dos entregas anteriores y rinde homenaje a ‘El conde de Montecristo’, uno de los libros favoritos del autor."
        }
      ],
      texto: "Te fascinan las tramas laberínticas que se desarrollan a lo largo de varias entregas. Aprecias explorar ciudades misteriosas, librerías secretas y personajes con doble vida. {titulo} te envolverá en un ciclo de novelas lleno de enigmas, amores prohibidos y venganzas. Con tu naturaleza independiente, disfrutarás investigando cada esquina literaria y conectando historias mientras avanzas a tu propio ritmo, sintiendo la emoción de descubrir secretos ocultos."
    }
  },
  ESFP: {
    EI: {
      libros: [
        {
          titulo: "Mort",
          anio: 1987,
          sinopsis: "Cuarta novela del ‘Mundodisco’ de Terry Pratchett. Mort, un joven tímido, se convierte en aprendiz de la Muerte. Al asumir sus deberes, se enamora de una princesa destinada a morir y altera el equilibrio, generando caos entre los vivos y los muertos.",
          datoCurioso: "La Muerte es uno de los personajes más queridos de la serie; Pratchett combinaba humor y fantasía para satirizar la vida cotidiana."
        }
      ],
      texto: "Siempre encuentras la manera de convertir la vida en una fiesta. Eres alegre, sociable y disfrutas de historias que mezclan humor y aventura. {titulo} te hará reír al imaginar un aprendiz de muerte que descubre que incluso la Parca puede tener sentido del humor. Las situaciones absurdas y los diálogos ingeniosos despertarán tu espíritu juguetón y te recordarán que la vida, como la literatura, se disfruta mejor con una sonrisa."
    },
    SN: {
      libros: [
        {
          titulo: "La guía del autoestopista galáctico",
          anio: 1979,
          sinopsis: "Comedia de ciencia ficción de Douglas Adams que comienza con la destrucción de la Tierra para construir una autopista espacial. Arthur Dent es rescatado por su amigo Ford Prefect y viaja por el universo con una toalla y una enciclopedia electrónica.",
          datoCurioso: "Originó como una serie de radio de la BBC en 1978 antes de convertirse en novela; la respuesta ‘42’ como sentido de la vida se convirtió en un icono cultural."
        }
      ],
      texto: "Adoras lo excéntrico y las aventuras fuera de lo común. Eres de los que se embarcan en un viaje sin pensarlo dos veces, siempre dispuesto a reír. {titulo} es perfecto para ti: un viaje intergaláctico en el que cada capítulo rompe las reglas y revela nuevas maravillas. Te identificarás con los personajes que improvisan ante lo absurdo, y gozarás del tono irreverente que recuerda que el universo es un escenario para pasarlo bien."
    },
    TF: {
      libros: [
        {
          titulo: "Buenos presagios",
          anio: 1990,
          sinopsis: "Una comedia apocalíptica escrita por Neil Gaiman y Terry Pratchett. Un ángel y un demonio unen fuerzas para evitar el fin del mundo tras perder al Anticristo, navegando profecías erróneas y personajes excéntricos.",
          datoCurioso: "La novela tardó cuatro años en completarse debido a las agendas de los autores; fue adaptada a una serie de Amazon Prime protagonizada por David Tennant y Michael Sheen."
        }
      ],
      texto: "Tu corazón es grande y tus carcajadas contagiosas. Disfrutas de historias que equilibran lo sentimental con lo cómico y que muestran cómo la bondad puede encontrarse incluso en situaciones apocalípticas. {titulo} combina profecías, ángeles y demonios en una aventura entrañable que celebra la amistad y el absurdo. Te fascinará acompañar a personajes que, aunque distintos, unen fuerzas para evitar el fin del mundo con risas y afecto."
    },
    JP: {
      libros: [
        {
          titulo: "El restaurante del fin del mundo",
          anio: 1980,
          sinopsis: "Secuela de ‘La guía del autoestopista galáctico’, sigue las aventuras de Arthur Dent y sus amigos mientras visitan un restaurante situado literal y temporalmente al fin del universo. Allí presencian el Big Crunch y se enfrentan a paradojas temporales.",
          datoCurioso: "Douglas Adams continuó la serie con cinco libros en total; el restaurante se llama Milliways y sirve platos preparados con animales dispuestos a ser comidos."
        },
        {
          titulo: "La vida, el universo y todo lo demás",
          anio: 1982,
          sinopsis: "Tercer libro de la ‘trilogía en cinco partes’ de Adams. Arthur Dent y Ford Prefect se unen a un robot deprimido y a un alienígena para detener a unos habitantes xenófobos de Krikkit que planean destruir el universo.",
          datoCurioso: "El título es un guiño a la famosa respuesta ‘42’; Adams combinaba humor británico con ciencia ficción absurda."
        }
      ],
      texto: "Eres espontáneo y creativo, te encantan las experiencias desordenadas y sin guion. Buscas libros que sean como fiestas literarias, donde todo puede suceder. {titulo} ofrece exactamente eso: viajes al fin del universo, restaurantes insólitos y reflexiones divertidas sobre la vida. Cada capítulo es un caos encantador que estimulará tu imaginación y te recordará que a veces lo mejor es dejarse llevar y disfrutar del viaje."
    }
  },
  ISFP: {
    EI: {
      libros: [
        {
          titulo: "Tengo miedo torero",
          anio: 2001,
          sinopsis: "Novela del escritor chileno Pedro Lemebel ambientada en Santiago durante la dictadura de Pinochet. La Loca del Frente, una travesti de clase baja, se enamora de un joven guerrillero mientras lo ayuda a preparar un atentado contra el dictador.",
          datoCurioso: "La obra fue la única novela de Lemebel; mezcla política, marginalidad y amor queer, convirtiéndose en un libro de culto en Chile."
        }
      ],
      texto: "Eres un espíritu romántico y reservado. Aprecias historias de amores imposibles contadas con delicadeza y pasión. Te conmueven los personajes que luchan en silencio por sus sentimientos y que encuentran belleza en lo cotidiano. {titulo} te envolverá en una relación clandestina en plena dictadura, combinando política y ternura. Leerlo será como escuchar una serenata secreta que resonará con tu corazón rebelde y tu deseo de amar sin ruido."
    },
    SN: {
      libros: [
        {
          titulo: "Hierba",
          anio: 2017,
          sinopsis: "Novela gráfica surcoreana de Keum Suk Gendry-Kim basada en testimonios de mujeres coreanas que fueron esclavizadas sexualmente por el ejército japonés durante la Segunda Guerra Mundial. Sigue la vida de la superviviente Lee Ok‑sun desde su infancia hasta su vejez, exponiendo la memoria y el trauma.",
          datoCurioso: "El libro ganó el Premio Harvey a la mejor obra internacional; su autora se inspiró en entrevistas reales para crear la narrativa."
        },
        {
          titulo: "Bluebells",
          anio: 2024,
          sinopsis: "Novela contemporánea que describe el duelo y la esperanza a través de personajes que encuentran consuelo en un jardín de campanillas azules.",
          datoCurioso: "El título hace alusión a la flor silvestre del Reino Unido; el libro presenta sensibilidad ecológica y emocional."
        }
      ],
      texto: "Te atraen relatos que te transportan a otros tiempos y paisajes, donde los detalles sensoriales cobran vida. Disfrutas de la delicadeza de las ilustraciones y de la melancolía que evoca la naturaleza. {titulo} cumple con esto: ya sea explorando campos invisibles de memoria o flores azules simbólicas, te permitirá vagar por mundos que apelan a tu sensibilidad artística. Sentirás que cada página es un cuadro que puedes atesorar."
    },
    TF: {
      libros: [
        {
          titulo: "El jardín Secreto",
          anio: 1911,
          sinopsis: "Clásico infantil de Frances Hodgson Burnett sobre Mary Lennox, una niña huérfana que se muda a la mansión Misselthwaite en Yorkshire. Allí descubre un jardín abandonado que, al revivirlo, transforma las vidas de ella y de sus nuevos amigos.",
          datoCurioso: "Publicada en 1911, la novela destaca el poder curativo de la naturaleza; Burnett también escribió ‘La princesita’."
        }
      ],
      texto: "Eres sensible a la belleza y la pureza. Te gustan historias que recuperan la inocencia perdida y muestran cómo la naturaleza puede sanar. {titulo} narra la transformación de una niña y un jardín oculto, en el que la paciencia y la amistad abren puertas a lo maravilloso. Tu alma artística disfrutará de las descripciones de flores y emociones, y apreciarás cómo pequeñas acciones generan grandes cambios."
    },
    JP: {
      libros: [
        {
          titulo: "La última Niebla",
          anio: 1934,
          sinopsis: "Novela corta de María Luisa Bombal que explora la vida de una mujer que se siente atrapada en un matrimonio sin amor. A través de recuerdos y fantasías, la protagonista se adentra en un mundo nebuloso donde se confunden sueño y realidad.",
          datoCurioso: "Publicada en 1934, la obra es un clásico del modernismo chileno y destaca por su atmósfera onírica y sensual."
        }
      ],
      texto: "Tu imaginación se nutre de la poesía y de lo onírico. Prefieres cuentos donde la frontera entre la realidad y el sueño se difumina, permitiendo que los personajes vaguen por paisajes interiores. {titulo} ofrece una atmósfera brumosa en la que la protagonista se sumerge en sus fantasías para escapar de un matrimonio vacío. Su prosa lírica y sus simbolismos resonarán con tu sensibilidad y te invitarán a soñar despierto."
    }
  },
  ENTP: {
    EI: {
      libros: [
        {
          titulo: "American Gods",
          anio: 2001,
          sinopsis: "La novela de Neil Gaiman mezcla mitología antigua con la América contemporánea. Shadow Moon, recién salido de prisión, acompaña al misterioso señor Wednesday en un viaje por Estados Unidos mientras los dioses tradicionales se enfrentan a nuevas deidades modernas.",
          datoCurioso: "La obra ganó los premios Hugo, Nebula y Bram Stoker; Gaiman se inspiró en sus viajes por carreteras estadounidenses."
        }
      ],
      texto: "Eres ingenioso, sociable y siempre buscas algo nuevo que discutir. Te encanta mezclar mundos y desafiar convenciones con argumentos brillantes. {titulo} es ideal para ti porque entrelaza mitologías antiguas con carreteras americanas, creando un viaje lleno de personajes insólitos y debates sobre la fe y la identidad. Te divertirás interpretando cada alegoría y cuestionando cuál de los dioses modernos se ajusta más a tu espíritu rebelde y creativo."
    },
    SN: {
      libros: [
        {
          titulo: "La Tierra Errante",
          anio: 2008,
          sinopsis: "Colección de relatos del escritor chino Liu Cixin, destacando la historia que da nombre al libro en la que la humanidad instala motores gigantes para mover la Tierra fuera del sistema solar y escapar del Sol moribundo.",
          datoCurioso: "Liu Cixin es el primer escritor asiático en ganar el Premio Hugo a la mejor novela por ‘El problema de los tres cuerpos’; ‘La Tierra Errante’ fue adaptada a una película de gran éxito en China."
        }
      ],
      texto: "Tu mente bulle con preguntas de escala cósmica: qué pasaría si la humanidad tuviera que mover la Tierra, qué rol juega la ciencia cuando el futuro de todos está en juego. {titulo} plantea esa hipótesis y te invita a explorar sus implicaciones científicas y sociales. Como pensador incansable, disfrutarás desentrañando sus ideas gigantescas y proponiendo soluciones inesperadas mientras viajas mentalmente a través de un universo al borde de la catástrofe."
    },
    TF: {
      libros: [
        {
          titulo: "Rayuela",
          anio: 1963,
          sinopsis: "Novela experimental de Julio Cortázar que puede leerse de múltiples maneras. Sigue a Horacio Oliveira y sus amigos bohemios en París y Buenos Aires mientras buscan el sentido de la existencia y el amor de la Maga.",
          datoCurioso: "Publicada en 1963, es considerada una de las obras cumbre del boom latinoamericano; Cortázar invitó al lector a escoger el orden de los capítulos."
        }
      ],
      texto: "Amas lo experimental y desafiante; no te gusta que te digan cómo leer. Tus debates internos se enriquecen con estructuras narrativas que rompen las reglas. {titulo} te ofrecerá exactamente eso: un libro que puedes leer de forma lineal o saltando capítulos según las instrucciones del autor. Jugarás con sus múltiples significados, explorarás la vida bohemia y la búsqueda del ser, y convertirás la lectura en un juego intelectual como los que tanto disfrutas."
    },
    JP: {
      libros: [
        {
          titulo: "El Ciclo onírico de Randolph Carter",
          anio: 1995,
          sinopsis: "Selección de relatos de H. P. Lovecraft que siguen las aventuras del soñador Randolph Carter en mundos oníricos como la Tierra del Sueño. Viaja entre ciudades extraordinarias, enfrenta dioses arquetípicos y experimenta horrores cósmicos.",
          datoCurioso: "Randolph Carter está inspirado en el propio Lovecraft; estas historias establecen la mitología de Cthulhu y el Dream Cycle."
        },
        {
          titulo: "El hombre en el castillo",
          anio: 1962,
          sinopsis: "Novela de historia alternativa de Philip K. Dick ambientada en un mundo donde las Potencias del Eje ganaron la Segunda Guerra Mundial. La Costa Oeste de Estados Unidos está controlada por Japón y la Costa Este por Alemania; varios personajes buscan sentido en una realidad opresiva.",
          datoCurioso: "La novela ganó el Premio Hugo en 1963 y popularizó la ucronía en la ciencia ficción; Dick introduce un libro dentro del libro que describe una historia alternativa donde los Aliados ganan."
        }
      ],
      texto: "Eres irreverente y te encantan los mundos oníricos y distorsionados donde el pensamiento crítico se combina con imaginación pura. {titulo} reúne relatos en los que los sueños, los multiversos y las realidades alternativas desafían las leyes lógicas. Te entretendrá analizar las paradojas, cuestionar la realidad y crear tus propias teorías. La mezcla de horror cósmico o ucronía política resonará con tu pasión por subvertir las reglas y explorar hasta el infinito."
    }
  },
  INTP: {
    EI: {
      libros: [
        {
          titulo: "Crónicas Marcianas",
          anio: 1950,
          sinopsis: "Colección de relatos de Ray Bradbury que retrata la colonización de Marte por humanos que huyen de una Tierra en crisis. Las historias muestran el encuentro con civilizaciones marcianas y la repetición de errores humanos.",
          datoCurioso: "Aunque es un fix‑up de relatos, Bradbury le dio estructura de novela; algunas ediciones excluyen historias para mantener coherencia temática."
        }
      ],
      texto: "Eres un pensador independiente que disfruta de observar y analizar a distancia. Te atraen los relatos que funcionan como estudios sociológicos disfrazados de ciencia ficción. {titulo} es una colección de historias sobre la colonización de Marte que te permitirá reflexionar sobre la naturaleza humana, los ciclos de destrucción y la nostalgia. Te fascinará su prosa lírica y la forma en que plantea preguntas filosóficas que pueden alimentar debates internos por horas."
    },
    SN: {
      libros: [
        {
          titulo: "El nombre de la rosa",
          anio: 1980,
          sinopsis: "Thriller histórico de Umberto Eco ambientado en una abadía benedictina del siglo XIV donde el monje Guillermo de Baskerville y su novicio Adso investigan una serie de asesinatos relacionados con un libro prohibido.",
          datoCurioso: "Eco, semiólogo italiano, combinó novela policial con erudición medieval; la obra ganó el premio Strega y fue adaptada al cine en 1986."
        }
      ],
      texto: "Disfrutas descifrar códigos y explorar bibliotecas infinitas. Tu mente inquisitiva se maravilla ante misterios históricos y discusiones teológicas. {titulo} ofrece un monasterio medieval lleno de simbolismo, un laberinto de libros prohibidos y un detective filósofo. A medida que avances, descifrarás pistas al lado del protagonista y disfrutarás de diálogos eruditos que combinan lógica, semiótica y humor. Es una lectura a la altura de tu sed de conocimiento."
    },
    TF: {
      libros: [
        {
          titulo: "22/11/63",
          anio: 2011,
          sinopsis: "Novela de Stephen King en la que un profesor de inglés viaja a 1958 a través de un portal temporal y decide impedir el asesinato de John F. Kennedy. Viviendo en el pasado, se enfrenta a las consecuencias imprevistas de alterar la historia.",
          datoCurioso: "King investigó exhaustivamente la teoría del asesinato de Kennedy; la novela fue adaptada a una miniserie protagonizada por James Franco."
        }
      ],
      texto: "Te gustan las historias en las que la ciencia sirve de vehículo para explorar paradojas morales. Viajar en el tiempo es un ejercicio mental que estimula tu imaginación y tu análisis. {titulo} narra a un profesor que vuelve a 1963 para detener un asesinato histórico y se enfrenta a las consecuencias imprevisibles de alterar el pasado. Reflexionarás sobre la ética de intervenir y sobre cómo pequeños cambios pueden desatar realidades complejas."
    },
    JP: {
      libros: [
        {
          titulo: "El portal de los obeliscos",
          anio: 2016,
          sinopsis: "Segundo libro de la trilogía ‘La Tierra Fragmentada’, continúa la historia de Essun y su hija Nassun en un mundo destruido. Mientras Essun aprende a controlar antiguos obeliscos para detener la Quinta Estación, Nassun desarrolla sus propios poderes en una comunidad peligrosa.",
          datoCurioso: "La novela ganó el premio Hugo 2017; N. K. Jemisin amplía su exploración de opresión y resiliencia, combinando fantasía y ciencia ficción."
        }
      ],
      texto: "Atraído por estructuras inusuales, disfrutas de historias que integran ciencia ficción y fantasía de forma dura. Te intriga descifrar sistemas de magia con reglas lógicas y consecuencias estrictas. {titulo} te ofrece ese reto: un mundo fracturado donde la geología y la física se entrelazan, y los personajes deben descifrar antiguos artefactos para sobrevivir. Tu mente analítica gozará al construir teorías sobre cómo funciona ese universo e imaginar soluciones creativas."
    }
  },
  ENFJ: {
    EI: {
      libros: [
        {
          titulo: "El nombre del viento",
          anio: 2007,
          sinopsis: "Primera novela de la serie ‘Crónica del asesino de reyes’ de Patrick Rothfuss. Cuenta la historia de Kvothe, un músico prodigioso que relata su juventud, su ingreso a la Universidad y su búsqueda de conocimiento y venganza.",
          datoCurioso: "Rothfuss tardó más de una década en escribir la novela; el autor ha prometido una tercera entrega que los fans llevan años esperando."
        }
      ],
      texto: "Eres carismático y generoso, capaz de inspirar a otros con tus palabras y acciones. Valoras las historias en las que un héroe usa su talento para ayudar a los demás y crece a través de la adversidad. {titulo} cuenta la vida de un joven prodigio, músico y mago que busca su lugar en el mundo. Te cautivará su capacidad de tocar corazones con canciones y su deseo de proteger a quienes ama, reflejando tu vocación de mentor."
    },
    SN: {
      libros: [
        {
          titulo: "La historia interminable",
          anio: 1979,
          sinopsis: "Novela fantástica de Michael Ende que sigue a Bastian Balthazar Bux, un niño que se sumerge en el libro ‘La historia interminable’ y se adentra en el mundo de Fantasía. Allí conoce al guerrero Atreyu y a la Emperatriz Infantil, descubriendo que su imaginación es la clave para salvar ambos mundos.",
          datoCurioso: "Ende criticó la adaptación cinematográfica de 1984 por no ser fiel al espíritu de su obra; el libro se divide físicamente en dos colores de tinta (roja y verde) para diferenciar los mundos."
        }
      ],
      texto: "Tu imaginación se alimenta de los lazos afectivos y de la esperanza. Disfrutas de mundos donde la amistad y la valentía son fuerzas capaces de salvar reinos. {titulo} te sumerge en la aventura de Bastián y Atreyu mientras luchan por preservar Fantasía. Te identificarás con los momentos en que un amigo apoya al otro sin condición y con la idea de que contar historias puede transformar realidades, tal como tú lo haces con tus palabras de aliento."
    },
    TF: {
      libros: [
        {
          titulo: "El jardín Secreto",
          anio: 1911,
          sinopsis: "Clásico infantil de Frances Hodgson Burnett sobre Mary Lennox, una niña huérfana que se muda a la mansión Misselthwaite en Yorkshire. Allí descubre un jardín abandonado que, al revivirlo, transforma las vidas de ella y de sus nuevos amigos.",
          datoCurioso: "Publicada en 1911, la novela destaca el poder curativo de la naturaleza; Burnett también escribió ‘La princesita’."
        }
      ],
      texto: "Personificas la empatía y la capacidad de guiar a otros hacia su mejor versión. Te conmueven las transformaciones personales que surgen de la vulnerabilidad y la compasión. {titulo} narra cómo una niña solitaria aprende a sanar y a sanar a quienes la rodean cultivando un jardín oculto. A medida que lo leas, te reconocerás en su impulso por cuidar y motivar, y celebrarás la belleza de ver florecer a las personas en ambientes seguros."
    },
    JP: {
      libros: [
        {
          titulo: "Buenos presagios",
          anio: 1990,
          sinopsis: "Una comedia apocalíptica escrita por Neil Gaiman y Terry Pratchett. Un ángel y un demonio unen fuerzas para evitar el fin del mundo tras perder al Anticristo, navegando profecías erróneas y personajes excéntricos.",
          datoCurioso: "La novela tardó cuatro años en completarse debido a las agendas de los autores; fue adaptada a una serie de Amazon Prime protagonizada por David Tennant y Michael Sheen."
        }
      ],
      texto: "Eres espontáneo y posees un gran sentido del humor, incluso cuando las cosas se ponen serias. Te gusta armonizar a grupos diversos para lograr un objetivo común. {titulo} mezcla profecías, ángeles despistados y demonios con corazón en una comedia sobre el fin del mundo. Te encantará ver cómo los protagonistas equilibran caos y camaradería para evitar el desastre, recordándote que el optimismo y la cooperación siempre encuentran un camino."
    }
  },
  INFJ: {
    EI: {
      libros: [
        {
          titulo: "El cuento de la criada",
          anio: 1985,
          sinopsis: "Ambientada en la teocracia totalitaria de Gilead, donde las mujeres fértiles son forzadas a servir como criadas, la narradora Offred cuenta su experiencia de opresión y su lucha por la libertad mientras recuerda su vida anterior y sueña con escapar.",
          datoCurioso: "Margaret Atwood se basó en regímenes reales para crear Gilead; escribió la novela en 1984 en Berlín Occidental, afirmando que no incluyó ningún evento que no hubiera sucedido en la historia."
        }
      ],
      texto: "Eres introspectivo y visionario; siempre buscas justicia y significado más allá de lo obvio. Te conmueven las historias de resistencia en sociedades opresoras y te motiva alzar la voz por los vulnerables. {titulo} retrata una distopía que expone la crueldad del totalitarismo y la fuerza silenciosa de quienes sueñan con libertad. Leerlo resonará con tu empatía profunda y tu convicción de que incluso en la oscuridad se puede sembrar esperanza."
    },
    SN: {
      libros: [
        {
          titulo: "Un mago de Terramar",
          anio: 1968,
          sinopsis: "Primera novela del ciclo de Terramar de Ursula K. Le Guin. El joven mago Ged, impetuoso y orgulloso, desata una sombra que lo persigue. Para restaurar el equilibrio, emprende un viaje por archipiélagos y enfrenta sus propios demonios.",
          datoCurioso: "Le Guin se inspiró en mitologías asiáticas y en el taoísmo para crear el equilibrio mágico de Terramar; el libro influyó en generaciones de escritores de fantasía."
        },
        {
          titulo: "La vida invisible de Addie LaRue",
          anio: 2020,
          sinopsis: "Novela de V. E. Schwab donde Adeline LaRue, en la Francia del siglo XVIII, hace un pacto con un dios oscuro para vivir libre y eternamente, a cambio de ser olvidada por todos. A lo largo de tres siglos, lucha por dejar huella hasta que conoce a un joven que puede recordarla.",
          datoCurioso: "Schwab tardó diez años en desarrollar la novela; la protagonista está inspirada en personajes de arte y folklore que desafiaron al olvido."
        }
      ],
      texto: "Tu imaginación y tu compasión te llevan a mundos mágicos poblados por personajes complejos en busca de identidad. Te encantan las sagas que exploran el sacrificio y la soledad con delicadeza. {titulo} es un viaje al corazón de la magia, donde los nombres importan y los pactos tienen un peso emocional. Disfrutarás de su prosa lírica, de sus protagonistas en lucha interna y de las preguntas sobre qué precio tiene la inmortalidad o el poder."
    },
    TF: {
      libros: [
        {
          titulo: "La ladrona de libros",
          anio: 2005,
          sinopsis: "Narrada por la Muerte, la novela de Markus Zusak se ambienta en la Alemania nazi y sigue a Liesel Meminger, una niña que encuentra consuelo robando libros y compartiéndolos con su familia adoptiva y un joven judío escondido en su sótano.",
          datoCurioso: "El libro fue rechazado por varios editores antes de convertirse en un éxito internacional; ha sido traducido a más de 40 idiomas y adaptado a una película en 2013."
        }
      ],
      texto: "Eres sensible a los relatos donde la palabra escrita adquiere poder salvador. Valoras la memoria y los sacrificios que se hacen por amor o por principios. {titulo} cuenta cómo una niña y su padre adoptivo usan los libros para soportar el horror de la guerra y salvar almas. Te conmoverá el narrador único, la atmósfera poética y la forma en que el lenguaje se convierte en refugio frente a la barbarie, reflejando tu fe en la humanidad."
    },
    JP: {
      libros: [
        {
          titulo: "La Vegetariana",
          anio: 2007,
          sinopsis: "Novela surcoreana de Han Kang sobre una mujer que decide dejar de comer carne tras una pesadilla sangrienta. Su decisión desencadena la incomprensión de su familia y una transformación física y psicológica que la aleja de la humanidad.",
          datoCurioso: "El libro ganó el Man Booker International Prize 2016; Han Kang estudió filosofía occidental antes de dedicarse a la literatura."
        }
      ],
      texto: "Te atraen historias que desafían estructuras opresivas y exploran la identidad desde perspectivas inquietantes. Tu mente busca romper moldes y comprender comportamientos extremos. {titulo} narra la decisión radical de una mujer que deja de comer carne, desatando reacciones violentas en su familia y sociedad. Esta metamorfosis te hará pensar en cómo la resistencia puede adoptar formas insólitas, y conectará con tu deseo de ver cambios profundos en entornos asfixiantes."
    }
  },
  ENFP: {
    EI: {
      libros: [
        {
          titulo: "El hobbit",
          anio: 1937,
          sinopsis: "Precuela de ‘El Señor de los Anillos’ de J. R. R. Tolkien. Sigue al hobbit Bilbo Bolsón en una aventura con trece enanos y el mago Gandalf para recuperar el tesoro guardado por el dragón Smaug en la Montaña Solitaria.",
          datoCurioso: "Tolkien escribió el libro para sus hijos; el manuscrito fue inicialmente rechazado por varias editoriales antes de su publicación en 1937."
        }
      ],
      texto: "Eres pura energía creativa y aventuras: te lanzas con entusiasmo a cualquier viaje, real o imaginario. Adoras a los personajes que, como tú, salen de su zona de confort y descubren tesoros inesperados en el camino. {titulo} narra la travesía de un pequeño héroe que se enfrenta a dragones y aprende sobre valor, amistad y astucia. Te inspirará a recordar que incluso los más tranquilos pueden vivir historias épicas cuando siguen su curiosidad."
    },
    SN: {
      libros: [
        {
          titulo: "Las tumbas de Atuan",
          anio: 1971,
          sinopsis: "Segunda novela de la saga Terramar. Cuenta la historia de Tenar, una joven consagrada como sacerdotisa de las Tumbas de Atuan, que descubre un intruso: el mago Ged en busca de un anillo mágico. Juntos desafían a las sombras y buscan libertad.",
          datoCurioso: "La novela explora el poder femenino y la identidad; Le Guin muestra la cooperación entre culturas para lograr equilibrio."
        },
        {
          titulo: "La costa más lejana/Tehanu",
          anio: 1972,
          sinopsis: "Este volumen combina la tercera y cuarta novelas del ciclo Terramar. En ‘La costa más lejana’, el mago Ged viaja con el príncipe Arren para restaurar la magia desaparecida del mundo. En ‘Tehanu’, años después, una mujer llamada Tenar cría a una niña quemada y se encuentra con un Ged cambiado y despojado de poder.",
          datoCurioso: "Le Guin revisó su mundo con una mirada feminista en ‘Tehanu’, publicada casi 20 años después de la trilogía original."
        }
      ],
      texto: "Tu imaginación no tiene fronteras y te encanta perderte en sagas que desarrollan mundos ricos en mitología y magia. Te identificas con protagonistas que cuestionan su destino y buscan su voz en universos laberínticos. {titulo} te llevará a templos oscuros, mares lejanos o tierras secretas, acompañando a personajes que crecen al desafiar tradiciones. Cada viaje que emprendan te recordará tu propio deseo de descubrir y reinventarte constantemente."
    },
    TF: {
      libros: [
        {
          titulo: "Buenos presagios",
          anio: 1990,
          sinopsis: "Una comedia apocalíptica escrita por Neil Gaiman y Terry Pratchett. Un ángel y un demonio unen fuerzas para evitar el fin del mundo tras perder al Anticristo, navegando profecías erróneas y personajes excéntricos.",
          datoCurioso: "La novela tardó cuatro años en completarse debido a las agendas de los autores; fue adaptada a una serie de Amazon Prime protagonizada por David Tennant y Michael Sheen."
        }
      ],
      texto: "Combinas sensibilidad y sentido del humor de una manera única. Te encantan las historias que pueden hacerte reír y llorar, a veces en la misma página. {titulo} te proporcionará una aventura apocalíptica llena de bromas absurdas y momentos entrañables. Te sentirás identificado con su optimismo contagioso y con la idea de que incluso los seres más dispares pueden unirse para cambiar el destino, reforzando tu fe en la amistad."
    },
    JP: {
      libros: [
        {
          titulo: "Mort",
          anio: 1987,
          sinopsis: "Cuarta novela del ‘Mundodisco’ de Terry Pratchett. Mort, un joven tímido, se convierte en aprendiz de la Muerte. Al asumir sus deberes, se enamora de una princesa destinada a morir y altera el equilibrio, generando caos entre los vivos y los muertos.",
          datoCurioso: "La Muerte es uno de los personajes más queridos de la serie; Pratchett combinaba humor y fantasía para satirizar la vida cotidiana."
        },
        {
          titulo: "La guía del autoestopista galáctico",
          anio: 1979,
          sinopsis: "Comedia de ciencia ficción de Douglas Adams que comienza con la destrucción de la Tierra para construir una autopista espacial. Arthur Dent es rescatado por su amigo Ford Prefect y viaja por el universo con una toalla y una enciclopedia electrónica.",
          datoCurioso: "Originó como una serie de radio de la BBC en 1978 antes de convertirse en novela; la respuesta ‘42’ como sentido de la vida se convirtió en un icono cultural."
        }
      ],
      texto: "Eres espontáneo y creativo, te cuesta seguir un guion y prefieres explorar caminos insólitos. Disfrutas de libros que mezclan filosofía, humor y fantasía con un toque de absurdo. {titulo} es un ejemplo perfecto: ya sea una aventura con la Muerte o un paseo interestelar sin mapa, la historia te invita a reír y reflexionar sobre el sentido de la vida. Cada giro te recordará que no hay límites para la imaginación."
    }
  },
  INFP: {
    EI: {
      libros: [
        {
          titulo: "El nombre del viento",
          anio: 2007,
          sinopsis: "Primera novela de la serie ‘Crónica del asesino de reyes’ de Patrick Rothfuss. Cuenta la historia de Kvothe, un músico prodigioso que relata su juventud, su ingreso a la Universidad y su búsqueda de conocimiento y venganza.",
          datoCurioso: "Rothfuss tardó más de una década en escribir la novela; el autor ha prometido una tercera entrega que los fans llevan años esperando."
        }
      ],
      texto: "Eres un soñador empedernido con una imaginación vibrante. Prefieres las historias que se centran en personajes sensibles que buscan su identidad a través de la música, la magia y el amor. {titulo} narra la vida de un bardo que lucha por encontrar su lugar en un mundo hostil sin perder su esencia. Su tono lírico y su protagonista idealista resonarán con tu deseo de perseguir tus sueños a pesar de las adversidades."
    },
    SN: {
      libros: [
        {
          titulo: "Un mago de Terramar",
          anio: 1968,
          sinopsis: "Primera novela del ciclo de Terramar de Ursula K. Le Guin. El joven mago Ged, impetuoso y orgulloso, desata una sombra que lo persigue. Para restaurar el equilibrio, emprende un viaje por archipiélagos y enfrenta sus propios demonios.",
          datoCurioso: "Le Guin se inspiró en mitologías asiáticas y en el taoísmo para crear el equilibrio mágico de Terramar; el libro influyó en generaciones de escritores de fantasía."
        },
        {
          titulo: "Las tumbas de Atuan",
          anio: 1971,
          sinopsis: "Segunda novela de la saga Terramar. Cuenta la historia de Tenar, una joven consagrada como sacerdotisa de las Tumbas de Atuan, que descubre un intruso: el mago Ged en busca de un anillo mágico. Juntos desafían a las sombras y buscan libertad.",
          datoCurioso: "La novela explora el poder femenino y la identidad; Le Guin muestra la cooperación entre culturas para lograr equilibrio."
        },
        {
          titulo: "La historia interminable",
          anio: 1979,
          sinopsis: "Novela fantástica de Michael Ende que sigue a Bastian Balthazar Bux, un niño que se sumerge en el libro ‘La historia interminable’ y se adentra en el mundo de Fantasía. Allí conoce al guerrero Atreyu y a la Emperatriz Infantil, descubriendo que su imaginación es la clave para salvar ambos mundos.",
          datoCurioso: "Ende criticó la adaptación cinematográfica de 1984 por no ser fiel al espíritu de su obra; el libro se divide físicamente en dos colores de tinta (roja y verde) para diferenciar los mundos."
        }
      ],
      texto: "Te atraen las sagas mágicas que hablan de la fragilidad del bien y el mal. Amas viajar a reinos donde hechiceros y criaturas imaginarias enseñan lecciones sobre el equilibrio y la valentía. {titulo} te ofrecerá un recorrido por mares oscuros, laberintos y tierras sin límites, donde cada aventura representa una búsqueda interior. Tu sensibilidad disfrutará de la mezcla de nostalgia y asombro que sólo las grandes historias pueden ofrecer."
    },
    TF: {
      libros: [
        {
          titulo: "Las cosas que perdimos en el fuego",
          anio: 2016,
          sinopsis: "Colección de cuentos de la escritora argentina Mariana Enríquez que mezcla realismo sucio con horror urbano en la Buenos Aires contemporánea. Sus relatos abordan temas como la violencia de género, la crisis económica y lo sobrenatural.",
          datoCurioso: "Enríquez es parte del movimiento de ‘nueva narrativa argentina’; el libro ha recibido reconocimiento internacional y traducciones a múltiples idiomas."
        }
      ],
      texto: "Tienes un alma compasiva que también reconoce la belleza en lo trágico. Te atraen relatos que combinan realismo mágico y crítica social, mostrando cómo los más vulnerables luchan por sobrevivir. {titulo} recoge historias intensas de mujeres que se rebelan contra la violencia y la pobreza en Buenos Aires. Te cautivará su estilo poético y perturbador, y sentirás que cada cuento enciende una chispa de conciencia y empatía en tu corazón."
    },
    JP: {
      libros: [
        {
          titulo: "La vida invisible de Addie LaRue",
          anio: 2020,
          sinopsis: "Novela de V. E. Schwab donde Adeline LaRue, en la Francia del siglo XVIII, hace un pacto con un dios oscuro para vivir libre y eternamente, a cambio de ser olvidada por todos. A lo largo de tres siglos, lucha por dejar huella hasta que conoce a un joven que puede recordarla.",
          datoCurioso: "Schwab tardó diez años en desarrollar la novela; la protagonista está inspirada en personajes de arte y folklore que desafiaron al olvido."
        },
        {
          titulo: "La Vegetariana",
          anio: 2007,
          sinopsis: "Novela surcoreana de Han Kang sobre una mujer que decide dejar de comer carne tras una pesadilla sangrienta. Su decisión desencadena la incomprensión de su familia y una transformación física y psicológica que la aleja de la humanidad.",
          datoCurioso: "El libro ganó el Man Booker International Prize 2016; Han Kang estudió filosofía occidental antes de dedicarse a la literatura."
        }
      ],
      texto: "Tu alma creativa no teme la oscuridad; te gusta explorar personajes que desafían normas y pagan un precio por su libertad. Narrativas donde el tiempo, el deseo y la identidad se combinan te resultan irresistibles. {titulo} ofrece la historia de una joven que pacta con un dios para ser olvidada, o la de una mujer que renuncia a comer carne como acto de rebeldía. Estos relatos íntimos y perturbadores resonarán con tu curiosidad por la condición humana."
    }
  }
};