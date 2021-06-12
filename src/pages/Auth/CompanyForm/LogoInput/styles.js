import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    margin: 0 auto;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 150px;
      width: 150px;
      border: 3px dashed rgba(255, 255, 255, 0.3);
      background: #eee;
    }

    div {
      height: 150px;
      width: 150px;
      border: 3px dashed #ccc;
      display: flex;
      justify-content: center;
      opacity: 0.3;
      flex-direction: column;
    }

    input {
      display: none !important;
    }
  }
`;
