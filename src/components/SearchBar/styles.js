import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 10rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 720px) {
    /* display: flex; */
    flex-direction: column;

    .css-f8wp35-control {
      width: 25rem;
    }
    button {
      margin-top: 1rem;

      /* width: 100%; */
    }
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: #ed7a4d;
    border: 0;
    border-radius: 0.25rem;
    padding: 0 2rem;
    height: 2.3rem;
    margin-left: 1rem;

    transition: filter 0.5s;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;
