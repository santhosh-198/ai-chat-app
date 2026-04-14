import React, { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const handleSubmit = async () => {
    if (!prompt) return;

    setLoading(true);
    setResponse("");

    try {
      // simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // mock AI response
      const aiResponse = `AI Response: ${prompt} is a concept related to intelligent systems that can learn, think, and solve problems like humans.`;

      setResponse(aiResponse);
      setHistory([...history, { prompt, response: aiResponse }]);
    } catch (error) {
      setResponse("Something went wrong!");
    }

    setLoading(false);
  };

  const clearAll = () => {
    setPrompt("");
    setResponse("");
    setHistory([]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>AI Chat App</h1>

      <textarea
        rows="4"
        style={styles.textarea}
        placeholder="Type your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <div style={styles.buttonContainer}>
        <button onClick={handleSubmit} style={styles.button}>
          Submit
        </button>
        <button onClick={clearAll} style={styles.clearButton}>
          Clear
        </button>
      </div>

      {loading && <p style={styles.loading}>Loading...</p>}

      {response && (
        <div style={styles.responseBox}>
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}

      <hr />

      <h2>Chat History</h2>

      {history.length === 0 && <p>No history yet</p>}

      {history.map((item, index) => (
        <div key={index} style={styles.historyBox}>
          <p><strong>Q:</strong> {item.prompt}</p>
          <p><strong>A:</strong> {item.response}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial",
  },
  title: {
    textAlign: "center",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  buttonContainer: {
    marginTop: "10px",
  },
  button: {
    padding: "8px 15px",
    marginRight: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  },
  clearButton: {
    padding: "8px 15px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#dc3545",
    color: "white",
    cursor: "pointer",
  },
  loading: {
    marginTop: "10px",
  },
  responseBox: {
    marginTop: "15px",
    padding: "10px",
    backgroundColor: "#f1f1f1",
    borderRadius: "8px",
  },
  historyBox: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#fafafa",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
};

export default App;