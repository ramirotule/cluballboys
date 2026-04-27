Contexto:
Actúa como un Senior Frontend Developer experto en UX/UI. El objetivo es rediseñar el sitio web del Club Atlético All Boys transformando su estructura actual en una aplicación moderna, 100% responsive y de alto rendimiento.

Stack Tecnológico:

Framework: React (Componentes funcionales).

Estilos: Tailwind CSS (Mobile-first approach).

Iconografía: Lucide-react o FontAwesome.

Directrices de Diseño (Identidad Visual):

Paleta de Colores: Utiliza estrictamente los colores institucionales: Blanco puro (#FFFFFF), Negro sólido (#000000) y un Gris muy sutil para contrastes de fondo (#F3F4F6).

Estilo: Limpio, moderno y deportivo. Usa bordes redondeados moderados (rounded-lg), sombras suaves para dar profundidad y tipografías sans-serif legibles.

Requerimientos de Estructura y Responsividad:

Navbar: Debe ser un componente pegajoso (sticky top-0) con un menú hamburguesa funcional para móviles que se despliegue lateralmente.

Sección Hero: Un banner principal impactante con el escudo, el nombre del club y un CTA (Call to Action). Debe adaptarse de h-screen en desktop a una altura proporcional en mobile.

Grilla de Secciones: Reestructura las secciones (Noticias, Plantel, Institución, Socios) usando una CSS Grid dinámica:

grid-cols-1 para móviles.

grid-cols-2 para tablets.

grid-cols-3 o 4 para pantallas grandes.

Cards de Noticias: Implementa un diseño de tarjetas donde la imagen ocupe la parte superior y el texto la inferior, asegurando que el contenido sea legible en cualquier ancho de pantalla.

Footer: Organizado en columnas que se apilen verticalmente en dispositivos móviles.

Instrucciones de Salida:
Genera el código necesario para:

La configuración de tailwind.config.js con los colores personalizados.

El componente principal App.js que ensamble la estructura.

Componentes separados para Navbar, Hero, NewsGrid y Footer.

Asegúrate de incluir clases de Tailwind como container mx-auto px-4 para mantener el contenido alineado.

Tips adicionales para tu proyecto:
Tipografía: Te recomiendo usar una fuente como Inter o Oswald (vía Google Fonts) para darle ese toque de sitio de noticias deportivas moderno.
