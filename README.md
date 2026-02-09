# copilotkit-agent-runner

[![npm version](https://img.shields.io/npm/v/copilotkit-agent-runner.svg)](https://www.npmjs.com/package/copilotkit-agent-runner)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)

**Open-source LangGraph thread history persistence for CopilotKit.** Restore chat history on page refresh with your own LangGraph deployment.

## The Problem

Building a chat app with [CopilotKit](https://copilotkit.ai) and [LangGraph](https://langchain-ai.github.io/langgraph/)? You've probably noticed:

- **Page refresh = empty chat** - All messages disappear
- **Thread switching loses context** - No automatic history restoration
- **No persistence of agent state** - Users lose context

CopilotKit's default runtime doesn't automatically fetch historical messages from LangGraph's checkpoint system. This package adds that capability.

## The Solution

**With this package:**
- Chat history restored on page load
- Seamless thread switching
- Agent state preserved
- Works with any LangGraph deployment (LangGraph Cloud, self-hosted)
- MIT licensed, open-source

## Installation

Step 1: Set these environment variables:

```env
# Required
LANGGRAPH_DEPLOYMENT_URL=https://your-deployment.langchain.com

# Optional (for authentication)
LANGSMITH_API_KEY=your-api-key
```

Step 2:

```bash
npm install
npm run dev

cd examples/nextjs-copilotkit
npm install
npm run dev
```

The app should be running on localhost:3000

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) for details.

## Credits

Created by [Elisha Kramer](https://github.com/ElishaKay).

Inspired by the need for thread history persistence in CopilotKit + LangGraph applications.
