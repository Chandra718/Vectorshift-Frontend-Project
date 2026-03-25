import { Handle, Position } from 'reactflow';
import { useStore } from '../store';

export const BaseNode = ({ id, title, color = '#4f46e5', inputs = [], outputs = [], children }) => {
  const deleteNode = useStore((state) => () => {
    state.onNodesChange([{ type: 'remove', id }]);
  });

  return (
    <div style={{
      background: 'linear-gradient(145deg, #1e1e2e, #2a2a3e)',
      border: `1.5px solid ${color}55`,
      borderRadius: '12px',
      minWidth: '220px',
      boxShadow: `0 0 12px ${color}33, 0 4px 24px #0006`,
      fontFamily: "'DM Mono', monospace",
      color: '#e2e8f0',
      position: 'relative',
    }}>
      <div style={{
        background: `linear-gradient(90deg, ${color}cc, ${color}66)`,
        padding: '8px 14px',
        borderRadius: '10px 10px 0 0',
        fontSize: '12px',
        fontWeight: '700',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span>{title}</span>
        <span
          onClick={deleteNode}
          style={{ cursor: 'pointer', fontSize: '14px', color: '#ffffff99', padding: '0 2px', borderRadius: '4px' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#ff4444'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff99'}
        >✕</span>
      </div>

      <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {children}
      </div>

      {inputs.map((handle, i) => (
        <Handle
          key={handle.id}
          type="target"
          position={Position.Left}
          id={handle.id}
          style={{
            top: inputs.length === 1 ? '50%' : `${((i + 1) / (inputs.length + 1)) * 100}%`,
            background: color, width: '10px', height: '10px', border: '2px solid #1e1e2e',
          }}
        />
      ))}

      {outputs.map((handle, i) => (
        <Handle
          key={handle.id}
          type="source"
          position={Position.Right}
          id={handle.id}
          style={{
            top: outputs.length === 1 ? '50%' : `${((i + 1) / (outputs.length + 1)) * 100}%`,
            background: color, width: '10px', height: '10px', border: '2px solid #1e1e2e',
          }}
        />
      ))}
    </div>
  );
};

export const NodeField = ({ label, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
    <label style={{ fontSize: '10px', color: '#64748b', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
      {label}
    </label>
    {children}
  </div>
);

export const nodeInputStyle = {
  background: '#0f0f1a',
  border: '1px solid #334155',
  borderRadius: '6px',
  color: '#e2e8f0',
  padding: '5px 8px',
  fontSize: '12px',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
};

export const nodeSelectStyle = {
  background: '#0f0f1a',
  border: '1px solid #334155',
  borderRadius: '6px',
  color: '#e2e8f0',
  padding: '5px 8px',
  fontSize: '12px',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  cursor: 'pointer',
};