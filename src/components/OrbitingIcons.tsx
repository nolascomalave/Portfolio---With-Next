import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import Image from "next/image";

// Database Icons:
/* import MySQL from "@/components/web-technologies/databases/MySQL.svg";
import MicrosoftSQLServer from "@/components/web-technologies/databases/MicrosoftSQLServer.svg";
import MongoDB from "@/components/web-technologies/databases/MongoDB.svg";
import PostgresSQL from "@/components/web-technologies/databases/PostgresSQL.svg";

// Backend Icons:
import Express from "@/components/web-technologies/databases/Express.svg";
import Git from "@/components/web-technologies/databases/Git.svg";
import GraphQL from "@/components/web-technologies/databases/GraphQL.svg";
import Laravel from "@/components/web-technologies/databases/Laravel.svg";
import Nestjs from "@/components/web-technologies/databases/Nest.js.svg";
import Nextjs from "@/components/web-technologies/databases/Next.js.svg";
import Nodejs from "@/components/web-technologies/databases/Node.js.svg";
import PHP from "@/components/web-technologies/databases/PHP.svg";
import Prisma from "@/components/web-technologies/databases/prisma.svg";

// Frontend Icons:
import CSS3 from "@/components/web-technologies/frontend/CSS3.svg";
import HTML5 from "@/components/web-technologies/frontend/HTML5.svg";
import JavaScript from "@/components/web-technologies/frontend/JavaScript.svg";
import JQuery from "@/components/web-technologies/frontend/jQuery.svg";
import MaterialUI from "@/components/web-technologies/frontend/MaterialUI.svg";
import React from "@/components/web-technologies/frontend/React.svg";
import Sass from "@/components/web-technologies/frontend/Sass.svg";
import Tailwindcss from "@/components/web-technologies/frontend/tailwindcss.svg";
import TypeScript from "@/components/web-technologies/frontend/TypeScript.svg"; */

/* export function OrbitingCirclesDemo() {
    return (
      <div className="relative flex h-96 w-full flex-col items-center justify-center overflow-hidden">
          <OrbitingCircles iconSize={40}>
              <Icons.CSS3/>
              <Icons.HTML5/>
              <Icons.JavaScript/>
              <Icons.jQuery/>
              <Icons.MaterialUI/>
              <Icons.React/>
              <Icons.Sass/>
              <Icons.tailwindcss/>
              <Icons.TypeScript/>
              <Icons.Nextjs/>
          </OrbitingCircles>
          <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
              <Icons.MicrosoftSQLServer/>
              <Icons.PHP/>
              <Icons.MongoDB/>
              <Icons.Nodejs/>
              <Icons.PostgresSQL/>
              <Icons.Nestjs/>
              <Icons.Express/>
              <Icons.Git/>
              <Icons.GraphQL/>
              <Icons.Laravel/>
              <Icons.Prisma/>
          </OrbitingCircles>
      </div>
    )
} */
export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-96 w-96 flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles iconSize={250} reverse>
            <Icons.React/>
            <Icons.MaterialUI/>
            <Icons.TypeScript/>
            <Icons.tailwindcss/>
            <Icons.Sass/>
            <Icons.jQuery/>
            <Icons.JavaScript/>
            <Icons.CSS3/>
            <Icons.HTML5/>
        </OrbitingCircles>
        <OrbitingCircles iconSize={40} radius={100}>
            <Icons.Express/>
            <Icons.Git/>
            <Icons.GraphQL/>
            <Icons.Laravel/>
            <Icons.Nestjs/>
            <Icons.Nextjs/>
            <Icons.Nodejs/>
            <Icons.PHP/>
            <Icons.Prisma/>
        </OrbitingCircles>
        <OrbitingCircles iconSize={30} radius={40} reverse speed={2}>
            <Icons.MySQL/>
            <Icons.MicrosoftSQLServer/>
            <Icons.MongoDB/>
            <Icons.PostgresSQL/>
        </OrbitingCircles>
    </div>
  )
}

const Icons = {
    // Database Icons:
    MySQL: () => (<Image src="/web-technologies/databases/MySQL.svg" width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    MicrosoftSQLServer: () => (<Image src="/web-technologies/databases/MicrosoftSQLServer.svg" width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    MongoDB: () => (<Image src="/web-technologies/databases/MongoDB.svg" width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    PostgresSQL: () => (<Image src="/web-technologies/databases/PostgresSQL.svg" width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),

    // Backend Icons:
    Express: () => (<Image src="/web-technologies/backend/Express.svg" width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    Git: () => (<Image src="/web-technologies/backend/Git.svg" width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    GraphQL: () => (<Image src="/web-technologies/backend/GraphQL.svg" width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    Laravel: () => (<Image src="/web-technologies/backend/Laravel.svg" width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    Nestjs: () => (<Image src="/web-technologies/backend/Nestjs.svg" width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    Nextjs: () => (<Image src="/web-technologies/backend/Nextjs.svg" width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    Nodejs: () => (<Image src="/web-technologies/backend/Nodejs.svg" width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    PHP: () => (<Image src="/web-technologies/backend/PHP.svg" width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    Prisma: () => (<Image src="/web-technologies/backend/Prisma.svg" width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),

    // Frontend Icons:
    CSS3: () => (<Image src="/web-technologies/frontend/CSS3.svg" width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    HTML5: () => (<Image src="/web-technologies/frontend/HTML5.svg" width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    JavaScript: () => (<Image src="/web-technologies/frontend/JavaScript.svg" width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    jQuery: () => (<Image src="/web-technologies/frontend/jQuery.svg" width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    MaterialUI: () => (<Image src="/web-technologies/frontend/MaterialUI.svg" width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    React: () => (<Image src="/web-technologies/frontend/React.svg" width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    Sass: () => (<Image src="/web-technologies/frontend/Sass.svg" width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    tailwindcss: () => (<Image src="/web-technologies/frontend/tailwindcss.svg" width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    TypeScript: () => (<Image src="/web-technologies/frontend/TypeScript.svg" width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
}
