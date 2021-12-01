import styled from 'styled-components';

export const Container = styled.header`
  background: #f4511e;
  display: flex;
  /* height: 10rem; */
  position: fixed;
  width: 100%;
  z-index: 999;

  /* @media only screen and (max-device-width: 720px) {
    width: fit-content;
  } */
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 3rem 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-device-width: 768px) {
    padding: 1rem 5rem 3rem;
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
  img {
    width: 16.6rem;
    height: 2.75rem;
  }

  /* nav {
    display: flex;
    width: 100%;
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
  } */
`;

export const ButtonSignUp = styled.button`
  width: 10rem;
  font-size: 1rem;
  color: #fff;
  background: #ed7a4d;
  border: 0;
  border-radius: 0.25rem;
  //padding: 0 3rem !important;
  height: 2rem;
  margin-left: 2rem;

  transition: filter 0.5s;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const Cart = styled.a`
  color: #fff;
  position: relative;
  cursor: pointer;
  span {
    position: absolute;
    right: 0.4rem;
    top: 1.2rem;
    background: #4f4746;
    padding: 0.1rem 0.3rem;
    font-size: 0.8rem;

    border-radius: 50%;
  }
`;
export const User = styled.a`
  color: #fff;
  position: relative;
  cursor: pointer;
`;

export const NavMenu = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;

  @media only screen and (max-device-width: 768px) {
    justify-content: space-evenly;
  }
`;
