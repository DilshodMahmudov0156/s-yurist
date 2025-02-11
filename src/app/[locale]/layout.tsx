// import { Rubik } from "next/font/google";
import { Quicksand } from "next/font/google";
import "../globals.css";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

// const rubik = Rubik({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "Sitora Qodirova | yurist",
  description: "s-yurist",
  keywords:
    "Sitora Qodirova, yurist, s yurist, sitora yurist, qodirova yurist, sitora qodirova yurist",
  image: "/favicon.png",
  url: "https://s-yurist.uz",
  type: "website",
  locale: "uz_UZ",
  site_name: "S-Yurist",

};

