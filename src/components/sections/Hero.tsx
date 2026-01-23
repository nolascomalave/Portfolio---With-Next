import { Chip, Tooltip } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { MailOutline, GitHub, LinkedIn } from '@mui/icons-material';
import { JSX } from "@emotion/react/jsx-runtime";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { BlurFade } from "@/components/ui/blur-fade"

export const contactLinks: {label: string, Icon: JSX.Element, href: string, target?: string}[] = [
    {label: "GitHub", Icon: <GitHub color="inherit" />, href: "https://github.com/nolascomalave", target: "_blank"},
    {label: "LinkedIn", Icon: <LinkedIn color="inherit" />, href: "https://www.linkedin.com/in/nolasco-rafael-malave-castro", target: "_blank"},
    {label: "Email", Icon: <MailOutline color="inherit" />, href: "mailto:nolascomalave@hotmail.com"},
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
            width={0}
            height={0}
            src="/hero.webp"
            alt="Picture of the author"
            className="rounded-full m-auto"
            style={{
                width: "8rem"
            }}
        />

        <div className="flex gap-2 justify-center mt-4">
            {contactLinks.map(({label, Icon, href, target}) => (
                <a href={href} target={target} className="hover:scale-105 duration-150" key={label}>
                    <Chip icon={Icon} label={label} variant="outlined" style={{color: "inherit"}} />
                </a>
            ))}
        </div>

        <h1 className="text-5xl font-bold mt-8 text-center">
            <TypingAnimation duration={greetingTypingDuration}>{greetingText}</TypingAnimation>
        </h1>
        <h3 className="text-3xl m-auto flex items-center gap-2 justify-center text-dark-purple"/*  style={{justifyContent: isLocaleES ? "start" : "end"}} */>
            {/* {isLocaleES ? (<span className="text-gray-300">{__("role")}</span>) : null} <WordRotate className="text-dark-purple" words={[__("subrole"), __("subrole1"), __("subrole2")]}/> {isLocaleES ? null : (<span className="text-gray-300">{__("role")}</span>)} */}
            {/* <TextAnimate animation="blurInUp" by="character" delay={greetingDuration / 1000} duration={0.7}>{`${(isLocaleES ? __("role").concat(" ") : "")}${__("subrole")}${(!isLocaleES ? (" ").concat(__("role")) : "")}`}</TextAnimate> */}
            <BlurFade delay={((greetingDuration / 1000))}>
                {`${(isLocaleES ? __("role").concat(" ") : "")}${__("subrole")}${(!isLocaleES ? (" ").concat(__("role")) : "")}`}
            </BlurFade>
        </h3>
        <BlurFade delay={((greetingDuration / 1000))}>
            <p className={`${/* styles["fade-in-once"] */ ""} max-w-3xl text-2xl m-auto mt-8 mb-8 text-gray-400 indent-6 text-blur-md`} /* style={{animationDelay: `${((greetingDuration / 1000) + 1.4)}s`}} */>{__("description")}</p>
        </BlurFade>
    </section>)
}