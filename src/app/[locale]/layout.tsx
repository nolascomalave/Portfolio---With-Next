import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
// import Navbar from '@/components/Navbar'; // crea este componente después
import '../globals.css';
import { notFound } from 'next/navigation';
import Navbar, { HomeAnchorID } from '@/components/Navbar';
import { Inter } from 'next/font/google';
import { TooltipProvider } from '@/components/ui/tooltip';
import Footer from '@/components/Footer';
import { NavProvider } from '@/context/NavContext';
import { Toaster } from '@/components/Toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // para usarla como variable CSS
  display: 'swap',         // evita flash de texto sin fuente
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Nolasco Malavé / Desarrollador Full-Stack',
  // description: 'Desarrollador especializado en Next.js, React, TypeScript. Portafolio con proyectos reales y experiencia en [tu nicho].',
  icons: {
    // SVG para navegadores modernos
    icon: { url: '/favicon.svg', type: 'image/svg' },
    shortcut: '/favicon.ico',
    apple: '/favicon.png'
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning className={`${inter.className} font-sans`}>
      <body
        // className='text-light-text dark:text-dark-text min-h-screen flex flex-col bg-[radial-gradient(circle_at_top_left,_rgba(64,207,137,0.35),_var(--light-color)_70%)] dark:bg-[radial-gradient(125%_125%_at_50%_100%,_#000000_40%,_#350136_100%)]'
        className='text-light-text dark:text-dark-text min-h-screen flex flex-col light:bg-light bg-[radial-gradient(circle,_#0001_1.5px,_transparent_1.5px)] dark:bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1.5px,_transparent_1.5px)]'
        style={{
          // backgroundImage: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)",
          /* backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed", */
          backgroundSize: "30px 30px",
          backgroundPosition: "0 0",
          backgroundAttachment: "fixed"
        }}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"          // empieza en dark como tu ejemplo
            enableSystem={true}                 // respeta preferencia del sistema
            disableTransitionOnChange    // evita animación rara al cambiar
          >
            <TooltipProvider>
              <NavProvider>
                <div id={HomeAnchorID} className='absolute top-0 w-0 h-0 -z-10'></div>
                <Navbar />
                <main className="grow">
                  {children}
                </main>
                {/* Footer aquí si lo quieres global */}
                <Toaster />
                <Footer/>
              </NavProvider>
            </TooltipProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}