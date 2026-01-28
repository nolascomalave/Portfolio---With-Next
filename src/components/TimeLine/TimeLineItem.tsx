export default function TimeLineItem({
    year = "12/02/2025",
    title = "Kickoff",
    Description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum adipisci tenetur sunt quae exercitationem sed pariatur porro!",
    company = "Company Name"
}: {
    year: string | number;
    Description: string | React.ElementType;
    title: string;
    company: string;
}) {
    return (
        <li className="group relative md:grid md:grid-cols-2 -ms-1.5 md:-ms-3 md:odd:-me-3 md:odd:-ms-0">
            <div className="relative flex items-start gap-4 order-last md:group-odd:order-first md:group-odd:flex-row-reverse md:group-odd:text-right">
                <span className="size-3 shrink-0 rounded-full dark:bg-neon-green bg-dark-purple"></span>

                <div className="-mt-2">
                    <time className="text-xs/none font-medium dark:text-neon-green text-dark-purple">{year}</time>
                    <h2 className="text-md font-bold dark:text-dark-purple text-neon-green">{company}</h2>
                    <h3 className="text-lg font-bold">{title}</h3>

                    <p className="mt-0.5 text-1xl text-gray-500 dark:text-gray-300">
                        {typeof Description === "string" ? Description : <Description />}
                    </p>
                </div>
            </div>
            <div aria-hidden="true" className="hidden md:block"></div>
        </li>
    );
}