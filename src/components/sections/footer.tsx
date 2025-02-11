"use client";
import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export const Footer = () => {
    const locale = useLocale();

    return (
        <footer className="w-full mx-auto flex flex-row max-md:flex-col items-center justify-between py-10 text-gray-100">
            <div className="flex items-center justify-center">
                <Link href="https://s-yurist">
                    {"©"} {new Date().getFullYear()}{" "}
                    s-yurist
                </Link>
            </div>
            <div className="flex items-center justify-center max-md:mt-4">
                <Link href="https://bekzotovich.uz">
                    {locale === "uz" ? "Website yaratuvchisi" : locale === "ru" ? "Создатель сайта" : "Website creator"}:
                    {" "}
                    <span className='underline shadow-md'>
                        {"bekzotovich.uz❤"}
                    </span>
                </Link>
            </div>
        </footer>
    );
};