import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { CyclesContext } from '../../../../contexts/CyclesContext';

import NewCycleFormStyles from './styles';

function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <NewCycleFormStyles.FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <NewCycleFormStyles.TaskInput
        type="text"
        id="task"
        list="task-suggestions"
        disabled={!!activeCycle}
        placeholder="Dê um nome para o seu projeto"
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <NewCycleFormStyles.MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        max={60}
        min={5}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </NewCycleFormStyles.FormContainer>
  );
}

export default NewCycleForm;
