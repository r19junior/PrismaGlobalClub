export interface ODS {
  number: number;
  title: string;
}

export interface Pillar {
  number: string;
  title: string;
  description: string;
  ods: ODS[];
  image?: string; // Ruta relativa desde /src/assets/images/pillars/
  icon: string; // SVG path
}

export const pillars: Pillar[] = [
  {
    number: "01",
    title: "Responsabilidad Ciudadana",
    description:
      "Promovemos una ciudadanía activa y comprometida, formando jóvenes capaces de incidir en sus comunidades con propósito y responsabilidad.",
    ods: [
      { number: 16, title: "Paz, Justicia e Instituciones Sólidas" },
      { number: 4,  title: "Educación de Calidad" },
    ],
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
    image: "/images/pillars/responsabilidad.jpg",
  },
  {
    number: "02",
    title: "Desarrollo e Inclusión Social",
    description:
      "Trabajamos por comunidades más equitativas, impulsando proyectos que reducen brechas y amplían oportunidades para todos.",
    ods: [
      { number: 1,  title: "Fin de la Pobreza" },
      { number: 10, title: "Reducción de las Desigualdades" },
    ],
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    image: "/images/pillars/inclusion.jpg",
  },
  {
    number: "03",
    title: "Patrimonio Cultural y Artístico",
    description:
      "Preservamos y difundimos el patrimonio cultural como motor de identidad, cohesión social y desarrollo económico local.",
    ods: [
      { number: 4,  title: "Educación de Calidad" },
      { number: 8,  title: "Trabajo Decente y Crecimiento Económico" },
      { number: 11, title: "Ciudades y Comunidades Sostenibles" },
      { number: 17, title: "Alianzas para Lograr los Objetivos" },
    ],
    icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
    image: "/images/pillars/patrimonio.jpg",
  },
];
