import styled from 'styled-components';

export const Container = styled.header`
  background: #f4511e;
  display: flex;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

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
`;

export const NavMenu = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Logo = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;
