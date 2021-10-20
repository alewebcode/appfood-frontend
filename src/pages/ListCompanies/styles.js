import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
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
  /* max-width: 1120px; */

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

export const Form = styled.form``;

export const ListItems = styled.div`
  display: grid;
  grid-gap: 15px;
  //grid-template-columns: repeat(auto-fill, minmax(330px, 3fr));
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 3fr));
  }
  /* height: 15rem; */

  div {
    display: flex;
    margin-top: 3rem;
    background: #ccc;
    justify-content: space-between;
    /* position: relative; */
    background: #fff;
    border-radius: 0.5rem;
    border: 1px solid #e6e7e8;
    text-decoration: none;
    position: relative;

    &:hover {
      border: 1px solid #ccc;
      //cursor: pointer;
    }

    img {
      max-width: 10rem;
      min-width: 10rem;
      height: 6.75rem;
      object-fit: cover;
      margin-top: 0.5rem;
      margin-right: 0.5rem;
      position: absolute;
      right: 0;

      @media (max-width: 768px) {
        max-width: 9rem;
        min-width: 9rem;
        height: 6.75rem;
        object-fit: cover;
        margin-top: 0.5rem;
        margin-right: 0.5rem;
      }
    }

    button {
      position: absolute;
      top: 10rem;
      right: 2rem;
      padding: 0.3rem;
      border: none;
      background: #27ae60;
      color: #fff;
      width: 7rem;
      border-radius: 0.5rem;

      @media (max-width: 768px) {
        left: 14rem;
      }
    }
  }
`;
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem !important;

  border: 0 !important;

  h1 {
    height: 5px;
    font-size: 1rem;
    margin-left: 1rem;
    color: #7d7870;
  }
  span {
    margin-left: 1rem;
    padding-top: 2rem;

    &.description {
      font-size: 1rem;
      color: #7d7870;
      max-width: 12rem;
      max-height: 12rem;
      word-wrap: break-word;

      @media (max-width: 768px) {
        font-size: 1rem;
        color: #7d7870;
        max-width: 10rem;
        word-wrap: break-word;
      }
    }

    &.company {
      background: none;
      color: #353c3e;
      padding-top: 0rem;
      margin-bottom: 0.5rem;
      font-weight: 800;
    }
  }
  h6 {
    font-size: 1rem;
    color: #27ae60;
    margin-left: 1rem;
    padding-top: 2rem;
  }

  p {
    span {
      color: #fff;
      font-size: 0.8rem;
      margin-right: 0.8rem;
    }
    background: #f4511e;
    color: #fff;
    margin-top: 1.5rem;
    margin-left: 1rem;
    width: 13rem;
    padding: 0.3rem;
    text-align: center;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
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
