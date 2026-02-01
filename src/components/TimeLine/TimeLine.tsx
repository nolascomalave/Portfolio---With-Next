import { useTranslations } from "next-intl";
import TimeLineItem from "./TimeLineItem";
import technologiesItems from "@/lib/technologies-items";

export type TechNologyItemData = {
  route: string;
  title: string;
  icon: string;
}

export type ExperienceItemData = {
  year: string;
  title: string;
  company: string;
  Description: string | React.ReactNode | React.ElementType;
  technologies: TechNologyItemData[];
}

const Experience: ExperienceItemData[] = [
  {
    year: "Mar 2022 - Actualidad",
    title: "Analista Programador Web Full Stack",
    company: "OCAM Group",
    Description: "Diseño y desarrollo de soluciones empresariales personalizadas para diversos clientes, colaborando en la creación de sistemas integrales que optimizan procesos organizacionales.",
    technologies: [
      { route: technologiesItems.database.imagesRoute, ...technologiesItems.database.items.MicrosoftSQLServer },
      { route: technologiesItems.backend.imagesRoute, ...technologiesItems.backend.items.Laravel },
      ...(["JQuery", "Lit", "Bootstrap"].map(tech => ({route: technologiesItems.frontend.imagesRoute, ...technologiesItems.frontend.items[tech as keyof typeof technologiesItems.frontend.items]})))
    ]
  }, {
    year: "Ago 2021 - Ene 2022",
    title: "Desarrollador Web",
    company: 'Alcaldía del Municipio Turístico El Morro "Lcdo. Diego Bautista Urbaneja"',
    Description: "Contribuí a la modernización digital de procesos mediante el desarrollo de sistemas internos que mejoraron la eficiencia operativa, creando los siguientes sistemas:<br/><ul><li>Sistema de gestión de horario y asistencia</li><li>Sistema de gestión de permisos para ocupar de espacios dentro del municipio, vender bebidas alcohólicas y desplegar publicidad dentro del municipio.</li></ul>",
    technologies: [
      { route: technologiesItems.database.imagesRoute, ...technologiesItems.database.items.MySQL },
      { route: technologiesItems.database.imagesRoute, ...technologiesItems.database.items.MongoDB },
      { route: technologiesItems.backend.imagesRoute, ...technologiesItems.backend.items.PHP },
      { route: technologiesItems.backend.imagesRoute, ...technologiesItems.backend.items.Express },
      ...(["JQuery", "Bootstrap", "React", "MaterialUI"].map(tech => ({route: technologiesItems.frontend.imagesRoute, ...technologiesItems.frontend.items[tech as keyof typeof technologiesItems.frontend.items]})))
    ]
  }
];

function getTechItemByArray(itemType: keyof typeof technologiesItems, items?: string | string[]) {
  if(!items) {
    items = [];
  } else {
    items = typeof items === "object" ? items : [items];
  }

  const techType = technologiesItems[itemType];

  type ItemType = keyof typeof techType.items;

  return items.map(tech => ({route: techType.imagesRoute, ...techType.items[tech as ItemType]}));
}

const ItemsTechnologies = [
  [
    ...getTechItemByArray("database", "MicrosoftSQLServer"),
    ...getTechItemByArray("backend", "Laravel"),
    ...getTechItemByArray("frontend", ["JQuery", "Lit", "Bootstrap"])
  ],
  [
    ...getTechItemByArray("database", ["MySQL", "MongoDB"]),
    ...getTechItemByArray("backend", ["PHP", "Express"]),
    ...getTechItemByArray("frontend", ["JQuery", "Bootstrap", "React", "MaterialUI"])
  ],
  [
    ...getTechItemByArray("database", ["MySQL", "MongoDB"]),
    ...getTechItemByArray("backend", ["Nestjs", "Express", "Nextjs"]),
    ...getTechItemByArray("frontend", ["React", "MaterialUI"])
  ]
];

export default function TimeLine() {
  const __ = useTranslations("layout.sections_content.experience");

    return (
        <ol className="relative space-y-8 before:absolute before:top-0 before:left-0 md:before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-linear-to-b before:from-dark-purple dark:before:from-neon-green before:to-neon-green dark:before:to-dark-purple">
        {/* {Experience.map(item => (<TimeLineItem key={item.company} {...item} />))} */}
        {[0,1,2].map(i => (
          <TimeLineItem key={i}
            year={__(`experiences.${i}.year`)}
            title={__(`experiences.${i}.title`)}
            company={__(`experiences.${i}.company`)}
            Description={__.rich(`experiences.${i}.Description`, {
              list: (chunks) => <ul className="list-disc pl-6 mt-2">{chunks}</ul>,
              listitem: (chunks) => <li>{chunks}</li>
            })}
            technologies={ItemsTechnologies[i]}
          />
        ))}
      </ol>
    );
}