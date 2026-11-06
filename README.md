# Portfolio · Ismael Benabdellah

Portfolio personal de **Ismael Benabdellah**, desarrollador full stack. Una sola página, en tres idiomas y con tema claro/oscuro, que reúne quién soy, mi trayectoria, mi formación, mis proyectos y las tecnologías con las que trabajo.

🌐 **En vivo:** [ismaelben.netlify.app](https://ismaelben.netlify.app)

![Next.js](https://img.shields.io/badge/Next.js-14-000?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-6-2D3748?logo=prisma)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)

---

## Qué incluye

- **Secciones:** cabecera, sobre mí, trayectoria profesional, formación, proyectos y habilidades.
- **Contenido dinámico:** trayectoria, formación y proyectos salen de MySQL mediante Prisma y se sirven por la API interna (`/api/careers`, `/api/educations`, `/api/projects`). Actualizar el portfolio es actualizar la base de datos, sin tocar código.
- **Multidioma:** español (por defecto), inglés y francés con `next-intl`. Los textos de la base de datos se guardan como JSON por idioma.
- **Tema claro/oscuro** con `next-themes` y logo adaptado a cada tema.
- **SEO:** metadatos por idioma, `sitemap.xml`, `robots.txt` e imágenes Open Graph y Twitter.
- **Detalles de interfaz:** animaciones al hacer scroll (AOS), carrusel de proyectos (Swiper), aviso de cookies, botón de volver arriba y página 404 propia.

## Stack

| Capa | Tecnologías |
|------|-------------|
| Framework | Next.js 14 (App Router), React 18, TypeScript |
| Estilos | Tailwind CSS, tailwindcss-animated, AOS, Swiper, React Icons |
| i18n y tema | next-intl, next-themes |
| Datos | Prisma ORM sobre MySQL |
| Formularios y avisos | Formik, Yup, Sonner |

## Puesta en marcha

Requisitos: **Node.js 18+** y una base de datos **MySQL**.

```bash
git clone https://github.com/TheIsmael12/portfolio.git
cd portfolio
npm install

cp .env-example .env          # y rellena DATABASE_URL
npx prisma db push            # crea las tablas
npx prisma generate

npm run dev                   # http://localhost:3000
```

En `prisma/data/` hay un volcado SQL con el contenido actual (proyectos, trayectoria y formación) para cargarlo en la base de datos.

### Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `DATABASE_URL` | Cadena de conexión MySQL: `mysql://usuario:contraseña@host:puerto/base_de_datos` |

### Scripts

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build |
| `npm run lint` | ESLint |

## Modelo de datos

| Modelo | Campos principales |
|--------|--------------------|
| `Projects` | `title`, `desc` (JSON por idioma), `features`, `technologies`, `codeLink`, `demoLink` |
| `Careers` | `title` y `desc` (JSON por idioma), `bussines`, `url`, `startDate`, `finishDate` |
| `Educations` | `degree` (JSON por idioma), `institution`, `startDate`, `finishDate` |

## Estructura

```
messages/              → traducciones (es, en, fr)
prisma/
├── schema.prisma      → modelos Projects, Careers, Educations
└── data/              → volcado SQL con el contenido
src/
├── app/
│   ├── [locale]/      → página principal y 404 por idioma
│   ├── api/           → careers, educations, projects
│   ├── sitemap.ts · robots.ts · imágenes OG
├── components/        → Home/, Static/, Themes/, Language/…
├── lib/               → cliente Prisma y metadatos del sitio
├── i18n.ts · middleware.ts
└── providers/         → ThemeProvider
```

## Contacto

- GitHub: [@TheIsmael12](https://github.com/TheIsmael12)
- Web: [ismaelben.netlify.app](https://ismaelben.netlify.app)
