# 📁 Imágenes — Prisma Global Club

> Coloca cada imagen en la ruta exacta indicada. El nombre del archivo debe ser idéntico.

---

```
d:/2028/p2/p/
└── public/
    └── images/
        │
        ├── hero/
        │   └── hero-team.jpg
        │       → Foto grupal del equipo Prisma
        │         Origen: EQUIPO PRISMA/IMG_7456.JPEG
        │         Formato ideal: JPG cuadrada 800×800 px mínimo
        │
        ├── pillars/
        │   ├── responsabilidad.jpg
        │   │   → Foto de la actividad de Responsabilidad Ciudadana
        │   │     Origen: RESPONSABILIDAD CIUDADANA/IMG_3560.JPEG
        │   │     (charla a escolares o donación a Flora Tristán)
        │   │
        │   ├── inclusion.jpg
        │   │   → Foto de actividad de Desarrollo e Inclusión Social
        │   │     Origen: DESARROLLO E INCLUSION SOCIAL/IMG_5544.JPEG
        │   │     (trabajo comunitario, voluntarios con familias)
        │   │
        │   └── patrimonio.jpg
        │       → Foto de actividad de Patrimonio Cultural
        │         Origen: PATRIMONIO CULTURAL/RAICES/IMG_7121.JPEG
        │         (evento de arte, presentación, Raíces o Mes del Arte)
        │
        ├── projects/
        │   ├── ferreycorp.jpg
        │   │   → Foto de la presentación en Ferreycorp
        │   │     Origen: CHARLAS Y TALLERES/PRESENTACION EN FERREYCORP/IMG_6254.JPEG
        │   │
        │   ├── magis.jpg
        │   │   → Foto del Taller de Liderazgo a MAGIS
        │   │     Origen: CHARLAS Y TALLERES/TALLER MAGIS/Taller de liderazgo a MAGIS.JPEG
        │   │
        │   ├── mes-arte.jpg
        │   │   → Foto del evento Mes del Arte
        │   │     Origen: PATRIMONIO CULTURAL Y ARTISTICO/MES DEL ARTE/IMG_6990.JPEG
        │   │
        │   ├── raices.jpg
        │   │   → Foto del proyecto Raíces
        │   │     Origen: PATRIMONIO CULTURAL Y ARTISTICO/RAICES/IMG_7121.JPEG
        │   │
        │   ├── flora-tristan.jpg
        │   │   → Foto de donaciones a Flora Tristán
        │   │     Origen: RESPONSABILIDAD CIUDADANA/APOYO Y DONACIONES A FLORA TRISTAN/IMG_3612.JPEG
        │   │
        │   └── conecta-villa.jpg
        │       → Captura de pantalla del video de charla a escolares
        │         Origen: RESPONSABILIDAD CIUDADANA/ALIANZA CON CONECTA VILLA/
        │                 WhatsApp Video 2026-08-29 at 12.52.45.mp4
        │         (abre el video, pausa en un buen frame y haz captura de pantalla)
        │
        ├── team/
        │   ├── team-cover.jpg
        │   │   → Foto de portada del equipo (horizontal, panorámica)
        │   │     Origen: EQUIPO PRISMA/80D0FE95-670E-4A86-B484-F384EB57573E.PNG
        │   │
        │   ├── team-01.jpg
        │   │   → Foto secundaria del equipo
        │   │     Origen: EQUIPO PRISMA/11105839-aed5-4d4a-ae14-1ecef1ccfe81.JPEG
        │   │
        │   └── team-02.jpg
        │       → Foto de Priscila Manrique (perfil del voluntario)
        │         Origen: EQUIPO PRISMA/da0602d1-c363-44ff-9cf2-d2d6929a79dc.JPEG
        │         (foto individual, preferible cuadrada o retrato)
        │
        └── logos/
            ├── prisma-logo.svg
            │   → Logo oficial de Prisma Global Club (fondo transparente)
            │     Versión oscura — para usar en fondo blanco (Navbar)
            │     Formato: SVG preferido / PNG si no tienes SVG
            │
            └── prisma-logo-white.svg
                → Logo oficial versión blanca (fondo transparente)
                  Para usar en el Footer (fondo negro)
                  Formato: SVG preferido / PNG si no tienes SVG
```

---

## ⚡ Orden de prioridad para colocar las imágenes

| Prioridad | Archivo                       | Por qué es importante                                  |
| :-------: | ----------------------------- | ------------------------------------------------------ |
|   🔴 1    | `pillars/responsabilidad.jpg` | Se ve en la sección principal de Pilares               |
|   🔴 2    | `pillars/inclusion.jpg`       | Se ve en la sección principal de Pilares               |
|   🔴 3    | `pillars/patrimonio.jpg`      | Se ve en la sección principal de Pilares               |
|   🟠 4    | `hero/hero-team.jpg`          | Portada del sitio (requiere cambiar 1 línea de código) |
|   🟡 5    | `logos/prisma-logo.svg`       | Reemplaza el texto PRISMA del navbar                   |
|   🟡 6    | `team/team-02.jpg`            | Avatar del perfil de voluntario                        |
|   ⚪ 7    | `projects/*`                  | Para una futura sección de proyectos                   |
|   ⚪ 8    | `team/team-cover.jpg`         | Para una futura sección de equipo                      |

---

## 📐 Tamaños recomendados

| Carpeta           | Proporción      | Tamaño mínimo                    |
| ----------------- | --------------- | -------------------------------- |
| `hero/`           | 1:1 cuadrada    | 800 × 800 px                     |
| `pillars/`        | 16:9 horizontal | 800 × 450 px                     |
| `projects/`       | 16:9 horizontal | 800 × 450 px                     |
| `team/` (portada) | 16:9 horizontal | 1200 × 675 px                    |
| `team/` (avatar)  | 1:1 cuadrada    | 400 × 400 px                     |
| `logos/`          | —               | SVG sin límite / PNG 400px ancho |

> Comprime en [squoosh.app](https://squoosh.app) antes de pegar. Peso máximo: 300 KB por imagen.
