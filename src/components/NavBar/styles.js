import styled from 'styled-components';

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 3rem 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  button {
    font-size: 1rem;
    color: #fff;
    background: #ed7a4d;
    border: 0;
    border-radius: 0.25rem;
    padding: 0 2rem;
    height: 2rem;
    margin-left: 2rem;

    transition: filter 0.5s;

    &:hover {
      filter: brightness(1.2);
    }
  }

  nav {
    display: flex;
    width: 100%;
    /* padding: 1rem 5rem; */
    justify-content: flex-end;

    ul {
      list-style: none;
      display: flex;
    }

    a {
      color: #fff;
      text-decoration: none;
      padding: 1rem;
    }
  }
`;
