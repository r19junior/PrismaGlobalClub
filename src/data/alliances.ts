export interface Alliance {
  number: string;
  type: string;
  entity: string;
  objective: string;
  value: string;
  icon: string; // SVG path
}

export const alliances: Alliance[] = [
  {
    number: "01",
    type: "Académicos",
    entity: "Universidades e Institutos",
    objective: "Aval académico, co-certificación y acceso a espacios.",
    value:
      "Oportunidades de voluntariado práctico y fortalecimiento de la Responsabilidad Social Universitaria (RSU).",
    icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
  },
  {
    number: "02",
    type: "Corporativos",
    entity: "Empresas Privadas",
    objective: "Financiamiento, sponsorship, donaciones y mentoría experta.",
    value:
      "Posicionamiento de marca, conexión con talento joven y visibilidad.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    number: "03",
    type: "Estratégicos",
    entity: "ONGs",
    objective: "Articulación de proyectos conjuntos y fuerza de voluntariado compartida.",
    value:
      "Sinergia operativa para maximizar el alcance y evitar duplicidad.",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
  {
    number: "04",
    type: "Institucionales",
    entity: "Gobiernos y Organizaciones Internacionales",
    objective: "Legitimidad, incidencia en políticas públicas y asistencia técnica.",
    value:
      "Datos de campo, contacto con juventudes y capacidad de movilización.",
    icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
  },
];
