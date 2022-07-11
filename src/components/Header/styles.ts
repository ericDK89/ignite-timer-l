import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &.active {
        color: ${(props) => props.theme['green-500']};
      }

      &:focus {
        color: ${(props) => props.theme['green-500']};
        box-shadow: none;
      }

      transition: border 0.2s;

      &:hover {
        border-radius: 0px;
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }
    }
  }
`;
