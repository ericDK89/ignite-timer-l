import styled from 'styled-components';

const HistoryStyles = {

  Container: styled.main`
  flex: 1;

  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
  `,

  List: styled.div`
  overflow: auto;
  flex: 1;
  margin-top: 2rem;

  table {
    width: 100%;
    min-width: 37.5rem;

    border-collapse: collapse;

    th {
      background-color: ${(props) => props.theme['gray-600']};

      padding: 1rem;

      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};

      padding: 1rem;

      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 40%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }

  }
  `,
};

export default HistoryStyles;