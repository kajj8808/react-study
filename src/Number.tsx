import React from 'react';
import styled from 'styled-components';

const Container = styled.span<{isBlue : boolean}>`
  font-size: 30px;
  font-weight: 600;
  color: ${props => props.isBlue ? props.theme.blueColor : 'black'};
`;

interface IProps {
  count: number;
}

const Number: React.FunctionComponent<IProps> = ({ count }) => (
  <Container isBlue = {count > 10}>{count}</Container>
);

export default Number;
