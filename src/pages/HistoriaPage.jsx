const hitos = [
  {
    year: '23 ABR 1923',
    title: 'La Fundación',
    icon: '⚽',
    content: [
      'En el viejo Colegio Nacional existía una entidad deportiva llamada "Asociación Colegio Nacional". A raíz de una actitud arbitraria de sus autoridades hacia los jugadores de la Tercera división, se produjo la escisión que daría origen a All Boys.',
      'Lorenzo Galli, Juan Carlos Berhongaray, Manuel Miguel, José González y el "Negro" Aramburu encontraron a Francisco Colomés alrededor de las 21 horas del 23 de abril en la vereda de la Plaza San Martín. Lo invitaron a presidir una reunión en la pensión de Oreste Mariani, sobre calle Alem.',
      'Lejos estaban de imaginar que esa rebeldía era precursora del nacimiento de una entidad que sería gloria del deporte pampeano.',
    ],
    highlight: 'Plaza San Martín, Santa Rosa, La Pampa',
  },
  {
    year: '1923 – 1924',
    title: 'El Nombre y los Colores',
    icon: '🔵',
    content: [
      'Luego de la primera reunión, se resolvió dar un nuevo nombre al flamante club. Se afirma que fue Isaac Pascual quien diseñó la camiseta, propuso los colores y el nombre "All Boys" —traducción inglesa de "todos muchachos".',
      'Hubo dos mociones: la de Recart para llamarlo "Los Once" y la de Isaac Pascual por All Boys. Triunfó en primera instancia la de Recart, pero Pascual —apodado "el Flaco", reconocido por su perseverancia— logró en una nueva reunión la reconsideración, quedando consagrado el nombre de All Boys.',
    ],
    highlight: '"All Boys" — todos muchachos',
  },
  {
    year: '1924',
    title: 'Primera Comisión Directiva',
    icon: '🏛️',
    content: [
      'La primera Comisión Directiva fue elegida en 1924 e integrada por: Francisco Colomés (Presidente), Patricio Aspell (Vicepresidente), Ernesto Cavallo (Secretario), Pedro Cavallo (Tesorero) y los vocales José Galli, Justo Galli, Cervantes Gascó y José Cuadrado.',
    ],
    highlight: 'Francisco Colomés, primer presidente',
  },
  {
    year: '1924',
    title: 'El Primer Equipo',
    icon: '👕',
    content: [
      'Decir primer equipo es decir fundadores del Club. Solo Don Francisco Colomés no integraba el conjunto, formado así: Manuel Miguel, Lorenzo Galli y Arnoldo Recart; Arturo Colomés, Juan Carlos Berhongaray y Francisco Badillo; Felipe Román, Isaac Pascual, Alfredo Cerquetti, José González y José Aramburu.',
      'All Boys les debe a estos hombres el primer trofeo conquistado.',
    ],
    highlight: '11 hombres, un destino',
  },
  {
    year: '1924',
    title: 'La Primera Sede Social',
    icon: '🏠',
    content: [
      'La primera secretaría funcionó en la casa de la familia Colomés, ubicada en la calle Gil 490, casi esquina Lisandro de la Torre.',
      'Los hinchas rivales bautizaron aquel hogar como la "jabonería de Vieytes", ya que era desde allí de donde partían todas las directivas y donde —entre mate y mate— se convenía la estrategia del club.',
      'La deuda de All Boys con don Pancho Colomés es de esas difíciles de pagar: casi 15 años de yerba y esfuerzo al servicio del club.',
    ],
    highlight: 'Gil 490, casi Lisandro de la Torre',
  },
  {
    year: '1927',
    title: 'El Escudo',
    icon: '🛡️',
    content: [
      'Ernesto Cavallo diseñó el escudo que figura en las notas y sobres de la institución. Fue durante una reunión en que se conversaba largo y tendido cuando él, con un lápiz y un papel, tal vez distraído, diseñó lo que sería el símbolo del club.',
    ],
    highlight: 'Diseñado por Ernesto Cavallo',
  },
  {
    year: '30 AGO 1930',
    title: 'Inauguración del Estadio',
    icon: '🏟️',
    content: [
      'Se inauguró la cancha en la Av. Spinetto. Las ceremonias se realizaron con la presencia del gobernador interino Fernando Jáuregui, quien dio el puntapié inicial del partido disputado entre All Boys e Independiente de General Pico.',
      'Los actos comenzaron a las 14:30 hs. en una tarde lluviosa y fría de agosto. El Padre Vicario Correa Llanos bendijo el campo, y los capitanes de ambos conjuntos intercambiaron gallardetes en el centro del field.',
    ],
    highlight: 'Estadio en Av. Spinetto',
  },
  {
    year: '1994',
    title: 'Maradona en All Boys',
    icon: '⭐',
    content: [
      'El natatorio Ismael Amit tuvo la visita y presencia del astro argentino Diego Maradona durante su estadía en La Pampa, cuando se preparaba para el Mundial de fútbol de Estados Unidos 1994.',
    ],
    highlight: 'Una visita histórica',
  },
  {
    year: '1 FEB 2009',
    title: 'El Estadio toma su nombre',
    icon: '📜',
    content: [
      'El estadio fue bautizado con el nombre de "Doctor Ramón Turnes", antiguo dirigente del club y fiel exponente del fútbol de la provincia de La Pampa.',
      'En el mismo acto se dio nombre a la platea "Mario \'Chiche\' Manfredi" y a la cabecera norte "Dante Mariani".',
    ],
    highlight: 'Estadio "Dr. Ramón Turnes"',
  },
]

