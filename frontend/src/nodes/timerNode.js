import { useState } from 'react';
import { BaseNode, NodeField, nodeInputStyle, nodeSelectStyle } from './BaseNode';

export const TimerNode = ({ id }) => {
  const [interval, setIntervalVal] = useState('60');
  const [unit, setUnit] = useState('seconds');

  return (
    <BaseNode id={id} title="Timer" color="#0ea5e9" outputs={[{ id: `${id}-trigger` }]}>
      <NodeField label="Every">
        <input style={nodeInputStyle} type="number" value={interval} min="1" onChange={(e) => setIntervalVal(e.target.value)} />
      </NodeField>
      <NodeField label="Unit">
        <select style={nodeSelectStyle} value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="seconds">Seconds</option>
          <option value="minutes">Minutes</option>
          <option value="hours">Hours</option>
        </select>
      </NodeField>
    </BaseNode>
  );
};