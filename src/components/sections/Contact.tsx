import { useTranslations } from "next-intl";
import ContactForm from "../ContactForm";
import { LinkedIn } from "@/lib/links";

export default function Contact() {
    const __ = useTranslations('layout.sections_content.contact');

    return (
        <section className="m-auto py-8 mt-14 px-4 max-w-7xl flex flex-col-reverse items-center lg:items-start lg:flex-row gap-16">
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