import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 2rem 8rem 1rem;

  strong {
    color: #6b7a99;
    font-size: 24px;
    line-height: 14px;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    justify-content: space-between;

    font-size: 1rem;
    color: #fff;
    background: #6b7a99;
    border: 0;
    border-radius: 1rem;
    padding: 0 2rem;
    height: 2rem;

    transition: filter 0.5s;

    &:hover {
      filter: brightness(1.2);
    }

    span {
      padding: 0.5rem;
    }
  }
`;
export const Content = styled.div`
  max-width: 1120px;
  /* width: 100%; */

  margin: 0 auto;

  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #e6e7e8;
  background: #ffffff;
  border-radius: 15px;
`;

export const Table = styled.table`
  /* border-spacing: 1; */
  border-collapse: collapse;
  /* background: white; */
  border-radius: 6px;
  overflow: hidden;
  /* max-width: 800px; */
  width: 100%;
  margin: 0 auto;
  position: relative;

  td,
  th {
    padding-left: 8px;
    text-align: left;
  }

  thead tr {
    height: 60px;
    background: #e9ecef;
    color: #6b7a99;
    font-size: 16px;
  }

  tbody tr {
    line-height: 3rem;
    border-bottom: 1px solid #e3f1d5;
  }

  tr:last-child {
    border: 0;
  }

  td.l,
  th.l {
    text-align: right;
  }
  td.c,
  th.c {
    text-align: center;
  }
  td.r,
  th.r {
    text-align: center;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    color: #219ebc;
  }

  button {
    display: flex;
    align-items: center;
    border: 0;
    background: none;
    color: #d00000;
  }
`;
export const Pagination = styled.div`
  display: flex;
  padding: 2rem 8rem 1rem;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
`;

export const PaginationButton = styled.div`
  display: flex;
  background: #e9ecef;
  border-radius: 20px;
`;
export const PaginationAction = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PaginationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 8px;
  border-radius: 20px;
  margin: 0 5px;
  background: #e9ecef;
  cursor: pointer;

  &:hover {
    background: #6b7a99;
    color: #fff;
    //filter: brightness(1.2);
  }
`;
export const PaginationNumber = styled.div`
  display: flex;
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
  ${props =>
    props.isSelect && {
      background: '#6b7a99',
      color: '#fff',
    }}
`;
