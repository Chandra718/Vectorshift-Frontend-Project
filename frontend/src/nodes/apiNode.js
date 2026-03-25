import { useState } from 'react';
import { BaseNode, NodeField, nodeInputStyle, nodeSelectStyle } from './BaseNode';

export const ApiNode = ({ id }) => {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');

  return (
    <BaseNode id={id} title="API Call" color="#f43f5e"
      inputs={[{ id: `${id}-body` }]}
      outputs={[{ id: `${id}-response` }]}
    >
      <NodeField label="Method">
        <select style={nodeSelectStyle} value={method} onChange={(e) => setMethod(e.target.value)}>
          <option>GET</option><option>POST</option><option>PUT</option><option>DELETE</option>
        </select>
      </NodeField>
      <NodeField label="URL">
        <input style={nodeInputStyle} type="text" value={url} placeholder="https://api.example.com" onChange={(e) => setUrl(e.target.value)} />
      </NodeField>
    </BaseNode>
  );
};