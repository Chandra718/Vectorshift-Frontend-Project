import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode, NodeField } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [width, setWidth] = useState(220);

  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\}\}/g;
    const found = [];
    let match;
    while ((match = regex.exec(currText)) !== null) {
      if (!found.includes(match[1])) found.push(match[1]);
    }
    setVariables(found);
  }, [currText]);

  useEffect(() => {
    const newWidth = Math.max(220, Math.min(500, 220 + currText.length * 2));
    setWidth(newWidth);
  }, [currText]);

  return (
    <div style={{ position: 'relative', width }}>
      <BaseNode id={id} title="Text" color="#10b981" outputs={[{ id: `${id}-output` }]}>
        <NodeField label="Text">
          <textarea
            value={currText}
            onChange={(e) => setCurrText(e.target.value)}
            rows={3}
            style={{
              background: '#0f0f1a',
              border: '1px solid #334155',
              borderRadius: '6px',
              color: '#e2e8f0',
              padding: '6px 8px',
              fontSize: '12px',
              outline: 'none',
              width: '100%',
              boxSizing: 'border-box',
              resize: 'vertical',
              fontFamily: "'DM Mono', monospace",
              lineHeight: '1.5',
            }}
          />
        </NodeField>
        {variables.length > 0 && (
          <div style={{ fontSize: '10px', color: '#10b981', marginTop: '2px' }}>
            Variables: {variables.join(', ')}
          </div>
        )}
      </BaseNode>

      {variables.map((v, i) => (
        <Handle
          key={v}
          type="target"
          position={Position.Left}
          id={`${id}-${v}`}
          style={{
            top: `${((i + 1) / (variables.length + 1)) * 100}%`,
            background: '#10b981',
            width: '10px', height: '10px',
            border: '2px solid #1e1e2e',
          }}
        />
      ))}
    </div>
  );
};