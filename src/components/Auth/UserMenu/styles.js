import styled from 'styled-components';

export const Menu = styled.div`
  background: #fff;
  top: 48px;
  border: 1px solid #ccc;
  display: ${props => (props.openMenuUser ? 'block' : 'none')};
  position: absolute;
  width: 19.5rem;
  height: 30rem;
  color: #353c3e;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  z-index: 1;
  right: 1rem;

  &:before {
    content: '';
    position: absolute;
    display: block;
    top: -9px;
    right: 10px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #ccc;
  }
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: -7px;
    right: 11px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #fff;
  }

  nav {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 3rem;
    flex-direction: column;

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      margin: 1rem auto;

      li {
        padding: 0.25rem;
      }
    }

    a {
      display: flex;
      color: #f4511e;
      text-decoration: none;
      padding: 1rem;
      align-items: center;

      span {
        margin-left: 1rem;
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  color: #f4511e;
  margin-left: 1rem;
  font-weight: 600;
`;
