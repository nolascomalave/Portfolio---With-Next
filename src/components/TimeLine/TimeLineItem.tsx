"use client";

import { ExperienceItemData } from "./TimeLine";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { li as Li } from "motion/react-client";

export default function TimeLineItem({
    year,
    title,
    Description,
    company,
    technologies
}: ExperienceItemData) {
    const [ isLoad, setIsLoad ] = useState<boolean>(false),
        { theme } = useTheme();


    useEffect(() => {
        setIsLoad(true);
    }, []);

    return (
        <Li
            className="group relative md:grid md:grid-cols-2 -ms-1.5 md:-ms-3 md:even:-me-6 md:even:-me-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.3,
                ease: "easeOut"
            }}
            viewport={{
                once: true,           // ← muy importante: anima solo la primera vez
                amount: 0.5           // 30% del elemento debe estar visible para disparar
            }}
        >
            <div className="relative flex items-start gap-4 order-last md:group-even:order-first md:group-even:flex-row-reverse md:group-even:text-right">
                <span className="size-3 shrink-0 rounded-full dark:bg-neon-green bg-dark-purple"></span>

                <div className="-mt-2">
                    <time className="text-xs/none font-medium dark:text-neon-green text-dark-purple">{year}</time>
                    <h2 className="text-md font-bold dark:text-dark-purple text-neon-green">{company}</h2>
                    <h3 className="text-lg font-bold">{title}</h3>

                    <div className="mt-0.5 text-1xl text-gray-500 dark:text-gray-300 mb-2">
                        {React.isValidElement(Description) ? <Description /> : Description}
                    </div>

                    <div className="flex gap-2 md:group-even:justify-end flex-wrap">
                        {technologies.map(({title}, i: number) => (
                            <div
                                key={`${title}-${i}`}
                                className="flex text-xs items-center justify-center gap-1 rounded-sm"
                                style={{
                                    padding: "0.25rem 0.325rem",
                                    borderWidth: "1px",
                                    borderColor: !isLoad ? undefined : theme == "dark" ? "var(--neon-green-color)" : "var(--dark-purple-color)",
                                    color: !isLoad ? undefined : theme == "dark" ? "var(--neon-green-color)" : "var(--dark-purple-color)",
                                }}
                            >
                                {/* <Image src={`${route}${icon}`} width={100} height={100} alt="Logo" style={{ width: '1.5rem', height: '1.5rem', objectPosition: 'center', objectFit: 'cover' }} /> */}
                                <span>{title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="hidden md:block"></div>
        </Li>
    );
}