# Week 7 – Prompt Engineering Documentation

## Project

**AgriAssist AI**

An AI-powered agricultural assistant developed using the MERN stack and Google Gemini API to help farmers with crop recommendations, disease diagnosis, irrigation guidance, fertilizer suggestions, pest management, and sustainable farming practices.

---

# Objective

The objective of this task is to design, test, and improve prompts for the Gemini AI model to produce accurate, safe, and farmer-friendly agricultural responses.

---

# AI Model Used

- Google Gemini 2.5 Flash
- Backend: Node.js + Express
- API: Google Generative AI SDK

---

# Prompt Version 1

### Prompt

You are an agricultural advisor specializing in Uttarakhand mountain crops.

Provide advice related to:
- Crop diseases
- Pest management
- Irrigation
- Post-harvest handling

Use simple language.

### Observation

- Responses were accurate.
- Answers were sometimes too long.
- Formatting was inconsistent.
- Did not restrict unrelated questions.

---

# Prompt Version 2

### Prompt

You are AgriAssist AI.

Rules:

- Answer only agriculture-related questions.
- Use simple English.
- Keep responses concise.
- Use bullet points.
- Include preventive measures.
- Recommend sustainable farming practices.

### Observation

- Better formatting.
- Easier to understand.
- More consistent answers.
- Still required stronger safety restrictions.

---

# Final Prompt (Implemented)

You are AgriAssist AI, an intelligent agricultural assistant built for Indian farmers with expertise in Uttarakhand agriculture.

Responsibilities:

- Crop recommendations
- Disease identification
- Pest management
- Fertilizer guidance
- Irrigation advice
- Soil health improvement
- Organic farming
- Seasonal crop planning
- Weather-based farming suggestions
- Post-harvest storage

Rules:

1. Answer only agriculture-related questions.
2. Politely decline unrelated questions.
3. Keep responses under 250 words.
4. Use simple English.
5. Use bullet points whenever appropriate.
6. Mention preventive measures.
7. Promote sustainable farming.
8. Never recommend harmful or illegal practices.
9. End every response with:

"Please verify this recommendation with a licensed agricultural extension officer."

---

# Test Cases

## Test Case 1

### User Prompt

How do I grow wheat?

### Result

The AI explained:

- Suitable season
- Soil requirements
- Irrigation
- Fertilizer
- Harvesting tips

**Status:** Passed

---

## Test Case 2

### User Prompt

My tomato leaves are turning yellow.

### Result

The AI suggested:

- Possible nutrient deficiency
- Common diseases
- Irrigation checks
- Preventive measures

**Status:** Passed

---

## Test Case 3

### User Prompt

Which fertilizer is best for rice?

### Result

The AI recommended balanced fertilizer usage, application timing, and organic alternatives.

**Status:** Passed

---

## Test Case 4

### User Prompt

Tell me a joke.

### Result

The AI politely replied that it only assists with agriculture-related questions.

**Status:** Passed

---

# Challenges Faced

- Selecting an appropriate Gemini model.
- Designing prompts that generated concise yet informative responses.
- Preventing responses to unrelated questions.
- Improving readability using bullet points.
- Handling invalid or empty user input.
- Implementing proper error handling for API failures.

---

# Improvements Implemented

- Input validation.
- Improved prompt engineering.
- Better response formatting.
- Agriculture-only restriction.
- Sustainable farming recommendations.
- User-friendly error messages.
- Enhanced AI safety guidelines.

---

# Conclusion

The final prompt significantly improved response quality, readability, safety, and relevance. AgriAssist AI now provides structured and concise agricultural guidance while restricting responses to farming-related queries, making it more reliable for end users.

---

# Technologies Used

- React
- Node.js
- Express.js
- MongoDB
- Google Gemini 2.5 Flash
- Google Generative AI SDK
- Axios
- JWT Authentication