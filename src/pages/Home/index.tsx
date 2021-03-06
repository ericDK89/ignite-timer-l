import { zodResolver } from '@hookform/resolvers/zod';
import { HandPalm, Play } from 'phosphor-react';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import useCycle from '../../hooks/useCycle';
import Countdown from './components/Countdown';
import NewCycleForm from './components/NewCycleForm';
import HomeStyles from './styles';

const FormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60),
});

type FormData = zod.infer<typeof FormValidationSchema>

function Home() {
  const { createNewCycle, activeCycle, interruptCurrentCycle } = useCycle();

  const form = useForm<FormData>({
    resolver: zodResolver(FormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });

  function handleCreateNewCycle(data: FormData) {
    createNewCycle(data);
    form.reset();
  }

  const task: string = form.watch('task');
  const isSubmitDisabled = task?.trim().length <= 0;

  return (
    <HomeStyles.Container>

      <form onSubmit={form.handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...form}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <HomeStyles.StopCountdownButton
            type="button"
            onClick={interruptCurrentCycle}
          >
            <HandPalm size={24} />
            Interromper
          </HomeStyles.StopCountdownButton>
        ) : (
          <HomeStyles.StartCountdownButton
            type="submit"
            disabled={isSubmitDisabled}
          >
            <Play size={24} />
            Começar
          </HomeStyles.StartCountdownButton>
        )}
      </form>
    </HomeStyles.Container>
  );
}

export default Home;
