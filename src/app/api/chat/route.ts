import type { NextRequest } from "next/server";

const SYSTEM_PROMPT = `
You are a helpful AI assistant for Virtuebyte, a leading IT consulting and software development company.

IMPORTANT RULES:
- ONLY answer questions related to Virtuebyte's services, technology solutions, or company information
- If NOT related, respond: "I can only help with Virtuebyte-related queries."
- Be friendly, professional, and concise

COMPANY INFORMATION:
Virtuebyte provides AI/ML, Salesforce, Cloud, DevOps, Data Science, Offshore Development Centers.
Technologies: Python, AWS, Azure, React, Node.js, Spring Boot, Docker, Kubernetes.
`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const message = String(body?.message ?? "").trim();

    if (!message) {
      return Response.json({ error: "Missing message" }, { status: 400 });
    }

    const normalized = message.toLowerCase();

    // Rule-based fast responses
    const ruleBase: Record<string, string> = {
      hello: "Hello! 👋 How can I help you with Virtuebyte services today?",
      "hi ": "Hi there! 👋 Ask me anything about Virtuebyte IT services.",
      "what is virtuebyte":
        "Virtuebyte is an IT consulting and software development company specializing in AI, Cloud, DevOps, and Salesforce solutions.",
      contact:
        "You can contact Virtuebyte at sales@virtuebytech.com or call +91-20-677088756.",
    };

    for (const key in ruleBase) {
      if (normalized.includes(key)) {
        return Response.json({ reply: ruleBase[key] });
      }
    }

    // Domain filter
    const allowedKeywords = [
      "virtuebyte", "ai", "ml", "cloud", "devops", "salesforce", "software",
      "it", "aws", "azure", "react", "node", "spring", "docker", "kubernetes", "data",
    ];

    const isRelated = allowedKeywords.some((k) => normalized.includes(k));

    if (!isRelated) {
      return Response.json({
        reply: "I can only help with Virtuebyte-related queries.",
      });
    }

    // Gemini LLM fallback
    const API_KEY = process.env.GEMINI_API_KEY;

    if (!API_KEY) {
      return Response.json({
        reply: "I'm not sure about that. Please contact us at sales@virtuebytech.com for more details.",
      });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `${SYSTEM_PROMPT}\n\nUser: ${message}` }] }],
        }),
      }
    );

    const data = await response.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a response.";

    return Response.json({ reply });
  } catch (error) {
    console.error("Chat API Error:", error);
    return Response.json(
      { reply: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
