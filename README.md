# **Floraluxe Bloom**

Quiero construir desde cero una experiencia web premium para una floristería llamada:

FLORISTERÍA DELUXE

PREMIUM

IMPORTANTE:

No quiero una tienda online convencional.

Quiero una experiencia de marca de lujo, cinematográfica, editorial e inmersiva.

La animación y las microinteracciones son PARTE FUNDAMENTAL del diseño.

No quiero una página estática a la que simplemente se le agreguen algunos fade-ins.

Quiero que prácticamente cada sección tenga una interacción o una animación cuidadosamente diseñada, pero SIN saturar la experiencia.

La referencia visual principal será la imagen que adjunto al proyecto.

Úsala como referencia de dirección artística, composición, iluminación, colores y nivel de lujo, pero NO la conviertas en una imagen estática de la página.

==================================================

1. IDENTIDAD VISUAL

==================================================

Marca:

FLORISTERÍA DELUXE PREMIUM

Concepto:

Floristería de alta gama, elegante, emocional, moderna y cinematográfica.

Estética:

- lujo editorial

- fotografía floral de alta calidad

- negro profundo / crema / ivory / champagne

- dorado elegante

- rosa muy suave como color de acento

- glassmorphism muy sutil

- iluminación difusa

- sombras suaves

- mucho espacio negativo

- tipografía elegante

- sensación de boutique de lujo

Evitar:

- aspecto de plantilla

- aspecto de ecommerce genérico

- exceso de botones

- colores chillones

- demasiados efectos simultáneos

- animaciones infantiles

- gradients baratos

- cards genéricas de Bootstrap

- exceso de bordes

- diseño recargado

La página debe sentirse como una marca de lujo, no como una tienda de flores convencional.

==================================================

2. TECNOLOGÍA

==================================================

Utiliza una arquitectura moderna y mantenible.

Frontend:

- React / TypeScript

- Tailwind CSS

- componentes reutilizables

- responsive real

- mobile-first

- excelente rendimiento

Animaciones:

- GSAP cuando sea apropiado

- ScrollTrigger

- CSS animations/transitions

- Canvas cuando sea apropiado para partículas/pétalos

- Framer Motion si resulta más adecuado para microinteracciones

- usar requestAnimationFrame para animaciones continuas cuando corresponda

IMPORTANTE:

No crear animaciones pesadas que destruyan el rendimiento.

Las animaciones deben respetar:

- prefers-reduced-motion

- dispositivos móviles

- rendimiento de GPU

- evitar layout thrashing

- evitar cientos de elementos DOM animándose simultáneamente

La experiencia debe sentirse fluida a 60fps.

==================================================

3. INTRO CINEMATOGRÁFICA

==================================================

La página debe comenzar con una INTRO CINEMATOGRÁFICA independiente.

Esta intro debe ser una experiencia de pantalla completa.

Fondo:

negro / negro cálido.

Usar los 5 assets de pétalos disponibles:

petal-01.png

petal-02.png

petal-03.png

petal-04.png

petal-05.png

Los pétalos NO deben ser una secuencia de video.

Utilizarlos como partículas reales mediante Canvas 2D o una solución optimizada.

Los pétalos deben:

- caer con velocidades diferentes

- tener tamaños diferentes

- rotar

- tener profundidad simulada

- tener pequeñas oscilaciones

- reaccionar ligeramente al movimiento

- tener blur según profundidad

- aparecer y desaparecer de forma natural

La animación debe sentirse orgánica y fotorealista.

==================================================

4. COREOGRAFÍA DE LA INTRO

==================================================

La referencia conceptual es:

0%

Pantalla completamente negra.

10%

Comienzan a aparecer lentamente los pétalos.

20%

Aparece:

FLORISTERÍA

DELUXE

con tipografía editorial elegante y dorado champagne.

35%

Aparece una iluminación cálida detrás de la marca.

45-50%

Revelación progresiva de una fotografía floral premium.

60%

FLORISTERÍA DELUXE comienza a transformarse/desvanecerse.

70-75%

Aparece:

PREMIUM

con una entrada elegante y profunda.

