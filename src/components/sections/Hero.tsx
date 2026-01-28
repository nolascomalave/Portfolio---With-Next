import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { JSX } from "@emotion/react/jsx-runtime";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { BlurFade } from "@/components/ui/blur-fade"
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Email, Github, LinkedIn } from "@/lib/links";

export const contactLinks: {label: string, Icon: JSX.Element, href: string, target?: string}[] = [
    {label: "GitHub", Icon: <GithubIcon />, href: Github, target: "_blank"},
    {label: "LinkedIn", Icon: <LinkedinIcon />, href: LinkedIn, target: "_blank"},
    {label: "Email", Icon: <MailIcon />, href: Email},
]

export default function Hero() {
    const __ = useTranslations('layout.sections_content.home'),
        locale = useLocale(),
        isLocaleES = locale === "es",
        greetingTypingDuration = 100,
        greetingText = __("greeting", {name: "Nolasco Malavé"}),
        greetingDuration = greetingText.length * greetingTypingDuration;

    return (<section className="m-auto py-8 mt-14 px-4 max-w-7xl">
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
                    {/* <Chip icon={Icon} label={label} variant="outlined" style={{color: "inherit"}} /> */}
                </a>
            ))}
        </div>

        <h1 className="text-5xl font-bold mt-8 text-center">
            <TypingAnimation duration={greetingTypingDuration}>{greetingText}</TypingAnimation>
        </h1>
        <h3 className="text-3xl m-auto flex items-center gap-2 justify-center dark:text-neon-green text-dark-purple">
            <BlurFade delay={((greetingDuration / 1000))}>
                {`${(isLocaleES ? __("role").concat(" ") : "")}${__("subrole")}${(!isLocaleES ? (" ").concat(__("role")) : "")}`}
            </BlurFade>
        </h3>
        <BlurFade delay={((greetingDuration / 1000))}>
            <p className={`max-w-3xl text-2xl m-auto mt-8 mb-8 text-gray-500 dark:text-gray-300 indent-6 text-blur-md`}>{__("description")}</p>
        </BlurFade>
    </section>)
}