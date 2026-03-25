import { DraggableNode } from './draggableNode';

const nodes = [
  { type: 'customInput', label: 'Input', color: '#06b6d4' },
  { type: 'customOutput', label: 'Output', color: '#f59e0b' },
  { type: 'llm', label: 'LLM', color: '#8b5cf6' },
  { type: 'text', label: 'Text', color: '#10b981' },
  { type: 'api', label: 'API', color: '#f43f5e' },
  { type: 'note', label: 'Note', color: '#eab308' },
  { type: 'condition', label: 'If/Else', color: '#a855f7' },
  { type: 'timer', label: 'Timer', color: '#0ea5e9' },
  { type: 'transform', label: 'Transform', color: '#14b8a6' },
];

export const PipelineToolbar = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      {nodes.map((node) => (
        <DraggableNode key={node.type} type={node.type} label={node.label} color={node.color} />
      ))}
    </div>
  );
};