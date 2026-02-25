import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { MigrationHandler } from "@/components/MigrationHandler";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RE Academy — Зарубежная недвижимость: курс и тренажёр",
  description: "Интерактивный курс на 3 реальных кейса (38 шагов) и тренажёр знаний (200+ вопросов по 6 странам). Учитесь анализировать инвестиции в недвижимость на практике.",
  metadataBase: new URL("https://www.reacademy.io"),
  openGraph: {
    title: "RE Academy — Зарубежная недвижимость: курс и тренажёр",
    description: "Интерактивный курс: 3 кейса · 38 шагов. Тренажёр знаний: 200+ вопросов · 6 стран. Образовательная платформа для профессионалов рынка недвижимости.",
    url: "https://www.reacademy.io",
    siteName: "RE Academy",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RE Academy — Зарубежная недвижимость: курс и тренажёр",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RE Academy — Зарубежная недвижимость: курс и тренажёр",
    description: "Интерактивный курс: 3 кейса · 38 шагов. Тренажёр знаний: 200+ вопросов · 6 стран. Учитесь инвестировать на реальных проектах.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon-192.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <MigrationHandler />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
