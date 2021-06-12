import styled from 'styled-components';

export const Container = styled.header`
  background: #f4511e;
  display: flex;

  /* @media only screen and (max-device-width: 720px) {
    width: fit-content;
  } */
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem 1rem;
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
`;

export const NavMenu = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;

  ul {
    list-style: none;
    display: flex;
  }

  li a {
    color: #fff;
    text-decoration: none;
    padding: 1rem;
  }
`;

export const TooltipMenu = styled.div`
  min-height: 100px;
  min-width: 100px;
  margin: 1rem;

  visibility: hidden;
  position: absolute;
  z-index: 1;
`;

export const DropDownList = styled(NavMenu)`
  box-shadow: 0 5px 25px rgb(34 41 47 / 10%);
  display: block;
  border-radius: 0.358rem;

  li {
    padding: 10px;
    font-family: sans-serif;
    font-size: 15px;
    width: 100%;
    background: #fff;
    border-radius: 0.358rem;
  }

  li a:hover {
    color: #ed7a4d;
    cursor: pointer;

    /* font-weight: bold; */
  }
  li a {
    color: #afa9a8;
  }
`;

export const Tooltip = styled.li`
  position: relative;
  display: inline-block;

  &:hover ${TooltipMenu} {
    visibility: visible;
    cursor: pointer;
    transition-delay: 0.5s;
  }
`;
