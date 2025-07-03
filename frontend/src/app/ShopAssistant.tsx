import { useState } from "react";
import "../styles/shoppingAssistant.css";

const ShoppingAssistant = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const backendURL = "https://moonai-backend.onrender.com";

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(`${backendURL}/shopping-assistant`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      if (!res.ok) throw new Error("Failed to get a response.");
      const data = await res.json();

      setResult(data.response || "No response.");
    } catch (err: any) {
      setResult(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="shopping-section" id="shopping-assistant">
      <div className="shopping-container">
        <h2 className="shopping-title">🛍️ Shopping Assistant</h2>
        <p className="shopping-description">
          Ask our AI to help you shop smarter. Search for anything, from tech
          gadgets to Ramadan gifts.
        </p>
        <div className="shopping-form">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. best laptop under $1000"
            className="shopping-input"
          />
          <button onClick={handleSearch} className="shopping-button">
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
        {result && (
          <div className="shopping-result">
            <strong className="shopping-result-title">AI Response:</strong>
            <p className="shopping-result-text">{result}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShoppingAssistant;
