import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import useCycle from '../../hooks/useCycle';
import HistoryStyles from './styles';

function History() {
  const { cycles } = useCycle();

  return (
    <HistoryStyles.Container>
      <h1>Meu histórico</h1>

      <HistoryStyles.List>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>
                  {`${cycle.minutesAmount} minutos`}
                </td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                    locale: ptBR,
                  })}

                </td>
                <td>

                  {cycle.finishedDate && (
                  <HistoryStyles.Status statusColor="done">
                    Concluído
                  </HistoryStyles.Status>
                  )}

                  {cycle.interruptedDate && (
                  <HistoryStyles.Status statusColor="interrupted">
                    Interrompido
                  </HistoryStyles.Status>
                  )}

                  {(!cycle.finishedDate && !cycle.interruptedDate) && (
                  <HistoryStyles.Status statusColor="progress">
                    Em andamento
                  </HistoryStyles.Status>
                  )}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryStyles.List>
    </HistoryStyles.Container>
  );
}

export default History;
