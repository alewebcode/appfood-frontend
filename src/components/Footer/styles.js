import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #4f4746;

  margin-top: 1rem;
  /* position: absolute; */
  bottom: 0;

  /* min-width: 53rem; */
`;

export const Content = styled.div`
  display: flex;
  max-width: 1120px;
  margin: 0 auto;
  padding: 5rem 2rem 2rem;

  /* flex-direction: column; */
  justify-content: center;

  /* span {
    color: #fff;
    align-items: center;
    justify-content: center;
  } */
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;

  width: 8rem;
  /* height: 3rem; */
`;
export const Copy = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  //border: 1px solid #fff;
  width: 100%;
  color: #fff;
`;