85%

Composición:

FLORISTERÍA

DELUXE

— PREMIUM —

90-100%

La composición alcanza su estado final.

Después:

transición cinematográfica hacia el Home.

La intro debe ser ligeramente más rápida que la versión original que se utilizó como referencia.

Debe existir un botón discreto:

"SALTAR INTRO"

==================================================

5. HERO PRINCIPAL

==================================================

Después de la intro aparece el Home.

El Hero debe sentirse como una continuación natural de la cinematografía.

Quiero un SLIDER PRINCIPAL MUY CREATIVO.

IMPORTANTE:

Me gusta la idea del slider enumerado:

01

02

03

04

Mantener esta estructura porque da sensación editorial y permite al usuario saber dónde está.

Pero NO quiero un slider tradicional.

Cada slide debe sentirse como una escena.

El slider debe tener:

- imagen floral premium

- texto editorial

- número de slide

- indicadores elegantes

- transición cinematográfica

- parallax

- movimiento de imagen

- movimiento independiente del texto

- pequeños pétalos

- iluminación dinámica

Cuando cambia el slide:

- la imagen no simplemente hace fade

- debe existir una transición de profundidad

- el texto debe entrar/salir de forma diferente

- los números deben reaccionar

- la iluminación debe cambiar

- algunos pétalos pueden atravesar la transición

Quiero que parezca una campaña publicitaria de una marca de lujo.

==================================================

6. SLIDE CON VIDEO

==================================================

Uno de los slides principales debe utilizar VIDEO.

El video debe ser:

- floral

- elegante

- cinematográfico

- corto

- loop

- muted

- autoplay cuando sea posible

- optimizado para web

No quiero controles de video visibles.

El video debe integrarse visualmente con el resto del slider.

Si todavía no existe el video final, crear un placeholder correctamente preparado para sustituirlo posteriormente.

==================================================

7. SCROLL CINEMATOGRÁFICO

==================================================

ESTO ES MUY IMPORTANTE.

No quiero que el usuario simplemente haga scroll y las secciones aparezcan una debajo de otra.

Cada scroll debe producir algún tipo de respuesta visual.

NO significa que absolutamente todo tenga que moverse exageradamente.

Quiero MICROINTERACCIONES Y ANIMACIONES PREMIUM.

Ejemplos:

Al entrar una sección:

- reveal de texto

- imágenes que aparecen con profundidad

- desplazamiento suave

- máscaras

- blur que se elimina

- scale

- parallax

Al hacer scroll:

- elementos que reaccionan a la posición

- imágenes con desplazamiento independiente

- títulos que cambian ligeramente de escala

- fondos que cambian de iluminación

- pétalos que atraviesan determinadas secciones

- elementos que entran en diferentes velocidades

Quiero utilizar ScrollTrigger para crear una narrativa visual.

IMPORTANTE:

No animar todo al mismo tiempo.

Las animaciones deben tener jerarquía.

==================================================

8. SECCIÓN DE BENEFICIOS

==================================================

Después del Hero:

- Flores frescas

- Entrega el mismo día

- Diseños exclusivos

- Empaque premium

Esta sección debe ser limpia.

Cada beneficio puede tener:

- icono elegante

- pequeña animación al entrar

- microinteracción al hover

- línea divisoria animada

No hacer efectos exagerados.

==================================================

9. SECCIÓN DE COLECCIONES

==================================================

Esta es una de las secciones MÁS IMPORTANTES.

Existen EXACTAMENTE 4 categorías principales:

1. AMOR & ROMANCE

2. CUMPLEAÑOS

3. ELEGANCIA

4. CONDOLENCIAS

Quiero cards GRANDES.

No quiero las típicas cards pequeñas de ecommerce.

Cada card debe sentirse como una pieza editorial.

Las imágenes deben ocupar gran parte de la tarjeta.

==================================================

10. AURA NEÓN ROSA DE LAS COLECCIONES

==================================================

Quiero que alrededor de las cards exista una AURA ROSA / NEÓN MUY SUTIL.

IMPORTANTE:

NO debe ser una imagen estática.

