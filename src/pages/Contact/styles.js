import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 1120px;

  margin: 0 auto;

  padding: 3rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BannerTitle = styled.div`
  background: #f2f2ed;
  height: 10rem;
  color: #f4511e;

  display: flex;
  justify-content: center;
  align-items: center;

  /* h1 {
    border: 2px solid #f4511e;
    border-radius: 0.5rem;
    padding: 0.5rem;
    width: 300px;
  } */
`;
export const Form = styled.form`
  input {
    width: 100%;
    padding: 0 1rem;
    height: 4rem;
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
    color: #707070;
  }
  textarea {
    width: 100%;
    padding: 1rem 1rem;
    line-height: 28px;
    border-radius: 0.25rem;
    border: 1px solid #ebe1e2;

    &:focus {
      outline: none;
      box-shadow: 0px 0px 2px #f4511e;
    }
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
