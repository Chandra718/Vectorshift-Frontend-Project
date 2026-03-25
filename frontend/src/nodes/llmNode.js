import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      color="#8b5cf6"
      inputs={[
        { id: `${id}-system`, label: "system" },
        { id: `${id}-prompt`, label: "prompt" },
      ]}
      outputs={[{ id: `${id}-response` }]}
    >
      <p
        style={{
          margin: 0,
          fontSize: "11px",
          color: "#64748b",
          fontStyle: "italic",
        }}
      >
        Large Language Model
      </p>
      <p style={{ margin: 0, fontSize: "11px", color: "#94a3b8" }}>
        Connects system + prompt → response.
      </p>
    </BaseNode>
  );
};
