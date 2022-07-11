import { Play } from 'phosphor-react';
import HomeStyles from './styles';

function Home() {
  const isDisabled = true;

  return (
    <HomeStyles.Container>
      <form>
        <HomeStyles.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <HomeStyles.TaskInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
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
          />

          <span>minutos.</span>
        </HomeStyles.FormContainer>

        <HomeStyles.Countdown>
          <span>0</span>
          <span>0</span>
          <HomeStyles.Separator> : </HomeStyles.Separator>
          <span>0</span>
          <span>0</span>
        </HomeStyles.Countdown>

        <HomeStyles.StartCountdownButton type="submit" disabled={isDisabled}>
          <Play size={24} />
          Começar
        </HomeStyles.StartCountdownButton>
      </form>
    </HomeStyles.Container>
  );
}

export default Home;
