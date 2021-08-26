import styled from '@emotion/styled';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const StyledButton = styled(Button)`
  &:hover,
  :focus {
    transform: scale(1.05);
  }
`;
