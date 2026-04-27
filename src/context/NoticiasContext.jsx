import { createContext, useContext, useState } from 'react'

const INITIAL_NEWS = [
  {
    id: 1,
    titulo: 'All Boys golea y sigue líder de la tabla regional',
    categoria: 'Fútbol',
    fecha: '2026-04-24',
    resumen: 'Un contundente 3-0 frente al rival de turno dejó al equipo en la cima de la competencia con cuatro fechas por delante.',
    cuerpo: `El Club All Boys consiguió una victoria contundente en el estadio municipal ante un rival que llegaba con buenas credenciales. El marcador final de 3 a 0 no refleja del todo la diferencia en el juego, ya que el local dominó de principio a fin.\n\nEl primer gol llegó a los 18 minutos del primer tiempo, tras una jugada colectiva que terminó con un remate cruzado impecable. La ventaja se amplió antes del descanso con un cabezazo desde un córner bien ejecutado.\n\nEn el segundo tiempo, el equipo siguió siendo protagonista y sentenció el partido con un tercero que desató la alegría en las tribunas. La defensa, por su parte, fue sólida y no concedió prácticamente situaciones de gol al rival.\n\nCon este resultado, All Boys se afirma en lo más alto de la tabla con 17 puntos, sacando cuatro de ventaja al segundo. Los próximos compromisos serán determinantes para definir el campeón de la temporada.`,
    foto: null,
    fotoPreview: null,
    color: '#2E2DA8',
  },
  {
    id: 2,
    titulo: 'Las divisiones menores brillan en el torneo pampeano',
    categoria: 'Inferiores',
    fecha: '2026-04-22',
    resumen: 'Tres categorías de la cantera avanzaron a instancias decisivas del certamen juvenil provincial.',
    cuerpo: `Un fin de semana inolvidable para las inferiores de All Boys. Las categorías Sub-13, Sub-15 y Sub-17 avanzaron de ronda en el torneo pampeano juvenil, dejando una actuación brillante que ilusiona con el futuro del club.\n\nEl Sub-13 se impuso con claridad en los dos partidos disputados, mostrando una organización táctica sorprendente para su edad. Los chicos de la Sub-15 fueron los protagonistas del momento más emotivo: ganaron en la tanda de penales tras un partido muy peleado.\n\nLa Sub-17, considerada la joya de la cantera esta temporada, accedió a semifinales con autoridad. Su conducción técnica destacó el compromiso y la dedicación del grupo en los entrenamientos de toda la semana.\n\nDesde la comisión directiva se valoró el trabajo de los cuerpos técnicos y se anunció una inversión en equipamiento para el predio de entrenamiento infantil.`,
    foto: null,
    fotoPreview: null,
    color: '#1a1660',
  },
  {
    id: 3,
    titulo: 'Nueva sede social: el proyecto ya tiene fecha de inicio',
    categoria: 'Institución',
    fecha: '2026-04-20',
    resumen: 'La comisión directiva presentó el plan de obras de la futura sede, que contará con espacios modernos para todos los socios.',
    cuerpo: `En una asamblea extraordinaria realizada en las instalaciones del club, la comisión directiva presentó el proyecto definitivo para la nueva sede social. Las obras comenzarán el 1° de junio y se estima una duración de 18 meses.\n\nEl nuevo espacio contará con salón de usos múltiples con capacidad para 400 personas, oficinas administrativas modernas, vestuarios renovados para todas las disciplinas y un área de coworking para socios.\n\nLa financiación proviene de una combinación de fondos propios generados por la cuota social, un crédito de la Federación Pampeana de Deportes y el aporte extraordinario de varios sponsors locales que se suman al proyecto.\n\n"Este es un sueño que la institución tenía desde hace décadas. Hoy lo hacemos realidad con el apoyo de todos los socios", expresó el presidente del club en la asamblea.\n\nLos socios podrán seguir el avance de las obras a través de actualizaciones periódicas en el sitio web y en las redes sociales del club.`,
    foto: null,
    fotoPreview: null,
    color: '#302782',
  },
  {
    id: 4,
    titulo: 'El equipo de básquet se prepara para la gran final',
    categoria: 'Básquet',
    fecha: '2026-04-18',
    resumen: 'Tras una temporada impecable, los chicos de All Boys disputarán la final del campeonato el próximo fin de semana.',
    cuerpo: `El equipo de básquet masculino de All Boys completó una temporada extraordinaria y se metió en la final del campeonato provincial. El logro es histórico: es la primera vez en 12 años que el club accede a una instancia definitoria en esta disciplina.\n\nTras eliminar a Ferro SR en una serie dramática de tres partidos, el plantel se enfocó de lleno en la preparación para el partido definitivo que se jugará el próximo sábado a las 20:30 en el Gimnasio Municipal.\n\nEl técnico Rodrigo Gutiérrez destacó el trabajo colectivo: "Este grupo se ganó el derecho de jugar esta final con mucho sacrificio. Vamos a ir a buscarla con todo."\n\nEl fixture de la final se confirmará durante la semana. Se espera un gran convocatoria de hinchas, y el club habilitará transporte para socios que quieran asistir en caso de que el partido se dispute como visitante.`,
    foto: null,
    fotoPreview: null,
    color: '#2E2DA8',
  },
  {
    id: 5,
    titulo: '¡Superamos los 2.000 asociados este año!',
    categoria: 'Socios',
    fecha: '2026-04-15',
    resumen: 'El club celebra un hito histórico con más afiliados que nunca, consolidando su base institucional en La Pampa.',
    cuerpo: `All Boys alcanzó una marca histórica: 2.000 socios activos. El hito se registró este jueves cuando Valentina Ríos, una joven de 16 años, se convirtió en la socia número dos mil en la ventanilla de la sede.\n\nEl crecimiento fue exponencial en los últimos dos años. En 2024 el club contaba con 1.200 afiliados; hoy ese número se duplicó gracias a la gestión activa de la tesorería y la implementación del sistema de cuota digital que facilita el pago desde el celular.\n\n"El socio es la base de todo. Sin el socio no hay club, no hay inferiores, no hay actividades para los chicos de Santa Rosa", afirmó el secretario general.\n\nComo festejo, el club organizará una jornada de puertas abiertas el próximo 3 de mayo donde todos los socios y sus familias podrán disfrutar de actividades gratuitas, sorteos y un espectáculo musical en las instalaciones.`,
    foto: null,
    fotoPreview: null,
    color: '#1a1660',
  },
  {
    id: 6,
    titulo: 'Un nuevo aniversario: todo lo que hay que saber',
    categoria: 'Historia',
    fecha: '2026-04-12',
    resumen: 'All Boys cumple un nuevo año de vida con festejos en el estadio, actos culturales y una muestra fotográfica histórica.',
    cuerpo: `El Club All Boys celebra un año más de historia. Fundado por un grupo de jóvenes apasionados por el deporte en la ciudad de Santa Rosa, La Pampa, el club se ha convertido en una de las instituciones más queridas de la provincia.\n\nLos festejos comenzarán el viernes con la inauguración de una muestra fotográfica en el hall de la sede, con imágenes que repasan los momentos más importantes de la historia institucional. El sábado habrá un acto formal con presencia de ex presidentes y figuras históricas del club.\n\nEl domingo, el partido del torneo local coincide con el aniversario y se vivirá como una fiesta. El estadio lucirá decoración especial, se realizará una ceremonia de reconocimiento a los socios con más antigüedad y la banda del club animará el espectáculo previo.\n\n"Cada año que pasa nos hace más fuertes y más unidos. Nuestro mayor logro es la gente que elige a All Boys", expresó el presidente en un mensaje a los socios.`,
    foto: null,
    fotoPreview: null,
    color: '#302782',
  },
  {
    id: 7,
    titulo: 'El femenino debuta con victoria en el torneo provincial',
    categoria: 'Fútbol Femenino',
    fecha: '2026-04-10',
    resumen: 'Excelente arranque del equipo femenino en la competencia oficial, con un triunfo claro ante rivales de Realicó.',
    cuerpo: `El equipo de fútbol femenino de All Boys hizo su debut en el Torneo Provincial de Fútbol Femenino y lo hizo con una victoria convincente. El 3-1 ante el seleccionado de Realicó fue el puntapié inicial para lo que promete ser una gran temporada.\n\nEl equipo, conformado mayormente por jugadoras surgidas de las inferiores del club y reforzado por algunas incorporaciones de La Pampa capital, demostró solidez defensiva y velocidad en el contrataque.\n\nLos tres goles fueron anotados por Luciana Molina (2) y Valentina Torres. La capitana del equipo habló al finalizar: "Estamos muy felices. Trabajamos mucho en la pretemporada y se nota en el campo."\n\nEl próximo partido será como visitante en General Pico en dos semanas. El cuerpo técnico ya analiza al rival y planifica los entrenamientos de la semana.`,
    foto: null,
    fotoPreview: null,
    color: '#2E2DA8',
  },
  {
    id: 8,
    titulo: 'Gran cena de socios: éxito rotundo',
    categoria: 'Eventos',
    fecha: '2026-04-05',
    resumen: 'Más de 300 personas participaron de la cena anual del club, que recaudó fondos para las obras de infraestructura.',
    cuerpo: `La cena anual de socios de All Boys fue un éxito absoluto. Más de 300 personas se dieron cita en el salón del club para compartir una noche especial que combinó gastronomía, sorteos y un espectáculo musical en vivo.\n\nEl evento recaudó fondos destinados exclusivamente a las obras de infraestructura del predio de entrenamiento. El monto exacto se informará en los próximos días, pero desde la comisión directiva adelantaron que "superó ampliamente las expectativas".\n\nEntre los presentes estuvieron socios de toda la vida, familias de jugadores, autoridades municipales y representantes del deporte pampeano. El momento más emotivo fue cuando se homenajeó a los fundadores del club y a sus familias.\n\nLa próxima cena ya está en carpeta para finales de año. La tesorería informará a través de los canales oficiales las fechas de venta de tickets con anticipación para que ningún socio se quede sin su lugar.`,
    foto: null,
    fotoPreview: null,
    color: '#1a1660',
  },
]

const NoticiasContext = createContext(null)

export function NoticiasProvider({ children }) {
  const [noticias, setNoticias] = useState(INITIAL_NEWS)

  const agregarNoticia = (data) => {
    setNoticias(prev => [{ id: Date.now(), ...data }, ...prev])
  }

  const editarNoticia = (id, data) => {
    setNoticias(prev => prev.map(n => n.id === id ? { ...n, ...data } : n))
  }

  const eliminarNoticia = (id) => {
    setNoticias(prev => prev.filter(n => n.id !== id))
  }

  return (
    <NoticiasContext.Provider value={{ noticias, agregarNoticia, editarNoticia, eliminarNoticia }}>
      {children}
    </NoticiasContext.Provider>
  )
}

export const useNoticias = () => useContext(NoticiasContext)