Debe estar ANIMADA.

El aura debe:

- recorrer lentamente el borde

- cambiar suavemente de intensidad

- generar pequeños destellos

- reaccionar al hover

- aumentar ligeramente al acercar el cursor

- volver suavemente a su estado normal al salir

El movimiento debe ser lento y elegante.

NO quiero un efecto RGB gamer.

Debe parecer iluminación de una campaña de lujo.

==================================================

11. PÉTALOS EN LAS CARDS

==================================================

Alrededor de las cards de las colecciones quiero pequeños pétalos.

Los pétalos deben:

- caer lentamente

- aparecer de forma aleatoria

- tener diferentes velocidades

- rotar

- desaparecer

- interactuar visualmente con la card

No llenar la pantalla de pétalos.

Debe parecer que algunos pétalos están cayendo alrededor de cada colección.

==================================================

12. INTERACCIÓN DE LAS CARDS

==================================================

Al hacer hover:

- ligera elevación

- zoom muy pequeño de la fotografía

- aura rosa ligeramente más intensa

- título se mueve unos pocos píxeles

- botón aparece o se enfatiza

- imagen cambia ligeramente de profundidad

Al hacer click:

Crear una transición premium hacia la categoría.

Por ejemplo:

la card puede expandirse ligeramente y la nueva página aparecer mediante una transición cinematográfica.

NO hacer un simple cambio instantáneo de ruta.

==================================================

13. SCROLL DE COLECCIONES

==================================================

Cuando el usuario llegue a esta sección mediante scroll:

Las 4 cards no deben aparecer simultáneamente.

Crear una entrada coreografiada:

Card 1

↓

Card 2

↓

Card 3

↓

Card 4

con pequeños desfases.

Cada una debe tener una animación ligeramente diferente.

==================================================

14. LAS MÁS DESTACADAS

==================================================

Debajo de las 4 colecciones:

Título:

LAS MÁS DESTACADAS

Crear un grid/carousel premium de productos.

Los productos deben venir desde Supabase.

Cada Product Card debe tener:

- fotografía

- nombre

- precio COP

- precio USD cuando corresponda

- botón añadir al carrito

- favorito

- hover premium

Animaciones:

- zoom de imagen

- desplazamiento de imagen

- brillo suave

- botón que reacciona al hover

- pequeño movimiento del producto

- entrada escalonada al hacer scroll

Al añadir al carrito:

NO utilizar un simple alert.

Crear una microanimación:

- botón responde

- producto genera pequeño feedback visual

- icono del carrito reacciona

- contador del carrito se actualiza

- feedback elegante

==================================================

15. CATÁLOGO

==================================================

Crear catálogo completo.

Filtros por las 4 categorías.

Orden:

- destacados

- precio menor

- precio mayor

- A-Z

Las cards deben mantener el mismo lenguaje visual premium.

==================================================

16. DETALLE DE PRODUCTO

==================================================

Crear páginas individuales de producto.

Debe incluir:

- galería

- imagen principal grande

- thumbnails

- nombre

- descripción

- precio

- selector de cantidad

- dedicatoria

- añadir al carrito

- comprar / pedir por WhatsApp

Animaciones:

- galería con transición suave

- cambio de imagen elegante

- zoom

- entrada progresiva de información

- selector de cantidad interactivo

- botón de carrito premium

==================================================

17. CARRITO

==================================================

Crear Cart Drawer lateral.

Al abrir:

- animación desde el lateral

- backdrop blur

- productos entrando suavemente

- subtotal

- moneda seleccionada

No debe sentirse como un drawer genérico.

==================================================

18. CHECKOUT

==================================================

El sistema de compra inicialmente funcionará mediante:

WHATSAPP

IMPORTANTE:

BOLD quedará preparado para una futura integración pero NO debe utilizarse todavía como método activo.

El usuario podrá:

- revisar carrito

- completar datos de entrega

- seleccionar fecha

- seleccionar franja horaria

- escribir dedicatoria

- confirmar pedido

Al confirmar:

crear registro del pedido

y generar mensaje estructurado para WhatsApp.

