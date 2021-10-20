import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 100px);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 3rem 1rem 1rem;
  width: 100%;

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
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  


  label {
    line-height: 2rem;
    color: #5a5a5a;
  }

  input {
    /* width: 100%; */
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
  textarea{
      border: 1px solid #ebe1e2;
      outline: none;
      line-height: 3rem;
      /* box-shadow: 0px 0px 2px #f4511e; */
    }

  button {
    
    //margin-top: 5rem;
    background: #53df83;
    border: none;
    color #fff;
    width: 15rem;
    border-radius: 0.25rem;
    padding:0.5rem;
    margin: 2rem auto;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 10rem 8rem 1rem;
  color: #5a5a5a;
  font-size: 24px;
  line-height: 14px;
  font-weight: 500;
  border: 1px solid #000;
`;
