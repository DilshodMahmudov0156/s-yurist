'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import { Linkedin, Mail, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useTranslations, useLocale } from "next-intl"
import Link from "next/link"

const stats = [
  {
    icon: Award,
    value: "5+",
    label_uz: "Yillik tajriba",
    label_en: "Years Experience",
    label_ru: "Опыт работы",
  }
]

const TelegramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 48 48" className="fill-white">
    <path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" />
  </svg>
)

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sitora-qodirova-89a639333/",
    label: "LinkedIn",
    color: "hover:text-blue-600",
  },
  {
    icon: Mail,
    href: "mailto:mailto:Sitora7177@icloud.com",
    label: "Email",
    color: "hover:text-red-400",
  },
  {
    icon: TelegramIcon,
    href: "https://t.me/qonunga_yol",
    label: "Telegram",
    color: "hover:text-red-400",
  },
]

export function AboutMe() {
  const [isVisible, setIsVisible] = useState(false)

  const t = useTranslations("aboutMe")
  const locale = useLocale()

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="w-full" id="about">
      <div className="w-full md:px-8 sm:px4 py-6">
        <Card className={`
        bg-0 border-0 shadow-none rounded-none 
          transition-all duration-700 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <div className="lg:flex gap-8">
            <div className="lg:w-2/3">
              <CardHeader>
                <CardDescription className="text-gray-200 text-md font-medium">
                  {t("jobTitle")}
                </CardDescription>
                <CardTitle className="text-6xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-white">
                  {t("name")}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-6 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    {t("description")}
                  </p>
                  <p className="text-lg leading-relaxed">
                    {t("description2")}
                  </p>
                  <div className="border px-3 py-3 rounded-lg inline-block bg-white/5">
                    <p>
                      Qonunga oid yangiliklarni shaxsiy telegram kanalim orqali kuzatib boring.
                    </p>
                    <br/>
                    <button className="border px-2.5 py-1.5 rounded-3xl flex bg-red-600">
                      <div className="mt-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-telegram" viewBox="0 0 16 16">
                          <path
                              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                        </svg>
                      </div>
                      <Link href={"https://t.me/qonunga_yol"} className="underline-none">Qonunga yo&lsquo;l</Link>
                    </button>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="mt-8">
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="ghost"
                      size="icon"
                      className={`
                        rounded-full border border-white/10 bg-white/5
                        text-white
                        transition-all duration-300 hover:scale-110
                        hover:bg-white/10 hover:border-white/20
                        ${social.color}
                      `}
                      asChild
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2"
                      >
                        <social.icon className="h-5 w-5" />
                        <span className="sr-only">{social.label}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </CardFooter>
            </div>

            <div className="lg:w-1/3 flex flex-col items-center justify-start p-4 md:px-6">
              <div className="relative">
                <div className="rounded-2xl"/>
                <Image
                    src="/avatar.webp"
                    alt="Sitora Qodirova"
                    width={400}
                    height={400}
                    className="w-[450px] h-[auto] object-cover rounded-2xl relative z-10 transform
                    transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="mt-8 w-full space-y-4">
                {stats.map((stat, index) => (
                    <div
                        key={stat.label_uz}
                        className={`
                      flex items-center gap-4 p-4
                      bg-white/5 rounded-lg backdrop-blur-sm
                      transform transition-all duration-500 delay-${index * 100}
                      ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                    `}
                    >
                      <stat.icon className="h-5 w-5 text-white" />
                      <div>
                        <div className="text-xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-gray-200">
                          {locale === "ru" ? stat.label_ru : locale === "en" ? stat.label_en : stat.label_uz}
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}