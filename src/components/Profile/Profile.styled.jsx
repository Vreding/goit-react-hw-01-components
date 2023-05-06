import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 800px;
  border: 1px solid black;
  margin-bottom: 50px;
  background-color: #6ed3e0;
`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;

  p {
    margin-bottom: 5px;
  }
`;

export const StatsUl = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: #6e79e0;
`;

export const StatsLi = styled.li`
  width: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
