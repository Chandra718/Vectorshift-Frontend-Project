import { useState } from 'react';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      alert('Error connecting to backend. Make sure the server is running.');
    }
    setLoading(false);
  };

  return (
    <>
      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          padding: '8px 20px',
          borderRadius: '20px',
          background: loading
            ? '#1e1e2e'
            : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          color: loading ? '#475569' : '#fff',
          border: 'none',
          fontSize: '12px',
          fontWeight: '600',
          cursor: loading ? 'not-allowed' : 'pointer',
          letterSpacing: '0.5px',
          transition: 'all 0.2s ease',
        }}
      >
        {loading ? 'Analyzing...' : '⚡ Submit Pipeline'}
      </button>

      {/* Result Modal */}
      {result && (
        <div
          onClick={() => setResult(null)}
          style={{
            position: 'fixed', inset: 0,
            background: '#000000aa',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#0f0f1a',
              border: '1px solid #334155',
              borderRadius: '16px',
              padding: '32px',
              minWidth: '320px',
              boxShadow: '0 0 40px #6366f133',
            }}
          >
            {/* Modal Header */}
            <div style={{
              fontSize: '18px', fontWeight: '700',
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              marginBottom: '24px',
            }}>
              Pipeline Analysis
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
              <StatCard label="Nodes" value={result.num_nodes} color="#06b6d4" />
              <StatCard label="Edges" value={result.num_edges} color="#8b5cf6" />
              <StatCard
                label="Is DAG"
                value={result.is_dag ? '✓ Yes' : '✗ No'}
                color={result.is_dag ? '#10b981' : '#f43f5e'}
              />
            </div>

            {/* DAG Message */}
            <div style={{
              padding: '12px 16px',
              borderRadius: '8px',
              background: result.is_dag ? '#10b98115' : '#f43f5e15',
              border: `1px solid ${result.is_dag ? '#10b98133' : '#f43f5e33'}`,
              fontSize: '12px',
              color: result.is_dag ? '#10b981' : '#f43f5e',
              marginBottom: '20px',
            }}>
              {result.is_dag
                ? '✓ This pipeline is a valid Directed Acyclic Graph — no cycles detected.'
                : '✗ This pipeline contains cycles and is not a valid DAG.'}
            </div>

            {/* Close Button */}
            <button
              onClick={() => setResult(null)}
              style={{
                width: '100%', padding: '10px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: '#fff', border: 'none',
                fontSize: '13px', fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const StatCard = ({ label, value, color }) => (
  <div style={{
    flex: 1, padding: '16px 12px',
    background: `${color}10`,
    border: `1px solid ${color}33`,
    borderRadius: '10px',
    textAlign: 'center',
  }}>
    <div style={{ fontSize: '22px', fontWeight: '700', color }}>{value}</div>
    <div style={{ fontSize: '10px', color: '#64748b', marginTop: '4px', letterSpacing: '0.8px', textTransform: 'uppercase' }}>{label}</div>
  </div>
);