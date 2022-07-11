import styled from 'styled-components';

const BaseInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  color: ${(props) => props.theme['gray-100']};
  font-weight: 700;
  font-size: 1.125rem;

  height: 2.5rem;
  padding: 0 0.5rem;

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']}
  }
`;

const HomeStyles = {

  Container: styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`,

  FormContainer: styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: 700;

  flex-wrap: wrap;
`,

  Countdown: styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  color: ${(props) => props.theme['gray-100']};
  line-height: 8rem;

  display: flex;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme['gray-700']};
    border-radius: 8px;

    padding: 2rem 1rem;
  }
`,

  Separator: styled.div`
  padding: 2rem 0;
  width: 4rem;

  overflow: hidden;

  display: flex;
  justify-content: center;

  color: ${(props) => props.theme['green-500']};
`,

  StartCountdownButton: styled.button`
  width: 100%;
  padding: 1rem;

  background-color: ${(props) => props.theme['green-500']};
  border: none;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['gray-100']};
  font-weight: 700;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }

  &:disabled {
    opacity: 0.7;

    cursor: not-allowed;
  }
`,

  TaskInput: styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important
  }
  `,

  MinutesAmountInput: styled(BaseInput)`
  width: 4rem;
  `,

};

export default HomeStyles;
