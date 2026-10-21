import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const caslonText = Libre_Caslon_Text({
  variable: "--font-caslon",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "HEARTCALM Acne Water Gel — 10% Panthenol Barrier Repair Moisturizer",
  description: "Gel ringan dengan cooling sensation, membantu menenangkan jerawat dan mengontrol minyak. Diformulasikan dengan 5% Panthenol, 5X Ceramide, Pure Centella, dan Compound Ection.",
  icons: {
    icon: `${base}/asset/logo-heartcalm.png`,
    shortcut: `${base}/asset/logo-heartcalm.png`,
    apple: `${base}/asset/logo-heartcalm.png`,
  },
  openGraph: {
    title: "HEARTCALM Acne Water Gel",
    description: "Gel ringan dengan cooling sensation untuk kulit acne-prone.",
    images: [{ url: `${base}/asset/logo-heartcalm-2.png` }],
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${jakartaSans.variable} ${caslonText.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