const instalaciones = [
  { nombre: 'Gimnasio principal', homenaje: 'José Aquiles Regazzoli' },
  { nombre: 'Trinquete de pelota a paleta', homenaje: 'Oscar Gallego' },
  { nombre: 'Natatorio', homenaje: 'Ismael Amit' },
  { nombre: 'Cancha de básquet', homenaje: '—' },
  { nombre: 'Jardín deportivo', homenaje: '—' },
]

export default function HistoriaPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header hero */}
      <div className="relative overflow-hidden py-20" style={{ background: 'linear-gradient(135deg, #1e1e6e 0%, #2d2d9e 50%, #1a1a5e 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="absolute top-0 bottom-0 w-8 bg-[#F9EA1B]" style={{ left: `${i * 5.5}%` }} />
          ))}
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#F9EA1B] text-sm font-display uppercase tracking-widest mb-2">Club Atlético All Boys</p>
          <h1 className="text-white font-display font-black text-5xl sm:text-6xl uppercase tracking-tight mb-4">
            Nuestra Historia
          </h1>
          <div className="w-20 h-1 bg-[#F9EA1B] rounded-full mx-auto mb-6" />
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            La historia de All Boys no puede desglosarse en episodios aislados porque carecería de sentido.
            Es un proceso gestativo que vio la luz un lejano <strong className="text-white">23 de abril de 1923</strong>.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <div className="relative">
          {/* Línea vertical central */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-0.5"
            style={{ backgroundColor: '#2E2DA820' }}
          />

          <div className="flex flex-col gap-12">
            {hitos.map((hito, i) => {
              const isRight = i % 2 === 0
              return (
                <div key={i} className="relative flex flex-col md:flex-row gap-0 md:gap-8 items-start">

                  {/* Año — desktop izquierda o derecha */}
                  <div className={`hidden md:flex w-1/2 ${isRight ? 'justify-end pr-10' : 'order-last pl-10'}`}>
                    <div className="pt-1 text-right">
                      <span
                        className="inline-block font-display font-black text-sm uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{ backgroundColor: '#F9EA1B', color: '#1e1e6e' }}
                      >
                        {hito.year}
                      </span>
                    </div>
                  </div>

                  {/* Ícono central */}
                  <div
                    className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg border-4 border-white"
                    style={{ backgroundColor: '#2E2DA8' }}
                  >
                    {hito.icon}
                  </div>

                  {/* Contenido */}
                  <div className={`pl-16 md:pl-0 md:w-1/2 ${!isRight ? 'md:order-first md:pr-10 md:text-right' : 'md:pl-10'}`}>
                    {/* Año — mobile */}
                    <span
                      className="inline-block md:hidden font-display font-black text-xs uppercase tracking-widest px-2 py-0.5 rounded-full mb-2"
                      style={{ backgroundColor: '#F9EA1B', color: '#1e1e6e' }}
                    >
                      {hito.year}
                    </span>

                    <div
                      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                      style={{ borderTop: '3px solid #F9EA1B' }}
                    >
                      <h3
                        className="font-display font-bold uppercase text-xl mb-3"
                        style={{ color: '#2E2DA8' }}
                      >
                        {hito.title}
                      </h3>

                      <div className="flex flex-col gap-3">
                        {hito.content.map((p, j) => (
                          <p key={j} className="text-gray-600 text-sm leading-relaxed text-left">
                            {p}
                          </p>
                        ))}
                      </div>

                      <div
                        className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold"
                        style={{ color: '#2E2DA880' }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: '#F9EA1B' }}
                        />
                        {hito.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Instalaciones */}
        <div className="mt-24">
          <div className="text-center mb-10">
            <p className="text-sm font-display uppercase tracking-widest mb-1" style={{ color: '#2E2DA870' }}>
              Patrimonio del club
            </p>
            <h2 className="font-display font-black uppercase text-3xl" style={{ color: '#2E2DA8' }}>
              Nuestras Instalaciones
            </h2>
            <div className="w-12 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: '#F9EA1B' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {instalaciones.map((inst) => (
              <div
                key={inst.nombre}
                className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#F9EA1B] transition-all duration-200"
              >
                <p className="font-display font-bold uppercase text-sm mb-1" style={{ color: '#2E2DA8' }}>
                  {inst.nombre}
                </p>
                {inst.homenaje !== '—' && (
                  <p className="text-xs text-gray-400">
                    Homenaje a <span className="font-semibold text-gray-500">{inst.homenaje}</span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
