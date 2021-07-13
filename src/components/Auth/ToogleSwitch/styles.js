import styled from 'styled-components';

export const Content = styled.label`
  background: #eee;
  width: 4rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  position: relative;

  input {
    height: 100%;
    width: 100%;
    opacity: 0;
  }

  span {
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    background: lightgray;
    left: 0;
    cursor: pointer;
    box-shadow: 2px 2px 4px gray;
    transition: 0.25s;
  }

  input:checked + span {
    left: 50%;
    background: green;
  }
`;
