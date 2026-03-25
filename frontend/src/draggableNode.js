export const DraggableNode = ({ type, label, color = '#6366f1' }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify({ nodeType }));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      draggable
      style={{
        cursor: 'grab',
        padding: '5px 12px',
        borderRadius: '20px',
        background: `${color}18`,
        border: `1px solid ${color}55`,
        color: color,
        fontSize: '11px',
        fontWeight: '600',
        letterSpacing: '0.5px',
        userSelect: 'none',
        transition: 'all 0.2s ease',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `${color}30`;
        e.currentTarget.style.borderColor = color;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = `${color}18`;
        e.currentTarget.style.borderColor = `${color}55`;
      }}
    >
      {label}
    </div>
  );
};