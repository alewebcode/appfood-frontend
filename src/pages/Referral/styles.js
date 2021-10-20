import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 3rem 8rem 1rem;
  color: #5a5a5a;
  font-size: 24px;
  line-height: 14px;
  font-weight: 500;
`;
export const Content = styled.div`
  max-width: 1120px;

  margin: 0 auto;

  padding: 3rem 1rem 1rem;
  display: flex;

  justify-content: flex-start;
  flex-direction: column;

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
  /* max-width: 1120px;


  margin: 0 auto;
  padding: 3rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #e6e7e8;
  background: #ffffff;
  border-radius: 15px; */
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
    width: 30rem; //${props => (props.width ? props.width : 'auto')};;
    outline: none;
  }
`;

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
  /* justify-content: space-between; */
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  span {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    width: 100%;

    @media (max-width: 768px) {
      margin: 0 auto;
    }

    button {
      border: none;
      background: none;
    }
  }

  div {
    display: flex;

    width: 100%;

    button {
      width: 15rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 3rem;
      margin-top: 2.5rem;
      border: 0;
      border-radius: 20rem;
      background: #27ae60;
      color: #fff;
      font-size: 1rem;

      @media (max-width: 768px) {
        margin: 0 auto;
      }
    }
  }
`;

// export const SocialMedia = styled.span`
//   display: flex;
//   border: 1px solid #000;
//   align-items: center;
//   justify-content: flex-start;
//   width: 100%;
// `;
