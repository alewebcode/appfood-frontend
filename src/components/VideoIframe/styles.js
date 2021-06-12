import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  /* height: 100%; */

  padding: 3rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 720px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;

    /* flex: 1; */
  }
`;
export const VideoFrame = styled.iframe`
  display: flex;
  /* justify-content: space-between; */
  margin: 0 2rem;
  //margin-right: 10px;
  width: 30rem;
  height: 20rem;

  border-radius: 4px;
  background: #f2f2ed;
  padding: 1rem;

  @media screen and (max-width: 720px) {
    /* flex: 1; */
    width: auto;
    margin-bottom: 2rem;
    /* margin: 0 auto; */
  }
`;
