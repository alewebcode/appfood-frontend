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

  span {
    color: #5a5a5a;
    display: flex;
    font-size: 24px;
    line-height: 14px;
    font-weight: 500;
    margin-top: 8rem;
    margin-bottom: 2rem;
  }
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
export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 3rem 8rem 1rem;
  color: #5a5a5a;
  font-size: 24px;
  line-height: 14px;
  font-weight: 500;
`;
