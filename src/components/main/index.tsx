import React from "react";
import { Navbar } from "@/components/bar/navbar";
import { AboutMe } from "../sections/about-me";
import ServicesSection from "../sections/services";
import ContactSection from "../sections/contact";
import { Work } from "../sections/work";
import { NextIntlClientProvider, useMessages, useLocale } from "next-intl";
import { Footer } from "../sections/footer";

const Index = () => {
  const messages = useMessages();
  const locale = useLocale();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div className="w-full min-h-screen mx-auto bg-gradient-to-br from-[#0948b3] via-[#0948b3] to-[#0948b3] bg-no-repeat bg-cover bg-center text-white">
        <Navbar />
        {/* Sections with proper IDs matching navbar links */}
        <section id="about" className="w-auto h-auto pt-16">
          <AboutMe />
        </section>
        <section id="work" className="w-auto h-auto">
          <Work />
        </section>
        <section id="services" className="w-auto h-auto">
          <ServicesSection />
        </section>
        <section id="contact" className="w-auto h-auto">
          <ContactSection />
        </section>

        <div className="container h-auto mx-auto flex items-center justify-center">
          <Footer />
        </div>

      </div>
    </NextIntlClientProvider>
  );
};

export default Index;


// from-[#3e5151] to-[#decba4]