import { useTranslations } from "next-intl";
import ContactForm from "../ContactForm";

export default function Contact() {
    const __ = useTranslations('layout.sections_content');

    return (
        <section className="m-auto py-8 mt-14 px-4 max-w-7xl flex gap-16">
            <ContactForm />

            <article className="w-full">
                <h1 className="text-2xl mb-8 uppercase">Let’s work together</h1>

                <p className="text-1xl text-gray-500 dark:text-gray-300 indent-6">
                    If you’re building a product, scaling a frontend platform, or navigating complex technical decisions, I’m open to conversations around collaboration, consulting, or technical leadership.
                </p>
                <br />
                <p className="text-1xl text-gray-500 dark:text-gray-300 indent-6">
                    Whether you’re a founder, engineering lead, or part of a growing team, feel free to reach out to discuss how we can work together.
                </p>
            </article>
        </section>
    );
}