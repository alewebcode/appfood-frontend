import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 3rem 1rem 1rem;
  width: 100%;

  div {
    &.box_checkout {
      display: flex;
      justify-content: space-between;

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
  }
  title {
    color: #5a5a5a;
    display: flex;
    font-size: 24px;
    line-height: 14px;
    font-weight: 500;
    margin-top: 8rem;
    margin-bottom: 2rem;
    width: 100%;
  }
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  width: 22rem;
  height: auto;
  padding: 2rem;
  border-radius: 0.4rem;
  border: 1px solid #e6e7e8;
  background: #fff;

  @media (max-width: 768px) {
    width: 100%;
  }

  h1 {
    font-size: 1.5rem;
  }
  h1::after {
    content: '';
    display: block;
    width: 100%;
    height: 1rem;
    border-bottom: 1px solid #ccc;
  }
`;
export const TypeDelivery = styled.div`
  display: flex;
  border-radius: 0.4rem;
  width: 38rem;
  height: 15rem;
  justify-content: space-between;
  padding: 2rem;
  align-items: center;
  border: 1px solid #e6e7e8;
  background: #ffffff;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
  }
`;
export const BoxPickUp = styled.div`
  display: flex;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  padding: 2rem;
  width: 16rem;
  height: 6rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
export const Delivery = styled.div`
  display: flex;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  padding: 2rem;
  width: 16rem;
  height: 6rem;
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

  button {
    border: none;
  }
`;

export const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  button {
    margin: 0 1rem;
    border: none;
    color: #fff;
    background: #ed7a4d;
    padding: 0 2rem;
    height: 2rem;
    border-radius: 0.25rem;
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

export const MessageSuccess = styled.div`
  display: flex;
  border: 1px solid #53df83;
  border-radius: 0.5rem;
  background: #53df83;
  margin: 0 auto;
  color: #fff;
  width: 30rem;
  height: 10rem;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
