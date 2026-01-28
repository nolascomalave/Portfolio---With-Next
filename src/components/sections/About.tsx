import { useTranslations } from "next-intl";
import { OrbitingCirclesDemo } from "../OrbitingIcons";
import { ShineBorder } from "../ui/shine-border";
import { Card, CardHeader, CardTitle } from "../ui/card";

export default function About() {
    const __ = useTranslations('layout.sections_content');

    return (<section className="m-auto py-8 mt-14 px-4 max-w-7xl flex flex-col lg:flex-row gap-10 items-start">
        <article className="w-full">
            <h1 className="text-5xl mb-8">{__("about.title")}</h1>

            <p className="text-1xl text-gray-500 dark:text-gray-300 indent-6">{__("about.description.p1")}</p>
            <br/>
            <p className="text-1xl text-gray-500 dark:text-gray-300 indent-6">{__("about.description.p2")}</p>
            <br/>
            <p className="text-1xl text-gray-500 dark:text-gray-300 indent-6">{__("about.description.p3")}</p>
        </article>
        <article className="w-full">
            <Card className="relative w-full overflow-hidden">
                <ShineBorder shineColor={["#9368F9", "#E769F7", "#40CF89"]} />
                <CardHeader>
                    <CardTitle className="text-5xl mb-2">
                        {__("skills.title")}
                    </CardTitle>
                    {/* <h1 className="text-5xl mb-8">{__("skills.title")}</h1> */}
                </CardHeader>
                <div className="pl-6 pb-6 pr-6 sm:pr-0 flex flex-col sm:flex-row gap-4 justify-between">
                    <div className="grow text-gray-500 dark:text-gray-300 indent-6">
                        <p>{__("skills.description")}</p>
                        <br/>
                        <p>{__("skills.description2")}</p>
                    </div>
                    {/* <div className="w-48 overflow-hidden ml-auto"> */}
                    <div className="-mx-6 sm:mx-0 sm:w-48 overflow-hidden shrink-0 flex justify-center sm:block">
                        <OrbitingCirclesDemo className="relative flex h-96 w-96 flex-col items-center justify-center overflow-hidden"/>
                    </div>
                    {/* </div> */}
                </div>

                {/* <div className="pl-6 pb-6 flex flex-col sm:flex-row gap-4 justify-between">
                    <div className="grow text-gray-500 dark:text-gray-300 indent-6">
                        <p>{__("skills.description")}</p>
                        <br/>
                        <p>{__("skills.description2")}</p>
                    </div>
                    <div className="sm:w-48 overflow-hidden shrink-0 flex items-center sm:block">
                        <OrbitingCirclesDemo className="relative flex h-96 w-96 flex-col items-center justify-center overflow-hidden"/>
                    </div>
                </div> */}
            </Card>
        </article>
    </section>)
}