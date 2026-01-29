"use client";

import { useTranslations } from "next-intl";
import ContactForm from "../ContactForm";
import { LinkedIn } from "@/lib/links";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useNav } from "@/context/NavContext";

export default function Contact({ id }: { id: string; }) {
    const __ = useTranslations('layout.sections_content.contact');
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
        <section ref={ref} id={id} className="m-auto py-8 mt-14 px-4 max-w-7xl flex flex-col-reverse items-center lg:items-start lg:flex-row gap-16">
            <ContactForm />

            <article className="w-full">
                <h1 className="text-2xl mb-8 uppercase">{__("title")}</h1>

                <p className="text-1xl text-gray-500 dark:text-gray-300 indent-6">
                    {__.rich("description", {
                        link: (chunks) => <a href={LinkedIn} className='text-dark-purple dark:text-neon-green italic hover:underline decoration-solid'>{chunks}</a>
                    })}
                </p>
            </article>
        </section>
    );
}