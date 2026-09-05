export interface Value {
  number: string;
  name: string;
  description: string;
  icon: string; // SVG path data
}

export const values: Value[] = [
  {
    number: "01",
    name: "Excelencia",
    description: "Buscamos la calidad y la mejora continua en cada acción para maximizar el impacto sostenible.",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  },
  {
    number: "02",
    name: "Innovación",
    description: "Creamos soluciones creativas y adaptables para desafíos sociales y ambientales.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    number: "03",
    name: "Empatía",
    description: "Trabajamos con solidaridad, honestidad e integridad para transformar vidas a nivel local y global.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    number: "04",
    name: "Pasión",
    description: "Hacemos las cosas con propósito, energía, alegría y compromiso.",
    icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z",
  },
  {
    number: "05",
    name: "Proactividad",
    description: "Actuamos con iniciativa para anticipar y responder a las necesidades de las comunidades.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];
