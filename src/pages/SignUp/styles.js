import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0 !important;
  height: 5rem;
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;

  input {
    width: 22rem;
    padding: 0 1rem;
    height: 3rem;
    border-radius: 0.25rem;

    border: 1px solid #ebe1e2;

    font-weight: 400;
    font-size: 1rem;

    &:focus {
      outline: none;
      box-shadow: 0px 0px 2px #f4511e;
    }
  }
  label {
    line-height: 2rem;
    color: #fff;
  }

  button {
    background: #ed7a4d;
    color: #fff;
    width: 100%;
    font-size: 1rem;
    border: 0;
    border-radius: 0.25rem;
    padding: 0 2rem;
    height: 2.5rem;
    margin-top: 10px;

    transition: filter 0.5s;

    &:hover {
      filter: brightness(1.2);
    }
  }

  span {
    color: #fff;
    padding-top: 1rem;
  }
`;
