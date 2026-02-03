"use client";

import { useTranslations } from "next-intl";
import { OrbitingCirclesDemo } from "../OrbitingIcons";
import { ShineBorder } from "../ui/shine-border";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useNav } from "@/context/NavContext";
import { article as Article } from "motion/react-client";

export const showInViewMotionProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
        duration: 0.5,
        ease: "easeOut"
    },
    viewport: {
        once: true,           // ← muy importante: anima solo la primera vez
        amount: 0.3           // 30% del elemento debe estar visible para disparar
    }
};

export default function About({ id }: { id: string; }) {
    const __ = useTranslations('layout.sections_content');
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, {
        margin: "-40% 0px -60% 0px", // activa cuando ~40% superior entra y ~60% inferior sale
        // amount: 0.3, // o usa amount si prefieres porcentaje fijo
    });
    const { setActiveSection } = useNav();

    useEffect(() => {
      if (isInView) {
        setActiveSection(id);
      }
    }, [isInView]);

    return (<section ref={ref} id={id} className="m-auto px-4 pb-8 pt-22 max-w-7xl flex flex-col lg:flex-row gap-10 items-start">
        <Article
            {...showInViewMotionProps}
            className="w-full"
        >
            <h2 className="text-4xl uppercase mb-8">{__("about.title")}</h2>

            <p className="text-1xl text-gray-500 dark:text-gray-300 indent-6">{__("about.description.p1")}</p>
            <br/>
            <p className="text-1xl text-gray-500 dark:text-gray-300 indent-6">{__("about.description.p2")}</p>
            <br/>
            <p className="text-1xl text-gray-500 dark:text-gray-300 indent-6">{__("about.description.p3")}</p>
        </Article>

        <Article
            {...showInViewMotionProps}
            className="w-full"
        >
            <Card className="relative w-full overflow-hidden">
                <ShineBorder shineColor={["#9368F9", "#E769F7", "#40CF89"]} />
                <CardHeader>
                    <CardTitle className="text-4xl uppercase mb-2">
                        {__("skills.title")}
                    </CardTitle>
                    {/* <h2 className="text-4xl uppercase mb-8">{__("skills.title")}</h2> */}
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
        </Article>
    </section>)
}