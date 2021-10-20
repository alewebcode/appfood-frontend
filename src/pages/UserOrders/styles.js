import styled from 'styled-components';

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

  margin: 0 auto;

  padding: 3rem 1rem 1rem;
  display: flex;

  justify-content: flex-start;
  flex-direction: column; */
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 3rem 8rem 1rem;
  color: #5a5a5a;
  font-size: 24px;
  line-height: 14px;
  font-weight: 500;
  /* strong {
    color: #353c3e;
    font-size: 24px;
    line-height: 14px;
  } */
`;
export const BannerTitle = styled.div`
  background: #f2f2ed;
  height: 10rem;
  color: #f4511e;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Order = styled.div`
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
  border: 1px solid #d1cacb;
  display: flex;
  height: 10rem;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  border-radius: 0.25rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  /* border-left: 6px solid #ccc; */

  & .header {
    display: flex;
    background: #f8f8f8;
    line-height: 2rem;
    //width: 100%;
    border-bottom: 1px solid #d1cacb;
    padding: 0.25rem;
    color: #f4511e;
    font-weight: 600;
    /* margin-left: 0.3rem; */
    margin-top: 0;
    /* margin-right: 0.3rem; */
  }
`;

export const ContentOrder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: flex;
    height: 2rem;
    align-items: center;
    margin-right: 2rem;
    padding: 1rem;
    border: none;
    border-radius: 0.25rem;
    align-items: center;
    background: #53df83;
    color: #fff;
    font-weight: 600;

    transition: filter 0.5s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
export const Detail = styled.div`
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  margin-top: 0.5rem;

  span {
    padding: 0.5rem;

    strong {
      color: #5a5a5a;
    }
  }
`;

export const ProductItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const Product = styled.div`
  display: flex;
  justify-content: start;
  margin-bottom: 1rem;

  span {
    margin-left: 1rem;
  }

  img {
    width: 8.75rem;
    height: 5.75rem;
    object-fit: cover;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
  margin-left: 1rem;

  span {
    padding: 0.25rem;

    & .coupon {
      background: #53df83;
      color: #fff;
      border-radius: 0.25rem;
      padding: 0.25rem;
      font-size: 0.75rem;
    }
  }
`;

export const CloseButton = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.5rem;
`;
