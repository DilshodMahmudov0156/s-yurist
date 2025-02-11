"use client";

import * as React from "react";
import { Phone, Send, Linkedin, Mail } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { services } from "./services";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from "@/constants";
import { Badge } from "../ui/badge";

export default function ContactSection() {
  const t = useTranslations("contact");
  const tServices = useTranslations("services");
  const locale = useLocale();

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    contactMethod: "email",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Telegram Bot Integration
      const telegramBotToken = TELEGRAM_BOT_TOKEN;
      const telegramChatId = TELEGRAM_CHAT_ID;


      if (!telegramBotToken || !telegramChatId) {
        throw new Error("Telegram bot configuration is missing");
      }

      const message = `
  📋 New Contact Form Submission:
  👤 Name: ${formData.firstName} ${formData.lastName}
  📧 Email: ${formData.email}
  📱 Phone: ${formData.phone || 'Not provided'}
  📂 Service: ${formData.service}
  📞 Contact Method: ${formData.contactMethod}
  💬 Message: ${formData.message}
      `;

      console.log(message)

      const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: message
        })
      });

      if (!response.ok) {
        throw new Error("Failed to send message to Telegram");
      }

      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
      // alert("Failed to send message. Please try again later.");
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getLocalizedServiceTitle = (service: any) => {
    switch (locale) {
      case 'ru': return service.title_ru;
      case 'en': return service.title_en;
      default: return service.title;
    }
  };

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{t("title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-none border-indigo-500 text-white bg-[rgba(42,51,78,0.74)] backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Reach out to us using the information below
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-primary" />
                <span>(+998) 99 143 17 77</span>
              </div>
              <div className="flex items-center space-x-4">
                <Linkedin className="h-5 w-5 text-primary" />
                <Link href="https://www.linkedin.com/in/sitora-qodirova-89a639333/">
                  Sitora Qodirova
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-primary" />
                <Link href="mailto:Sitora7177@icloud.com">
                  Sitora Qodirova
                </Link>
              </div>
              <Badge className="mt-1 font-bold leading-relaxed text-gray-100 text-md flex items-center justify-start flex-col backdrop-blur-sm p-3" variant={'outline'}>
                <span className="">
                  Qonunga oid yangiliklarni shaxsiy telegram kanalim orqali kuzatib boring.
                </span>

                <Link href={"https://t.me/qonunga_yol"} className="underline ml-1 p-1 text-2xl">Qonunga yo&lsquo;l</Link>
              </Badge>
            </CardContent>

            {/* Sitora7177@icloud.com */}
          </Card>
          <Card className="shadow-none border-indigo-500 text-white bg-[rgba(42,51,78,0.74)] backdrop-blur-lg">
            <CardHeader>
              <CardTitle>{t("title")}</CardTitle>
              <CardDescription>
                {t("subtitle")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t("firstName")}</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t("lastName")}</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("email")}</Label>
                  <Input
                    id="email"
                    placeholder="john.doe@example.com"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t("phone")}</Label>
                  <Input
                    id="phone"
                    placeholder="(123) 456-7890"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">{t("service")}</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
                  >
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service, index) => (
                        <SelectItem key={index} value={getLocalizedServiceTitle(service)}>
                          {getLocalizedServiceTitle(service)}
                        </SelectItem>
                      ))}
                      <SelectItem value="other">{tServices("other")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>{t("contactMethod")}</Label>
                  <RadioGroup
                    defaultValue="email"
                    value={formData.contactMethod}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, contactMethod: value }))}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="contact-email" />
                      <Label htmlFor="contact-email">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="contact-phone" />
                      <Label htmlFor="contact-phone">Phone</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("message")}</Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" /> {t("submit")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}