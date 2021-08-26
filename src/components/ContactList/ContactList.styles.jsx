import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 5px;
  margin: 10px 0;
  width: 280px;

  & li {
    margin: 5px 0;
    padding-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    & button {
      border: 1px solid #000;
    }
  }
`;
