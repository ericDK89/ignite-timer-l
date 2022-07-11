import { zodResolver } from '@hookform/resolvers/zod';
import { differenceInSeconds } from 'date-fns';
import { Play } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import HomeStyles from './styles';

const FormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60),
});

type FormData = zod.infer<typeof FormValidationSchema>

interface Cycle {
  id: string,
  task: string,
  minutesAmount: number,
  startDate: Date
}

function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  useEffect(() => {
    if (activeCycle) {
      setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate),
        );
      }, 1000);
    }
  }, [activeCycle]);

  const form = useForm<FormData>({
    resolver: zodResolver(FormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });

  function handleCreateNewSubmit(data: FormData) {
    const id = new Date().getTime().toString();

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };
    form.reset();

    setCycles((previousState) => [...previousState, newCycle]);
    setActiveCycleId(id);
  }

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = minutesAmount.toString().padStart(2, '0');
  const seconds = secondsAmount.toString().padStart(2, '0');

  const task: string = form.watch('task');
  const isSubmitDisabled = task?.trim().length <= 0;

  return (
    <HomeStyles.Container>
      <form onSubmit={form.handleSubmit(handleCreateNewSubmit)}>
        <HomeStyles.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <HomeStyles.TaskInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...form.register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <HomeStyles.MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            max={60}
            min={5}
            {...form.register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </HomeStyles.FormContainer>

        <HomeStyles.Countdown>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <HomeStyles.Separator> : </HomeStyles.Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </HomeStyles.Countdown>

        <HomeStyles.StartCountdownButton
          type="submit"
          disabled={isSubmitDisabled}
        >
          <Play size={24} />
          Começar
        </HomeStyles.StartCountdownButton>
      </form>
    </HomeStyles.Container>
  );
}

export default Home;
