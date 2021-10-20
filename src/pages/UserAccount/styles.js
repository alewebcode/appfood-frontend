import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
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
  width: 100%;
  margin: 0 auto;

  padding: 3rem 1rem 1rem;
  display: flex;

  justify-content: space-between;
  flex-direction: column; */

  button {
    width: 20rem;
    margin: 2rem auto;
    border-radius: 0.5rem;
    border: none;
    padding: 0.8rem;
    color: #fff;
    background: #f4511e;

    transition: filter 0.5s;

    &:hover {
      filter: brightness(1.2);
    }
  }
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
export const BannerTitle = styled.div`
  background: #f2f2ed;
  height: 10rem;
  color: #f4511e;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PersonalData = styled.div`
  width: 30rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
  border: 1px solid #d1cacb;
  border-radius: 0.5rem;
  padding: 1rem;
  height: auto;
  background: #fff;
`;

export const Address = styled.div`
  width: 35rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
  border: 1px solid #d1cacb;
  border-radius: 0.5rem;
  padding: 1rem;
  height: 20rem;
  background: #fff;
  height: auto;
`;

export const Title = styled.div`
  font-weight: 500;
  color: #f4511e;

  height: 2rem;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 0.5rem;
    border-bottom: 1px solid #f4511e;
  }
`;
export const Form = styled(Unform)`
  width: 100%;
  /* width: 700px; */
  display: flex;
  flex-wrap: wrap;
  /* padding: 0 2rem 2rem; */

  justify-content: space-between;

  input {
    height: 3rem;
    padding: 0 1rem;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    width: ${props => (props.width ? props.width : 'auto')};
    outline: none;
  }
  & .custom-number {
    width: 100%;
  }
  & .custom-address {
    width: 25rem;
  }
  & .custom-city {
    width: 22rem;
  }
`;
export const FormGroup = styled.div`
  label {
    font-size: 1rem;
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
