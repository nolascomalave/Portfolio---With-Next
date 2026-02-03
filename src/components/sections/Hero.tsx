"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { JSX } from "@emotion/react/jsx-runtime";
import { TypingAnimation } from "@/components/ui/typing-animation";
// import { BlurFade } from "@/components/ui/blur-fade"
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Email, Github, LinkedIn } from "@/lib/links";
import { useInView } from "framer-motion";
import { useNav } from "@/context/NavContext";
import { useEffect, useRef } from "react";
import * as motion from "motion/react-client";

export const contactLinks: {label: string, Icon: JSX.Element, href: string, target?: string}[] = [
    {label: "GitHub", Icon: <GithubIcon />, href: Github, target: "_blank"},
    {label: "LinkedIn", Icon: <LinkedinIcon />, href: LinkedIn, target: "_blank"},
    {label: "Email", Icon: <MailIcon />, href: Email},
];

const showInViewMotionProps = {
    initial:{ opacity: 0, y: 30 },
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

export default function Hero({ id }: { id: string; }) {
    const __ = useTranslations('layout.sections_content.home'),
        locale = useLocale(),
        isLocaleES = locale === "es",
        greetingTypingDuration = 100,
        greetingText = __("greeting", {name: "Nolasco Malavé"}),
        greetingDuration = greetingText.length * greetingTypingDuration;
    const ref = useRef<HTMLElement>(null),
        isInView = useInView(ref, {
            margin: "-40% 0px -60% 0px", // activa cuando ~40% superior entra y ~60% inferior sale
            // amount: 0.3, // o usa amount si prefieres porcentaje fijo
        }),
        { setActiveSection } = useNav();

    useEffect(() => {
      if (isInView) {
        setActiveSection(id);
      }
    }, [isInView]);

    return (
        <section ref={ref} id={id} className="m-auto px-4 pb-8 pt-22 max-w-7xl">
            <motion.div {...showInViewMotionProps} >
                <Image
                    width={100}
                    height={100}
                    src="/hero.webp"
                    alt="Picture of the author"
                    className="rounded-full m-auto"
                    style={{
                        width: "8rem"
                    }}
                />

                <div className="flex gap-2 justify-center mt-4">
                    {contactLinks.map(({label, Icon, href, target}) => (
                        <a href={href} target={target} className="hover:scale-105 duration-150 text-inherit [&_svg]:size-5" key={label}>
                            <Badge variant="outline" className="py-1 border-dark dark:border-light">
                                {Icon}
                                <span className="ml-1">{label}</span>
                            </Badge>
                        </a>
                    ))}
                </div>
            </motion.div>

            <motion.div
                {...showInViewMotionProps}
                transition={{
                    ...showInViewMotionProps,
                    ease: "easeIn",
                    delay: 0.1
                }}
                className="mt-8"
            >
                <h1 className="text-5xl font-bold text-center">
                    <TypingAnimation duration={greetingTypingDuration} delay={1000}>{greetingText}</TypingAnimation>
                </h1>
            </motion.div>

            <motion.h3
                {...showInViewMotionProps}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    ...showInViewMotionProps,
                    delay: (greetingDuration / 1000) + 1.2
                }}
                className="text-3xl m-auto flex items-center gap-2 justify-center dark:text-neon-green text-dark-purple"
            >
                {`${(isLocaleES ? __("role").concat(" ") : "")}${__("subrole")}${(!isLocaleES ? (" ").concat(__("role")) : "")}`}
            </motion.h3>

            <motion.p
                {...showInViewMotionProps}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                    ...showInViewMotionProps,
                    ease: "easeIn",
                    delay: (greetingDuration / 1000) + 1.8
                }}
                className={`max-w-3xl text-2xl m-auto mt-8 mb-8 text-gray-500 dark:text-gray-300 indent-6 text-blur-md`}
            >
                {__("description")}
            </motion.p>
            {/* <h3 className="text-3xl m-auto flex items-center gap-2 justify-center dark:text-neon-green text-dark-purple">
                <BlurFade delay={((greetingDuration / 1000))}>
                    {`${(isLocaleES ? __("role").concat(" ") : "")}${__("subrole")}${(!isLocaleES ? (" ").concat(__("role")) : "")}`}
                </BlurFade>
            </h3>
            <BlurFade delay={((greetingDuration / 1000))}>
                <p className={`max-w-3xl text-2xl m-auto mt-8 mb-8 text-gray-500 dark:text-gray-300 indent-6 text-blur-md`}>{__("description")}</p>
            </BlurFade> */}
        </section>
    );
}