import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';
import MainLayout from '../components/MainLayout';
import '../styles/global.scss';

export const metadata: Metadata = {
    title: 'Garažica',
    description: 'Garažica',
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 5,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="hr" suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class">
                    <MainLayout>
                        {children}
                    </MainLayout>
                </ThemeProvider>
            </body>
        </html>
    );
}
