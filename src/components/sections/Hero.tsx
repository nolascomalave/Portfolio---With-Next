import { Chip, Tooltip } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { MailOutline, GitHub, LinkedIn } from '@mui/icons-material';
import { JSX } from "@emotion/react/jsx-runtime";

export const contactLinks: {label: string, Icon: JSX.Element, href: string, target?: string}[] = [
    {label: "GitHub", Icon: <GitHub color="inherit" />, href: "https://github.com/nolascomalave", target: "_blank"},
    {label: "LinkedIn", Icon: <LinkedIn color="inherit" />, href: "https://www.linkedin.com/in/nolasco-rafael-malave-castro", target: "_blank"},
    {label: "Email", Icon: <MailOutline color="inherit" />, href: "mailto:nolascomalave@hotmail.com"},
]

export default function Hero() {
    const __ = useTranslations('layout.sections_content.home');

    return (<section className="m-auto py-8 mt-8 px-2 max-w-7xl">
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

        <h1 className="text-4xl font-bold mt-4 text-center">{__("greeting", {name: "Nolasco Malavé"})}</h1>
        <h3 className="text-2xl text-center text-dark-purple">{__("role")}</h3>
        <div className="flex gap-2 justify-center mt-6">
            {contactLinks.map(({label, Icon, href, target}) => (
                <a href={href} target={target} className="hover:scale-105 duration-150" key={label}>
                    <Chip icon={Icon} label={label} variant="outlined" style={{color: "inherit"}} />
                </a>
            ))}
            {/* <Tooltip title="GitHub" arrow>
                <a href="https://github.com/nolascomalave" target="_blank">
                    <Chip icon={<GitHub color="inherit" />} label="GitHub" variant="outlined" style={{color: "inherit"}} />
                </a>
            </Tooltip>
            <Tooltip title="LinkedIn" arrow>
                <a href="https://www.linkedin.com/in/nolasco-rafael-malave-castro" target="_blank">
                    <Chip icon={<LinkedIn color="inherit" />} label="LinkedIn" variant="outlined" style={{color: "inherit"}} />
                </a>
            </Tooltip>
            <Tooltip title="Email" arrow>
                <a href="mailto:nolascomalave@hotmail.com">
                    <Chip icon={<MailOutline color="inherit" />} label="Email" variant="outlined" style={{color: "inherit"}} />
                </a>
            </Tooltip> */}
        </div>
    </section>)
}