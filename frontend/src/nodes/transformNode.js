import { useState } from 'react';
import { BaseNode, NodeField, nodeSelectStyle } from './BaseNode';

export const TransformNode = ({ id }) => {
  const [operation, setOperation] = useState('uppercase');

  return (
    <BaseNode id={id} title="Transform" color="#14b8a6"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-output` }]}
    >
      <NodeField label="Operation">
        <select style={nodeSelectStyle} value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="trim">Trim</option>
          <option value="reverse">Reverse</option>
          <option value="json_parse">JSON Parse</option>
          <option value="json_stringify">JSON Stringify</option>
        </select>
      </NodeField>
    </BaseNode>
  );
};