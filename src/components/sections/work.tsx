'use client'

import { useState, useEffect } from "react"
import {
  Building2,
  Award,
  Users,
  Scale,
  Landmark
} from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useLocale, useTranslations } from "next-intl"

const experiences = [
  {
    id: 1,
    title: "Jizzax viloyati Yuridik texnikumi",
    company: "Supreme Court of Uzbekistan",
    period: "2024 - 2026",
    location: "Jizzax, Uzbekistan",
    icon: Landmark,
    color: "bg-emerald-500/10",
    iconColor: "text-emerald-500"
  },
  {
    id: 2,
    title: "O'zbekiston Respublikasi Milliy gvardiyasi Respublika ixtisoslashtirilgan musiqa akademik litseyi",

    period: "2013 - 2017",
    location: "Chilonzor tuman, Toshkent shahar, Uzbekistan",
    icon: Building2,
    color: "bg-purple-500/10",
    iconColor: "text-purple-500",
    isStudy: true
  },

]

const achievements = [
  {
    title_uz: "Ishdagi yutuqlar",
    title_ru: "Выигранные дела",
    title_en: "Cases Won",
    value: "500+",
    icon: Scale,
    color: "bg-blue-500/10",
    iconColor: "text-blue-500"
  },
  {
    title_uz: "Mijozlarning qondirishlari",
    title_ru: "Удовлетворенность клиентов",
    title_en: "Client Satisfaction",
    value: "98%",
    icon: Users,
    color: "bg-green-500/10",
    iconColor: "text-green-500"
  },
  {
    title_uz: "Yuridik mukofotlar",
    title_ru: "Правовые награды",
    title_en: "Legal Awards",
    value: "15",
    icon: Award,
    color: "bg-purple-500/10",
    iconColor: "text-purple-500"
  },
]

export function Work() {
  const [isVisible, setIsVisible] = useState(false)

  const t = useTranslations("work")
  const locale = useLocale()

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 min-h-screen bg-white" id="work">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <Card
              key={achievement.title_uz}
              className={`
                overflow-hidden transform transition-all duration-500 delay-${index * 100}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                border border-gray-300 backdrop-blur-sm
                ${achievement.color}
              `}
            >
              <CardContent className="p-6 text-center bg-white">
                <div className="flex justify-center">
                  <div className={`p-3 rounded-full ${achievement.color}`}>
                    <achievement.icon className={`h-6 w-6 ${achievement.iconColor}`} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-500 mt-3">{achievement.value}</h3>
                  <p className="text-gray-400 mt-1.5">
                    {locale === "ru" ? achievement.title_ru : locale === "en" ? achievement.title_en : achievement.title_uz}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card
              key={experience.id}
              className={`
                relative overflow-hidden
                transform transition-all duration-500 delay-${index * 100}
                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                bg-white/5 border-gray-300 backdrop-blur-sm
                hover:bg-white/10 cursor-pointer
              `}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary/50" />

              <CardHeader className="flex flex-row items-center gap-4">
                <div className={`p-3 rounded-full ${experience.color}`}>
                  <experience.icon className={`h-6 w-6 ${experience.iconColor}`} />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl font-bold text-white">
                    {experience.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {experience?.company} {experience.period}
                  </CardDescription>
                </div>

              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}