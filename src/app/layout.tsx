import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Nathan Lombardelli",
    description: "Portfolio de Nathan Lombardelli",
    keywords: ['Portfolio', 'Nathan Lombardelli', 'Lombardelli', 'web developper', 'web développeur'],
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="fr">
        <body>{children}</body>
        </html>
    );
}
