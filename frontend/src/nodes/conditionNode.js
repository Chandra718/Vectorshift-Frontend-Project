import { useState } from "react";
import {
  BaseNode,
  NodeField,
  nodeInputStyle,
  nodeSelectStyle,
} from "./BaseNode";

export const ConditionNode = ({ id }) => {
  const [operator, setOperator] = useState("==");
  const [value, setValue] = useState("");

  return (
    <BaseNode
      id={id}
      title="Condition"
      color="#a855f7"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-true` }, { id: `${id}-false` }]}
    >
      <NodeField label="Operator">
        <select
          style={nodeSelectStyle}
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="==">== equals</option>
          <option value="!=">!= not equals</option>
          <option value=">"> &gt; greater than</option>
          <option value="<"> &lt; less than</option>
          <option value="contains">contains</option>
        </select>
      </NodeField>
      <NodeField label="Value">
        <input
          style={nodeInputStyle}
          type="text"
          value={value}
          placeholder="Compare value..."
          onChange={(e) => setValue(e.target.value)}
        />
      </NodeField>
    </BaseNode>
  );
};
