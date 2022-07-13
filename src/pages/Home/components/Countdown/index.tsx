import { differenceInSeconds } from 'date-fns';
import { useEffect } from 'react';
import useCycle from '../../../../hooks/useCycle';

import CountdownStyles from './styles';

function Countdown() {
  const {
    activeCycle,
    amountSecondsPassed,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  } = useCycle();

  const totalSeconds = activeCycle
    ? activeCycle.minutesAmount * 60 : 0;

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDiference = differenceInSeconds(
          new Date(),
          new Date(activeCycle!.startDate),
        );
        if (secondsDiference >= totalSeconds) {
          markCurrentCycleAsFinished();
          setSecondsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          setSecondsPassed(secondsDiference);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [
    activeCycle,
    activeCycleId,
    totalSeconds,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ]);

  const currentSeconds = activeCycle
    ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = minutesAmount.toString().padStart(2, '0');
  const seconds = secondsAmount.toString().padStart(2, '0');

  useEffect(() => {
    if (activeCycle) {
      document.title = `Ignite Timer | ${minutes}:${seconds}`;
    } else {
      document.title = 'Ignite Timer | Rocketseat';
    }
  }, [minutes, seconds, activeCycle]);

  return (
    <CountdownStyles.Countdown>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <CountdownStyles.Separator> : </CountdownStyles.Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownStyles.Countdown>
  );
}

export default Countdown;
