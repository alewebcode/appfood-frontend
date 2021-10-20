import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
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
  align-items: center;
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
  flex-direction: column;

  border: 1px solid #e6e7e8;
  background: #ffffff;
  border-radius: 15px; */
`;

export const Coins = styled.div`
  border: 1px solid #ccc;
  display: flex;
  width: 30rem;
  flex-direction: column;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  border-radius: 20px;
  background: #fff;
  position: relative;
  overflow: hidden;
  /* box-shadow: 0 5px 20px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23); */
  border: 1px solid #e6e7e8;
  margin-bottom: 2rem;

  p {
    background: #12c14e;
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
      justify-content: center;
      align-items: center;
      color: #5a5a5a;
      font-weight: 600;

      &.price {
        color: #5a5a5a;
        font-weight: 900;
        font-size: 2rem;
      }
    }
  }
`;
