import styled from 'styled-components';

export const StatisticSection = styled.section`
  width: 800px;
  border: 1px solid black;
  margin-bottom: 50px;

  h2 {
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    display: flex;
    height: 120px;

    li {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
    }
  }
`;

export const StatisticListItem = styled.li`
  background-color: ${p => {
    switch (p.id) {
      case 'id-1':
        return 'lightblue';
      case 'id-2':
        return 'purple';
      case 'id-3':
        return 'yellow';
      case 'id-4':
        return 'pink';
      case 'id-5':
        return 'orangered';
      default:
        return null;
    }
  }};
`;
