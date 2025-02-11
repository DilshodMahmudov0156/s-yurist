"use client";

import * as React from "react";
import { Gavel, FileText, Users, Globe, ChevronRight, ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";



export default function ServicesSection() {
  const t = useTranslations("services");
  const locale = useLocale();

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={cn(
                "border overflow-hidden transform transition-all duration-300 hover:shadow-xl",
                "bg-white",
                "rounded-2xl"
              )}
            >
              <CardHeader className={cn(
                `bg-gradient-to-r ${service.gradient}`,
                "p-4 text-white"
              )}>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-2 rounded-full">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {locale === "ru" ? service.title_ru : locale === "en" ? service.title_en : service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <span className="text-lg font-medium text-gray-600 hover:text-gray-800 transition-colors">
                        {t("more")}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="mt-2 space-y-2">
                        {service.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-lg text-gray-700 hover:text-primary transition-colors group"
                          >
                            <ChevronRight className="mr-2 h-4 w-4 text-gray-400 group-hover:text-primary" />
                            <a
                              href={detail.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="border-b border-transparent hover:border-primary"
                            >
                              {locale === "ru" ? detail.text_ru : locale === "en" ? detail.text_en : detail.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
              <CardFooter className="p-4">
                <Link href={"#contact"} className="w-full group">
                  <Button
                    variant="outline"
                    className="w-full group"
                  >
                    {t("other")}
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button></Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href={"#contact"} scroll={true}>
            <Badge
              variant="secondary"
              className="text-lg px-6 py-3 hover:bg-gray-200 transition-colors cursor-pointer"
            >
              {t("other")}
            </Badge></Link>
        </div>
      </div>
    </section>
  );
}

export const services = [
  {
    icon: Globe,
    title: "Shartnomalar",
    title_ru: "Договоры",
    title_en: "Contracts",
    details: [
      {
        text: "Yuridik shaxsga oid shartnomalar",
        text_ru: "Договоры для юридических лиц",
        text_en: "Contracts for legal entities",
        link: "https://yurxizmat.uz/oz/category/for-juridical-contracts",
      },
      {
        text: "Ko'chmas mulkga oid shartnomalar",
        text_ru: "Договоры на недвижимость",
        text_en: "Contracts for real estate",
        link: "https://yurxizmat.uz/oz/category/real-estate-contracts",
      },
      {
        text: "Avtotransportlarga oid shartnomalar",
        text_ru: "Договоры на автотранспорт",
        text_en: "Contracts for vehicles",
        link: "https://yurxizmat.uz/oz/category/contracts-for-auto",
      },
    ],
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: FileText,
    title: "Arizalar",
    title_ru: "Заявления",
    title_en: "Applications",
    details: [
      {
        text: "Yuridik shaxsga oid arizalar",
        text_ru: "Заявления для юридических лиц",
        text_en: "Applications for legal entities",
        link: "https://yurxizmat.uz/oz/category/applications-for-legal",
      },
      {
        text: "Jismoniy shaxsga oid arizalar",
        text_ru: "Заявления для физических лиц",
        text_en: "Applications for individuals",
        link: "https://yurxizmat.uz/oz/category/applications-for-individuals",
      },
      {
        text: "Bolalarga oid arizalar",
        text_ru: "Заявления для детей",
        text_en: "Applications for children",
        link: "https://yurxizmat.uz/oz/category/for-kids",
      },
    ],
    gradient: "from-green-500 to-green-700",
  },
  {
    icon: Users,
    title: "Shaxsiy tarkibga oid xujjatlar",
    title_ru: "Документы для личного состава",
    title_en: "Documents for personnel",
    details: [
      {
        text: "Arizalar",
        text_ru: "Заявления",
        text_en: "Applications",
        link: "https://yurxizmat.uz/oz/category/personal-applications",
      },
      {
        text: "Bildirgi",
        text_ru: "Уведомление",
        text_en: "Notification",
        link: "https://yurxizmat.uz/oz/category/notifications"
      },
      {
        text: "Buyruqlar",
        text_ru: "Приказы",
        text_en: "Orders",
        link: "https://yurxizmat.uz/oz/category/commands"
      },
    ],
    gradient: "from-purple-500 to-purple-700",
  },
  {
    icon: Gavel,
    title: "Sudga oid xujjatlar",
    title_ru: "Документы для суда",
    title_en: "Court documents",
    details: [
      {
        text: "Davo arizalari",
        text_ru: "Заявления в суд",
        text_en: "Court claims",
        link: "https://yurxizmat.uz/oz/category/court-claims",
      },
      {
        text: "Arizalar",
        text_ru: "Заявления",
        text_en: "Applications",
        link: "https://yurxizmat.uz/oz/category/court-applications",
      },
      {
        text: "Appellatsiya arizalari",
        text_ru: "Апелляционные заявления",
        text_en: "Appeal applications",
        link: "https://yurxizmat.uz/oz/category/appeals-cassation-complaints",
      },
      {
        text: "Kasatsiya, Shikoyatlar",
        text_ru: "Кассационные, жалобы",
        text_en: "Cassation, Complaints",
        link: "https://yurxizmat.uz/oz/document/2029",
      },
    ],
    gradient: "from-red-500 to-red-700",
  },
];