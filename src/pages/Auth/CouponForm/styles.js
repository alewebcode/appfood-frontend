import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 2rem 0rem 1rem;
  max-width: 1120px;
  margin: 0 auto;

  strong {
    color: #6b7a99;
    font-size: 24px;
    line-height: 14px;
  }
  button {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #fff;
    background: #6b7a99;
    border: 0;
    border-radius: 1rem;
    padding: 0 2rem;
    height: 2rem;
    margin-left: 2rem;

    transition: filter 0.5s;

    &:hover {
      filter: brightness(1.2);
    }
    span {
      padding: 0.5rem;
    }
  }
  /* a {
    display: flex;
    align-items: center;
    text-decoration: none;
    justify-content: space-between;

    font-size: 1rem;
    color: #fff;
    background: #6b7a99;
    border: 0;
    border-radius: 1rem;
    padding: 0 2rem;
    height: 2rem;

    transition: filter 0.5s;

    &:hover {
      filter: brightness(1.2);
    }

    span {
      padding: 0.5rem;
    }
  } */
`;
export const Content = styled.div`
  max-width: 1120px;
  /* width: 100%; */

  margin: 0 auto;

  padding: 3rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #e6e7e8;
  background: #ffffff;
  border-radius: 15px;
`;

export const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;

  button {
    font-size: 1rem;
    color: #fff;
    background: #6b7a99;
    border: 0;
    border-radius: 1rem;
    padding: 0 2rem;
    height: 2rem;
    margin-left: 2rem;

    transition: filter 0.5s;

    &:hover {
      filter: brightness(1.2);
    }
  }
`;

export const Form = styled(Unform)`
  width: 100%;
  /* width: 700px; */
  display: flex;
  flex-wrap: wrap;
  padding: 0 2rem 2rem;
  max-width: 1120px;

  input {
    height: 3rem;
    padding: 0 1rem;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    width: ${props => (props.width ? props.width : 'auto')};
    outline: none;
  }
`;

// export const Input = styled.input`
//   /* display: block; */
//   height: 3rem;
//   padding: 0 1rem;
//   border: 1px solid #d3e2e5;
//   border-radius: 20px;
//   width: ${props => (props.width ? props.width : 'auto')};
//   outline: none;
// `;

export const FormGroup = styled.div`
  label {
    font-size: 18px;
    line-height: 10px;
    color: #6b7a99;
    padding: 1rem 0rem;
    display: flex;
    align-items: center;

    input {
      display: flex;
      align-items: center;
      margin-right: 1rem;
    }
  }

  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0.25rem;
`;

export const FormInline = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  /* padding: 0 0 1rem; */
`;
// export const Select = styled(ReactSelect)`
//   &.Select.is-open > .Select-control .Select-arrow {
//     border-color: transparent transparent red;
//   }
// `;
