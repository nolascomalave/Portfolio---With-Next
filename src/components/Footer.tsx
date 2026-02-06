import { useTranslations } from 'next-intl';

export default function Footer() {
    const __ = useTranslations('layout');

    return (
        <footer className="text-center px-4 pb-8 pt-22 text-sm text-gray-700 dark:text-gray-100">
            {__.rich("footer", {
                highlighted: (chunks) => <span className='text-dark-purple dark:text-neon-green'>{chunks}</span>,
                paragraph: (chunks) => <p>{chunks}</p>
            })}
        </footer>
    );
}