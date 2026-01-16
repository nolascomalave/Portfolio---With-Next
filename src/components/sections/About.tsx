import { useTranslations } from "next-intl";
import { OrbitingCirclesDemo } from "../OrbitingIcons";
import { ShineBorder } from "../ui/shine-border";
import { Card, CardHeader, CardTitle } from "../ui/card";
// import { AuroraText } from "../ui/aurora-text";

export default function About() {
    const __ = useTranslations('layout.sections_content');

    return (<section className="m-auto py-8 mt-14 px-4 max-w-7xl flex gap-10 items-start">
        <article className="w-full">
            <h1 className="text-5xl mb-8">{__("about.title")}</h1>

            <p className="text-1xl text-gray-400 indent-6">{__("about.description.p1")}</p>
            <br/>
            <p className="text-1xl text-gray-400 indent-6">{__("about.description.p2")}</p>
            <br/>
            <p className="text-1xl text-gray-400 indent-6">{__("about.description.p3")}</p>
        </article>
        <article className="w-full">
            <Card className="relative w-full overflow-hidden">
                <ShineBorder shineColor={["#9368F9", "#E769F7", "#40CF89"]} />
                <CardHeader>
                    <CardTitle className="text-5xl mb-2">
                        {/* <AuroraText colors={["var(--dark-purple-color)", "var(--neon-green-color)", "var(--light-purple-color)"]}> */}
                            {__("skills.title")}
                        {/* </AuroraText> */}
                    </CardTitle>
                    {/* <h1 className="text-5xl mb-8">{__("skills.title")}</h1> */}
                </CardHeader>
                <div className="pl-6 pb-6 flex gap-4 justify-between">
                    <p className="grow">Hola</p>
                    {/* <div className="w-48 overflow-hidden ml-auto"> */}
                    <div className="w-48 overflow-hidden">
                        <OrbitingCirclesDemo/>
                    </div>
                    {/* </div> */}
                </div>
            </Card>
        </article>
    </section>)
}