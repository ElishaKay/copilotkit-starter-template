"use client";

import { useState } from "react";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotChat } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

// Generate a random thread ID. LangGraph requires thread IDs to be UUIDs.
function generateThreadId() {
  return crypto.randomUUID();
}

export default function Home() {
  const [threadId, setThreadId] = useState(generateThreadId());
  const [inputValue, setInputValue] = useState(threadId);

  const handleSwitchThread = () => {
    setThreadId(inputValue);
  };

  const handleNewThread = () => {
    const newId = generateThreadId();
    setInputValue(newId);
    setThreadId(newId);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>CopilotKit + LangGraph History Example</h1>
        <p>
          This example demonstrates thread history hydration. Messages are restored
          when you refresh the page or switch threads.
        </p>
      </div>

      <div className="thread-selector">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter thread ID (UUID)"
        />
        <button onClick={handleSwitchThread}>Switch Thread</button>
        <button onClick={handleNewThread}>New Thread</button>
      </div>

      <p style={{ marginBottom: "1rem", color: "#666" }}>
        Current thread: <code>{threadId}</code>
      </p>

      <div className="chat-container">
        <CopilotKit
          runtimeUrl="/api/copilotkit"
          agent={process.env.NEXT_PUBLIC_GRAPH_ID || "my-agent"}
          threadId={threadId}
          key={threadId} // Force remount on thread change
        >
          <CopilotChat
            labels={{
              title: "AI Assistant",
              initial: "How can I help you today?",
            }}
          />
        </CopilotKit>
      </div>
    </div>
  );
}
