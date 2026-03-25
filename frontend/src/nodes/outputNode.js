import { useState } from "react";
import {
  BaseNode,
  NodeField,
  nodeInputStyle,
  nodeSelectStyle,
} from "./BaseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_"),
  );
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  return (
    <BaseNode
      id={id}
      title="Output"
      color="#f59e0b"
      inputs={[{ id: `${id}-value` }]}
    >
      <NodeField label="Name">
        <input
          style={nodeInputStyle}
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </NodeField>
      <NodeField label="Type">
        <select
          style={nodeSelectStyle}
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </NodeField>
    </BaseNode>
  );
};
