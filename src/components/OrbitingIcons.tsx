import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import Image from "next/image";
import TechnologiesItems from "@/lib/technologies-items";
export function OrbitingCirclesDemo({className}: {className: string}) {
  return (
    <div className={className}>
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
    MySQL: () => (<Image src={`${TechnologiesItems.database.imagesRoute}${TechnologiesItems.database.items.MySQL.icon}`} width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    MicrosoftSQLServer: () => (<Image src={`${TechnologiesItems.database.imagesRoute}${TechnologiesItems.database.items.MicrosoftSQLServer.icon}`} width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    MongoDB: () => (<Image src={`${TechnologiesItems.database.imagesRoute}${TechnologiesItems.database.items.MongoDB.icon}`} width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    PostgresSQL: () => (<Image src={`${TechnologiesItems.database.imagesRoute}${TechnologiesItems.database.items.PostgresSQL.icon}`} width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),

    // Backend Icons:
    Express: () => (<Image src={`${TechnologiesItems.backend.imagesRoute}${TechnologiesItems.backend.items.Express.icon}`} width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    Git: () => (<Image src={`${TechnologiesItems.backend.imagesRoute}${TechnologiesItems.backend.items.Git.icon}`} width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    GraphQL: () => (<Image src={`${TechnologiesItems.backend.imagesRoute}${TechnologiesItems.backend.items.GraphQL.icon}`} width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    Laravel: () => (<Image src={`${TechnologiesItems.backend.imagesRoute}${TechnologiesItems.backend.items.Laravel.icon}`} width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    Nestjs: () => (<Image src={`${TechnologiesItems.backend.imagesRoute}${TechnologiesItems.backend.items.Nestjs.icon}`} width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    Nextjs: () => (<Image src={`${TechnologiesItems.backend.imagesRoute}${TechnologiesItems.backend.items.Nextjs.icon}`} width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    Nodejs: () => (<Image src={`${TechnologiesItems.backend.imagesRoute}${TechnologiesItems.backend.items.Nodejs.icon}`} width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    PHP: () => (<Image src={`${TechnologiesItems.backend.imagesRoute}${TechnologiesItems.backend.items.PHP.icon}`} width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    Prisma: () => (<Image src={`${TechnologiesItems.backend.imagesRoute}${TechnologiesItems.backend.items.Prisma.icon}`} width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),

    // Frontend Icons:
    CSS3: () => (<Image src={`${TechnologiesItems.frontend.imagesRoute}${TechnologiesItems.frontend.items.CSS3.icon}`}  width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    HTML5: () => (<Image src={`${TechnologiesItems.frontend.imagesRoute}${TechnologiesItems.frontend.items.HTML5.icon}`}  width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    JavaScript: () => (<Image src={`${TechnologiesItems.frontend.imagesRoute}${TechnologiesItems.frontend.items.JavaScript.icon}`}  width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    jQuery: () => (<Image src={`${TechnologiesItems.frontend.imagesRoute}${TechnologiesItems.frontend.items.jQuery.icon}`}  width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    MaterialUI: () => (<Image src={`${TechnologiesItems.frontend.imagesRoute}${TechnologiesItems.frontend.items.MaterialUI.icon}`}  width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    React: () => (<Image src={`${TechnologiesItems.frontend.imagesRoute}${TechnologiesItems.frontend.items.React.icon}`}  width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    Sass: () => (<Image src={`${TechnologiesItems.frontend.imagesRoute}${TechnologiesItems.frontend.items.Sass.icon}`}  width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    tailwindcss: () => (<Image src={`${TechnologiesItems.frontend.imagesRoute}${TechnologiesItems.frontend.items.tailwindcss.icon}`}  width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
    TypeScript: () => (<Image src={`${TechnologiesItems.frontend.imagesRoute}${TechnologiesItems.frontend.items.TypeScript.icon}`}  width={0} height={0} alt="Logo" style={{ width: '2rem', height: '2rem', objectPosition: 'center', objectFit: 'cover' }} />),
}
