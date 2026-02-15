// Refactored to use the secure backend API.
// This prevents exposing the API key in the browser.

const API_BASE = '/api/chat';

/**
 * Retrieves concise, reassuring safety advice for elderly users.
 */
export const getSafetyAdvice = async (topic: string): Promise<string> => {
  try {
    const response = await fetch(`${API_BASE}/safety`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic }),
    });

    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("API Error:", error);
    return "Stay vigilant and monitor your accounts regularly.";
  }
};

/**
 * Generates a simple explanation of complex regulatory terms.
 */
export const explainRegulation = async (query: string): Promise<string> => {
  try {
    const response = await fetch(`${API_BASE}/explain`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("API Error:", error);
    return "Regulatory compliance is essential for system integrity.";
  }
};
