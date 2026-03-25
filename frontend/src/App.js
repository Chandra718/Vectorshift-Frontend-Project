import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import './index.css';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      background: '#0a0a14',
      overflow: 'hidden',
    }}>

      {/* Top Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        height: '64px',
        background: 'linear-gradient(90deg, #0f0f1a 0%, #13131f 50%, #0f0f1a 100%)',
        borderBottom: '1px solid #ffffff0f',
        flexShrink: 0,
        boxShadow: '0 4px 24px #00000066',
        zIndex: 10,
      }}>

        {/* LEFT — Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: '220px' }}>
          <div style={{
            width: '36px', height: '36px',
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '18px', fontWeight: '800', color: '#fff',
            boxShadow: '0 0 16px #6366f166',
          }}>V</div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
            <span style={{
              fontSize: '15px', fontWeight: '700',
              background: 'linear-gradient(90deg, #a5b4fc, #c4b5fd)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              letterSpacing: '0.3px', lineHeight: 1,
            }}>VectorShift</span>
            <span style={{
              fontSize: '10px', color: '#475569',
              letterSpacing: '2px', textTransform: 'uppercase', lineHeight: 1,
            }}>Pipeline Builder</span>
          </div>

          <div style={{
            padding: '2px 8px',
            background: '#6366f115',
            border: '1px solid #6366f133',
            borderRadius: '20px',
            fontSize: '10px', color: '#6366f1', fontWeight: '600',
          }}>BETA</div>
        </div>

        {/* CENTER — Toolbar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: '#ffffff05',
          border: '1px solid #ffffff0a',
          borderRadius: '30px',
          padding: '6px 14px',
          overflow: 'hidden',
        }}>
          <span style={{
            fontSize: '10px', color: '#334155',
            letterSpacing: '1px', textTransform: 'uppercase',
            marginRight: '4px', fontWeight: '600', whiteSpace: 'nowrap',
          }}>Nodes</span>
          <PipelineToolbar />
        </div>

        {/* RIGHT — Live + Submit */}
        <div style={{
          display: 'flex', alignItems: 'center',
          gap: '12px', minWidth: '220px', justifyContent: 'flex-end',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{
              width: '7px', height: '7px', borderRadius: '50%',
              background: '#10b981', boxShadow: '0 0 6px #10b981',
              animation: 'pulse 2s infinite',
            }} />
            <span style={{ fontSize: '11px', color: '#475569' }}>Live</span>
          </div>
          <SubmitButton />
        </div>

      </div>

      {/* Canvas */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <PipelineUI />
      </div>
    </div>
  );
}

export default App;