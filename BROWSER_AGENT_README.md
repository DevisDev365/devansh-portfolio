# Autonomous Browser Agent 🤖🌐

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![Playwright](https://img.shields.io/badge/Playwright-Enabled-green)](https://playwright.dev/)

**A self-correcting, LLM-driven autonomous agent capable of executing complex web-based tasks through semantic DOM understanding and dynamic selector generation.**

---

## 👤 Author & Maintainer

**Devansh Khanna**  
*Full-stack AI Engineer | Specialist in Autonomous Agents & RAG*  
[**Visit Portfolio & Knowledge Graph**](https://devisdev365.github.io/devansh-portfolio/)

---

## 🚀 Overview

The **Autonomous Browser Agent** is a next-generation web automation framework designed to overcome the fragility of traditional scraper scripts. Unlike rigid Selenium/Puppeteer scripts that break with minor UI updates, this agent leverages **Generative AI** to "see" and "understand" web pages like a human user.

By combining **Playwright** for reliable browser control with **LangChain** for cognitive processing, the agent can:
- Interpret natural language goals (e.g., "Find the cheapest flight to Tokyo next Tuesday").
- Decompose high-level objectives into executable sub-tasks.
- Analyze the DOM to identify interactive elements semantically, not just syntactically.
- **Self-heal** by generating new selectors on the fly if the UI structure changes.

## 🏗️ System Architecture

The architecture is built on a **Cognitive Loop** pattern:

1.  **Perception**: The agent captures the current state of the page (HTML/Accessibility Tree) and visual viewport.
2.  **Analysis**: An LLM (via generic **Generative AI APIs**) processes the state against the user's goal to determine the next logical action.
3.  **Action Execution**: High-level plans are translated into low-level Playwright commands (click, type, scroll).
4.  **Verification**: The system verifies the outcome of the action (e.g., did the page URL change? Did the modal appear?) before proceeding.

### Key Components

-   **`BrowserEnv`**: A wrapper around Playwright that manages context, sessions, and anti-detection measures.
-   **`SelectorMage`**: A module that uses embeddings to find elements even when IDs or classes are obfuscated.
-   **`Planner`**: The reasoning engine that maintains the task stack and memory of past actions.

## ✨ Key Features

-   **Semantic Navigation**: "Click the 'Login' button" works regardless of whether the button is `<button id="login">` or `<div class="btn-primary">Sign In</div>`.
-   **Self-Correction**: If an action fails (e.g., element intercepted), the agent analyzes the error, adjusts its strategy (e.g., closes a popup), and retries.
-   **Visual Grounding**: Capable of processing viewport screenshots to handle canvas elements or visual-only cues.
-   **State Management**: Maintains a robust session state to handle multi-page workflows and authentication sequences.

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/devisdev365/browser-agent.git

# Navigate to the directory
cd browser-agent

# Install dependencies
pip install -r requirements.txt

# Install Playwright browsers
playwright install
```

## 💻 Usage

```python
from browser_agent import Agent

# Initialize the agent
agent = Agent(headless=False)

# Define a goal
goal = "Go to amazon.com, search for 'mechanical keyboard', and return the price of the first result."

# Execute
result = agent.run(goal)
print(f"Result: {result}")
```

## 🤝 Contributing

Contributions are welcome! Please check the [issues](https://github.com/devisdev365/browser-agent/issues) page.

---

*© 2024 Devansh Khanna. All rights reserved.*
