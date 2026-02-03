"use client";

import { useTranslations } from "next-intl";
import TimeLine from "@/components/TimeLine";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNav } from "@/context/NavContext";
import { section as Section } from "motion/react-client";

export default function Experience({ id }: { id: string; }) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, {
        margin: "-40% 0px -60% 0px", // activa cuando ~40% superior entra y ~60% inferior sale
        // amount: 0.3, // o usa amount si prefieres porcentaje fijo
    });
    const __ = useTranslations('layout.sections_content.experience');
    const { setActiveSection } = useNav();

    useEffect(() => {
      if (isInView) {
        setActiveSection(id);
      }
    }, [isInView]);

    return (
      <Section
        ref={ref} id={id}
        className="m-auto px-4 pb-8 pt-22 max-w-7xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.5,
            ease: "easeOut"
        }}
        viewport={{
            once: true,           // ← muy importante: anima solo la primera vez
            amount: 0.3           // 30% del elemento debe estar visible para disparar
        }}
      >
          <h2 className="text-4xl mb-8 uppercase">{__("title")}</h2>
          <TimeLine/>
      </Section>
    );
}