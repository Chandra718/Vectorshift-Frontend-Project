import { useState } from 'react';
import { BaseNode, NodeField } from './BaseNode';

export const NoteNode = ({ id }) => {
  const [note, setNote] = useState('Add your note here...');

  return (
    <BaseNode id={id} title="Note" color="#eab308">
      <NodeField label="Content">
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={4}
          style={{
            background: '#0f0f1a', border: '1px solid #334155',
            borderRadius: '6px', color: '#fde68a',
            padding: '6px 8px', fontSize: '12px', outline: 'none',
            width: '100%', boxSizing: 'border-box',
            resize: 'vertical', fontFamily: "'DM Mono', monospace",
          }}
        />
      </NodeField>
    </BaseNode>
  );
};