==================================================

19. SUPABASE

==================================================

Conectar el proyecto con Supabase.

Usar Supabase como backend real.

Tablas:

categories

products

product_images

orders

order_items

site_settings

==================================================

20. CATEGORIES

==================================================

Campos recomendados:

id

name_es

name_en

slug

description_es

description_en

image_url

sort_order

is_active

created_at

==================================================

21. PRODUCTS

==================================================

Campos:

id

category_id

name_es

name_en

slug

description_es

description_en

price_cop

is_featured

is_active

created_at

updated_at

==================================================

22. PRODUCT IMAGES

==================================================

Campos:

id

product_id

image_url

is_primary

sort_order

==================================================

23. ORDERS

==================================================

Campos:

id

order_number

customer_name

customer_phone

customer_email

delivery_address

delivery_date

delivery_time_slot

dedication

subtotal_cop

currency

status

payment_method

created_at

Estados:

pending

confirmed

preparing

out_for_delivery

delivered

cancelled

Métodos iniciales:

whatsapp

Preparar arquitectura para:

bold

pero NO activar Bold todavía.

==================================================

24. ORDER ITEMS

==================================================

Campos:

id

order_id

product_id

product_name

quantity

unit_price_cop

subtotal_cop

IMPORTANTE:

El precio debe quedar congelado dentro de order_items en el momento de crear el pedido.

==================================================

25. SITE SETTINGS

==================================================

Crear configuración para:

- TRM

- modo TRM automático/manual

- teléfono WhatsApp

- Instagram

- Facebook

- TikTok

- dirección

- horarios

- textos del Hero

- configuración de intro

==================================================

26. MONEDA

==================================================

Moneda base:

COP

USD:

USD = COP / TRM

Mostrar USD con 2 decimales.

Debe existir selector:

COP

USD

La TRM debe poder cambiarse desde administración.

==================================================

27. IDIOMAS

==================================================

Soporte:

ES

EN

Todo texto de interfaz debe poder traducirse.

Productos:

name_es

name_en

description_es

description_en

==================================================

28. ADMIN PANEL

==================================================

Crear panel administrativo protegido.

Debe permitir:

- crear productos

- editar productos

- eliminar/desactivar productos

- subir imágenes

- ordenar imágenes

- administrar categorías

- cambiar productos destacados

- revisar pedidos

- cambiar estado de pedido

- modificar TRM

- cambiar WhatsApp

- modificar redes

- modificar horarios

- editar contenido básico del Hero

Usar Supabase Auth.

El service role key NUNCA debe exponerse en el frontend.

==================================================

29. GOOGLE MAPS

==================================================

Crear sección cerca del footer:

VISÍTANOS

Mostrar:

- dirección

- horario

- botón "Ver en Google Maps"

- mapa de Google Maps / integración correspondiente

La sección también debe tener una pequeña animación al entrar mediante scroll.

==================================================

30. REDES SOCIALES

==================================================

Crear sección:

SÍGUENOS

Mostrar:

Instagram

Facebook

TikTok

WhatsApp

Puede incluir miniaturas/fotos de contenido.

Hover:

- imagen aumenta ligeramente

- overlay elegante

- icono aparece

- transición suave

==================================================

31. FOOTER

==================================================

Footer elegante.

Columnas:

DELUXE PREMIUM

MENÚ

- Tienda

- Colecciones

- Nosotros

- Contacto

INFORMACIÓN

- Envíos

- Cambios y devoluciones

- Términos

- Privacidad

AYUDA

- Cómo comprar

- Métodos de pago

- Seguimiento

- Soporte

MEDIOS DE PAGO

Mostrar métodos disponibles.

Footer debe sentirse parte del diseño, no un bloque genérico.

==================================================

32. ANIMACIÓN GLOBAL

==================================================

REGLA PRINCIPAL:

Cada sección importante debe responder al scroll.

Ejemplos:

HERO:

parallax + movimiento de pétalos + transición de contenido.

BENEFICIOS:

iconos y textos aparecen progresivamente.

COLECCIONES:

cards coreografiadas + aura animada + pétalos.

