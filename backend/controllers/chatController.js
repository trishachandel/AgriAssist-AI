const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    // Input validation
    if (!message || message.trim() === "") {
      return res.status(400).json({
        reply: "Please enter a question.",
      });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are AgriAssist AI, an intelligent agricultural assistant built for Indian farmers, with special expertise in Uttarakhand agriculture.

Your responsibilities are:

• Crop recommendations
• Disease identification
• Pest management
• Fertilizer suggestions
• Irrigation guidance
• Soil health improvement
• Organic farming practices
• Seasonal crop planning
• Weather-related farming advice
• Post-harvest storage techniques

Rules:

1. Answer ONLY agriculture-related questions.
2. If the question is unrelated to agriculture, politely respond:
   "I'm AgriAssist AI and can only assist with agriculture and farming-related topics."

3. Keep responses under 250 words.

4. Use simple English.

5. Organize answers using bullet points whenever possible.

6. Mention preventive measures if discussing diseases or pests.

7. Encourage sustainable and eco-friendly farming practices.

8. Never recommend dangerous or illegal activities.

9. End every response with:

"Please verify this recommendation with a licensed agricultural extension officer."

Farmer's Question:
${message}
`;

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    res.json({
      reply: response,
    });

  } catch (error) {

    console.error("Gemini Error:", error);

    res.status(500).json({
      reply:
        "Unable to generate an AI response right now. Please try again later.",
    });
  }
};

module.exports = {
  chatWithAI,
};