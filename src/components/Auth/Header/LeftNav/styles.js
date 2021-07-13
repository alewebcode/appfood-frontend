import styled from 'styled-components';

export const Ul = styled.ul`
  /* display: flex;
  width: 100%;
  justify-content: center; */

  list-style: none;
  display: flex;

  /* li {
    display: flex;
    padding: 0 1rem;
  } */

  li a {
    color: #fff;
    text-decoration: none;
    padding: 0 1rem;

    display: flex;
    justify-content: space-between;

    span {
      display: flex;
      align-items: center;
      margin-left: 10px;
    }
  }

  @media (max-width: 768px) {
    display: ${({ open }) => (!open ? 'none' : 'block')};
    flex-flow: column nowrap;
    background: #e9ecef;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    left: 0;
    height: 100vh;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 19;
    width: 15rem;

    li {
      padding-top: 1rem;
      display: block;
    }
    li a {
      color: #6b7aa2;
      display: flex;
      justify-content: space-between;

      span {
        display: flex;
        align-items: center;
      }
    }
  }
`;

export const TooltipMenu = styled.div`
  min-height: 100px;
  min-width: 100px;
  margin: 0;

  visibility: hidden;
  position: absolute;
  z-index: 1;

  @media (max-width: 768px) {
    /* margin: 1rem; */
    visibility: ${({ openDropDown }) => (openDropDown ? 'visible' : 'hidden')};
    min-height: ${({ openDropDown }) => (openDropDown ? '100px' : '0')};
    top: 0;
    position: static;
  }
`;

export const DropDownList = styled(Ul)`
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
  }
  li a {
    color: #afa9a8;
  }

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    left: -200px;
    background: none;
    box-shadow: none;

    li {
      padding: 0;
      background: none;
    }
  }
`;

export const Tooltip = styled.li`
  position: relative;
  display: inline-block;

  @media (min-width: 768px) {
    &:hover ${TooltipMenu} {
      visibility: visible;
      cursor: pointer;
      transition-delay: 0.5s;
    }
  }

  @media (max-width: 768px) {
    cursor: pointer;
    transition-delay: 0.5s;
  }
`;
