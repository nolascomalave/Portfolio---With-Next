import { useTranslations } from "next-intl";
import TimeLine from "@/components/TimeLine";

export default function Experience() {
    const __ = useTranslations('layout.sections_content');

    return (
        <section className="m-auto py-8 mt-14 px-4 max-w-7xl">
            <TimeLine/>
        </section>
    );
}