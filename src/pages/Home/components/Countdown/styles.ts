import styled from 'styled-components';

const CountdownStyles = {

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
  }`,

  Separator: styled.div`
  padding: 2rem 0;
  width: 4rem;

  overflow: hidden;

  display: flex;
  justify-content: center;

  color: ${(props) => props.theme['green-500']};
  `,

};

export default CountdownStyles;
