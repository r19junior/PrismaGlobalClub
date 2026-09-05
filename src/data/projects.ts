export interface Project {
  slug: string;
  title: string;
  category: string;
  pillar: 'Responsabilidad Ciudadana' | 'Desarrollo e Inclusión Social' | 'Patrimonio Cultural y Artístico';
  description: string;
  image: string; // /images/projects/nombre.jpg
}

export const projects: Project[] = [
  {
    slug: "ferreycorp",
    title: "Presentación en Ferreycorp",
    category: "Charlas y Talleres",
    pillar: "Responsabilidad Ciudadana",
    description: "Exposición de nuestros proyectos ante ejecutivos de Ferreycorp, generando alianzas corporativas para el voluntariado.",
    image: "/images/projects/ferreycorp.jpg",
  },
  {
    slug: "magis",
    title: "Taller de Liderazgo MAGIS",
    category: "Charlas y Talleres",
    pillar: "Responsabilidad Ciudadana",
    description: "Taller de formación en habilidades de liderazgo y servicio social dirigido a jóvenes de la asociación MAGIS.",
    image: "/images/projects/magis.jpg",
  },
  {
    slug: "mes-arte",
    title: "Mes del Arte",
    category: "Evento Cultural",
    pillar: "Patrimonio Cultural y Artístico",
    description: "Mes de actividades artísticas y culturales que celebran la identidad peruana a través de diversas expresiones del arte.",
    image: "/images/projects/mes-arte.jpg",
  },
  {
    slug: "raices",
    title: "Proyecto Raíces",
    category: "Patrimonio Cultural",
    pillar: "Patrimonio Cultural y Artístico",
    description: "Proyecto de recuperación y difusión de tradiciones y expresiones culturales locales como parte de nuestra identidad.",
    image: "/images/projects/raices.jpg",
  },
  {
    slug: "flora-tristan",
    title: "Apoyo a Flora Tristán",
    category: "Donaciones y Apoyo",
    pillar: "Desarrollo e Inclusión Social",
    description: "Campaña de donaciones y apoyo a familias vulnerables en alianza con el centro Flora Tristán.",
    image: "/images/projects/flora-tristan.jpg",
  },
  {
    slug: "conecta-villa",
    title: "Alianza Conecta Villa",
    category: "Charlas a Escolares",
    pillar: "Responsabilidad Ciudadana",
    description: "Charlas de orientación vocacional y ciudadanía activa para escolares en alianza con la red Conecta Villa.",
    image: "/images/projects/conecta-villa.jpg",
  },
];
