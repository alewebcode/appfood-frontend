import styled from 'styled-components';

export const Cart = styled.div`
  background: #fff;
  top: 48px;
  border: 1px solid #ccc;
  display: ${props => (props.openCart ? 'block' : 'none')};
  position: absolute;
  width: 25rem;
  height: 500px;
  color: #353c3e;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  z-index: 1000;
  right: 0;

  /* left: 50%;
  margin-left: -10rem; */

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
  div {
    &.close {
      display: none;
    }
  }

  @media (max-width: 768px) {
    top: 0;
    width: 100%;
    min-width: 25rem;
    position: fixed;
    height: 100%;

    &:after {
      content: none;
    }

    div {
      width: 100%;
      &.close {
        display: flex;
        justify-content: flex-end;
        margin-right: 2px;
        color: #5a5a5a;
        font-size: 1.5rem;
        font-weight: 600;
        padding: 0.5rem;
      }
    }
  }
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
  padding: 1rem;

  button {
    background: none;
    color: #ed7a4d;
  }
  h6 {
    color: #ed7a4d;
  }
`;

export const CartItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 0.1rem solid #ccc;
`;

export const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  button {
    margin: 0 1rem;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;

export const Subtotal = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1rem;
`;
export const Desconto = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1rem;
  margin-top: -1rem;
`;
export const Total = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1rem;
  margin-top: -1rem;
  font-weight: 600;
`;
export const EmptyBag = styled.div`
  display: flex;
  width: 25rem;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  p {
    display: flex;
    justify-content: center;
    font-weight: 600;
    color: #ed7a4d;
    align-items: center;
  }
  img {
    display: flex;
    margin: 0 auto;
    object-fit: cover;
    width: 20rem;
    height: auto;

    justify-content: center;
  }
`;
