import TimeLineItem from "./TimeLineItem";

const timeLineItemData = {
  year: "12/02/2025",
  title: "Kickoff",
  Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum adipisci tenetur sunt quae exercitationem sed pariatur porro!"
}

const Experience = [
  {
    year: "2022 - Actualidad",
    title: "Analista Programador Web Full Stack",
    company: "OCAM Group",
    Description: "Diseño y desarrollo de soluciones empresariales personalizadas para diversos clientes, colaborando en la creación de sistemas integrales que optimizan procesos organizacionales."
  }
]

export default function TimeLine() {
    return (
        <ol className="relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-linear-to-b before:from-dark-purple before:via-light-purple before:to-neon-green">
        <TimeLineItem {...Experience[0]}/>
        <TimeLineItem {...timeLineItemData}/>
        <TimeLineItem {...timeLineItemData}/>
        <TimeLineItem {...timeLineItemData}/>
        <TimeLineItem {...timeLineItemData}/>
      </ol>
    );
}