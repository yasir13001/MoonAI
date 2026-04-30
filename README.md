# 🌙 Moon Visibility Report Generator

An AI-powered Python tool for generating **lunar visibility reports** using **LLMs (Large Language Models)** such as **Gemini**, **Groq**, and **LLaMA3** (via **Ollama**). Designed for astronomers, developers, and researchers interested in **moon sighting**, **Hilal reports**, and **Islamic calendar computations**.

🔗 **Live Site**: [https://themoonai.org](https://themoonai.org)

---

## 🏛️ About the Organization

We are an open and collaborative organization with the mission of building intelligent astronomical tools that benefit communities across the globe. The MoonAI project is our flagship initiative — a platform that provides scientifically-informed, AI-generated lunar visibility reports with an Islamic calendar context.

🛠️ **Built by the community, maintained through GitHub.**
We welcome developers, data scientists, designers, and writers to contribute and help expand our scope.

> ✨ Want to contribute? See our [CONTRIBUTE.md](./CONTRIBUTE.md) for details!

---

## 🚀 Features

* 🧠 **AI-Powered Reporting** – Uses advanced language models to generate descriptive moon visibility reports.
* ⚡ **Parallel Processing** – Boosted performance via `ThreadPoolExecutor` for concurrent prompt generation.
* 🗃️ **Dataset Integration** – Works with structured data using `pandas`, with real-time progress updates using `tqdm`.
* 💻 **Local + Cloud Models** – Supports local models via [Ollama](https://ollama.com) and cloud APIs like **Groq**, **Gemini**, etc.
* 🛰️ **Astronomical Accuracy** – Compatible with moon phase datasets and visibility criteria for precise reports.

---

## 🛠️ Tech Stack

* Python (3.9+)
* `pandas`, `tqdm`, `concurrent.futures`
* Gemini / Groq API (or any chat-completion LLM)
* Ollama (for local LLaMA3 or other open models)
* FastAPI (for backend API)
* HTML/CSS/JavaScript (for frontend interface)

---


## 🏗️ Architecture

The system follows a layered and modular architecture, consisting of:

### **Web Interface**
- HTML
- CSS
- JavaScript
### **FastAPI Backend**
- FastAPI REST Backend

### **Business Logic**
- Prompt Maker
- LLM Engine
- Data Parser

### **External AI Services**
- Gemini / Groq / Ollama


---

## 🌐 Use Cases

* Moon visibility reporting for Islamic calendar (Hilal sighting)
* Astronomical event tracking and reporting
* Educational tools for lunar phases
* Integration into observatory or planetarium dashboards

---

## 🔍 Keywords

```
moon report generator, lunar visibility, hilal sighting, ai moon report, llama3 moon, gemini groq, ollama moon visibility, moon phase api, astronomy ai, moon python, islamic calendar ai, llm moon sighting, moon visibility generator
```

---

## 📦 Example Usage

```python
generator = MoonReportGenerator()
prompts = generator.make_prompt(row)
responses = generator.generate_all(prompts)
```

---

## 🔧 Configuration

Configuration details for the Moon Report Generator are documented in the contributing guide.

📁 Path: `CONTRIBUTE.md`

This guide includes:

* API key setup  
* Model configuration (Gemini, Groq, LLaMA3 via Ollama)  
* Threading and performance settings  
* Report formatting options  
* Development workflow and contribution standards

---

## 🤝 Contributing

We believe in open development and transparent collaboration.
To get started with contributing, check out [CONTRIBUTE.md](./CONTRIBUTE.md).

## 📊 Data Source

This project relies on astronomical datasets for accurate moon visibility reporting. One trusted source is:

HM Nautical Almanac Office (HMNAO)
The HMNAO is a specialized division of the UK Hydrographic Office that provides high-precision astronomical and celestial navigation data. Their ephemerides and lunar position data are internationally respected and ideal for research-grade applications.

If you'd like to obtain lunar visibility data for your specific location:

📬 Contact HMNAO:
CustomerServices@UKHO.gov.uk
Kindly email them with your location, purpose, and required date range. They usually provide custom datasets upon request.
