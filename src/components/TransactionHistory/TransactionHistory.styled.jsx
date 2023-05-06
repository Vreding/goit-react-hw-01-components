import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  width: 800px;
  border-collapse: collapse;

  th {
    background-color: #878de0;
    color: white;
    height: 100%;
    border: 1px solid grey;
    padding: 10px;
    text-align: center;
  }

  td {
    border: 1px solid grey;
    padding: 10px;
    text-align: center;
  }
`;

export const TransactionHistoryTableTr = styled.tr`
  background-color: ${p => {
    if (p.tabIndex % 2) {
      return 'aqua';
    } else {
      return 'white';
    }
  }};
`;
