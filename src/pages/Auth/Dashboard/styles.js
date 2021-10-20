import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  max-width: 1120px;

  margin: 0 auto;

  padding: 3rem 8rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 1rem 8rem 1rem;

  h1 {
    color: #6b7a99;
    font-size: 24px;
    line-height: 14px;
  }
`;
export const TotalsFinance = styled.div`
  border: 1px solid #ccc;
  display: flex;
  width: 30rem;
  flex-direction: column;

  border-radius: 20px;
  background: #fff;
  position: relative;
  overflow: hidden;

  p {
    background: #f4511e;
    margin: 0;
    padding: 0.6rem;
    overflow: hidden;
    color: #fff;
    display: flex;
    align-items: center;
  }
  div {
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;

    span {
      padding: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #5a5a5a;
      font-weight: 600;

      &.price {
        color: #53df83;
        font-weight: 900;
      }
    }
  }

  /* margin: 1rem 7rem 1rem; */
`;
