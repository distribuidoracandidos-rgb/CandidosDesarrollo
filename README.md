# Candido's Distribuidora Mayorista — Ecommerce

Catálogo digital B2B para Candido's Distribuidora Mayorista (Paraná, Entre Ríos).
React + Vite, con productos cargados desde Google Sheets (vía Google Apps Script)
y funcionalidades de pedidos/newsletter/contacto conectadas a Supabase.

## Requisitos

- Node.js 18 o superior
- Una cuenta de Supabase (gratuita) ya configurada — ver sección "Variables de entorno"

## Instalación

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` (o el puerto que indique la terminal).

## Variables de entorno

Creá un archivo `.env` en la raíz del proyecto (junto a `package.json`) con:

```
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-clave-publica
```

Sin estas variables, el sitio funciona igual (catálogo, carrito, WhatsApp) pero
el guardado de pedidos, newsletter y consultas de contacto queda desactivado
(no rompe la página, simplemente esas funciones no hacen nada).

**Importante para Vercel u otro hosting**: estas mismas dos variables hay que
cargarlas también en el panel de "Environment Variables" del hosting, y volver
a hacer un deploy después de cargarlas — si no, van a seguir sin funcionar en
producción aunque anden bien en local.

Corré también el archivo `supabase_permisos.sql` en el SQL Editor de Supabase
para crear las tablas necesarias (`pedidos`, `pedido_items`, `suscriptores`,
`consultas`) y sus permisos.

## Estructura del proyecto

```
src/
  components/     Componentes reutilizables (Header, Footer, ProductCard, etc.)
  pages/          Una página por ruta (Home, Category, Cart, Contact, etc.)
  context/        Contextos de React (carrito de compras, productos)
  services/       Conexión a APIs externas (Google Sheets, Supabase)
  data/           Datos estáticos editables a mano (testimonios, nombres de categoría)
  styles/         CSS, un archivo por componente/página
  router/         Configuración de rutas (React Router) con lazy loading
```

## Mejoras y optimizaciones realizadas

### Rendimiento
- **Lazy loading de páginas**: todas las páginas excepto Home se cargan solo
  cuando el usuario navega a ellas (`React.lazy` + `Suspense`), en vez de bajar
  todo el JavaScript de una sola vez.
- **Code splitting automático**: cada página compila a su propio archivo chico
  (podés verlo corriendo `npm run build` — cada página pesa unos pocos KB).
- **Imágenes con `loading="lazy"`** en productos, carrito y footer (el logo del
  header queda sin lazy a propósito, porque es lo primero que ve el usuario).
- **Imagen del Hero comprimida**: la imagen de fondo se optimizó de ~3MB a
  ~360KB sin pérdida visible de calidad.
- **Scroll automático al tope** en cada cambio de página (antes quedaba el
  scroll de la página anterior, lo cual se sentía "roto").

### SEO
- Meta description, keywords, Open Graph y Twitter Cards completos en
  `index.html`, con imagen social generada a partir del logo real.
- Favicon generado desde el logo (PNG en varios tamaños + SVG).
- `robots.txt` y `sitemap.xml` en `/public`.
- Un solo `<h1>` por página (buena práctica de accesibilidad/SEO).

### Bugs corregidos
- **Espacio en blanco al final de la página**: el layout reservaba 90px fijos
  para la barra de navegación inferior (que solo existe en mobile) en todas
  las pantallas. Se corrigió para que ese espacio solo se reserve en mobile.
- **Pantalla en blanco si faltan las variables de Supabase**: antes, si
  faltaban las variables de entorno en el hosting, toda la app se rompía. Ahora
  el cliente de Supabase se inicializa de forma defensiva: si falta
  configuración, esa función puntual queda desactivada pero el resto del sitio
  sigue funcionando con normalidad.
- **Newsletter sin funcionalidad aparente**: el código en sí funcionaba, pero
  los errores no se distinguían entre sí. Ahora el mensaje de error indica si
  el problema es de configuración (variables de entorno faltantes) o un error
  real del guardado, y se loguea el detalle en la consola del navegador.
- Limpieza de componentes y datos sin uso (`Banner.jsx`, `data/products.js`,
  `data/categories.js` quedaron de una versión anterior del proyecto y ya no
  se usaban en ningún lado).

### Diseño
- Paleta institucional: negro mate + gris grafito + amarillo corporativo,
  tipografía Plus Jakarta Sans (+ Playfair Display para los nombres de
  comercios adheridos).
- TopBar de envíos, Header con logo/buscador/carrito, Hero con foto real +
  slider de promociones, categorías con foto real de producto de fondo,
  carrusel de marcas, "Confían en nosotros" con dos carruseles infinitos en
  direcciones opuestas, testimonios, estadísticas institucionales, newsletter,
  footer completo.

## Limitaciones conocidas (a resolver con contenido real)

- **Logos de marcas**: no se pudieron obtener los isotipos/logotipos oficiales
  de las marcas (Master, Mill, Pueblo, etc.) por restricciones de derechos de
  marca registrada. Se usa un enfoque tipográfico (cada marca en una fuente
  distinta) en su lugar.
- **Fotos de categoría**: se usan fotos reales de productos ya cargados en el
  catálogo (tomadas automáticamente según la categoría), no fotos de stock
  de "papas fritas", "cigarrillos", etc. genéricas.
- **Nombres de "Confían en nosotros"**: son de ejemplo, hay que reemplazarlos
  por los comercios reales.

## Recomendaciones para seguir escalando

1. **Mercado Pago**: ya está instalado `@mercadopago/sdk-react` como
   dependencia pero todavía no está integrado. Para conectarlo hace falta
   crear una cuenta de vendedor en Mercado Pago y generar credenciales
   (Public Key + Access Token), más un pequeño backend (puede ser una función
   serverless de Vercel) para crear las preferencias de pago de forma segura
   (el Access Token nunca debe quedar expuesto en el frontend).
2. **Google Analytics**: agregar el script de Google Analytics 4 (o Google Tag
   Manager) en `index.html`, y un banner de consentimiento de cookies si se
   apunta a usuarios de la Unión Europea (no es obligatorio solo para
   Argentina, pero es buena práctica).
3. **Login + precios mayoristas**: ya está definido el enfoque (registro con
   Nombre/Comercio/Localidad/Teléfono/Tipo de usuario, activación automática,
   10% de descuento mayorista) — pendiente de implementación en una próxima
   etapa.
4. **Mapa interactivo de Entre Ríos**: pendiente de implementación en la
   sección "Nosotros".
5. **Fotos reales**: reemplazar los datos de ejemplo (comercios adheridos,
   testimonios) por contenido real cuando esté disponible.
