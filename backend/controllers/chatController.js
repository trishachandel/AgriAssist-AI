const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `
You are an agricultural advisor specializing in Uttarakhand mountain crops.

Provide advice related to:
- Crop diseases
- Pest management
- Irrigation
- Post-harvest handling

Use simple language.

Question:
${message}

Always end with:
"Please verify this recommendation with a licensed agricultural extension officer."
`;

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    res.json({
      reply: response,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      reply: "Error generating response",
    });
  }
};

module.exports = {
  chatWithAI,
};