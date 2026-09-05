export interface Person {
  name: string;
  role: string;
}

export interface Department {
  name: string;
  members: Person[];
}

export interface OrgLevel {
  level: string;
  label: string;
  departments: Department[];
}

export const orgChart: OrgLevel[] = [
  {
    level: "01",
    label: "Directiva Ejecutiva",
    departments: [
      {
        name: "Dirección Ejecutiva",
        members: [
          { name: "Jerico Beltran",    role: "Director Ejecutivo" },
          { name: "Luciana Palacios",  role: "Directora de Operaciones" },
          { name: "Brunela Remuzgo",   role: "Directora de Desarrollo" },
        ],
      },
    ],
  },
  {
    level: "02",
    label: "Direcciones Centrales",
    departments: [
      {
        name: "Planificación Estratégica",
        members: [{ name: "Camila Montoya", role: "Directora" }],
      },
      {
        name: "Gestión de Voluntarios",
        members: [
          { name: "Freddy Quintanilla", role: "Director" },
          { name: "Fernanda Soler",     role: "Co-Directora" },
        ],
      },
      {
        name: "Logística y Alianzas Estratégicas",
        members: [{ name: "Brunela Remuzgo", role: "Directora" }],
      },
      {
        name: "Marketing y Comunicaciones",
        members: [
          { name: "Santiago Chavez",   role: "Director" },
          { name: "Francesca Taboada", role: "Co-Directora" },
        ],
      },
    ],
  },
  {
    level: "03",
    label: "Direcciones de Pilares",
    departments: [
      {
        name: "Patrimonio Cultural y Artístico",
        members: [
          { name: "Naomi Barreda",  role: "Directora" },
          { name: "Jerico Beltran", role: "Co-Director" },
        ],
      },
      {
        name: "Desarrollo e Inclusión Social",
        members: [
          { name: "Alicia Del Carpio",    role: "Directora" },
          { name: "Andressa Baldárrago", role: "Co-Directora" },
        ],
      },
      {
        name: "Responsabilidad Ciudadana",
        members: [
          { name: "Luciana Palacios", role: "Directora" },
          { name: "Lucero Aguilar",   role: "Co-Directora" },
        ],
      },
    ],
  },
];
