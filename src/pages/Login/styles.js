import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  justify-content: center;

  /* width: 100%; */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    width: 20rem;
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
`;
