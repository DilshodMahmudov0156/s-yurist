import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { firstName, lastName, email, phone, service, contactMethod, message } = req.body;

    try {
        const telegramBotToken = "7948768201:AAEdGCOEI4cLIEc7oTzbSWTq4fchlk4mGwE";
        const telegramChatId = "2299263775";

        if (!telegramBotToken || !telegramChatId) {
            throw new Error("Telegram bot configuration is missing");
        }

        const telegramMessage = `
📋 New Contact Form Submission:
👤 Name: ${firstName} ${lastName}
📧 Email: ${email}
📱 Phone: ${phone || 'Not provided'}
📂 Service: ${service}
📞 Contact Method: ${contactMethod}

💬 Message:
${message}
    `;

        const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: telegramChatId,
                text: telegramMessage.trim(),
                parse_mode: "HTML"
            })
        });

        if (!response.ok) {
            throw new Error('Failed to send message to Telegram');
        }

        return res.status(200).json({ message: 'Submission successful' });
    } catch (error) {
        console.error('Submission error:', error);
        return res.status(500).json({ message: 'Error sending message' });
    }
}