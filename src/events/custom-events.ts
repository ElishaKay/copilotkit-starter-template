/**
 * Custom event names that CopilotKit uses for manual emissions.
 * These match exactly what CopilotKit's LangGraphAgent expects.
 */
export enum CustomEventNames {
  CopilotKitManuallyEmitMessage = "copilotkit_manually_emit_message",
  CopilotKitManuallyEmitToolCall = "copilotkit_manually_emit_tool_call",
  CopilotKitManuallyEmitIntermediateState = "copilotkit_manually_emit_intermediate_state",
  CopilotKitExit = "copilotkit_exit",
  /** Emitted when an MCP tool result is streamed (e.g. Google Drive MCP). */
  MCPToolResult = "mcp_tool_result",
  /** Emitted when MCP tool execution starts (for streaming progress). */
  MCPToolStart = "mcp_tool_start",
}
