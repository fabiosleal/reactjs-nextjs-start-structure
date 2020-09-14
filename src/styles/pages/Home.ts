import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  h1 {
    font-size: 5.4rem;
    color: ${(props) => props.theme.colors.secundary};
    margin-top: 4rem;
  }

  p {
    margin-top: 2.4rem;
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
`;
