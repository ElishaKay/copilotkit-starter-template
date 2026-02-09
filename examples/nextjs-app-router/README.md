# Next.js App Router Example

This example demonstrates how to use `copilotkit-agent-runner` with Next.js App Router.

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

3. Update `.env.local` with your LangGraph deployment:

```env
LANGGRAPH_DEPLOYMENT_URL=https://your-deployment.langchain.com
LANGSMITH_API_KEY=your-api-key
LANGGRAPH_GRAPH_ID=my-agent
```

4. Run the development server:

```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## What This Example Shows

1. **History Hydration**: Send some messages, refresh the page, and see your chat history restored automatically.

2. **Thread Switching**: Use the thread ID input to switch between different conversation threads.

3. **Isolated Agents**: The API route uses `createIsolatedAgent` to prevent serverless state contamination.

## Key Files

- `src/app/api/copilotkit/route.ts` - API route with HistoryHydratingAgentRunner
- `src/app/page.tsx` - Frontend with CopilotKit integration

## Using with Google Drive MCP (custom events)

To use this example with the **MCP agent** (e.g. Google Drive MCP) and stream custom events:

1. Set `LANGGRAPH_GRAPH_ID=mcp` in `.env.local` (and ensure your LangGraph deployment exposes the `mcp` graph).
2. The library supports **custom event streaming** for MCP. When your LangGraph backend emits custom events with these names, they are forwarded to the client:
   - **`mcp_tool_start`** – emitted when an MCP tool execution starts (streaming progress).
   - **`mcp_tool_result`** – emitted when an MCP tool returns a result (e.g. file list, document content).

3. In your LangGraph agent, emit custom events via your graph’s stream (e.g. `custom` stream mode) with `name: "mcp_tool_result"` or `"mcp_tool_start"` and a `value` payload. The `HistoryHydratingAgentRunner` will forward them so the frontend can subscribe and update the UI in real time.

4. Frontend: use CopilotKit’s event APIs or `useCoAgent` state to react to these custom events for progress and result streaming.

## Requirements

- Node.js 18+
- A LangGraph deployment with checkpointing enabled
- (Optional) LangSmith API key for authentication
