
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';


dotenv.config();

export const app = express();
const port = process.env.PORT || 3001;

// Initialize Gemini Client
// WARNING: process.env.GEMINI_API_KEY must be set in .env
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

app.use(helmet());
app.use(cors());
app.use(express.json());

// Middleware to check for API key
const checkApiKey = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (!ai) {
        console.error("Gemini API Key is missing.");
        return res.status(500).json({ error: "Server misconfigured: Missing API Key." });
    }
    next();
};

// -- Routes --

// 1. Safety Advice Endpoint
app.post('/api/chat/safety', checkApiKey, async (req, res) => {
    try {
        const { topic } = req.body;
        if (!topic) return res.status(400).json({ error: "Topic is required" });

        const model = ai!.models; // Non-null assertion safe due to middleware
        const response = await model.generateContent({
            model: 'gemini-2.0-flash',
            contents: `Provide 3 short, punchy, and reassuring bullet points about "${topic}" specifically tailored for elderly Canadians to help them feel secure about their finances. Return only the bullet points.`,
        });

        res.json({ text: response.text || "Stay vigilant." });
    } catch (error) {
        console.error("Safety Advice Error:", error);
        res.status(500).json({ error: "Failed to generate safety advice." });
    }
});

// 2. Explain Regulation Endpoint
app.post('/api/chat/explain', checkApiKey, async (req, res) => {
    try {
        const { query } = req.body;
        if (!query) return res.status(400).json({ error: "Query is required" });

        const model = ai!.models;
        const response = await model.generateContent({
            model: 'gemini-2.0-flash',
            contents: `Explain the following regulatory concept simply for a general audience, relating it to fraud prevention: "${query}". Keep it under 50 words.`,
        });

        res.json({ text: response.text || "Regulation is complex." });
    } catch (error) {
        console.error("Explain Regulation Error:", error);
        res.status(500).json({ error: "Failed to explain regulation." });
    }
});

// Only start the server if running directly (dev mode)
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}
