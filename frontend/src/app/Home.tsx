import { useState } from "react";

const islamicMonths = [
  "MUHARRAM",
  "SAFAR",
  "RABI-UL-AWWAL",
  "RABI-US-SANI",
  "JAMADI-UL-AWWAL",
  "JAMADI-US-SANI",
  "RAJAB",
  "SHABAN",
  "RAMADAN",
  "SHAWWAL",
  "ZUL-QADAH",
  "ZUL-HIJJAH",
];

const backendURL = "https://moonai-backend.onrender.com"; // Replace with actual backend if needed

const Home = () => {
  const [date, setDate] = useState("28-05-2025");
  const [month, setMonth] = useState(islamicMonths[0]);
  const [year, setYear] = useState(1446);
  const [responseMessage, setResponseMessage] = useState("");

  const generateReport = async (
    type: "moon-parameters" | "visibility-report"
  ) => {
    const formData = {
      date,
      islamic_month: month,
      islamic_year: year,
    };

    const endpoint =
      type === "moon-parameters"
        ? "/generate-moon-parameters/"
        : "/generate-visibility-report/";

    try {
      const res = await fetch(`${backendURL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to generate report.");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${type.replace("-", "_")}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();

      setResponseMessage("Download started.");
    } catch (error: any) {
      setResponseMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="container py-10 px-6">
      <h2 className="text-3xl font-bold mb-6">Moon Report Generator</h2>

      <form className="space-y-4">
        <div>
          <label htmlFor="date" className="block mb-1 font-semibold">
            Date (DD-MM-YYYY):
          </label>
          <input
            id="date"
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 border w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="month" className="block mb-1 font-semibold">
            Islamic Month:
          </label>
          <select
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="p-2 border w-full"
            required
          >
            {islamicMonths.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="year" className="block mb-1 font-semibold">
            Islamic Year:
          </label>
          <input
            id="year"
            type="number"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="p-2 border w-full"
            required
          />
        </div>

        <div className="flex gap-4 mt-4">
          <button
            type="button"
            onClick={() => generateReport("moon-parameters")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Generate Moon Parameters
          </button>
          <button
            type="button"
            onClick={() => generateReport("visibility-report")}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Generate Visibility Report
          </button>
        </div>
      </form>

      {responseMessage && (
        <p className="mt-4 text-red-600 font-medium">{responseMessage}</p>
      )}
    </div>
  );
};

export default Home;
