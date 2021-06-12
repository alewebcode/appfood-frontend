import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 1rem 8rem 1rem;
  align-items: center;
`;

export const Search = styled.input`
  height: 3rem;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  &:focus {
    outline: none;
  }
  padding: 0 1rem;
  width: 20rem;
`;

export const Icon = styled.div`
  /* align-items: center; */
  flex: 0;
  color: #ccc;
  margin-left: -35px;
`;
