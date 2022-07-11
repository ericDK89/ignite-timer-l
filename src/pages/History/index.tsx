import HistoryStyles from './styles';

function History() {
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
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Em andamento</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Interrompido</td>
            </tr>
          </tbody>
        </table>
      </HistoryStyles.List>
    </HistoryStyles.Container>
  );
}

export default History;
