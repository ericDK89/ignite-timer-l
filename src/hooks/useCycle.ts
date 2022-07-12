import { useContext } from 'react';
import { CyclesContext } from '../contexts/CyclesContext';

function useCycle() {
  const value = useContext(CyclesContext);

  return value;
}

export default useCycle;
