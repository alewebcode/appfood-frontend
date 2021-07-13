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
`;

export const Form = styled.form``;

export const ListItems = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  div {
    display: flex;
    height: 15rem;
    margin-top: 3rem;
    background: #ccc;
    justify-content: center;
    position: relative;
    background: #fff;
    border-radius: 0.5rem;
    border: 1px solid #d1cacb;

    &:hover {
      border: 1px solid #f4511e;
      cursor: pointer;
    }

    img {
      width: 12.5rem;
      height: 8.75rem;
      object-fit: cover;
      margin-top: 0.5rem;
    }
    h1 {
      position: absolute;
      top: 160px;
      font-size: 1rem;
      left: 0.5rem;
      color: #353c3e;
    }
    span {
      position: absolute;
      top: 200px;
      font-size: 1rem;
      left: 0.5rem;
      color: #7d7870;
    }
  }
`;
