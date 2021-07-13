import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const BannerTitle = styled.div`
  background: #f2f2ed;
  height: 10rem;
  color: #f4511e;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 1120px;

  margin: 0 auto;

  padding: 3rem 1rem 1rem;
  display: flex;

  justify-content: flex-start;
  flex-direction: column;

  h1 {
    color: #646152;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;

  img {
    height: 10rem;
    object-fit: cover;
    margin-top: 0.5rem;
  }
`;

export const ListItems = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 2fr));

  div {
    display: flex;
    height: 13rem;
    margin-top: 3rem;
    background: #ccc;
    justify-content: space-between;
    /* position: relative; */
    background: #fff;
    border-radius: 0.5rem;
    border: 1px solid #e6e7e8;

    &:hover {
      border: 1px solid #ccc;
      cursor: pointer;
    }

    img {
      width: 10.5rem;
      height: 6.75rem;
      object-fit: cover;
      margin-top: 0.5rem;
      margin-right: 0.5rem;
    }
  }
`;
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 5rem !important;
  margin-top: 1rem !important;

  border: 0 !important;

  h1 {
    height: 5px;
    font-size: 1rem;
    margin-left: 1rem;
    color: #353c3e;
  }
  span {
    font-size: 1rem;
    color: #7d7870;
    margin-left: 1rem;
    padding-top: 2rem;
  }
  h6 {
    font-size: 1rem;
    color: #27ae60;
    margin-left: 1rem;
    padding-top: 2rem;
  }

  p {
    background: #f4511e;
    color: #fff;
    margin-top: 1rem;
    margin-left: 1rem;
    width: 15rem;
    padding: 0.3rem;
  }
`;
