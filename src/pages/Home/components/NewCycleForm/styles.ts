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

const NewCycleFormStyles = {
  TaskInput: styled(BaseInput)`
flex: 1;

&::-webkit-calendar-picker-indicator {
  display: none !important
}
`,

  MinutesAmountInput: styled(BaseInput)`
width: 4rem;
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
};

export default NewCycleFormStyles;