PRODUCTOS:

entrada escalonada + hover + microinteracciones.

MAPA:

reveal con desplazamiento y blur.

REDES:

imágenes reaccionan al hover.

FOOTER:

entrada suave.

==================================================

33. CURSOR / MICROINTERACCIONES

==================================================

En desktop puedes crear pequeños efectos de cursor donde tengan sentido.

Por ejemplo:

- cursor interactivo sobre botones

- imágenes que reaccionan ligeramente

- elementos que tienen magnetismo suave

NO convertir todo en un cursor personalizado exagerado.

==================================================

34. TRANSICIONES ENTRE PÁGINAS

==================================================

Las rutas:

Home

Catalog

Category

Product

Cart

Checkout

deben tener transiciones suaves.

Evitar flashes blancos.

Mantener continuidad visual.

==================================================

35. RESPONSIVE

==================================================

Desktop:

experiencia cinematográfica completa.

Tablet:

reducir partículas y efectos.

Mobile:

mantener la sensación premium pero priorizar rendimiento.

No simplemente encoger el diseño desktop.

Rediseñar las composiciones cuando sea necesario.

==================================================

36. ACCESIBILIDAD

==================================================

Respetar:

prefers-reduced-motion

Si el usuario solicita reducción de movimiento:

reducir o eliminar:

- partículas

- parallax

- animaciones complejas

Mantener navegación y funcionalidad completas.

==================================================

37. RENDIMIENTO

==================================================

MUY IMPORTANTE.

No quiero que una página bonita termine siendo lenta.

Optimizar:

- imágenes

- lazy loading

- video

- Canvas

- fuentes

- animaciones

- componentes

- rendering

No crear cientos de elementos animados.

Usar técnicas eficientes.

==================================================

38. ARQUITECTURA

==================================================

Crear componentes reutilizables.

Separar:

components/

animations/

sections/

products/

cart/

checkout/

admin/

lib/

hooks/

stores/

Crear utilidades de animación reutilizables.

Ejemplo:

useScrollReveal()

useParallax()

useMagneticHover()

usePetalAnimation()

No duplicar lógica innecesariamente.

==================================================

39. CONTENIDO INICIAL

==================================================

Crear contenido de demostración suficiente para que el sitio se vea completo.

4 categorías.

Al menos 8-12 productos.

Usar nombres elegantes.

Ejemplos:

Pasión Eterna

Encanto Rosado

Alegría Especial

Pureza

Dulce Exquisito

Caja Rosas Eternales

etc.

Las imágenes deben estar preparadas para reemplazarse posteriormente por las fotografías reales.

==================================================

40. EXPERIENCIA FINAL

==================================================

Quiero que cuando alguien entre a la página piense:

"Esto no parece una floristería normal."

Debe sentirse:

lujosa

cinematográfica

emocional

moderna

sofisticada

interactiva

memorable

Pero NO quiero:

ruido visual

animaciones sin propósito

efectos gamer

exceso de partículas

scroll mareante

transiciones lentas

La filosofía debe ser:

FEWER EFFECTS, BETTER EFFECTS.

Cada animación debe tener una razón.

==================================================

41. REFERENCIA VISUAL

==================================================

La imagen adjunta es una referencia visual de cómo quiero que se sienta la página después de la intro.

IMPORTANTE:

No copiar literalmente la imagen.

Utilizarla para interpretar:

- composición

- jerarquía

- iluminación

- paleta

- estilo floral

- tarjetas

- estética premium

- relación entre fotografía y texto

La aura rosa de las tarjetas DEBE convertirse en una animación real mediante código.

Los pétalos también deben ser elementos animados reales.

==================================================

42. ORDEN DE CONSTRUCCIÓN

==================================================

Construir en este orden:

FASE 1

Sistema visual + arquitectura + Supabase.

FASE 2

Intro cinematográfica.

FASE 3

Hero + slider cinematográfico.

FASE 4

Sección beneficios.

FASE 5

4 colecciones animadas.

FASE 6

Productos destacados.

FASE 7

Catálogo.

FASE 8

