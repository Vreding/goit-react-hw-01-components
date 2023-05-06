import styled from 'styled-components';

export const FriendsWrapper = styled.ul`
  width: 800px;
`;

export const FriendsListItem = styled.li`
  display: flex;
  padding: 20px;
  box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  align-items: center;

  img {
    margin-right: 20px;
  }
`;

export const OnlineBadge = styled.span`
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${p => (p.active ? 'green' : 'red')};
  margin-right: 10px;
`;
