import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 2rem 0rem 1rem;
  max-width: 1120px;
  margin: 0 auto;

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

  @media only screen and (max-device-width: 768px) {
    overflow-x: auto;
    flex-direction: column;
  }
`;

export const Table = styled.table`
  /* border-spacing: 1; */
  border-collapse: collapse;
  /* background: white; */
  border-radius: 6px;

  /* max-width: 800px; */
  width: 100%;
  margin: 0 auto;
  position: relative;
  overflow-x: auto;
  /* display: flex;
  flex-direction: column; */

  td,
  th {
    padding-left: 0.5rem;
    text-align: left;
  }

  thead tr {
    height: 3.75rem;
    background: #e9ecef;
    color: #6b7a99;
    font-size: 1rem;
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
  justify-content: space-around;

  a {
    display: flex;
    align-items: center;
    color: #219ebc;
  }

  button {
    &.buttonView {
      display: flex;
      align-items: center;
      border: 0;
      background: none;
      color: #219ebc;
    }
    &.buttonCancel {
      display: flex;
      align-items: center;
      border: 0;
      background: none;
      color: #d00000;
    }
    &.buttonApprove {
      display: flex;
      align-items: center;
      border: 0;
      background: none;
      color: #53df83;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  padding: 2rem 0rem 1rem;
  max-width: 1120px;
  margin: 10px auto;
  justify-content: space-between;
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
export const CloseButton = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.5rem;
  margin-top: -2rem;
  margin-right: -1rem;
`;

export const ProductItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-top: -3rem;
`;

export const Product = styled.div`
  display: flex;
  justify-content: start;
  margin-bottom: 1rem;

  span {
    margin-left: 1rem;
  }
`;

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
  width: 100%;
`;
export const ProductInfo = styled.div`
  display: flex;
  padding: 0.25rem;
  /* margin-left: 1rem; */
  justify-content: space-between;

  span {
    &.coupon {
      margin-left: 0;
      background: #53df83;
      color: #fff;
      border-radius: 0.25rem;
      padding: 0.25rem;
      font-size: 0.75rem;
    }

    &.discount {
      color: #d00000;
    }
  }
`;
export const TableDetail = styled.table`
  border-spacing: 1;
  width: 100%;
  border-collapse: collapse;

  tbody tr {
    line-height: 3rem;
    border-bottom: 1px solid #e3f1d5;
  }
  td,
  th {
    color: #646152;
    padding-left: 8px;
    text-align: left;
  }

  span {
    &.discount {
      color: #d00000;
    }
    &.amount {
      color: #219ebc;
    }
  }

  @media (max-width: 768px) {
    thead {
      display: none;
    }
    tbody,
    tr,
    td {
      display: block;
      width: 100%;
    }
    td {
      margin-bottom: 1rem;
    }
    tbody tr td {
      text-align: right;
      padding-left: 50%;
      position: relative;
    }
    td:before {
      content: attr(data-label);
      position: absolute;
      left: 0;
      width: 50%;
      padding-left: 1rem;
      font-weight: 600;
      font-size: 14px;
      text-align: left;
    }
  }
`;
