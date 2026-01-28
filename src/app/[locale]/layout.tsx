import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
// import Navbar from '@/components/Navbar'; // crea este componente después
import '../globals.css';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import { TooltipProvider } from '@/components/ui/tooltip';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // para usarla como variable CSS
  display: 'swap',         // evita flash de texto sin fuente
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Nolasco Malavé - Portfolio',
  icons: {
    // SVG para navegadores modernos
    icon: { url: '/favicon.png', type: 'image/png' },
    // ICO para compatibilidad (mantén este archivo)
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png', // Opcional para iOS
    /* apple: [
      { url: '/apple-icon.jpg', type: 'image/jpg' },
    ], */
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
      <body className='text-light-text dark:text-dark-text min-h-screen flex flex-col bg-[radial-gradient(circle_at_top_left,_rgba(64,207,137,0.35),_var(--light-color)_70%)] dark:bg-[radial-gradient(125%_125%_at_50%_100%,_#000000_40%,_#350136_100%)]'
        style={{
          // backgroundImage: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"          // empieza en dark como tu ejemplo
            enableSystem={false}                 // respeta preferencia del sistema
            disableTransitionOnChange    // evita animación rara al cambiar
          >
            <TooltipProvider>
              <Navbar />
              <main className="grow">
                {children}
              </main>
              {/* Footer aquí si lo quieres global */}
              <Footer/>
            </TooltipProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}