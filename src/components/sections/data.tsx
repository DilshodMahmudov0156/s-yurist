


export const data = [
    {
        id: 1,
        title_uz: "Arizalar",
        title_ru: "Договоры",
        title_en: "Contracts",
        services: [
            {
                id: 1,
                text_uz: "Yuridik shaxsga oid arizalar",
                text_ru: "Юридические документы для юридических лиц",
                text_en: "Legal documents for legal entities",
                link: "/services/contract-law/commercial-contracts",
                links: [
                    {
                        id: 1,
                        text_uz: "Sotish shartnomalari",
                        text_ru: "Договоры купли-продажи",
                        text_en: "Sales contracts",
                        link: `/services/contract-law/sales-contracts`
                    }
                ]
            },
            {
                id: 2,
                text: "Jismoniy shaxsga oid arizalar",
                link: "/services/contract-law/employment-agreements",
            },
            {
                id: 3,
                text: "Bolalarga oid arizalar",
                link: "/services/contract-law/licensing-agreements",
            },
        ]
    }
]