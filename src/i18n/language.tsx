
import { useState, useEffect } from 'react';
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const languages = [
  {
    code: "en",
    name: "English",
    flag: "🇬🇧",
  },
  {
    code: "ru",
    name: "Русский",
    flag: "🇷🇺",
  },
  {
    code: "uz",
    name: "O'zbekcha",
    flag: "🇺🇿",
  },
];

export function Language() {
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [trimmedPathname, setTrimmedPathname] = useState("");



  // const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  // Add hover effect animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(false);
      if (pathname !== null) {
        const trimPath = pathname.replace(`/${locale}`, "");
        setTrimmedPathname(trimPath);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [isOpen]);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 rounded-full border bg-white/10 hover:bg-white/20 transition-all duration-300"
        >
          <Globe className="h-4 w-4 text-white" />
          <span className="">{locale}</span>
          <span className="sr-only">Toggle language menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-40 bg-white/10 backdrop-blur-lg border-none shadow-lg animate-in fade-in-0 zoom-in-95"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className={`
              group
              focus:bg-white/20 
              ${locale === language.code ? 'bg-white/20' : ''}
            `}
          >
            <Link
              href={`/${language.code}${trimmedPathname}`}
              locale={language.code}
              className="flex items-center w-full px-2 py-1.5"
              onClick={() => setIsOpen(false)}
            >
              <span className="mr-2 text-base">{language.flag}</span>
              <span className={`
                text-sm font-medium
                ${locale === language.code ? 'text-white' : 'text-gray-100'}
                group-hover:text-white transition-colors duration-200
              `}>
                {language.name}
              </span>
              {locale === language.code && (
                <span className="ml-auto text-white/60">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                </span>
              )}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}