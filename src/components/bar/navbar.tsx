"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Language } from "@/i18n/language";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";


export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("bio");

  const t = useTranslations("navbar");

  const navItems = [
    { name: t("about"), href: "#about" },
    { name: t("work"), href: "#work" },
    { name: t("services"), href: "#services" },
    { name: t("contact"), href: "#contact" },
  ];
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Find which section is currently in view
      const sections = navItems.map(item => ({
        id: item.href.substring(1),
        element: document.getElementById(item.href.substring(1))
      }));

      let currentSection = "bio";
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach(({ id, element }) => {
        if (element) {
          const sectionTop = element.offsetTop - 100;
          const sectionBottom = sectionTop + element.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setActiveSection(href.substring(1));
    }
    setMobileMenuOpen(false);
  };

  const isActive = (href: string) => activeSection === href.substring(1);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled
          ? "bg-opacity-80 bg-gray-900 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <a
                href="#"
                onClick={(e) => handleClick(e, "#bio")}
                className="relative w-[120px] h-[50px] sm:w-[150px] sm:h-[70px] transition-transform hover:scale-105"
              >
                <Image
                  fill
                  alt="Sitora Qodirova"
                  src="/s-1.png"
                  className="object-contain"
                  priority
                />
              </a>
            </div>

            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList className="space-x-1">
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.name} className="bg-none">
                      <Link
                        href={item.href}
                        onClick={(e) => handleClick(e, item.href)}
                        className={`${navigationMenuTriggerStyle()} 
                          hover:text-primary hover:bg-white/10 
                          transition-all duration-300
                          uppercase text-sm font-medium tracking-wide
                          ${isActive(item.href)
                            ? "text-primary bg-white shadow-glow"
                            : "text-white"}
                        `}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                  <NavigationMenuItem>
                    <div className="ml-4">
                      <Language />
                    </div>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-white/10 transition-colors relative z-50"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`
          fixed inset-0 z-30
          transition-opacity duration-300 ease-in-out
          ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-md" />

        <div
          className={`
            relative h-full w-full
            flex flex-col items-center justify-center
            transition-transform duration-300 ease-in-out
            ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"}
          `}
        >
          <div className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-xl font-medium tracking-wide
                  transition-colors duration-300
                  relative after:absolute after:bottom-0 after:left-0 
                  after:w-0 after:h-0.5 after:bg-primary
                  after:transition-all after:duration-300
                  hover:after:w-full
                  ${isActive(item.href)
                    ? "text-primary after:w-full"
                    : "text-white hover:text-primary"}
                `}
                onClick={(e) => handleClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <Language />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}