Detalle de producto.

FASE 9

Carrito.

FASE 10

Checkout + WhatsApp.

FASE 11

Mapa + redes + footer.

FASE 12

Admin.

FASE 13

Optimización y responsive.

FASE 14

Auditoría completa de animaciones y microinteracciones.

NO considerar una fase terminada simplemente porque "funciona".

Antes de finalizar cada fase:

- revisar responsive

- revisar animaciones

- revisar rendimiento

- revisar errores

- comprobar navegación

- comprobar que no se rompa ninguna sección existente

==================================================

43. REGLA FINAL

==================================================

Antes de escribir código, analiza toda esta especificación.

Si una decisión técnica no está definida, elige la opción que mejor preserve:

LUJO + FLUIDEZ + RENDIMIENTO + INTERACTIVIDAD.

No simplifiques el diseño convirtiéndolo en una tienda genérica.

No elimines las animaciones para "hacerlo más fácil".

No reemplaces las animaciones por simples fades.

Quiero una experiencia web de nivel agencia premium.

Primero construye la arquitectura correctamente.

Después construye las secciones.

Después perfecciona las animaciones.

Finalmente realiza una auditoría completa de UX, responsive, accesibilidad y rendimiento.
logo y favicon:  https://i.ibb.co/nNhsZmT9/Logo-Floristeria-Deluxe-Premium.png
Hola, necesito que migres este proyecto para que despliegue correctamente en Vercel como una Single Page Application (SPA) estática. Actualmente está usando TanStack Start / TanStack Router con SSR y por eso Vercel falla (genera .vercel/output/ con functions serverless que no funcionan bien). Quiero que hagas EXACTAMENTE esta migración, paso a paso, sin omitir nada:

1. Eliminar TanStack Start y TanStack Router por completo:

Desinstala: @tanstack/react-start, @tanstack/react-router, @tanstack/router-plugin, @tanstack/router-devtools, y cualquier paquete relacionado de TanStack routing.
Borra archivos generados: src/routeTree.gen.ts, src/router.tsx, src/ssr.tsx, src/client.tsx, carpeta .vercel/, carpeta .output/, y cualquier app.config.ts de TanStack Start.
2. Instalar react-router-dom v6:

bun add react-router-dom react-helmet-async
3. Reescribir vite.config.ts como Vite estándar (SIN plugins de TanStack ni de Cloudflare):

import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [tailwindcss(), viteReact()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: { outDir: "dist" },
});
4. Reescribir src/main.tsx con BrowserRouter:

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter><App /></BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
5. Convertir todas las rutas de TanStack (createFileRoute, Outlet de TanStack, Link de @tanstack/react-router, useNavigate de TanStack, etc.) al equivalente de react-router-dom:

createFileRoute(...) → exporta un componente normal.
import { Link } from "@tanstack/react-router" → import { Link } from "react-router-dom" (y cambia to="/x" se mantiene igual).
useNavigate() de TanStack → useNavigate() de react-router-dom.
Outlet → Outlet de react-router-dom.
Crea un src/App.tsx con <Routes><Route path="..." element={<Componente />} /></Routes>.
6. Crear vercel.json en la raíz para que las rutas SPA funcionen al recargar:

{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
7. Asegurar index.html en la raíz con <div id="root"></div> y <script type="module" src="/src/main.tsx"></script>.

8. En package.json deja solo: "build": "vite build" y "dev": "vite". Elimina cualquier script de TanStack Start tipo vinxi build.

REGLAS IMPORTANTES:

NUNCA uses TanStack Start, TanStack Router, ni SSR.
NUNCA generes wrangler.jsonc, preset de Cloudflare, ni configuración SSR de Vercel.
El output de build debe ser estático en dist/ (solo HTML/CSS/JS).
Vercel detectará automáticamente Vite y desplegará dist/ como estático con los rewrites del vercel.json.
Cuando termines, confírmame que el build local (bun run build) genera solo la carpeta dist/ sin .vercel/output/functions/.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://floristeriadeluxepremium.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ff710d1c-7888-4786-96e4-7890f8c6993f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
