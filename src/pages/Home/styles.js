import styled from 'styled-components';

export const Banner = styled.div`
  width: 100%;
  display: flex;
  margin-top: 8rem;
  justify-content: center;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr; */

  @media (max-width: 728px) {
    flex-direction: column;
  }

  div {
    background: #ccc;
    height: 25rem;
    width: 100%;

    &:hover {
      filter: brightness(0.9);
    }

    &:first-child {
      background: #f0a830;
    }
    &:nth-child(2) {
      background: #f07818;
    }
    span {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      font-size: 2rem;
      color: #fff;
    }
    img {
      width: 100%;
      height: 25rem;
      object-fit: cover;
    }
    a {
      text-decoration: none;
    }
  }
`;

// export const FooterImage = styled.div`
//   width: auto;
//   height: 1rem;
//   margin-top: -4px;
//   background: #000;
// `;
